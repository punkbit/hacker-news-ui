declare module 'react-router-dom' {
  import * as React from 'react';
  
  export interface BrowserRouterProps {
    children?: React.ReactNode;
    basename?: string;
    getUserConfirmation?: (message: string, callback: (ok: boolean) => void) => void;
    forceRefresh?: boolean;
    keyLength?: number;
  }
  
  export interface SwitchProps {
    children?: React.ReactNode;
    location?: any;
  }
  
  export interface RouteProps {
    children?: React.ReactNode;
    component?: React.ComponentType<any>;
    exact?: boolean;
    path?: string | string[];
    render?: (props: any) => React.ReactNode;
    sensitive?: boolean;
    strict?: boolean;
  }
  
  export function BrowserRouter(props: BrowserRouterProps): React.ReactElement;
  export function Switch(props: SwitchProps): React.ReactElement;
  export function Route(props: RouteProps): React.ReactElement | null;
  export function Link(props: { to: string; children?: React.ReactNode; className?: string }): React.ReactElement;
  export function useHistory(): any;
  export function useLocation(): any;
  export function useParams(): any;
  export function useRouteMatch(path?: string): any;
  
  // Default exports for destructuring
  export default BrowserRouter;
}
