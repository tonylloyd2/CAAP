import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  Fade,
  Slide,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Send,
  PersonOutline,
  MessageOutlined,
} from '@mui/icons-material';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Email sx={{ color: '#22C55E', fontSize: 30 }} />,
      title: 'Email Us',
      info: 'info@caapkenya.org',
      subtitle: 'Send us a message anytime'
    },
    {
      icon: <Phone sx={{ color: '#22C55E', fontSize: 30 }} />,
      title: 'Call Us',
      info: '+254 700 123 456',
      subtitle: 'Mon-Fri 8AM-5PM EAT'
    },
    {
      icon: <LocationOn sx={{ color: '#22C55E', fontSize: 30 }} />,
      title: 'Visit Us',
      info: 'Bungoma County, Kenya',
      subtitle: 'Our main office location'
    }
  ];

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(34, 197, 94, 0.03) 0%, transparent 50%)
          `,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Fade in timeout={800}>
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                color: '#374151',
                mb: 2,
                background: 'linear-gradient(135deg, #374151 0%, #22C55E 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#6B7280',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1.1rem', md: '1.2rem' },
              }}
            >
              Ready to make a difference? Contact us to learn more about our programs, 
              volunteer opportunities, or partnership possibilities.
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Slide direction="right" in timeout={1000}>
              <Box>
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                    fontWeight: 600,
                    color: '#374151',
                    mb: 3,
                  }}
                >
                  Let's Connect
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#6B7280',
                    mb: 4,
                    lineHeight: 1.6,
                  }}
                >
                  We'd love to hear from you. Whether you have questions about our work, 
                  want to get involved, or are interested in partnering with us, 
                  we're here to help.
                </Typography>

                {/* Contact Info Cards */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {contactInfo.map((item, index) => (
                    <Fade key={index} in timeout={600 + index * 100}>
                      <Card
                        sx={{
                          p: 3,
                          background: 'rgba(255, 255, 255, 0.8)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: 3,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 20px 40px rgba(34, 197, 94, 0.1)',
                            background: 'rgba(255, 255, 255, 0.95)',
                          },
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 60,
                              height: 60,
                              borderRadius: '50%',
                              background: 'linear-gradient(135deg, #22C55E 0%, #15803D 100%)',
                              color: 'white',
                              flexShrink: 0,
                            }}
                          >
                            {item.icon}
                          </Box>
                          <Box>
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 600,
                                color: '#374151',
                                mb: 0.5,
                              }}
                            >
                              {item.title}
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{
                                color: '#22C55E',
                                fontWeight: 500,
                                mb: 0.5,
                              }}
                            >
                              {item.info}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{ color: '#6B7280' }}
                            >
                              {item.subtitle}
                            </Typography>
                          </Box>
                        </Box>
                      </Card>
                    </Fade>
                  ))}
                </Box>
              </Box>
            </Slide>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Slide direction="left" in timeout={1200}>
              <Card
                sx={{
                  p: { xs: 3, md: 5 },
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: 4,
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                    fontWeight: 600,
                    color: '#374151',
                    mb: 3,
                    textAlign: 'center',
                  }}
                >
                  Send Us a Message
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <PersonOutline sx={{ color: '#22C55E', mr: 1 }} />
                          ),
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '&:hover fieldset': {
                              borderColor: '#22C55E',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#22C55E',
                            },
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#22C55E',
                          },
                        }}
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <Email sx={{ color: '#22C55E', mr: 1 }} />
                          ),
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '&:hover fieldset': {
                              borderColor: '#22C55E',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#22C55E',
                            },
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#22C55E',
                          },
                        }}
                      />
                    </Grid>

                    <Grid size={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '&:hover fieldset': {
                              borderColor: '#22C55E',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#22C55E',
                            },
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#22C55E',
                          },
                        }}
                      />
                    </Grid>

                    <Grid size={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        multiline
                        rows={6}
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <MessageOutlined sx={{ color: '#22C55E', mr: 1, alignSelf: 'flex-start', mt: 1 }} />
                          ),
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '&:hover fieldset': {
                              borderColor: '#22C55E',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#22C55E',
                            },
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#22C55E',
                          },
                        }}
                      />
                    </Grid>

                    <Grid size={12}>
                      <Box sx={{ textAlign: 'center', mt: 2 }}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          disabled={isSubmitting}
                          startIcon={<Send />}
                          sx={{
                            px: 5,
                            py: 2,
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            borderRadius: 3,
                            background: 'linear-gradient(135deg, #22C55E 0%, #15803D 100%)',
                            color: 'white',
                            textTransform: 'none',
                            boxShadow: '0 10px 30px rgba(34, 197, 94, 0.3)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              background: 'linear-gradient(135deg, #15803D 0%, #22C55E 100%)',
                              boxShadow: '0 15px 40px rgba(34, 197, 94, 0.4)',
                              transform: 'translateY(-2px)',
                            },
                            '&:disabled': {
                              background: '#D1D5DB',
                              color: '#6B7280',
                              boxShadow: 'none',
                            },
                          }}
                        >
                          {isSubmitting ? 'Sending Message...' : 'Send Message'}
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </Slide>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactFormSection;
