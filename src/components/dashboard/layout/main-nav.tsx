'use client';
// @ts-nocheck
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { Box, Button, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import VitalsModal from '@/components/dialogs/vitals-modal';

import { usePopover } from '@/hooks/use-popover';

import { MobileNav } from './mobile-nav';
import { UserPopover } from './user-popover';

const pageTitles = {
  '/doctor-dashboard': 'Doctor Dashboard',
  '/patient-dashboard': 'Patient Dashboard',
  '/vitals': 'Vitals',
  '/appointments': 'Appointments Information',
  '/medical-reports': 'Patient Information',
  '/predictions': 'Predictions Information',
};

export function MainNav(): React.JSX.Element {
  const pathname = usePathname();
  const title =
    pathname in pageTitles
      ? pageTitles[pathname as keyof typeof pageTitles]
      : '';

  const [open, setOpen] = useState<boolean>(false);
  const [openNav, setOpenNav] = useState<boolean>(false);

  const userPopover = usePopover<HTMLDivElement>();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleSubmit = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        component="header"
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: '64px',
            px: 2,
          }}
        >
          <Stack sx={{ alignItems: 'center' }} direction="row">
            <IconButton
              onClick={(): void => {
                setOpenNav(true);
              }}
              sx={{ display: { lg: 'none' } }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                alignItems: 'center',
              }}
            >
              {title ? <Typography variant="h3">{title}</Typography> : null}
            </Box>
          </Stack>
          <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
            {pathname === '/patient-dashboard' && (
              <Button
                onClick={handleOpen}
                variant="contained"
                startIcon={<ExitToAppIcon />}
              >
                New Vitals Input
              </Button>
            )}
            <Tooltip title="Notifications">
              <Badge badgeContent={4} color="primary">
                <IconButton sx={{ p: 0.2 }}>
                  <NotificationsIcon />
                </IconButton>
              </Badge>
            </Tooltip>{' '}
            <Avatar
              onClick={userPopover.handleOpen}
              ref={userPopover.anchorRef}
              src="assets/images/avatar.png"
              sx={{ cursor: 'pointer' }}
            />
          </Stack>
        </Stack>
      </Box>
      <VitalsModal
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
      />
      <UserPopover
        anchorEl={userPopover.anchorRef.current}
        onClose={userPopover.handleClose}
        open={userPopover.open}
      />

      <MobileNav
        onClose={() => {
          setOpenNav(false);
        }}
        open={openNav}
      />
    </>
  );
}
