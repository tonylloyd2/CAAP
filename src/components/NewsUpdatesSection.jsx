import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import {
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Chip,
  Button,
  Avatar,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Divider,
} from '@mui/material';
import {
  CalendarToday,
  Person,
  ArrowForward,
  Close,
  School,
  LocalHospital,
  Agriculture,
  Engineering,
  Handshake,
  TrendingUp,
  Group,
  Favorite,
} from '@mui/icons-material';

const NewsUpdatesSection = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const newsArticles = [
    {
      id: 1,
      title: "New School Construction Completed in Kabuchai",
      summary: "CAAP celebrates the completion of Kabuchai Primary School, providing quality education access to 300+ children in rural Bungoma County.",
      content: "After 8 months of construction, CAAP is proud to announce the completion of Kabuchai Primary School. This state-of-the-art facility includes 8 classrooms, a library, computer lab, and clean water systems. The school will serve over 300 children from surrounding communities, significantly improving educational access in rural Bungoma County. The project was made possible through partnerships with local communities and international donors.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
      author: "Sarah Mukhwana",
      authorRole: "Director of Programs",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
      date: "2024-01-15",
      category: "Education",
      categoryColor: "#8B5CF6",
      categoryIcon: School,
      readTime: "3 min read",
      tags: ["Education", "Infrastructure", "Community Development"],
      impact: {
        number: "300+",
        description: "Children benefiting",
        icon: Group
      },
      featured: true
    },
    {
      id: 2,
      title: "Mobile Health Clinic Reaches Remote Villages",
      summary: "Our new mobile health initiative has provided medical services to over 1,500 residents in remote areas of Mt. Elgon during its first quarter.",
      content: "The CAAP Mobile Health Clinic has successfully completed its first quarter of operations, reaching remote villages in the Mt. Elgon region. Equipped with essential medical supplies and staffed by qualified healthcare professionals, the clinic has provided basic healthcare services including vaccinations, maternal health services, and treatment for common ailments. This initiative addresses the critical healthcare gap in areas where the nearest health facility is often more than 20 kilometers away.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      author: "Dr. Grace Naswa",
      authorRole: "Healthcare Coordinator",
      authorImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      date: "2024-01-08",
      category: "Healthcare",
      categoryColor: "#EF4444",
      categoryIcon: LocalHospital,
      readTime: "4 min read",
      tags: ["Healthcare", "Mobile Services", "Rural Development"],
      impact: {
        number: "1,500+",
        description: "Patients served",
        icon: Favorite
      },
      featured: false
    },
    {
      id: 3,
      title: "Sustainable Agriculture Training Program Launch",
      summary: "CAAP introduces comprehensive training program helping 200+ farmers adopt climate-smart agricultural practices and increase crop yields by 40%.",
      content: "CAAP has launched an innovative Sustainable Agriculture Training Program in partnership with local agricultural extension officers. The program focuses on climate-smart farming techniques, soil conservation, and efficient water management. Over 200 farmers have enrolled in the first phase, learning about crop rotation, organic farming methods, and sustainable pest management. Early results show promising yield increases of up to 40% in participating farms.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop",
      author: "David Wanjala",
      authorRole: "Agricultural Program Manager",
      authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      date: "2023-12-28",
      category: "Agriculture",
      categoryColor: "#F59E0B",
      categoryIcon: Agriculture,
      readTime: "5 min read",
      tags: ["Agriculture", "Training", "Climate Smart", "Sustainability"],
      impact: {
        number: "200+",
        description: "Farmers trained",
        icon: TrendingUp
      },
      featured: false
    },
    {
      id: 4,
      title: "Water Access Project Brings Clean Water to 5 Villages",
      summary: "Successfully completed borehole drilling and water distribution system installation, providing clean water access to over 2,000 residents.",
      content: "CAAP's Water Access Project has successfully brought clean, safe drinking water to five villages in Bungoma County. The project involved drilling three new boreholes and installing a comprehensive water distribution system with multiple access points. Solar-powered pumps ensure sustainable operation while community water committees have been trained to maintain the systems. This initiative has dramatically reduced water-borne diseases and decreased the time women and children spend collecting water.",
      image: "https://images.unsplash.com/photo-1541087330775-36f99e6d5b55?w=600&h=400&fit=crop",
      author: "James Barasa",
      authorRole: "Infrastructure Coordinator",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      date: "2023-12-20",
      category: "Infrastructure",
      categoryColor: "#06B6D4",
      categoryIcon: Engineering,
      readTime: "4 min read",
      tags: ["Water Access", "Infrastructure", "Community Health"],
      impact: {
        number: "2,000+",
        description: "People with clean water",
        icon: Group
      },
      featured: false
    },
    {
      id: 5,
      title: "International Partnership Expands CAAP's Reach",
      summary: "New collaboration with UK-based charity will fund three major projects over the next two years, focusing on education and healthcare initiatives.",
      content: "CAAP is excited to announce a strategic partnership with Hope Foundation UK, a collaboration that will significantly expand our impact in rural Kenya. This two-year partnership will fund three major initiatives: construction of two additional primary schools, establishment of a maternal health center, and implementation of a youth entrepreneurship program. The partnership represents a £250,000 investment in community development and will directly benefit over 3,000 individuals across Bungoma County.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
      author: "Peter Wanyama",
      authorRole: "Executive Director",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      date: "2023-12-15",
      category: "Partnership",
      categoryColor: "#10B981",
      categoryIcon: Handshake,
      readTime: "6 min read",
      tags: ["Partnership", "International", "Funding", "Expansion"],
      impact: {
        number: "3,000+",
        description: "People to benefit",
        icon: Group
      },
      featured: false
    },
    {
      id: 6,
      title: "Youth Entrepreneurship Program Graduates First Cohort",
      summary: "25 young entrepreneurs complete CAAP's business training program, with 18 successfully launching their own small businesses.",
      content: "CAAP celebrates the graduation of its first Youth Entrepreneurship Program cohort. Twenty-five young people aged 18-25 completed the intensive 3-month training program covering business planning, financial literacy, marketing, and leadership skills. Remarkably, 18 graduates have already launched their own businesses, ranging from agricultural cooperatives to digital services. The program has created over 40 new jobs in the community and demonstrated the tremendous potential of investing in youth development.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      author: "Mary Wekesa",
      authorRole: "Youth Program Coordinator",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      date: "2023-12-10",
      category: "Youth Development",
      categoryColor: "#EC4899",
      categoryIcon: TrendingUp,
      readTime: "5 min read",
      tags: ["Youth", "Entrepreneurship", "Business", "Job Creation"],
      impact: {
        number: "40+",
        description: "New jobs created",
        icon: TrendingUp
      },
      featured: false
    }
  ];

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleOpenArticle = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
  };

  return (
    <Box
      id="news"
      component="section"
      className="section-padding"
      sx={{
        background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 50%, #CBD5E1 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.05) 0%, transparent 40%)
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
                color: '#1E293B',
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
              News & Updates
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#64748B',
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1rem', md: '1.25rem' },
              }}
            >
              Stay informed about our latest projects, achievements, and community impact stories
            </Typography>
          </motion.div>

          {/* Featured Article */}
          {featuredArticle && (
            <motion.div variants={itemVariants} sx={{ mb: 6 }}>
              <Card
                sx={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
                  background: 'white',
                  border: '1px solid rgba(34, 197, 94, 0.1)',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 32px 80px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <Grid container>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <CardMedia
                      component="img"
                      height="400"
                      image={featuredArticle.image}
                      alt={featuredArticle.title}
                      sx={{
                        objectFit: 'cover',
                        height: { xs: '250px', md: '400px' },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <CardContent sx={{ p: { xs: 3, md: 4 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                      {/* Featured Badge */}
                      <Box sx={{ mb: 2 }}>
                        <Chip
                          label="Featured Story"
                          sx={{
                            backgroundColor: '#22C55E',
                            color: 'white',
                            fontWeight: 600,
                            mb: 2,
                          }}
                        />
                      </Box>

                      {/* Category and Meta */}
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <Chip
                          icon={<featuredArticle.categoryIcon sx={{ fontSize: 16 }} />}
                          label={featuredArticle.category}
                          size="small"
                          sx={{
                            backgroundColor: `${featuredArticle.categoryColor}20`,
                            color: featuredArticle.categoryColor,
                            fontWeight: 600,
                          }}
                        />
                        <Typography variant="caption" sx={{ color: '#64748B', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <CalendarToday sx={{ fontSize: 14 }} />
                          {formatDate(featuredArticle.date)}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#64748B' }}>
                          {featuredArticle.readTime}
                        </Typography>
                      </Box>

                      {/* Title */}
                      <Typography
                        variant="h4"
                        component="h3"
                        sx={{
                          color: '#1E293B',
                          fontWeight: 700,
                          mb: 2,
                          fontSize: { xs: '1.5rem', md: '1.75rem' },
                          lineHeight: 1.3,
                        }}
                      >
                        {featuredArticle.title}
                      </Typography>

                      {/* Summary */}
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#64748B',
                          lineHeight: 1.6,
                          mb: 3,
                          flex: 1,
                        }}
                      >
                        {featuredArticle.summary}
                      </Typography>

                      {/* Impact Badge */}
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            backgroundColor: 'rgba(34, 197, 94, 0.1)',
                            padding: '8px 16px',
                            borderRadius: '12px',
                          }}
                        >
                          <featuredArticle.impact.icon sx={{ color: '#22C55E', fontSize: 20 }} />
                          <Box>
                            <Typography variant="h6" sx={{ color: '#22C55E', fontWeight: 700, lineHeight: 1 }}>
                              {featuredArticle.impact.number}
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#64748B' }}>
                              {featuredArticle.impact.description}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>

                      {/* Author and CTA */}
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                          <Avatar
                            src={featuredArticle.authorImage}
                            sx={{ width: 40, height: 40 }}
                          />
                          <Box>
                            <Typography variant="subtitle2" sx={{ color: '#1E293B', fontWeight: 600 }}>
                              {featuredArticle.author}
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#64748B' }}>
                              {featuredArticle.authorRole}
                            </Typography>
                          </Box>
                        </Box>
                        
                        <Button
                          variant="contained"
                          endIcon={<ArrowForward />}
                          onClick={() => handleOpenArticle(featuredArticle)}
                          sx={{
                            backgroundColor: '#22C55E',
                            color: 'white',
                            borderRadius: '12px',
                            textTransform: 'none',
                            fontWeight: 600,
                            px: 3,
                            '&:hover': {
                              backgroundColor: '#15803D',
                              transform: 'translateX(4px)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          Read More
                        </Button>
                      </Box>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </motion.div>
          )}

          {/* Regular Articles Grid */}
          <motion.div variants={itemVariants}>
            <Grid container spacing={3}>
              {regularArticles.map((article, index) => (
                <Grid size={{ xs: 12, md: 6, lg: 4 }} key={article.id}>
                  <motion.div
                    variants={cardVariants}
                    transition={{ delay: index * 0.1 }}
                    onHoverStart={() => setHoveredCard(article.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        background: 'white',
                        border: '1px solid rgba(34, 197, 94, 0.1)',
                        cursor: 'pointer',
                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        transform: hoveredCard === article.id ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                        boxShadow: hoveredCard === article.id 
                          ? '0 20px 60px rgba(34, 197, 94, 0.15)'
                          : '0 8px 32px rgba(0, 0, 0, 0.08)',
                      }}
                      onClick={() => handleOpenArticle(article)}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image={article.image}
                        alt={article.title}
                        sx={{ objectFit: 'cover' }}
                      />
                      <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', height: 'calc(100% - 200px)' }}>
                        {/* Category and Meta */}
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                          <Chip
                            icon={<article.categoryIcon sx={{ fontSize: 14 }} />}
                            label={article.category}
                            size="small"
                            sx={{
                              backgroundColor: `${article.categoryColor}20`,
                              color: article.categoryColor,
                              fontWeight: 600,
                              fontSize: '0.75rem',
                            }}
                          />
                          <Typography variant="caption" sx={{ color: '#64748B' }}>
                            {article.readTime}
                          </Typography>
                        </Box>

                        {/* Title */}
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{
                            color: '#1E293B',
                            fontWeight: 700,
                            mb: 2,
                            lineHeight: 1.3,
                            fontSize: '1.1rem',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}
                        >
                          {article.title}
                        </Typography>

                        {/* Summary */}
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#64748B',
                            lineHeight: 1.6,
                            mb: 3,
                            flex: 1,
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}
                        >
                          {article.summary}
                        </Typography>

                        {/* Impact and Date */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <article.impact.icon sx={{ color: article.categoryColor, fontSize: 16 }} />
                            <Box>
                              <Typography variant="caption" sx={{ color: article.categoryColor, fontWeight: 700 }}>
                                {article.impact.number}
                              </Typography>
                              <Typography variant="caption" sx={{ color: '#64748B', ml: 0.5 }}>
                                {article.impact.description}
                              </Typography>
                            </Box>
                          </Box>
                          <Typography variant="caption" sx={{ color: '#64748B', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <CalendarToday sx={{ fontSize: 12 }} />
                            {formatDate(article.date)}
                          </Typography>
                        </Box>

                        {/* Author */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                          <Avatar
                            src={article.authorImage}
                            sx={{ width: 32, height: 32 }}
                          />
                          <Box>
                            <Typography variant="caption" sx={{ color: '#1E293B', fontWeight: 600 }}>
                              {article.author}
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#64748B', display: 'block' }}>
                              {article.authorRole}
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </motion.div>
      </Container>

      {/* Article Modal */}
      <Dialog
        open={Boolean(selectedArticle)}
        onClose={handleCloseArticle}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '24px',
            maxHeight: '90vh',
          },
        }}
      >
        <AnimatePresence>
          {selectedArticle && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <DialogTitle sx={{ p: 0, position: 'relative' }}>
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={selectedArticle.image}
                    alt={selectedArticle.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <IconButton
                    onClick={handleCloseArticle}
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                      },
                    }}
                  >
                    <Close />
                  </IconButton>
                  
                  {/* Article Header Overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))',
                      p: 3,
                      color: 'white',
                    }}
                  >
                    <Chip
                      icon={<selectedArticle.categoryIcon sx={{ fontSize: 16 }} />}
                      label={selectedArticle.category}
                      sx={{
                        backgroundColor: selectedArticle.categoryColor,
                        color: 'white',
                        fontWeight: 600,
                        mb: 2,
                      }}
                    />
                    <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 1 }}>
                      {selectedArticle.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, opacity: 0.9 }}>
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <CalendarToday sx={{ fontSize: 16 }} />
                        {formatDate(selectedArticle.date)}
                      </Typography>
                      <Typography variant="body2">
                        {selectedArticle.readTime}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </DialogTitle>
              
              <DialogContent sx={{ p: 4 }}>
                {/* Author Info */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Avatar
                    src={selectedArticle.authorImage}
                    sx={{ width: 56, height: 56 }}
                  />
                  <Box>
                    <Typography variant="h6" sx={{ color: '#1E293B', fontWeight: 600 }}>
                      {selectedArticle.author}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#64748B' }}>
                      {selectedArticle.authorRole}
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ mb: 3 }} />

                {/* Impact Highlight */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    backgroundColor: `${selectedArticle.categoryColor}10`,
                    padding: 2,
                    borderRadius: '12px',
                    mb: 3,
                    border: `1px solid ${selectedArticle.categoryColor}30`,
                  }}
                >
                  <selectedArticle.impact.icon sx={{ color: selectedArticle.categoryColor, fontSize: 32 }} />
                  <Box>
                    <Typography variant="h5" sx={{ color: selectedArticle.categoryColor, fontWeight: 700 }}>
                      {selectedArticle.impact.number}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#64748B' }}>
                      {selectedArticle.impact.description}
                    </Typography>
                  </Box>
                </Box>

                {/* Content */}
                <Typography
                  variant="body1"
                  sx={{
                    color: '#374151',
                    lineHeight: 1.8,
                    fontSize: '1.1rem',
                    mb: 3,
                  }}
                >
                  {selectedArticle.content}
                </Typography>

                {/* Tags */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {selectedArticle.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(34, 197, 94, 0.1)',
                        color: '#22C55E',
                        border: '1px solid rgba(34, 197, 94, 0.2)',
                      }}
                    />
                  ))}
                </Box>
              </DialogContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Dialog>
    </Box>
  );
};

export default NewsUpdatesSection;
