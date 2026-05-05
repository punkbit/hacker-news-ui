declare module 'styled-components' {
  import * as React from 'react';
  
  export interface DefaultTheme {
    orange?: string;
    vividTangelo?: string;
    platinum?: string;
    gainsBoro?: string;
    onyx?: string;
    sandyBrown?: string;
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
  
  // Base interface for styled components that accepts type parameters
  interface StyledInterface {
    <T = {}>(strings: TemplateStringsArray, ...interpolations: any[]): React.ComponentType<T & { 
      children?: React.ReactNode;
      onClick?: () => void;
      hide?: boolean;
    }>;
  }
  
  // Create the main styled object with all HTML elements
  type StyledTags = {
    [K in keyof JSX.IntrinsicElements]: StyledInterface;
  };
  
  const styled: StyledTags;
  
  export default styled;
}
