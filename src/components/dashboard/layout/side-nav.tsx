'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';
import { isNavItemActive } from '@/lib/is-nav-item-active';
// import { Logo } from '@/components/core/logo';

import { navItems } from './config';
import { navIcons } from './nav-icons';
import Image from 'next/image';

export function SideNav(): React.JSX.Element {
  const pathname = usePathname();

  return (
    <Box
      sx={{
        borderRight: '1px solid #dcdfe4',
        '--SideNav-background': 'var(--mui-palette-neutral-950)',
        '--SideNav-color': 'var(--mui-palette-common-white)',
        '--NavItem-color': 'var(--mui-palette-neutral-300)',
        '--NavItem-hover-background': 'rgba(255, 255, 255, 0.04)',
        '--NavItem-active-background': 'var(--mui-palette-primary-main)',
        '--NavItem-active-color': 'var(--mui-palette-primary-contrastText)',
        '--NavItem-disabled-color': 'var(--mui-palette-neutral-500)',
        '--NavItem-icon-color': 'var(--mui-palette-neutral-400)',
        '--NavItem-icon-active-color':
          'var(--mui-palette-primary-contrastText)',
        '--NavItem-icon-disabled-color': 'var(--mui-palette-neutral-600)',
        bgcolor: '#ffffff',
        color: 'var(--SideNav-color)',
        display: { xs: 'none', lg: 'flex' },
        flexDirection: 'column',
        height: '100%',
        left: 0,
        maxWidth: '100%',
        position: 'fixed',
        scrollbarWidth: 'none',
        top: 0,
        width: 'var(--SideNav-width)',
        zIndex: 'var(--SideNav-zIndex)',
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
      <Box
        display="flex"
        justifyContent="start"
        alignItems="center"
        gap={1}
        py={1}
        px={2}
      >
        <Image src="assets/icons/logo.svg" alt="logo" width={35} height={35} />
        <Typography color="inherit" variant="h2">
          HealthTrack
        </Typography>
      </Box>
      {/* <Divider sx={{ borderColor: 'var(--mui-palette-neutral-700)' }} /> */}
      <Box component="nav" sx={{ flex: '1 1 auto', p: '12px' }}>
        {renderNavItems({ pathname, items: navItems })}
      </Box>
    </Box>
  );
}

function renderNavItems({
  items = [],
  pathname,
}: {
  items?: NavItemConfig[];
  pathname: string;
}): React.JSX.Element {
  const children = items.reduce(
    (acc: React.ReactNode[], curr: NavItemConfig): React.ReactNode[] => {
      const { key, ...item } = curr;

      acc.push(<NavItem key={key} pathname={pathname} {...item} />);

      return acc;
    },
    []
  );

  return <Stack>{children}</Stack>;
}

interface NavItemProps extends Omit<NavItemConfig, 'items'> {
  pathname: string;
}

function NavItem({
  disabled,
  external,
  href,
  icon,
  matcher,
  pathname,
  title,
}: NavItemProps): React.JSX.Element {
  const active = isNavItemActive({
    disabled,
    external,
    href,
    matcher,
    pathname,
  });
  const Icon = icon ? navIcons[icon] : null;

  return (
    <List>
      <ListItemButton
        {...(href
          ? {
              component: external ? 'a' : RouterLink,
              href,
              target: external ? '_blank' : undefined,
              rel: external ? 'noreferrer' : undefined,
            }
          : { role: 'button' })}
        sx={{
          alignItems: 'center',
          borderRadius: 1,
          color: 'var(--NavItem-color)',
          cursor: 'pointer',
          display: 'flex',
          flex: '0 0 auto',
          gap: 1,
          p: '8px 16px',
          position: 'relative',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          ...(disabled && {
            bgcolor: 'var(--NavItem-disabled-background)',
            color: 'var(--NavItem-disabled-color)',
            cursor: 'not-allowed',
          }),
          ...(active && {
            bgcolor: '#F5F1FE',
            color: 'var(--NavItem-active-color)',
          }),
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            flex: '0 0 auto',
          }}
        >
          <ListItemIcon sx={{ minWidth: 0 }}>
            {Icon ? (
              <Icon
                color={active ? 'primary' : 'inherit'}
                sx={{ fontSize: '1.8rem' }}
              />
            ) : null}
          </ListItemIcon>
        </Box>
        <ListItemText>
          <Box sx={{ flex: '1 1 auto' }}>
            <Typography
              component="span"
              color={active ? 'primary' : 'inherit'}
              sx={{
                fontSize: '0.875rem',
                fontWeight: 600,
                lineHeight: '28px',
              }}
            >
              {title}
            </Typography>
          </Box>
        </ListItemText>
      </ListItemButton>
    </List>
  );
}
