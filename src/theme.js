import { createTheme } from '@mui/material/styles';

const caapTheme = createTheme({
  palette: {
    primary: {
      main: '#22C55E', // Emerald-500
      dark: '#15803D', // Emerald-700
      light: '#86EFAC', // Emerald-300
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#374151', // Gray-700
      light: '#6B7280', // Gray-500
      dark: '#111827', // Gray-900
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#0F172A', // Dark slate
      paper: '#1E293B',   // Lighter dark slate
    },
    text: {
      primary: '#F8FAFC',   // Light text
      secondary: '#CBD5E1', // Medium light text
    },
    success: {
      main: '#10B981', // Emerald-600
    },
    grey: {
      100: '#F3F4F6',
      500: '#6B7280',
      700: '#374151',
      900: '#111827',
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      '@media (max-width:768px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.75rem',
      lineHeight: 1.3,
      '@media (max-width:768px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
      '@media (max-width:768px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#4B5563',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: '#6B7280',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 32px',
          fontSize: '1rem',
          transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(34, 197, 94, 0.3)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #22C55E, #10B981)',
          '&:hover': {
            background: 'linear-gradient(45deg, #15803D, #22C55E)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
            backgroundColor: 'rgba(34, 197, 94, 0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '24px',
          '&:last-child': {
            paddingBottom: '24px',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        elevation1: {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        },
        elevation2: {
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
        },
        elevation3: {
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.16)',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(45deg, #22C55E, #10B981)',
          width: 56,
          height: 56,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fontWeight: 500,
        },
      },
    },
  },
});

export default caapTheme;
