import { useLocation as useRouterLocation, useNavigate as useRouterNavigate, Link as RouterLink, useParams as useRouterParams } from 'react-router-dom';
import React, { ReactNode, AnchorHTMLAttributes, forwardRef } from 'react';

// Compatibility layer - re-export from react-router-dom

export function useLocation() {
  return useRouterLocation();
}

export function useNavigate() {
  return useRouterNavigate();
}

export function useParams<T = Record<string, string>>(): Partial<T> {
  return useRouterParams() as Partial<T>;
}

// Link component wrapper for compatibility
interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string;
  children: ReactNode;
  replace?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, children, replace, onClick, ...props }, ref) => {
    return (
      <RouterLink
        to={to}
        replace={replace}
        onClick={onClick}
        {...props}
        ref={ref}
      >
        {children}
      </RouterLink>
    );
  }
);

Link.displayName = 'Link';
