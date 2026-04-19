🌱 GreenFund - Crowdfunding Platform
A modern, full-featured crowdfunding platform built with Node.js, Express, and vanilla JavaScript, focused on eco-friendly and sustainable projects.

🚀 Features
Core Functionality
Campaign Management: Create, browse, and manage crowdfunding campaigns
Secure Payments: Integrated Razorpay payment gateway with test mode support
User Authentication: Complete user registration and login system
Admin Dashboard: Comprehensive admin panel for campaign and user management
KYC Verification: Aadhaar-based KYC system for user verification
Real-time Updates: Dynamic campaign progress tracking
Technical Features
Dual Storage: MongoDB with file system fallback
File Uploads: Multer-based image upload system
JWT Authentication: Secure token-based authentication
Responsive Design: Mobile-first responsive UI
RESTful API: Well-structured backend API
🏗️ Project Structure
crowdfunding21-last/
├── backend/                 # Node.js Express server
│   ├── src/
│   │   ├── server.js      # Main server file
│   │   └── mongodb.js     # MongoDB connection & utilities
│   ├── data/              # JSON data storage (fallback)
│   ├── models/            # Data models
│   ├── config/            # Configuration files
│   └── uploads/           # File upload directory
├── crowdfunding/          # Frontend application
│   ├── index.html         # Homepage
│   ├── campaigns.html     # Campaign listing
│   ├── campaign-detail.html # Individual campaign page
│   ├── start-campaign.html # Campaign creation
│   ├── login.html         # User login
│   ├── register.html      # User registration
│   ├── admin-dashboard.html # Admin panel
│   ├── kyc-verification.html # KYC verification
│   ├── my-account.html    # User dashboard
│   ├── styles.css         # Main stylesheet
│   ├── script.js          # Frontend JavaScript
│   └── api.js             # API integration layer
└── RAZORPAY_TEST_GUIDE.md # Payment integration guide
🛠️ Technology Stack
Backend
Node.js - Runtime environment
Express.js - Web framework
MongoDB - Primary database (with Mongoose ODM)
JSON Files - Fallback storage system
JWT - Authentication tokens
bcryptjs - Password hashing
Multer - File upload handling
Razorpay - Payment gateway integration
dotenv - Environment variable management
Frontend
Vanilla JavaScript - No framework dependencies
CSS3 - Modern styling with animations
Font Awesome - Icon library
Google Fonts - Typography (Inter font)
🚀 Getting Started
Prerequisites
Node.js (v14 or higher)
npm or yarn
MongoDB (optional, falls back to JSON files)
Installation
Clone the repository
bash
git clone <repository-url>
cd crowdfunding21-last
Install backend dependencies
bash
cd backend
npm install
Set up environment variables
bash
cp .env.example .env
# Edit .env with your configuration
Start the backend server
bash
npm start
# or for development
npm run dev
Open the frontend Navigate to http://localhost:4000 in your browser
💳 Payment Integration
The platform includes Razorpay payment integration with test mode support. For detailed setup instructions, see RAZORPAY_TEST_GUIDE.md.

Quick Setup
Get Razorpay test keys from https://razorpay.com
Update .env file with your keys:
env
RAZORPAY_KEY_ID=rzp_test_YOUR_KEY_HERE
RAZORPAY_KEY_SECRET=YOUR_SECRET_HERE
Install Razorpay package: npm install razorpay
Test with provided test cards
🔐 Authentication & Security
JWT-based authentication for secure user sessions
Password hashing with bcryptjs
KYC verification system for user identity
Payment signature verification for secure transactions
CORS protection for API security
📊 Key Features Overview
User Features
Browse and search campaigns
Create and manage own campaigns
Make secure donations
Track donation history
KYC verification for enhanced trust
Personal dashboard with statistics
Admin Features
Campaign approval workflow
User management dashboard
KYC verification management
System settings configuration
Analytics and reporting
Campaign Features
Dynamic progress tracking
Image uploads for campaigns
Goal and deadline management
Backer count and donation tracking
Campaign status management (pending/approved/rejected)
🎯 Sample Campaigns
The platform comes pre-loaded with sample eco-friendly campaigns:

Community Garden Project
Solar Power Bank Innovation
Sustainable Fashion Initiative
Ocean Cleanup Technology
Green Transportation Solutions
🔧 Configuration
Environment Variables
env
# Server Configuration
PORT=4000
 
# Database
MONGODB_URI=mongodb://localhost:27017/greenfund
 
# JWT Secret
JWT_SECRET=your-secret-key
 
# Razorpay (Payment Gateway)
RAZORPAY_KEY_ID=rzp_test_your_key
RAZORPAY_KEY_SECRET=your_secret
📱 Responsive Design
The platform features a fully responsive design that works seamlessly across:

Desktop computers
Tablets
Mobile devices
🚀 Deployment
Development
bash
cd backend
npm run dev
Production
bash
cd backend
npm start
Environment Setup
Set NODE_ENV=production for production mode
Configure MongoDB connection string
Update Razorpay keys for production mode
Set up proper CORS origins
🤝 Contributing
Fork the repository
Create a feature branch
Make your changes
Test thoroughly
Submit a pull request
📝 API Endpoints
Authentication
POST /api/auth/register - User registration
POST /api/auth/login - User login
GET /api/auth/profile - Get user profile
Campaigns
GET /api/campaigns - List all campaigns
GET /api/campaigns/:id - Get campaign details
POST /api/campaigns - Create new campaign
PUT /api/campaigns/:id - Update campaign
Payments
POST /api/payments/create-order - Create payment order
POST /api/payments/verify - Verify payment
Admin
GET /api/admin/campaigns - Manage campaigns
GET /api/admin/users - Manage users
PUT /api/admin/kyc/:userId - Manage KYC
🐛 Troubleshooting
Common Issues
MongoDB Connection Failed: Falls back to JSON file storage
Payment Errors: Check Razorpay keys in .env
File Upload Issues: Ensure uploads directory exists
CORS Errors: Verify frontend URL in server configuration
📄 License
This project is licensed under the MIT License.

🙏 Acknowledgments
Razorpay for payment gateway integration
Unsplash for sample campaign images
Font Awesome for icon library
Google Fonts for typography
Built with ❤️ for sustainable crowdfunding

Feedback submit
