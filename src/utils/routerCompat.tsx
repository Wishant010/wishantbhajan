'use client';

import NextLink from 'next/link';
import { usePathname, useRouter, useSearchParams, useParams as useNextParams } from 'next/navigation';
import React, { AnchorHTMLAttributes, ReactNode, forwardRef, useMemo } from 'react';

// Simple in-memory navigation state to mimic react-router state handling
const navigationState = new Map<string, unknown>();

type NavigateOptions = {
  replace?: boolean;
  scroll?: boolean;
  state?: unknown;
};

export function useLocation() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchString = searchParams && searchParams.toString() ? `?${searchParams.toString()}` : '';
  const locationKey = pathname ? `${pathname}${searchString}` : '';

  return useMemo(
    () => ({
      pathname: pathname ?? '',
      search: searchString,
      hash: '',
      state: locationKey ? navigationState.get(locationKey) : undefined,
      key: locationKey,
    }),
    [locationKey, pathname, searchString]
  );
}

export function useNavigate() {
  const router = useRouter();

  return (to: string, options?: NavigateOptions) => {
    if (options?.state !== undefined) {
      navigationState.set(to, options.state);
    } else {
      navigationState.delete(to);
    }

    if (options?.replace) {
      router.replace(to, { scroll: options?.scroll });
    } else {
      router.push(to, { scroll: options?.scroll });
    }
  };
}

export function useParams<T = Record<string, string>>() {
  return useNextParams() as Partial<T>;
}

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string;
  children: ReactNode;
  replace?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, children, replace, onClick, ...props }, ref) => {
    return (
      <NextLink
        href={to}
        replace={replace}
        onClick={onClick}
        ref={ref}
        {...props}
      >
        {children}
      </NextLink>
    );
  }
);

Link.displayName = 'Link';
