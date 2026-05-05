import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const isPreviewBuild = mode === 'preview'
  const isDev = mode === 'development' && command === 'serve'
  
  return {
    plugins: [react()],
    
    // Development mode: serve from dev folder
    ...(isDev && {
      root: 'dev',
    }),
    
    // Preview build mode: create standalone demo
    ...(isPreviewBuild && {
      root: 'dev',
      base: './', // Use relative paths for local file serving
      build: {
        outDir: '../dist/preview', // Relative to root (dev), so go up and into dist/preview
        emptyOutDir: true,
        rollupOptions: {
          // Bundle all dependencies for standalone preview
          external: [],
          output: {
            format: 'iife',
            entryFileNames: 'assets/[name].js',
            chunkFileNames: 'assets/[name].js',
            assetFileNames: 'assets/[name][extname]'
          }
        },
        sourcemap: true
      }
    }),
    
    // Library build mode (default production)
    ...(!isPreviewBuild && !isDev && {
      build: {
        lib: {
          entry: path.resolve(__dirname, 'src/index.ts'),
          name: 'ReactHNReader',
          fileName: (format) => `react-hn-reader.${format}.js`,
          formats: ['es']
        },
        rollupOptions: {
          // Externalize peer dependencies for library build
          external: ['react', 'react-dom', 'styled-components'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
              'styled-components': 'styled'
            }
          }
        },
        sourcemap: true,
        emptyOutDir: false // Don't delete preview folder when building library
      }
    }),
    
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  }
})
