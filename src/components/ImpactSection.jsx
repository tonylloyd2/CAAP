import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const impactData = [
    {
      id: 1,
      number: 15000,
      label: 'Lives Transformed',
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      suffix: '+'
    },
    {
      id: 2,
      number: 250,
      label: 'Children Educated',
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      suffix: '+'
    },
    {
      id: 3,
      number: 12,
      label: 'Healthcare Programs',
      icon: <LocalHospitalIcon sx={{ fontSize: 40 }} />,
      suffix: ''
    },
    {
      id: 4,
      number: 8,
      label: 'Clean Water Projects',
      icon: <WaterDropIcon sx={{ fontSize: 40 }} />,
      suffix: ''
    }
  ];

  const CounterCard = ({ item, index }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (isInView) {
        const timer = setTimeout(() => {
          const duration = 2000;
          const increment = item.number / (duration / 50);
          let current = 0;
          
          const counter = setInterval(() => {
            current += increment;
            if (current >= item.number) {
              setCount(item.number);
              clearInterval(counter);
            } else {
              setCount(Math.floor(current));
            }
          }, 50);
          
          return () => clearInterval(counter);
        }, index * 200);
        
        return () => clearTimeout(timer);
      }
    }, [isInView, item.number, index]);

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{
          duration: 0.8,
          delay: index * 0.2,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        <Card
          sx={{
            height: '100%',
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(34, 197, 94, 0.1)',
            borderRadius: 3,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 20px 40px rgba(34, 197, 94, 0.15)',
              border: '1px solid rgba(34, 197, 94, 0.3)'
            }
          }}
        >
          <CardContent sx={{ py: 4 }}>
            <Box
              sx={{
                color: '#22C55E',
                mb: 2,
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              {item.icon}
            </Box>
            
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                color: '#15803D',
                mb: 1,
                fontSize: { xs: '2.5rem', md: '3rem' }
              }}
            >
              {count.toLocaleString()}{item.suffix}
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                color: '#374151',
                fontWeight: 500,
                fontSize: { xs: '1rem', md: '1.1rem' }
              }}
            >
              {item.label}
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)',
        position: 'relative',
        overflow: 'hidden'
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
          opacity: 0.05,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322C55E' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                color: '#15803D',
                mb: 2,
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              Our Impact
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                color: '#6B7280',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1.1rem', md: '1.3rem' }
              }}
            >
              Measuring the difference we make in communities across Bungoma County
            </Typography>
          </Box>
        </motion.div>

        {/* Impact Metrics Grid */}
        <Grid container spacing={4}>
          {impactData.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <CounterCard item={item} index={index} />
            </Grid>
          ))}
        </Grid>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94] 
          }}
        >
          <Box textAlign="center" mt={8}>
            <Typography
              variant="h6"
              sx={{
                color: '#22C55E',
                fontWeight: 600,
                fontSize: { xs: '1.1rem', md: '1.3rem' }
              }}
            >
              Together, we're building stronger communities and brighter futures
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ImpactSection;