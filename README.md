# 🚀 GrowthProAI – Local Business Dashboard (React.js + Tailwind CSS)

A responsive frontend web application built using **pure React.js** (JavaScript only, no TypeScript) that allows users to simulate local business insights such as Google-style ratings, reviews, and AI-generated SEO headlines.

This project is part of the **GrowthProAI Full Stack Intern Assignment**.

---

## 🔍 Overview

This dashboard allows users to:
- Enter a **business name** and **location**
- Get simulated **Google rating**, **number of reviews**, and an **AI-generated SEO headline**
- Regenerate the SEO headline on demand

It integrates seamlessly with the deployed backend hosted at:  
👉 [`https://growthproai-backend.onrender.com`](https://growthproai-backend.onrender.com)

---

## ✨ Features

### ✅ Core Functionalities
- **Pure React.js** (JavaScript only – no TypeScript)
- **Tailwind CSS** for responsive UI
- **Lucide Icons** for intuitive visuals
- **API Integration** with your deployed backend
- **Form validation** with real-time feedback
- **Toast notifications** for success and error handling
- **Loading spinners** during async calls

### ✅ API Integration
- `POST /api/business-data`: Fetch business info (rating, reviews, headline)
- `GET /api/regenerate-headline`: Regenerate a new AI-style SEO headline

---

## ⚙️ Tech Stack

| Tool             | Purpose                          |
|------------------|----------------------------------|
| React 18         | Frontend Framework (JavaScript)  |
| Tailwind CSS     | Utility-first CSS styling        |
| Lucide React     | Icon library                     |
| Fetch API        | API requests (native JS)         |
| Create React App | Project scaffold                 |

---

## 📁 Folder Structure

```

growthproai-frontend/
├── public/
│   └── index.html
├── src/
│   ├── App.js           # Main application component
│   ├── App.css          # Custom styles (if any)
│   ├── index.js         # React DOM entry
│   ├── index.css        # Tailwind CSS imports
├── tailwind.config.js   # Tailwind setup
├── postcss.config.js    # PostCSS plugins
├── package.json
└── README.md

````

---

## 📦 Installation & Setup

### ✅ Prerequisites
- Node.js `v16+`
- npm or yarn
- Access to backend API (`https://growthproai-backend.onrender.com`)

---

### 🧱 Step-by-Step Setup

1. **Create the React app**
```bash
npx create-react-app growthproai-frontend
cd growthproai-frontend
````

2. **Install Tailwind CSS**

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. **Configure Tailwind**
   Update `tailwind.config.js`:

```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Edit `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. **Install Lucide Icons**

```bash
npm install lucide-react
```

5. **Replace default files** with your own code (App.js, CSS files, etc.)

6. **Run the project**

```bash
npm start
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🔗 API Details

### `POST /api/business-data`

* **Send:**

```json
{
  "name": "Cake & Co",
  "location": "Mumbai"
}
```

* **Receive:**

```json
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
}
```

### `GET /api/regenerate-headline?name=...&location=...`

* **Receive:**

```json
{
  "headline": "New AI-generated headline"
}
```

---

## 🖼️ UI/UX Highlights

* 📱 Mobile-first responsive design
* 🎨 Modern gradient backgrounds and clean layout
* 🧠 AI-style simulated data with real-time UI updates
* 🔄 Seamless transitions and feedback
* ✅ Accessible and touch-friendly

---

## 📱 User Flow

1. User enters **Business Name** and **Location**
2. Form validates input in real-time
3. On submit, sends POST request and displays:

   * ⭐ Google-style rating
   * 👥 Number of reviews
   * ✨ SEO headline
4. User can regenerate headline using a button (GET request)
5. Visual feedback shown for loading, errors, and success

---

## 🚀 Deployment Options

### ▶ Netlify

```bash
npm run build
```

* Drag and drop `build/` folder to Netlify UI
* Or connect your GitHub repo for CI/CD

### ▶ Vercel

```bash
npm install -g vercel
vercel
```

### ▶ GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:

```json
"homepage": "https://yourusername.github.io/growthproai-frontend",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then:

```bash
npm run deploy
```

---

## 🧠 JavaScript-Specific Features

```js
const [businessData, setBusinessData] = useState(null);
const [errors, setErrors] = useState({});
const [isLoading, setIsLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  // form validation and API call
};
```

API Request:

```js
const response = await fetch(`${API_BASE_URL}/api/business-data`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: businessName, location }),
});
```

---

## 🐛 Troubleshooting

| Issue          | Solution                                          |
| -------------- | ------------------------------------------------- |
| CORS Errors    | Ensure backend has CORS enabled                   |
| API Failure    | Double-check backend is live and URLs are correct |
| UI Not Loading | Check browser console for errors                  |
| Build Issues   | Try `rm -rf node_modules && npm install`          |

---

## 📄 License

This project is created for the **GrowthProAI Full Stack Intern Assignment**.

> 🔧 Backend by: **Vinay Kalva**
> 🎨 Frontend: **Pure React.js + Tailwind CSS**

---

### 💙 Built with passion for local business empowerment!
