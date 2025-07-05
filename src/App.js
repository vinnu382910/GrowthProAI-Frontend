import { useState } from "react"
import { Star, MapPin, Users, Sparkles, Building2 } from "lucide-react"
import "./App.css"

function App() {
  const [businessName, setBusinessName] = useState("")
  const [location, setLocation] = useState("")
  const [businessData, setBusinessData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isRegenerating, setIsRegenerating] = useState(false)
  const [errors, setErrors] = useState({})
  const [notification, setNotification] = useState(null)

  const API_BASE_URL = "https://growthproai-backend.onrender.com"// http://localhost:5000

  const showNotification = (message, type) => {
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 4000)
  }

  const validateForm = () => {
    const newErrors = {}

    if (!businessName.trim()) {
      newErrors.name = "Business name is required"
    }

    if (!location.trim()) {
      newErrors.location = "Location is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      showNotification("Please fill in all required fields.", "error")
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch(`${API_BASE_URL}/api/business-data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: businessName,
          location: location,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to fetch business data")
      }

      const data = await response.json()
      setBusinessData({data, businessName, location});
      console.log(businessData)
      showNotification("Business data loaded successfully!", "success")
    } catch (error) {
      console.error("Error fetching business data:", error)
      showNotification("Failed to load business data. Please try again.", "error")
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegenerateHeadline = async () => {
    if (!businessData) return

    setIsRegenerating(true)

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/regenerate-headline?name=${encodeURIComponent(businessData.businessName)}&location=${encodeURIComponent(businessData.location)}`,
      )

      if (!response.ok) {
        throw new Error("Failed to regenerate headline")
      }

      const data = await response.json()
      setBusinessData((prev) =>
        prev
          ? {
              ...prev,
              data: {
                ...prev.data,
                headline: data.headline,
              },
            }
          : null
      );

      showNotification("Your SEO headline has been regenerated!", "success")
    } catch (error) {
      console.error("Error regenerating headline:", error)
      showNotification("Failed to regenerate headline. Please try again.", "error")
    } finally {
      setIsRegenerating(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      {/* Notification */}
      {notification && (
        <div
          className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 ${
            notification.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
          }`}
        >
          <div className="flex items-center gap-2">
            {notification.type === "success" ? (
              <div className="w-5 h-5 rounded-full bg-white bg-opacity-20 flex items-center justify-center">✓</div>
            ) : (
              <div className="w-5 h-5 rounded-full bg-white bg-opacity-20 flex items-center justify-center">✕</div>
            )}
            <span className="font-medium">{notification.message}</span>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Building2 className="h-8 w-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900">GrowthProAI</h1>
          </div>
          <p className="text-lg text-gray-600">Local Business Dashboard</p>
          <p className="text-sm text-gray-500 mt-2">Discover your business insights and optimize your SEO presence</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Input Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2 mb-2">
                <Building2 className="h-5 w-5 text-indigo-600" />
                Business Information
              </h2>
              <p className="text-gray-600 text-sm">Enter your business details to get started</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                  Business Name *
                </label>
                <input
                  id="businessName"
                  type="text"
                  placeholder="e.g., Cake & Co"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location *
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="e.g., Mumbai"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                    errors.location ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.location && <p className="text-sm text-red-500">{errors.location}</p>}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Loading...
                  </div>
                ) : (
                  "Get Business Insights"
                )}
              </button>
            </form>
          </div>

          {/* Display Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-yellow-500" />
                Business Insights
              </h2>
              <p className="text-gray-600 text-sm">Your Google Business profile overview</p>
            </div>

            {businessData ? (
              <div className="space-y-6">
                {/* Business Header */}
                <div className="text-center pb-4 border-b border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900">{businessData.businessName}</h3>
                  <p className="text-gray-600 flex items-center justify-center gap-1 mt-1">
                    <MapPin className="h-4 w-4" />
                    {businessData.location}
                  </p>
                </div>

                {/* Rating and Reviews */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <Star className="h-5 w-5 text-yellow-500 fill-current" />
                      <span className="text-2xl font-bold text-gray-900">{businessData.data.rating}</span>
                    </div>
                    <p className="text-sm text-gray-600">Google Rating</p>
                  </div>

                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <Users className="h-5 w-5 text-blue-500" />
                      <span className="text-2xl font-bold text-gray-900">{businessData.data.reviews}</span>
                    </div>
                    <p className="text-sm text-gray-600">Reviews</p>
                  </div>
                </div>

                {/* SEO Headline */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-indigo-600" />
                    <h4 className="font-semibold text-gray-900">AI-Generated SEO Headline</h4>
                  </div>
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <p className="text-gray-800 font-medium leading-relaxed">"{businessData.data.headline}"</p>
                  </div>
                  <button
                    onClick={handleRegenerateHeadline}
                    disabled={isRegenerating}
                    className="w-full border border-indigo-200 text-indigo-700 py-2 px-4 rounded-md hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    {isRegenerating ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-indigo-600"></div>
                        Regenerating...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        Regenerate SEO Headline with AI
                      </div>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Building2 className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Enter your business information to see insights</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Powered by GrowthProAI • Helping local businesses grow online</p>
        </div>
      </div>
    </div>
  )
}

export default App
