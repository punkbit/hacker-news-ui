declare module 'styled-components' {
  const styled: any;
  export default styled;
  export const ThemeProvider: any;
  export const createGlobalStyle: any;
  export const keyframes: any;
}

declare module 'react-router-dom' {
  export const BrowserRouter: any;
  export const Routes: any;
  export const Route: any;
  export const Link: any;
  export const useNavigate: any;
  export const useLocation: any;
  export const useParams: any;
  export default BrowserRouter;
}

// Asset imports
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}
