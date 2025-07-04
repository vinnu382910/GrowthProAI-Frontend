# GrowthProAI - Local Business Dashboard (Pure React.js)

A React.js frontend application built with pure JavaScript (no TypeScript) that connects to the GrowthProAI backend API to display local business insights including Google ratings, reviews, and AI-generated SEO headlines.

## 🚀 Features

### Frontend Features
- **Pure React.js**: Built with JavaScript (.js files) - no TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Business Information Form**: Input fields for business name and location with validation
- **Real-time Data Display**: Shows Google rating, reviews, and SEO headlines from your backend API
- **Interactive Headlines**: Regenerate SEO headlines with a single click
- **Loading States**: Smooth loading indicators and transitions
- **Error Handling**: User-friendly error messages and notifications
- **Form Validation**: Client-side validation with real-time feedback
- **Toast Notifications**: Success and error notifications

### API Integration
- **Backend Connection**: Connects to your deployed backend at `https://growthproai-backend.onrender.com`
- **POST /api/business-data**: Fetches business insights
- **GET /api/regenerate-headline**: Generates new SEO headlines
- **CORS Support**: Seamless cross-origin requests

## 🛠️ Tech Stack

- **Frontend**: React 18 (JavaScript only)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **HTTP Client**: Native Fetch API
- **Build Tool**: Create React App
- **No TypeScript**: Pure JavaScript implementation

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Your backend API running at `https://growthproai-backend.onrender.com`

### Quick Start

1. **Create React App (JavaScript)**
   \`\`\`bash
   npx create-react-app growthproai-dashboard
   cd growthproai-dashboard
   \`\`\`

2. **Install Tailwind CSS**
   \`\`\`bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   \`\`\`

3. **Install Additional Dependencies**
   \`\`\`bash
   npm install lucide-react
   \`\`\`

4. **Replace the generated files with the provided code**
   - Copy all the files from this project
   - Make sure to update the API_BASE_URL if your backend is deployed elsewhere

5. **Run the development server**
   \`\`\`bash
   npm start
   \`\`\`

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Backend API Configuration
The app is configured to connect to your backend API:

\`\`\`javascript
const API_BASE_URL = 'https://growthproai-backend.onrender.com';
\`\`\`

If you need to change the backend URL, update this constant in `src/App.js`.

### API Endpoints Used
1. **POST /api/business-data**
   - Sends: `{ "name": "Business Name", "location": "Location" }`
   - Receives: `{ "rating": 4.3, "reviews": 127, "headline": "SEO Headline" }`

2. **GET /api/regenerate-headline**
   - Query params: `?name=Business&location=Location`
   - Receives: `{ "headline": "New SEO Headline" }`

## 🎨 UI/UX Features

### Design Elements
- **Gradient Background**: Modern blue gradient design
- **Card-based Layout**: Clean separation of form and results
- **Responsive Grid**: Adapts to mobile, tablet, and desktop
- **Interactive Elements**: Hover effects and smooth transitions
- **Loading Animations**: Spinners during API calls
- **Toast Notifications**: Slide-in notifications for user feedback

### Mobile Responsiveness
- **Mobile-first Design**: Optimized for mobile devices
- **Responsive Breakpoints**: 
  - Mobile: 320px+
  - Tablet: 768px+
  - Desktop: 1024px+
- **Touch-friendly**: Large buttons and touch targets

## 📱 User Flow

1. **Enter Business Information**: User fills in business name and location
2. **Form Validation**: Real-time validation with error messages
3. **Submit Form**: Click "Get Business Insights" to fetch data
4. **Display Results**: Shows rating, reviews, and SEO headline
5. **Regenerate Headlines**: Click to get new AI-generated headlines
6. **Visual Feedback**: Loading states and success/error notifications

## 🚀 Deployment Options

### Netlify (Recommended for React)
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Or connect your GitHub repository to Netlify

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   \`\`\`json
   "homepage": "https://yourusername.github.io/growthproai-dashboard",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   \`\`\`
3. Run: `npm run deploy`

## 🔍 Project Structure

\`\`\`
src/
├── App.js                  # Main application component (JavaScript)
├── App.css                 # Component-specific styles
├── index.js               # React DOM entry point (JavaScript)
├── index.css              # Global styles and Tailwind imports
└── public/
    ├── index.html         # HTML template
    └── manifest.json      # PWA manifest
\`\`\`

## 🎯 Key Features Implemented

✅ **Pure JavaScript**: No TypeScript - all .js files
✅ **React Hooks**: Modern React with useState for state management
✅ **Tailwind CSS**: Responsive design with utility classes
✅ **API Integration**: Connects to your existing backend
✅ **Form Validation**: Client-side validation with error handling
✅ **Loading States**: Smooth UX with loading indicators
✅ **Error Handling**: Comprehensive error handling and user feedback
✅ **Mobile Responsive**: Works perfectly on all device sizes
✅ **Toast Notifications**: User feedback for all actions
✅ **Modern UI**: Clean, professional interface

## 🔧 JavaScript-Specific Features

### State Management
\`\`\`javascript
const [businessData, setBusinessData] = useState(null)
const [isLoading, setIsLoading] = useState(false)
const [errors, setErrors] = useState({})
\`\`\`

### Event Handlers
\`\`\`javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  // Handle form submission
}
\`\`\`

### API Calls
\`\`\`javascript
const response = await fetch(\`\${API_BASE_URL}/api/business-data\`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: businessName, location: location })
})
\`\`\`

## 🐛 Troubleshooting

### CORS Issues
If you encounter CORS issues, make sure your backend has CORS enabled for your frontend domain.

### API Connection Issues
1. Check if your backend is running at the correct URL
2. Verify the API endpoints are working with a tool like Postman
3. Check browser console for detailed error messages

### Build Issues
1. Make sure all dependencies are installed: `npm install`
2. Clear node_modules and reinstall: `rm -rf node_modules && npm install`
3. Check for JavaScript syntax errors: `npm run build`

## 📄 License

This project is created for the GrowthProAI Full Stack Intern Assignment.

---

**Built with ❤️ for GrowthProAI**

**Backend by**: Vinay Kalva  
**Frontend**: Pure React.js + Tailwind CSS Integration (JavaScript Only)