import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Fade,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  VolunteerActivism,
} from '@mui/icons-material';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Objectives', href: '#objectives' },
    { label: 'Values', href: '#values' },
    { label: 'Programs', href: '#programs' },
    { label: 'Impact', href: '#impact' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ height: '100%', background: 'linear-gradient(135deg, #22C55E, #15803D)' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>
            CAAP
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ pt: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              onClick={() => handleNavClick(item.href)}
              sx={{
                py: 2,
                mx: 2,
                borderRadius: '12px',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  '& .MuiListItemText-primary': {
                    color: 'white',
                    fontWeight: 500,
                    fontSize: '1.1rem',
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem sx={{ mt: 2, px: 2 }}>
          <Button
            variant="contained"
            fullWidth
            startIcon={
              <img 
                src={logo} 
                alt="CAAP Logo" 
                style={{ 
                  height: '20px', 
                  width: 'auto',
                }} 
              />
            }
            sx={{
              background: 'rgba(255, 255, 255, 0.9)',
              color: '#15803D',
              fontWeight: 700,
              py: 1.5,
              '&:hover': {
                background: 'white',
              },
            }}
          >
            Get Involved
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          background: scrolled
            ? 'rgba(15, 23, 42, 0.95)'
            : 'rgba(15, 23, 42, 0.1)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(34, 197, 94, 0.2)' : 'none',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {/* Logo without background */}
              <Box
                sx={{
                  mr: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img 
                  src={logo} 
                  alt="CAAP Logo" 
                  style={{ 
                    height: '40px', 
                    width: 'auto',
                    filter: 'brightness(0) invert(1)', // Makes logo white
                  }} 
                />
              </Box>
              
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 700,
                  color: scrolled ? '#F8FAFC' : 'white',
                  letterSpacing: '0.5px',
                }}
              >
                CAAP
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    sx={{
                      color: scrolled ? '#F8FAFC' : 'white',
                      fontWeight: 500,
                      px: 2,
                      py: 1,
                      borderRadius: '8px',
                      '&:hover': {
                        backgroundColor: scrolled
                          ? 'rgba(34, 197, 94, 0.1)'
                          : 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button
                  variant="contained"
                  startIcon={
                    <img 
                      src={logo} 
                      alt="CAAP Logo" 
                      style={{ 
                        height: '20px', 
                        width: 'auto',
                        filter: 'brightness(0) invert(1)', // Makes logo white for better contrast on green button
                      }} 
                    />
                  }
                  sx={{
                    ml: 2,
                    background: 'linear-gradient(45deg, #22C55E, #10B981)',
                    fontWeight: 600,
                    px: 3,
                    '&:hover': {
                      background: 'linear-gradient(45deg, #15803D, #22C55E)',
                    },
                  }}
                >
                  Get Involved
                </Button>
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                onClick={handleDrawerToggle}
                sx={{
                  color: scrolled ? '#22C55E' : 'white',
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer for fixed navbar */}
      <Box sx={{ height: { xs: '64px', md: '80px' } }} />
    </>
  );
};

export default Navigation;
