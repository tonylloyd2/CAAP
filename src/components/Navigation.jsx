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
  Slide,
  Zoom,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  VolunteerActivism,
  Home as HomeIcon,
  Info as InfoIcon,
  TrackChanges as ObjectivesIcon,
  Favorite as ValuesIcon,
  WorkOutline as ProgramsIcon,
  TrendingUp as ImpactIcon,
  People as TestimonialsIcon,
  Group as TeamIcon,
  Article as NewsIcon,
  FavoriteBorder as DonateIcon,
  ContactMail as ContactIcon,
  Email as NewsletterIcon,
} from '@mui/icons-material';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { label: 'Home', href: '#home', icon: HomeIcon, color: '#22C55E' },
    { label: 'About', href: '#about', icon: InfoIcon, color: '#10B981' },
    { label: 'Objectives', href: '#objectives', icon: ObjectivesIcon, color: '#06B6D4' },
    { label: 'Values', href: '#values', icon: ValuesIcon, color: '#8B5CF6' },
    { label: 'Programs', href: '#programs', icon: ProgramsIcon, color: '#F59E0B' },
    { label: 'Impact', href: '#impact', icon: ImpactIcon, color: '#EF4444' },
    { label: 'Stories', href: '#testimonials', icon: TestimonialsIcon, color: '#EC4899' },
    { label: 'Team', href: '#team', icon: TeamIcon, color: '#10B981' },
    { label: 'News', href: '#news', icon: NewsIcon, color: '#06B6D4' },
    { label: 'Donate', href: '#donate', icon: DonateIcon, color: '#EF4444' },
    { label: 'Contact', href: '#contact', icon: ContactIcon, color: '#3B82F6' },
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
    <Box 
      sx={{ 
        height: '100%', 
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.98) 50%, rgba(15, 23, 42, 0.98) 100%)',
        backdropFilter: 'blur(20px)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322C55E' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
          opacity: 0.5,
        }
      }}
    >
      {/* Header with animated logo */}
      <Slide direction="down" in={mobileOpen} timeout={600}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 3,
            borderBottom: '2px solid rgba(34, 197, 94, 0.2)',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Zoom in={mobileOpen} timeout={800}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <img 
                src={logo} 
                alt="CAAP Logo" 
                style={{ 
                  height: '40px', 
                  width: 'auto',
                  filter: 'brightness(0) invert(1)'
                }} 
              />
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'white', 
                  fontWeight: 700,
                  letterSpacing: '0.05em'
                }}
              >
                CAAP
              </Typography>
            </Box>
          </Zoom>
          <IconButton 
            onClick={handleDrawerToggle} 
            sx={{ 
              color: 'white',
              background: 'rgba(255, 255, 255, 0.1)',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.2)',
                transform: 'rotate(90deg)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Slide>

      {/* Navigation Items with staggered animations */}
      <List sx={{ pt: 3, position: 'relative', zIndex: 2 }}>
        {navItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <Slide 
              key={item.label} 
              direction="right" 
              in={mobileOpen} 
              timeout={400 + (index * 100)}
            >
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  onClick={() => handleNavClick(item.href)}
                  sx={{
                    py: 2,
                    mx: 2,
                    borderRadius: '16px',
                    border: '1px solid transparent',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: '4px',
                      background: item.color,
                      transform: 'scaleY(0)',
                      transformOrigin: 'bottom',
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: `1px solid ${item.color}40`,
                      transform: 'translateX(8px) scale(1.02)',
                      boxShadow: `0 8px 24px ${item.color}20`,
                      '&::before': {
                        transform: 'scaleY(1)',
                      },
                      '& .nav-icon': {
                        color: item.color,
                        transform: 'scale(1.2) rotate(10deg)',
                      },
                      '& .nav-text': {
                        color: item.color,
                        transform: 'translateX(4px)',
                      }
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                    <Box
                      className="nav-icon"
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '10px',
                        background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(255, 255, 255, 0.8)',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <IconComponent sx={{ fontSize: 20 }} />
                    </Box>
                    <Typography
                      className="nav-text"
                      sx={{
                        color: 'white',
                        fontWeight: 500,
                        fontSize: '1.1rem',
                        transition: 'all 0.3s ease',
                        letterSpacing: '0.02em'
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                </ListItemButton>
              </ListItem>
            </Slide>
          );
        })}
        
        {/* Get Involved Button with special animation */}
        <Slide direction="up" in={mobileOpen} timeout={1000}>
          <ListItem sx={{ mt: 4, px: 2 }}>
            <Zoom in={mobileOpen} timeout={1200}>
              <Button
                variant="contained"
                fullWidth
                startIcon={
                  <VolunteerActivism />
                }
                sx={{
                  background: 'linear-gradient(135deg, #22C55E, #10B981)',
                  color: 'white',
                  fontWeight: 700,
                  py: 2,
                  borderRadius: '16px',
                  boxShadow: '0 8px 24px rgba(34, 197, 94, 0.3)',
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  fontSize: '1.1rem',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #10B981, #059669)',
                    transform: 'translateY(-2px) scale(1.02)',
                    boxShadow: '0 12px 32px rgba(34, 197, 94, 0.4)',
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Get Involved
              </Button>
            </Zoom>
          </ListItem>
        </Slide>
      </List>

      {/* Floating background elements */}
      <Box
        sx={{
          position: 'absolute',
          bottom: -50,
          right: -50,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)',
          animation: 'float 6s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
            '50%': { transform: 'translateY(-20px) rotate(180deg)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: -30,
          left: -30,
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
          animation: 'float-reverse 8s ease-in-out infinite',
          '@keyframes float-reverse': {
            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
            '50%': { transform: 'translateY(15px) rotate(-180deg)' },
          },
        }}
      />
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
                  startIcon={<VolunteerActivism />}
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
        SlideProps={{
          direction: "left",
          timeout: {
            enter: 500,
            exit: 300,
          }
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 320,
            borderTopLeftRadius: '24px',
            borderBottomLeftRadius: '24px',
            border: 'none',
            boxShadow: '0 0 60px rgba(0, 0, 0, 0.3), 0 0 120px rgba(34, 197, 94, 0.1)',
          },
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(8px)',
          }
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
