import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import {
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Avatar,
  LinearProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  IconButton,
  Divider,
  Alert,
  Snackbar,
} from '@mui/material';
import {
  Favorite,
  School,
  LocalHospital,
  Agriculture,
  Engineering,
  People,
  Security,
  PaymentTwoTone,
  CheckCircle,
  Close,
  ArrowForward,
  CreditCard,
  AccountBalance,
  Phone,
  QrCode,
  TrendingUp,
  Group,
  Timeline,
  WaterDrop,
} from '@mui/icons-material';

const InteractiveDonationSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donationFrequency, setDonationFrequency] = useState('one-time');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [activeStep, setActiveStep] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [animatedProgress, setAnimatedProgress] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);

  const donationProjects = [
    {
      id: 1,
      title: "Education for All Initiative",
      description: "Help us build classrooms, provide school supplies, and train teachers in rural communities.",
      target: 50000,
      raised: 32750,
      supporters: 187,
      icon: School,
      color: "#8B5CF6",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop",
      impact: {
        text: "Each $50 sponsors a child's education for one month",
        perDollar: "1 month of education per $50"
      },
      urgency: "High",
      deadline: "2024-03-30",
      benefits: [
        "School supplies for 20 children",
        "Teacher training programs",
        "Classroom construction materials",
        "Digital learning resources"
      ]
    },
    {
      id: 2,
      title: "Mobile Health Clinic Expansion",
      description: "Expand our mobile health services to reach more remote villages with essential medical care.",
      target: 75000,
      raised: 18500,
      supporters: 94,
      icon: LocalHospital,
      color: "#EF4444",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      impact: {
        text: "Each $25 provides medical care for one family",
        perDollar: "1 family treated per $25"
      },
      urgency: "Critical",
      deadline: "2024-02-28",
      benefits: [
        "Medical equipment and supplies",
        "Healthcare professional salaries",
        "Vehicle maintenance and fuel",
        "Medicine and vaccines"
      ]
    },
    {
      id: 3,
      title: "Sustainable Agriculture Program",
      description: "Train farmers in climate-smart agriculture and provide seeds, tools, and irrigation systems.",
      target: 40000,
      raised: 28900,
      supporters: 156,
      icon: Agriculture,
      color: "#F59E0B",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
      impact: {
        text: "Each $75 trains one farmer in sustainable methods",
        perDollar: "1 farmer trained per $75"
      },
      urgency: "Medium",
      deadline: "2024-04-15",
      benefits: [
        "Seeds and farming tools",
        "Training workshops",
        "Irrigation equipment",
        "Market access support"
      ]
    },
    {
      id: 4,
      title: "Clean Water Access Project",
      description: "Drill boreholes and install water distribution systems in communities without clean water access.",
      target: 100000,
      raised: 45200,
      supporters: 203,
      icon: WaterDrop,
      color: "#06B6D4",
      image: "https://images.unsplash.com/photo-1541087330775-36f99e6d5b55?w=400&h=300&fit=crop",
      impact: {
        text: "Each $100 provides clean water for one person for life",
        perDollar: "Lifetime water access per $100"
      },
      urgency: "High",
      deadline: "2024-05-20",
      benefits: [
        "Borehole drilling equipment",
        "Water purification systems",
        "Distribution infrastructure",
        "Community training"
      ]
    }
  ];

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000];
  
  const paymentMethods = [
    { id: 'mpesa', name: 'M-Pesa', icon: Phone, description: 'Mobile money transfer' },
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, description: 'Visa, Mastercard, Amex' },
    { id: 'bank', name: 'Bank Transfer', icon: AccountBalance, description: 'Direct bank transfer' },
    { id: 'paypal', name: 'PayPal', icon: PaymentTwoTone, description: 'PayPal account' },
  ];

  // Animate progress bars on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const animated = {};
      donationProjects.forEach(project => {
        animated[project.id] = (project.raised / project.target) * 100;
      });
      setAnimatedProgress(animated);
    }, 500);

    return () => clearTimeout(timer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-rotate slider every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % donationProjects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [donationProjects.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const getProgressColor = (urgency) => {
    switch (urgency) {
      case 'Critical': return '#EF4444';
      case 'High': return '#F59E0B';
      case 'Medium': return '#22C55E';
      default: return '#22C55E';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'Critical': return { bg: '#FEE2E2', text: '#DC2626' };
      case 'High': return { bg: '#FEF3C7', text: '#D97706' };
      case 'Medium': return { bg: '#D1FAE5', text: '#059669' };
      default: return { bg: '#D1FAE5', text: '#059669' };
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleDonateClick = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
    setActiveStep(0);
  };

  const handleAmountSelect = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (event) => {
    setCustomAmount(event.target.value);
    setDonationAmount('');
  };

  const getCurrentAmount = () => {
    return customAmount || donationAmount;
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleCompleteDonation = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsProcessing(false);
    setIsDialogOpen(false);
    setShowSuccess(true);
    
    // Reset form
    setSelectedProject(null);
    setDonationAmount('');
    setCustomAmount('');
    setPaymentMethod('');
    setActiveStep(0);
  };

  const canProceedToNext = () => {
    switch (activeStep) {
      case 0: return selectedProject !== null;
      case 1: return getCurrentAmount() > 0;
      case 2: return paymentMethod !== '';
      default: return true;
    }
  };

  const getVisibleProjects = () => {
    const projects = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % donationProjects.length;
      projects.push(donationProjects[index]);
    }
    return projects;
  };

  return (
    <Box
      id="donate"
      component="section"
      className="section-padding"
      sx={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 40%)
          `,
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-5">
            <Typography
              variant="h2"
              component="h2"
              sx={{
                color: '#F8FAFC',
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2rem', md: '2.5rem' },
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  background: 'linear-gradient(45deg, #22C55E, #10B981)',
                  borderRadius: '2px',
                },
              }}
            >
              Make a Difference Today
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#CBD5E1',
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1rem', md: '1.25rem' },
              }}
            >
              Choose a project that speaks to your heart and see the direct impact of your contribution
            </Typography>
          </motion.div>

          {/* Donation Projects Grid */}
          <Box sx={{ position: 'relative', overflow: 'hidden' }}>
            {/* Desktop Slider View (Large screens) */}
            <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Grid container spacing={3} justifyContent="center">
                    {getVisibleProjects().map((project, index) => (
                      <Grid size={{ xs: 12, md: 4 }} key={`${project.id}-${currentSlide}`}>
                        <motion.div
                          variants={cardVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: index * 0.1 }}
                        >
                          <Card
                            sx={{
                              height: '550px',
                              background: 'rgba(30, 41, 59, 0.9)',
                              backdropFilter: 'blur(20px)',
                              border: '1px solid rgba(34, 197, 94, 0.2)',
                              borderRadius: '24px',
                              overflow: 'hidden',
                              position: 'relative',
                              transition: 'all 0.4s ease',
                              '&:hover': {
                                transform: 'translateY(-8px)',
                                boxShadow: '0 20px 60px rgba(34, 197, 94, 0.2)',
                                border: '1px solid rgba(34, 197, 94, 0.4)',
                              },
                            }}
                          >
                            {/* Project Image */}
                            <Box
                              sx={{
                                height: 180,
                                backgroundImage: `url(${project.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                position: 'relative',
                                '&::after': {
                                  content: '""',
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  background: `linear-gradient(45deg, ${project.color}40, transparent)`,
                                },
                              }}
                            >
                              {/* Urgency Badge */}
                              <Chip
                                label={project.urgency}
                                sx={{
                                  position: 'absolute',
                                  top: 16,
                                  right: 16,
                                  backgroundColor: getUrgencyColor(project.urgency).bg,
                                  color: getUrgencyColor(project.urgency).text,
                                  fontWeight: 700,
                                  fontSize: '0.75rem',
                                  zIndex: 2,
                                }}
                              />
                              
                              {/* Project Icon */}
                              <Box
                                sx={{
                                  position: 'absolute',
                                  bottom: -20,
                                  left: 24,
                                  width: 64,
                                  height: 64,
                                  borderRadius: '50%',
                                  background: `linear-gradient(45deg, ${project.color}, rgba(34, 197, 94, 0.8))`,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  border: '4px solid #1E293B',
                                  zIndex: 2,
                                }}
                              >
                                <project.icon sx={{ fontSize: 32, color: 'white' }} />
                              </Box>
                            </Box>

                            <CardContent sx={{ p: 3, pt: 4 }}>
                              {/* Project Header */}
                              <Box sx={{ mb: 2 }}>
                                <Typography
                                  variant="h6"
                                  component="h3"
                                  sx={{
                                    color: '#F8FAFC',
                                    fontWeight: 700,
                                    mb: 1,
                                    fontSize: '1.1rem',
                                    lineHeight: 1.3,
                                  }}
                                >
                                  {project.title}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: '#CBD5E1',
                                    lineHeight: 1.5,
                                    mb: 2,
                                    fontSize: '0.9rem',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                  }}
                                >
                                  {project.description}
                                </Typography>
                                
                                {/* Impact Statement */}
                                <Box
                                  sx={{
                                    backgroundColor: `${project.color}20`,
                                    padding: '8px 12px',
                                    borderRadius: '8px',
                                    border: `1px solid ${project.color}30`,
                                  }}
                                >
                                  <Typography
                                    variant="caption"
                                    sx={{
                                      color: project.color,
                                      fontWeight: 600,
                                      fontSize: '0.8rem',
                                    }}
                                  >
                                    💡 {project.impact.text}
                                  </Typography>
                                </Box>
                              </Box>

                              {/* Progress Section */}
                              <Box sx={{ mb: 3 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                  <Typography variant="h6" sx={{ color: '#22C55E', fontWeight: 700, fontSize: '1rem' }}>
                                    {formatCurrency(project.raised)}
                                  </Typography>
                                  <Typography variant="body2" sx={{ color: '#CBD5E1', fontSize: '0.85rem' }}>
                                    of {formatCurrency(project.target)}
                                  </Typography>
                                </Box>
                                
                                <LinearProgress
                                  variant="determinate"
                                  value={animatedProgress[project.id] || 0}
                                  sx={{
                                    height: 6,
                                    borderRadius: '3px',
                                    backgroundColor: 'rgba(203, 213, 225, 0.2)',
                                    '& .MuiLinearProgress-bar': {
                                      backgroundColor: getProgressColor(project.urgency),
                                      borderRadius: '3px',
                                    },
                                  }}
                                />
                                
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                    <Group sx={{ fontSize: 14, color: '#94A3B8' }} />
                                    <Typography variant="caption" sx={{ color: '#94A3B8', fontSize: '0.75rem' }}>
                                      {project.supporters} supporters
                                    </Typography>
                                  </Box>
                                  <Typography variant="caption" sx={{ color: '#94A3B8', fontSize: '0.75rem' }}>
                                    {formatDate(project.deadline)}
                                  </Typography>
                                </Box>
                              </Box>

                              {/* Donation Button */}
                              <Button
                                variant="contained"
                                fullWidth
                                endIcon={<Favorite />}
                                onClick={() => handleDonateClick(project)}
                                sx={{
                                  backgroundColor: project.color,
                                  color: 'white',
                                  borderRadius: '12px',
                                  textTransform: 'none',
                                  fontWeight: 700,
                                  py: 1.5,
                                  fontSize: '0.9rem',
                                  '&:hover': {
                                    backgroundColor: project.color,
                                    transform: 'scale(1.02)',
                                    boxShadow: `0 8px 32px ${project.color}40`,
                                  },
                                  transition: 'all 0.3s ease',
                                }}
                              >
                                Donate Now
                              </Button>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>
              </AnimatePresence>

              {/* Slider Indicators */}
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, gap: 1 }}>
                {donationProjects.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      backgroundColor: currentSlide === index ? '#22C55E' : 'rgba(34, 197, 94, 0.3)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: '#22C55E',
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>

            {/* Mobile/Tablet Grid View */}
            <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
              <Grid container spacing={3}>
                {donationProjects.map((project, index) => (
                  <Grid size={{ xs: 12, md: 6 }} key={project.id}>
                    <motion.div
                      variants={cardVariants}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card
                        sx={{
                          height: '100%',
                          background: 'rgba(30, 41, 59, 0.9)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(34, 197, 94, 0.2)',
                          borderRadius: '24px',
                          overflow: 'hidden',
                          position: 'relative',
                          transition: 'all 0.4s ease',
                          '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: '0 20px 60px rgba(34, 197, 94, 0.2)',
                            border: '1px solid rgba(34, 197, 94, 0.4)',
                          },
                        }}
                      >
                        {/* Project Image */}
                        <Box
                          sx={{
                            height: 200,
                            backgroundImage: `url(${project.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'relative',
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: `linear-gradient(45deg, ${project.color}40, transparent)`,
                            },
                          }}
                        >
                          {/* Urgency Badge */}
                          <Chip
                            label={project.urgency}
                            sx={{
                              position: 'absolute',
                              top: 16,
                              right: 16,
                              backgroundColor: getUrgencyColor(project.urgency).bg,
                              color: getUrgencyColor(project.urgency).text,
                              fontWeight: 700,
                              fontSize: '0.75rem',
                              zIndex: 2,
                            }}
                          />
                          
                          {/* Project Icon */}
                          <Box
                            sx={{
                              position: 'absolute',
                              bottom: -20,
                              left: 24,
                              width: 64,
                              height: 64,
                              borderRadius: '50%',
                              background: `linear-gradient(45deg, ${project.color}, rgba(34, 197, 94, 0.8))`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              border: '4px solid #1E293B',
                              zIndex: 2,
                            }}
                          >
                            <project.icon sx={{ fontSize: 32, color: 'white' }} />
                          </Box>
                        </Box>

                        <CardContent sx={{ p: 3, pt: 4 }}>
                          {/* Project Header */}
                          <Box sx={{ mb: 3 }}>
                            <Typography
                              variant="h5"
                              component="h3"
                              sx={{
                                color: '#F8FAFC',
                                fontWeight: 700,
                                mb: 1,
                                fontSize: '1.25rem',
                              }}
                            >
                              {project.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: '#CBD5E1',
                                lineHeight: 1.6,
                                mb: 2,
                              }}
                            >
                              {project.description}
                            </Typography>
                            
                            {/* Impact Statement */}
                            <Box
                              sx={{
                                backgroundColor: `${project.color}20`,
                                padding: '12px 16px',
                                borderRadius: '12px',
                                border: `1px solid ${project.color}30`,
                              }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  color: project.color,
                                  fontWeight: 600,
                                  fontSize: '0.9rem',
                                }}
                              >
                                💡 {project.impact.text}
                              </Typography>
                            </Box>
                          </Box>

                          {/* Progress Section */}
                          <Box sx={{ mb: 3 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                              <Typography variant="h6" sx={{ color: '#22C55E', fontWeight: 700 }}>
                                {formatCurrency(project.raised)}
                              </Typography>
                              <Typography variant="body2" sx={{ color: '#CBD5E1' }}>
                                of {formatCurrency(project.target)}
                              </Typography>
                            </Box>
                            
                            <LinearProgress
                              variant="determinate"
                              value={animatedProgress[project.id] || 0}
                              sx={{
                                height: 8,
                                borderRadius: '4px',
                                backgroundColor: 'rgba(203, 213, 225, 0.2)',
                                '& .MuiLinearProgress-bar': {
                                  backgroundColor: getProgressColor(project.urgency),
                                  borderRadius: '4px',
                                },
                              }}
                            />
                            
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Group sx={{ fontSize: 16, color: '#94A3B8' }} />
                                <Typography variant="caption" sx={{ color: '#94A3B8' }}>
                                  {project.supporters} supporters
                                </Typography>
                              </Box>
                              <Typography variant="caption" sx={{ color: '#94A3B8' }}>
                                Deadline: {formatDate(project.deadline)}
                              </Typography>
                            </Box>
                          </Box>

                          {/* Donation Button */}
                          <Button
                            variant="contained"
                            fullWidth
                            endIcon={<Favorite />}
                            onClick={() => handleDonateClick(project)}
                            sx={{
                              backgroundColor: project.color,
                              color: 'white',
                              borderRadius: '12px',
                              textTransform: 'none',
                              fontWeight: 700,
                              py: 1.5,
                              fontSize: '1rem',
                              '&:hover': {
                                backgroundColor: project.color,
                                transform: 'scale(1.02)',
                                boxShadow: `0 8px 32px ${project.color}40`,
                              },
                              transition: 'all 0.3s ease',
                            }}
                          >
                            Donate Now
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* Donation Dialog */}
      <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '24px',
            maxHeight: '90vh',
            background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)',
          },
        }}
      >
        <DialogTitle sx={{ p: 3, pb: 1, position: 'relative' }}>
          <IconButton
            onClick={() => setIsDialogOpen(false)}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            <Close />
          </IconButton>
          
          <Typography variant="h4" sx={{ color: '#1E293B', fontWeight: 700, pr: 6 }}>
            Make Your Donation
          </Typography>
          
          {selectedProject && (
            <Typography variant="body1" sx={{ color: '#64748B', mt: 1 }}>
              Supporting: {selectedProject.title}
            </Typography>
          )}
        </DialogTitle>

        <DialogContent sx={{ p: 3 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {/* Step 1: Project Selection (Auto-completed) */}
            <Step completed={activeStep > 0}>
              <StepLabel>
                <Typography variant="h6" sx={{ color: '#1E293B', fontWeight: 600 }}>
                  Project Selected
                </Typography>
              </StepLabel>
              <StepContent>
                {selectedProject && (
                  <Card sx={{ p: 2, backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar
                        sx={{
                          backgroundColor: selectedProject.color,
                          width: 48,
                          height: 48,
                        }}
                      >
                        <selectedProject.icon />
                      </Avatar>
                      <Box>
                        <Typography variant="h6" sx={{ color: '#1E293B', fontWeight: 600 }}>
                          {selectedProject.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#64748B' }}>
                          {selectedProject.impact.text}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                )}
                <Box sx={{ mt: 2 }}>
                  <Button onClick={handleNext} variant="contained" sx={{ mr: 1 }}>
                    Continue
                  </Button>
                </Box>
              </StepContent>
            </Step>

            {/* Step 2: Amount Selection */}
            <Step completed={activeStep > 1}>
              <StepLabel>
                <Typography variant="h6" sx={{ color: '#1E293B', fontWeight: 600 }}>
                  Choose Amount
                </Typography>
              </StepLabel>
              <StepContent>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body1" sx={{ color: '#64748B', mb: 2 }}>
                    Select a predefined amount or enter a custom amount:
                  </Typography>
                  
                  {/* Predefined Amounts */}
                  <Grid container spacing={1} sx={{ mb: 3 }}>
                    {predefinedAmounts.map((amount) => (
                      <Grid size={{ xs: 4, sm: 2 }} key={amount}>
                        <Button
                          variant={donationAmount === amount ? 'contained' : 'outlined'}
                          onClick={() => handleAmountSelect(amount)}
                          sx={{
                            width: '100%',
                            borderRadius: '12px',
                            fontWeight: 600,
                            backgroundColor: donationAmount === amount ? '#22C55E' : 'transparent',
                            borderColor: '#22C55E',
                            color: donationAmount === amount ? 'white' : '#22C55E',
                            '&:hover': {
                              backgroundColor: donationAmount === amount ? '#15803D' : 'rgba(34, 197, 94, 0.1)',
                            },
                          }}
                        >
                          ${amount}
                        </Button>
                      </Grid>
                    ))}
                  </Grid>

                  {/* Custom Amount */}
                  <TextField
                    label="Custom Amount"
                    type="number"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    fullWidth
                    sx={{ mb: 2 }}
                    InputProps={{
                      startAdornment: <Typography sx={{ mr: 1 }}>$</Typography>,
                    }}
                  />

                  {/* Frequency Selection */}
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Donation Frequency</InputLabel>
                    <Select
                      value={donationFrequency}
                      onChange={(e) => setDonationFrequency(e.target.value)}
                      label="Donation Frequency"
                    >
                      <MenuItem value="one-time">One-time Donation</MenuItem>
                      <MenuItem value="monthly">Monthly Recurring</MenuItem>
                      <MenuItem value="quarterly">Quarterly Recurring</MenuItem>
                      <MenuItem value="yearly">Annual Recurring</MenuItem>
                    </Select>
                  </FormControl>

                  {/* Impact Preview */}
                  {getCurrentAmount() > 0 && selectedProject && (
                    <Alert
                      severity="success"
                      sx={{
                        backgroundColor: 'rgba(34, 197, 94, 0.1)',
                        color: '#15803D',
                        border: '1px solid rgba(34, 197, 94, 0.2)',
                      }}
                    >
                      Your ${getCurrentAmount()} donation will make a real difference! 
                      {selectedProject.impact.perDollar && (
                        <Typography variant="body2" sx={{ mt: 0.5 }}>
                          Impact: {Math.floor(getCurrentAmount() / 50)} months of education support
                        </Typography>
                      )}
                    </Alert>
                  )}
                </Box>

                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button onClick={handleBack} sx={{ mr: 1 }}>
                    Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    variant="contained"
                    disabled={!canProceedToNext()}
                    sx={{ mr: 1 }}
                  >
                    Continue
                  </Button>
                </Box>
              </StepContent>
            </Step>

            {/* Step 3: Payment Method */}
            <Step completed={activeStep > 2}>
              <StepLabel>
                <Typography variant="h6" sx={{ color: '#1E293B', fontWeight: 600 }}>
                  Payment Method
                </Typography>
              </StepLabel>
              <StepContent>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body1" sx={{ color: '#64748B', mb: 2 }}>
                    Choose your preferred payment method:
                  </Typography>
                  
                  <Grid container spacing={2}>
                    {paymentMethods.map((method) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={method.id}>
                        <Card
                          onClick={() => setPaymentMethod(method.id)}
                          sx={{
                            p: 2,
                            cursor: 'pointer',
                            border: paymentMethod === method.id 
                              ? '2px solid #22C55E' 
                              : '1px solid rgba(203, 213, 225, 0.3)',
                            backgroundColor: paymentMethod === method.id 
                              ? 'rgba(34, 197, 94, 0.1)' 
                              : 'white',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              border: '2px solid #22C55E',
                              backgroundColor: 'rgba(34, 197, 94, 0.05)',
                            },
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <method.icon sx={{ fontSize: 32, color: '#22C55E' }} />
                            <Box>
                              <Typography variant="h6" sx={{ color: '#1E293B', fontWeight: 600 }}>
                                {method.name}
                              </Typography>
                              <Typography variant="body2" sx={{ color: '#64748B' }}>
                                {method.description}
                              </Typography>
                            </Box>
                          </Box>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button onClick={handleBack} sx={{ mr: 1 }}>
                    Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    variant="contained"
                    disabled={!canProceedToNext()}
                    sx={{ mr: 1 }}
                  >
                    Continue
                  </Button>
                </Box>
              </StepContent>
            </Step>

            {/* Step 4: Confirmation */}
            <Step>
              <StepLabel>
                <Typography variant="h6" sx={{ color: '#1E293B', fontWeight: 600 }}>
                  Confirm Donation
                </Typography>
              </StepLabel>
              <StepContent>
                {selectedProject && (
                  <Box sx={{ mb: 3 }}>
                    <Card sx={{ p: 3, backgroundColor: 'rgba(34, 197, 94, 0.05)', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                      <Typography variant="h5" sx={{ color: '#1E293B', fontWeight: 700, mb: 2 }}>
                        Donation Summary
                      </Typography>
                      
                      <Divider sx={{ mb: 2 }} />
                      
                      <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <Typography variant="body2" sx={{ color: '#64748B' }}>Project:</Typography>
                          <Typography variant="body1" sx={{ color: '#1E293B', fontWeight: 600 }}>
                            {selectedProject.title}
                          </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <Typography variant="body2" sx={{ color: '#64748B' }}>Amount:</Typography>
                          <Typography variant="h6" sx={{ color: '#22C55E', fontWeight: 700 }}>
                            ${getCurrentAmount()}
                          </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <Typography variant="body2" sx={{ color: '#64748B' }}>Frequency:</Typography>
                          <Typography variant="body1" sx={{ color: '#1E293B', fontWeight: 600 }}>
                            {donationFrequency.charAt(0).toUpperCase() + donationFrequency.slice(1).replace('-', ' ')}
                          </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <Typography variant="body2" sx={{ color: '#64748B' }}>Payment Method:</Typography>
                          <Typography variant="body1" sx={{ color: '#1E293B', fontWeight: 600 }}>
                            {paymentMethods.find(m => m.id === paymentMethod)?.name}
                          </Typography>
                        </Grid>
                      </Grid>
                      
                      <Divider sx={{ my: 2 }} />
                      
                      <Alert
                        severity="info"
                        sx={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#1E40AF' }}
                      >
                        <Typography variant="body2">
                          Your donation is secure and 100% of your contribution goes directly to the project. 
                          You will receive a confirmation email with tax receipt information.
                        </Typography>
                      </Alert>
                    </Card>
                  </Box>
                )}

                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button onClick={handleBack} sx={{ mr: 1 }}>
                    Back
                  </Button>
                  <Button
                    onClick={handleCompleteDonation}
                    variant="contained"
                    disabled={isProcessing}
                    startIcon={isProcessing ? <LinearProgress sx={{ width: 20 }} /> : <CheckCircle />}
                    sx={{
                      backgroundColor: '#22C55E',
                      color: 'white',
                      fontWeight: 700,
                      px: 4,
                      '&:hover': {
                        backgroundColor: '#15803D',
                      },
                    }}
                  >
                    {isProcessing ? 'Processing...' : 'Complete Donation'}
                  </Button>
                </Box>
              </StepContent>
            </Step>
          </Stepper>
        </DialogContent>
      </Dialog>

      {/* Success Snackbar */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          sx={{
            backgroundColor: '#22C55E',
            color: 'white',
            fontWeight: 600,
            '& .MuiAlert-icon': {
              color: 'white',
            },
          }}
        >
          🎉 Thank you! Your donation has been processed successfully. You're making a real difference!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default InteractiveDonationSection;
