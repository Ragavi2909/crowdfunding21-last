🌱 GreenFund – Crowdfunding Platform

A modern, full-featured crowdfunding platform built using Node.js, Express, and Vanilla JavaScript, designed specifically for eco-friendly and sustainable projects.

🚀 Features
🔹 Core Functionality
Campaign Management – Create, browse, and manage campaigns
Secure Payments – Razorpay integration (test mode supported)
User Authentication – Registration & login system
Admin Dashboard – Manage users and campaigns
KYC Verification – Aadhaar-based verification
Real-time Updates – Live campaign progress tracking
🔹 Technical Features
Dual Storage – MongoDB + JSON fallback
File Uploads – Multer-based image handling
JWT Authentication – Secure token-based login
Responsive Design – Mobile-first UI
RESTful API – Clean backend architecture
🏗️ Project Structure
crowdfunding21-last/
│
├── backend/                 # Node.js Express server
│   ├── src/
│   │   ├── server.js        # Main server
│   │   └── mongodb.js       # DB connection
│   ├── data/                # JSON fallback storage
│   ├── models/              # Data models
│   ├── config/              # Config files
│   └── uploads/             # Uploaded files
│
├── crowdfunding/            # Frontend
│   ├── index.html
│   ├── campaigns.html
│   ├── campaign-detail.html
│   ├── start-campaign.html
│   ├── login.html
│   ├── register.html
│   ├── admin-dashboard.html
│   ├── kyc-verification.html
│   ├── my-account.html
│   ├── styles.css
│   ├── script.js
│   └── api.js
│
└── RAZORPAY_TEST_GUIDE.md
🛠️ Technology Stack
⚙️ Backend
Node.js
Express.js
MongoDB (Mongoose)
JSON (fallback storage)
JWT (authentication)
bcryptjs (password hashing)
Multer (file uploads)
Razorpay (payments)
dotenv (env management)
🎨 Frontend
Vanilla JavaScript
CSS3 (animations & styling)
Font Awesome (icons)
Google Fonts (Inter font)
🚀 Getting Started
✅ Prerequisites
Node.js (v14+)
npm / yarn
MongoDB (optional)
📦 Installation
1. Clone Repository
git clone <repository-url>
cd crowdfunding21-last
2. Install Backend Dependencies
cd backend
npm install
3. Setup Environment Variables
cp .env.example .env
# Edit .env file
4. Run Server
npm start
# or
npm run dev
5. Open in Browser
http://localhost:4000
💳 Payment Integration (Razorpay)
🔧 Quick Setup
Get test keys from: https://razorpay.com
Update .env:
RAZORPAY_KEY_ID=rzp_test_YOUR_KEY
RAZORPAY_KEY_SECRET=YOUR_SECRET
Install package:
npm install razorpay
Use test cards for transactions
🔐 Authentication & Security
JWT-based authentication
Password hashing (bcryptjs)
KYC verification system
Payment signature verification
CORS protection
📊 Key Features Overview
👤 User Features
Browse & search campaigns
Create campaigns
Donate securely
Track donations
Personal dashboard
🛡️ Admin Features
Campaign approval system
User management
KYC verification control
Analytics & reporting
📢 Campaign Features
Progress tracking
Image uploads
Goal & deadline management
Backer tracking
Status control (pending/approved/rejected)
🎯 Sample Campaigns
🌿 Community Garden Project
🔋 Solar Power Bank
👕 Sustainable Fashion
🌊 Ocean Cleanup Tech
🚲 Green Transportation
⚙️ Configuration
# Server
PORT=4000

# Database
MONGODB_URI=mongodb://localhost:27017/greenfund

# JWT
JWT_SECRET=your-secret-key

# Razorpay
RAZORPAY_KEY_ID=rzp_test_key
RAZORPAY_KEY_SECRET=secret
📱 Responsive Design

Optimized for:

💻 Desktop
📱 Mobile
📟 Tablets
🚀 Deployment
🔹 Development
npm run dev
🔹 Production
npm start
🔧 Setup Notes
Set NODE_ENV=production
Configure MongoDB
Use live Razorpay keys
Set proper CORS origins
📝 API Endpoints
🔐 Authentication
POST /api/auth/register
POST /api/auth/login
GET /api/auth/profile
📢 Campaigns
GET /api/campaigns
GET /api/campaigns/:id
POST /api/campaigns
PUT /api/campaigns/:id
💳 Payments
POST /api/payments/create-order
POST /api/payments/verify
🛡️ Admin
GET /api/admin/campaigns
GET /api/admin/users
PUT /api/admin/kyc/:userId
🐛 Troubleshooting
❌ MongoDB Error → Falls back to JSON
❌ Payment Issues → Check Razorpay keys
❌ Upload Errors → Verify /uploads folder
❌ CORS Issues → Check backend config
🤝 Contributing
Fork the repo
Create a new branch
Make changes
Test properly
Submit PR
📄 License

Licensed under MIT License

🙏 Acknowledgments
Razorpay (payments)
Unsplash (images)
Font Awesome (icons)
Google Fonts (typography)
❤️ Built For

Promoting sustainable crowdfunding and supporting eco-friendly initiatives.
