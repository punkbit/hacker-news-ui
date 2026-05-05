declare module 'styled-components' {
  import * as React from 'react';
  
  export interface DefaultTheme {
    [key: string]: any;
  }
  
  export interface ThemeProviderProps<T = DefaultTheme> {
    theme: T;
    children?: React.ReactNode;
  }
  
  export function ThemeProvider<T = DefaultTheme>(props: ThemeProviderProps<T>): React.ReactElement;
  
  export function createGlobalStyle<P = {}>(
    strings: TemplateStringsArray,
    ...interpolations: any[]
  ): React.ComponentType<P>;
  
  export function keyframes(
    strings: TemplateStringsArray,
    ...interpolations: any[]
  ): string;
  
  interface StyledInterface {
    <P = {}>(strings: TemplateStringsArray, ...interpolations: any[]): React.ComponentType<P>;
  }
  
  const styled: {
    div: StyledInterface;
    span: StyledInterface;
    button: StyledInterface;
    a: StyledInterface;
    section: StyledInterface;
    article: StyledInterface;
    header: StyledInterface;
    footer: StyledInterface;
    main: StyledInterface;
    nav: StyledInterface;
    h1: StyledInterface;
    h2: StyledInterface;
    h3: StyledInterface;
    p: StyledInterface;
    [tag: string]: StyledInterface;
  };
  
  export default styled;
}
