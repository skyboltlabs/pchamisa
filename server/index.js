const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Email transporter setup
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    message: 'Pride Chamisa - AI Pioneer Portfolio API is running'
  });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Name, email, and message are required fields'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Please provide a valid email address'
      });
    }

    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'pride.chamisa@vidsentry.com',
      subject: `New Collaboration Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            New Collaboration Inquiry
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <div style="background: white; padding: 15px; border-left: 4px solid #4F46E5; border-radius: 4px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>This email was sent from the Pride Chamisa AI Pioneer portfolio contact form.</p>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send auto-reply to user
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for your collaboration inquiry - Pride Chamisa',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5;">Thank you for your message, ${name}!</h2>
          
          <p>I've received your collaboration inquiry and will get back to you as soon as possible. I appreciate your interest in working together on breakthrough AI innovations.</p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your message:</h3>
            <p style="font-style: italic;">"${message}"</p>
          </div>
          
          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Explore VidSentry and my AI safety research</li>
            <li>Check out my medical AI publications</li>
            <li>Follow my work on responsible AI development</li>
          </ul>
          
          <p>Best regards,<br><strong>Pride Chamisa</strong></p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(autoReplyOptions);

    res.json({
      success: true,
      message: 'Collaboration inquiry sent successfully! You should receive a confirmation email shortly.'
    });

  } catch (error) {
    console.error('Collaboration inquiry error:', error);
    res.status(500).json({
      error: 'Failed to send collaboration inquiry. Please try again later.'
    });
  }
});

// Portfolio data endpoints
app.get('/api/projects', (req, res) => {
  const projects = [
    {
      id: '1',
      title: 'VidSentry — Video Safety Reinvented',
      description: 'Next-generation AI moderation platform detecting hate speech, violence, nudity in real-time',
      category: 'AI/ML',
      impact: '90% reduction in manual moderation time',
      year: 2024
    }
  ];
  
  res.json(projects);
});

app.get('/api/publications', (req, res) => {
  const publications = [
    {
      id: '1',
      title: 'AI for Responsible Media: Scaling Trust & Safety in Digital Platforms',
      authors: ['Pride Chamisa'],
      venue: 'AI/Media Symposium (Accepted)',
      year: 2025,
      citations: 0
    }
  ];
  
  res.json(publications);
});

// Analytics endpoint
app.post('/api/analytics', (req, res) => {
  const { event, page, timestamp } = req.body;
  
  // In a real app, you'd store this in a database or send to analytics service
  console.log('Analytics event:', { event, page, timestamp });
  
  res.json({ success: true });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Endpoint not found',
    message: 'The requested resource does not exist'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Pride Chamisa AI Pioneer Portfolio API running on port ${PORT}`);
  console.log(`📧 Email service configured: ${process.env.EMAIL_USER ? 'Yes' : 'No'}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
