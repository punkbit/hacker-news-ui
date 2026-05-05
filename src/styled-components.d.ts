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
  
  export interface StyledComponent<T> {
    (strings: TemplateStringsArray, ...interpolations: any[]): React.ComponentType<T & { 
      children?: React.ReactNode;
      onClick?: () => void;
      hide?: boolean;
    }>;
  }
  
  const styled: {
    div: StyledComponent<any>;
    span: StyledComponent<any>;
    button: StyledComponent<any>;
    a: StyledComponent<any>;
    section: StyledComponent<any>;
    article: StyledComponent<any>;
    header: StyledComponent<any>;
    footer: StyledComponent<any>;
    main: StyledComponent<any>;
    nav: StyledComponent<any>;
    h1: StyledComponent<any>;
    h2: StyledComponent<any>;
    h3: StyledComponent<any>;
    p: StyledComponent<any>;
    img: StyledComponent<any>;
    svg: StyledComponent<any>;
    path: StyledComponent<any>;
    [tag: string]: StyledComponent<any>;
  };
  
  export default styled;
}
