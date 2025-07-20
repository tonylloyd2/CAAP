import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  Avatar,
  Grid,
  IconButton,
  Chip,
} from '@mui/material';
import {
  LinkedIn,
  Email,
  School,
  LocalHospital,
  BusinessCenter,
  Agriculture,
  Engineering,
  Psychology,
  Group,
  Star,
} from '@mui/icons-material';

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const boardMembers = [
    {
      id: 1,
      name: "Dr. Peter Wanyama",
      role: "Founder & Executive Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Former UN Development Programme officer with 15+ years in rural development across East Africa. Holds PhD in Development Studies from University of Nairobi.",
      expertise: ["Rural Development", "Community Mobilization", "Sustainable Agriculture"],
      icon: Group,
      color: "#22C55E",
      location: "Bungoma County, Kenya",
      experience: "15+ years",
      email: "peter@caap.org",
      linkedin: "#"
    },
    {
      id: 2,
      name: "Sarah Mukhwana",
      role: "Director of Programs",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face",
      bio: "Local community leader with deep roots in Bungoma County. Masters in Public Health from Moi University, specializing in rural healthcare delivery.",
      expertise: ["Public Health", "Community Health", "Program Management"],
      icon: LocalHospital,
      color: "#10B981",
      location: "Chwele, Bungoma County",
      experience: "10+ years",
      email: "sarah@caap.org",
      linkedin: "#"
    },
    {
      id: 3,
      name: "James Barasa",
      role: "Director of Finance & Operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Certified Public Accountant with extensive experience in non-profit financial management. Previously worked with international NGOs across Kenya.",
      expertise: ["Financial Management", "Operations", "Compliance"],
      icon: BusinessCenter,
      color: "#06B6D4",
      location: "Nairobi, Kenya",
      experience: "12+ years",
      email: "james@caap.org",
      linkedin: "#"
    },
    {
      id: 4,
      name: "Mary Wekesa",
      role: "Education Coordinator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Former primary school teacher turned education advocate. Bachelor's in Education from Masinde Muliro University, passionate about child development.",
      expertise: ["Primary Education", "Curriculum Development", "Teacher Training"],
      icon: School,
      color: "#8B5CF6",
      location: "Kabuchai, Bungoma County",
      experience: "8+ years",
      email: "mary@caap.org",
      linkedin: "#"
    },
    {
      id: 5,
      name: "David Wanjala",
      role: "Agricultural Program Manager",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
      bio: "Agricultural extension officer with expertise in sustainable farming practices. Diploma in Agriculture from Bukura Agricultural College.",
      expertise: ["Sustainable Agriculture", "Crop Management", "Farmer Training"],
      icon: Agriculture,
      color: "#F59E0B",
      location: "Mt. Elgon, Bungoma County",
      experience: "7+ years",
      email: "david@caap.org",
      linkedin: "#"
    },
    {
      id: 6,
      name: "Grace Naswa",
      role: "Community Outreach Coordinator",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      bio: "Social worker with deep understanding of community dynamics in rural Kenya. Bachelor's in Social Work from Maseno University.",
      expertise: ["Community Mobilization", "Social Work", "Women's Empowerment"],
      icon: Psychology,
      color: "#EF4444",
      location: "Bungoma County, Kenya",
      experience: "6+ years",
      email: "grace@caap.org",
      linkedin: "#"
    }
  ];

  const advisors = [
    {
      name: "Prof. Margaret Kamar",
      role: "Vice-Chancellor, University of Eldoret",
      expertise: "Higher Education & Research",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Dr. Robert Simiyu",
      role: "Former Ministry of Agriculture",
      expertise: "Agricultural Policy & Development",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Catherine Wafula",
      role: "County Representative",
      expertise: "Local Government & Policy",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face"
    }
  ];

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <Box
      id="team"
      component="section"
      className="section-padding"
      sx={{
        background: 'linear-gradient(135deg, #1E293B 0%, #334155 50%, #475569 100%)',
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
              Meet Our Team
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
              Dedicated professionals and community leaders working together to create lasting change in rural Kenya
            </Typography>
          </motion.div>

          {/* Leadership Team */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="h4"
              sx={{
                color: '#22C55E',
                fontWeight: 600,
                mb: 4,
                textAlign: 'center',
              }}
            >
              Leadership Team
            </Typography>
            
            <Grid container spacing={3}>
              {boardMembers.map((member, index) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={member.id}>
                  <motion.div
                    variants={cardVariants}
                    transition={{ delay: index * 0.1 }}
                    onHoverStart={() => setHoveredMember(member.id)}
                    onHoverEnd={() => setHoveredMember(null)}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        background: 'rgba(30, 41, 59, 0.9)',
                        backdropFilter: 'blur(20px)',
                        border: `2px solid ${hoveredMember === member.id ? member.color : 'rgba(34, 197, 94, 0.2)'}`,
                        borderRadius: '20px',
                        overflow: 'hidden',
                        position: 'relative',
                        cursor: 'pointer',
                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        transform: hoveredMember === member.id ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                        boxShadow: hoveredMember === member.id 
                          ? `0 20px 60px ${member.color}20, 0 8px 32px rgba(0, 0, 0, 0.3)`
                          : '0 8px 32px rgba(0, 0, 0, 0.2)',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '4px',
                          background: `linear-gradient(45deg, ${member.color}, rgba(34, 197, 94, 0.8))`,
                        },
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        {/* Profile Header */}
                        <Box sx={{ textAlign: 'center', mb: 3 }}>
                          <Box sx={{ position: 'relative', display: 'inline-block', mb: 2 }}>
                            <Avatar
                              src={member.image}
                              sx={{
                                width: 80,
                                height: 80,
                                border: `3px solid ${member.color}`,
                                boxShadow: `0 4px 16px ${member.color}30`,
                                transition: 'all 0.3s ease',
                                transform: hoveredMember === member.id ? 'scale(1.1)' : 'scale(1)',
                              }}
                            />
                            <Box
                              sx={{
                                position: 'absolute',
                                bottom: -5,
                                right: -5,
                                width: 32,
                                height: 32,
                                borderRadius: '50%',
                                background: `linear-gradient(45deg, ${member.color}, rgba(34, 197, 94, 0.8))`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '2px solid #1E293B',
                              }}
                            >
                              <member.icon sx={{ fontSize: 16, color: 'white' }} />
                            </Box>
                          </Box>
                          
                          <Typography
                            variant="h6"
                            sx={{
                              color: '#F8FAFC',
                              fontWeight: 600,
                              mb: 0.5,
                              fontSize: '1.1rem',
                            }}
                          >
                            {member.name}
                          </Typography>
                          
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: member.color,
                              fontWeight: 500,
                              mb: 1,
                              fontSize: '0.9rem',
                            }}
                          >
                            {member.role}
                          </Typography>

                          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 2 }}>
                            <Chip
                              label={member.location}
                              size="small"
                              sx={{
                                backgroundColor: `${member.color}20`,
                                color: member.color,
                                fontSize: '0.75rem',
                                height: '24px',
                              }}
                            />
                            <Chip
                              label={member.experience}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(34, 197, 94, 0.2)',
                                color: '#22C55E',
                                fontSize: '0.75rem',
                                height: '24px',
                              }}
                            />
                          </Box>
                        </Box>

                        {/* Bio */}
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#CBD5E1',
                            lineHeight: 1.6,
                            mb: 3,
                            fontSize: '0.9rem',
                            textAlign: 'center',
                          }}
                        >
                          {member.bio}
                        </Typography>

                        {/* Expertise */}
                        <Box sx={{ mb: 3 }}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              color: '#F8FAFC',
                              fontWeight: 600,
                              mb: 1.5,
                              fontSize: '0.85rem',
                              textAlign: 'center',
                            }}
                          >
                            Areas of Expertise
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, justifyContent: 'center' }}>
                            {member.expertise.map((skill, skillIndex) => (
                              <Chip
                                key={skillIndex}
                                label={skill}
                                size="small"
                                sx={{
                                  backgroundColor: 'rgba(248, 250, 252, 0.1)',
                                  color: '#CBD5E1',
                                  fontSize: '0.7rem',
                                  height: '20px',
                                  border: '1px solid rgba(248, 250, 252, 0.2)',
                                }}
                              />
                            ))}
                          </Box>
                        </Box>

                        {/* Contact Icons */}
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                          <IconButton
                            size="small"
                            sx={{
                              backgroundColor: `${member.color}20`,
                              color: member.color,
                              '&:hover': {
                                backgroundColor: `${member.color}30`,
                                transform: 'scale(1.1)',
                              },
                              transition: 'all 0.3s ease',
                            }}
                          >
                            <Email sx={{ fontSize: 16 }} />
                          </IconButton>
                          <IconButton
                            size="small"
                            sx={{
                              backgroundColor: `${member.color}20`,
                              color: member.color,
                              '&:hover': {
                                backgroundColor: `${member.color}30`,
                                transform: 'scale(1.1)',
                              },
                              transition: 'all 0.3s ease',
                            }}
                          >
                            <LinkedIn sx={{ fontSize: 16 }} />
                          </IconButton>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* Advisory Board */}
          <motion.div variants={itemVariants} sx={{ mt: 8 }}>
            <Typography
              variant="h4"
              sx={{
                color: '#22C55E',
                fontWeight: 600,
                mb: 4,
                textAlign: 'center',
              }}
            >
              Advisory Board
            </Typography>
            
            <Grid container spacing={3} justifyContent="center">
              {advisors.map((advisor, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <motion.div variants={cardVariants} transition={{ delay: index * 0.1 }}>
                    <Card
                      sx={{
                        background: 'rgba(30, 41, 59, 0.7)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(34, 197, 94, 0.2)',
                        borderRadius: '16px',
                        textAlign: 'center',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 12px 32px rgba(34, 197, 94, 0.15)',
                          border: '1px solid rgba(34, 197, 94, 0.4)',
                        },
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <Avatar
                          src={advisor.image}
                          sx={{
                            width: 64,
                            height: 64,
                            mx: 'auto',
                            mb: 2,
                            border: '2px solid #22C55E',
                          }}
                        />
                        <Typography
                          variant="h6"
                          sx={{
                            color: '#F8FAFC',
                            fontWeight: 600,
                            mb: 0.5,
                            fontSize: '1rem',
                          }}
                        >
                          {advisor.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#22C55E',
                            fontWeight: 500,
                            mb: 1,
                            fontSize: '0.85rem',
                          }}
                        >
                          {advisor.role}
                        </Typography>
                        <Chip
                          icon={<Star sx={{ fontSize: 14 }} />}
                          label={advisor.expertise}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(34, 197, 94, 0.2)',
                            color: '#22C55E',
                            fontSize: '0.75rem',
                          }}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* Join Team CTA */}
          <motion.div variants={itemVariants} className="text-center mt-5">
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                mt: 6,
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1))',
                borderRadius: '20px',
                border: '1px solid rgba(34, 197, 94, 0.2)',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  color: '#F8FAFC',
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Join Our Mission
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#CBD5E1',
                  lineHeight: 1.6,
                  mb: 3,
                }}
              >
                We're always looking for passionate individuals who share our vision of 
                poverty-free communities. Explore volunteer opportunities and ways to contribute your skills.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Chip
                  label="Volunteer Positions Available"
                  sx={{
                    backgroundColor: '#22C55E',
                    color: 'white',
                    fontWeight: 600,
                  }}
                />
                <Chip
                  label="Remote & On-site Opportunities"
                  sx={{
                    backgroundColor: 'rgba(34, 197, 94, 0.2)',
                    color: '#22C55E',
                    fontWeight: 600,
                  }}
                />
              </Box>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TeamSection;
