import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  Snackbar,
  Alert,
  IconButton,
  Chip,
} from '@mui/material';
import {
  Email,
  Send,
  CheckCircle,
  Close,
  NotificationsActive,
  TrendingUp,
  Favorite,
  Campaign,
} from '@mui/icons-material';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    open: false,
    type: 'success',
    message: '',
  });

  const benefits = [
    {
      icon: NotificationsActive,
      title: 'Impact Updates',
      description: 'Monthly stories of lives changed through your support',
      color: '#22C55E',
    },
    {
      icon: TrendingUp,
      title: 'Progress Reports',
      description: 'Detailed metrics showing real community development',
      color: '#10B981',
    },
    {
      icon: Favorite,
      title: 'Exclusive Content',
      description: 'Behind-the-scenes photos and volunteer spotlights',
      color: '#06B6D4',
    },
    {
      icon: Campaign,
      title: 'Early Access',
      description: 'First to know about new programs and events',
      color: '#8B5CF6',
    },
  ];

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the email to your backend/newsletter service
      console.log('Newsletter signup:', email);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({
        open: true,
        type: 'success',
        message: 'Welcome to our community! Check your email for a confirmation link.',
      });
      
      // Reset form
      setEmail('');
    } catch {
      setSubmitStatus({
        open: true,
        type: 'error',
        message: 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSubmitStatus(prev => ({ ...prev, open: false }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <Box
      id="newsletter"
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        background: 'linear-gradient(135deg, #22C55E 0%, #10B981 50%, #06B6D4 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          transform: 'translate(50%, -50%)',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Grid container spacing={4} alignItems="center">
            {/* Content Side */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <motion.div variants={itemVariants}>
                <Box sx={{ mb: 4 }}>
                  <Chip
                    label="Stay Connected"
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      color: 'white',
                      fontWeight: 600,
                      mb: 3,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                    }}
                  />
                  
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                      color: 'white',
                      fontWeight: 700,
                      mb: 3,
                      fontSize: { xs: '2rem', md: '2.5rem' },
                      lineHeight: 1.2,
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    Join Our Impact Community
                  </Typography>
                  
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.95)',
                      mb: 4,
                      lineHeight: 1.6,
                      fontSize: { xs: '1rem', md: '1.25rem' },
                      fontWeight: 400,
                    }}
                  >
                    Get exclusive insights into how your support transforms lives in rural Kenya. 
                    Join 2,500+ supporters receiving monthly impact stories and community updates.
                  </Typography>

                  {/* Newsletter Signup Form */}
                  <Card
                    sx={{
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '16px',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      <form onSubmit={handleSubmit}>
                        <Box 
                          sx={{ 
                            display: 'flex', 
                            flexDirection: { xs: 'column', sm: 'row' },
                            gap: 2,
                            alignItems: { xs: 'stretch', sm: 'flex-end' }
                          }}
                        >
                          <TextField
                            fullWidth
                            type="email"
                            label="Your Email Address"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            disabled={isSubmitting}
                            sx={{
                              flex: 1,
                              '& .MuiOutlinedInput-root': {
                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                borderRadius: '12px',
                                '& fieldset': {
                                  borderColor: 'rgba(255, 255, 255, 0.5)',
                                  borderWidth: '2px',
                                },
                                '&:hover fieldset': {
                                  borderColor: 'rgba(255, 255, 255, 0.8)',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: 'white',
                                },
                              },
                              '& .MuiInputLabel-root': {
                                color: 'rgba(15, 23, 42, 0.7)',
                                '&.Mui-focused': {
                                  color: '#15803D',
                                },
                              },
                              '& .MuiOutlinedInput-input': {
                                color: '#15803D',
                                fontWeight: 500,
                              },
                            }}
                          />
                          
                          <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            disabled={isSubmitting}
                            endIcon={isSubmitting ? null : <Send />}
                            sx={{
                              background: 'linear-gradient(45deg, #15803D, #059669)',
                              color: 'white',
                              fontWeight: 700,
                              px: { xs: 4, md: 5 },
                              py: 2,
                              borderRadius: '12px',
                              minWidth: { xs: 'auto', sm: '160px' },
                              height: '56px',
                              fontSize: '1rem',
                              boxShadow: '0 4px 16px rgba(21, 128, 61, 0.3)',
                              '&:hover': {
                                background: 'linear-gradient(45deg, #0F5132, #15803D)',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 6px 20px rgba(21, 128, 61, 0.4)',
                              },
                              '&.Mui-disabled': {
                                background: 'rgba(21, 128, 61, 0.5)',
                                color: 'white',
                              },
                              transition: 'all 0.3s ease',
                            }}
                          >
                            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                          </Button>
                        </Box>
                        
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            display: 'block',
                            mt: 2,
                            textAlign: 'center',
                            fontSize: '0.85rem',
                          }}
                        >
                          We respect your privacy. Unsubscribe at any time.
                        </Typography>
                      </form>
                    </CardContent>
                  </Card>
                </Box>
              </motion.div>
            </Grid>

            {/* Benefits Side */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <motion.div variants={itemVariants}>
                <Box sx={{ pl: { lg: 4 } }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'white',
                      fontWeight: 600,
                      mb: 3,
                      textAlign: { xs: 'center', lg: 'left' },
                    }}
                  >
                    What You'll Receive
                  </Typography>
                  
                  <Grid container spacing={3}>
                    {benefits.map((benefit, index) => (
                      <Grid size={{ xs: 12, sm: 6, lg: 12 }} key={index}>
                        <motion.div
                          variants={itemVariants}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Card
                            sx={{
                              background: 'rgba(255, 255, 255, 0.1)',
                              backdropFilter: 'blur(10px)',
                              border: '1px solid rgba(255, 255, 255, 0.2)',
                              borderRadius: '12px',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                background: 'rgba(255, 255, 255, 0.15)',
                                transform: 'translateY(-4px)',
                                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                              },
                            }}
                          >
                            <CardContent sx={{ p: 2.5 }}>
                              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                <Box
                                  sx={{
                                    width: 48,
                                    height: 48,
                                    borderRadius: '12px',
                                    background: 'rgba(255, 255, 255, 0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                  }}
                                >
                                  <benefit.icon sx={{ color: 'white', fontSize: 24 }} />
                                </Box>
                                <Box sx={{ flex: 1 }}>
                                  <Typography
                                    variant="h6"
                                    sx={{
                                      color: 'white',
                                      fontWeight: 600,
                                      mb: 0.5,
                                      fontSize: '1rem',
                                    }}
                                  >
                                    {benefit.title}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    sx={{
                                      color: 'rgba(255, 255, 255, 0.8)',
                                      lineHeight: 1.5,
                                      fontSize: '0.9rem',
                                    }}
                                  >
                                    {benefit.description}
                                  </Typography>
                                </Box>
                              </Box>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                  
                  {/* Social Proof */}
                  <Box
                    sx={{
                      mt: 4,
                      p: 3,
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      textAlign: 'center',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: 'white',
                        fontWeight: 700,
                        mb: 1,
                      }}
                    >
                      2,500+
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: 500,
                      }}
                    >
                      Community members already receiving updates
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      {/* Success/Error Snackbar */}
      <Snackbar
        open={submitStatus.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={submitStatus.type}
          sx={{ width: '100%' }}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCloseSnackbar}
            >
              <Close fontSize="small" />
            </IconButton>
          }
          icon={submitStatus.type === 'success' ? <CheckCircle fontSize="inherit" /> : undefined}
        >
          {submitStatus.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default NewsletterSection;
