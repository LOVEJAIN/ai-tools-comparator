import { Check, ArrowLeft } from "lucide-react"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/Footer"
import SubmitToolModal, { SubmitToolModalHandle } from "@/components/SubmitBanner"

const plans = [
  {
    name: "Fast Listing",
    price: "1$",
    features: [
      "Published within 3 days",
      "Listed in 'Featured Tools' on home page + Full Tools List",
      "Lifetime free",
      "Description of up to 165 characters",
      "An extra link to your product page",
      "Indexed on Google"
    ],
    cta: "Submit your website"
  },
  {
    name: "Verified Listing",
    price: "2$",
    features: [
      "All 'Fast Listing' features",
      "Verified User Experience",
      "Create Blends and Lists",
      "3 extra links to your product page",
      "You can write a text of up to 1000 words",
      "Add media: videos, audio and images",
    ],
    cta: "Submit your website",
    popular: true
  },
  {
    name: "Student Plan",
    price: "Coming Soon",
    features: [
      "AI tool displayed almost everywhere",
      "Featured duration: 3 days",
      "Gold Checkmark for Maximum Trust",
      "3 days featured on the website",
      "Featured on all categories pages & home page",
      "Featured on Full AI List and all product pages",
      "+7 days on home page among the 8 featured"
    ],
    cta: "Book a place"
  }
];

export default function Subscription() {
  const submitModalRef = useRef<SubmitToolModalHandle>(null);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      {/* Back to Home */}
      <div className="absolute top-6 left-6 z-20">
        <Button variant="ghost" className="text-gray-400 hover:text-white p-0 h-auto" onClick={() => navigate('/', { replace: true, state: { forceShowMain: true } })}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 flex-1">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Feature or Advertise Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">AI Tool</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the perfect plan to showcase your AI tool and reach your target audience
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Fast Listing */}
          <Card className="bg-slate-800 border-slate-700 text-white relative">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold mb-2">Fast Listing</CardTitle>
              <div className="text-4xl font-bold">
                1<span className="text-2xl">$</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {plans[0].features.map((feature, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white" onClick={() => submitModalRef.current?.open('advertise')}>Submit your website</Button>
            </CardFooter>
          </Card>

          {/* Verified Listing */}
          <Card className="bg-slate-800 border-slate-700 text-white relative transform scale-105">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black font-medium">
              Most Popular
            </Badge>
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold mb-2">Verified Listing</CardTitle>
              <div className="text-4xl font-bold">
                2<span className="text-2xl">$</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {plans[1].features.map((feature, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => submitModalRef.current?.open('advertise')}>Submit your website</Button>
            </CardFooter>
          </Card>

          {/* Student Plan */}
          <Card className="bg-slate-800 border-slate-700 text-white relative">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold mb-2">Student Plan</CardTitle>
              <div className="text-2xl font-bold text-gray-400">Coming Soon</div>
            </CardHeader>
            <CardContent className="space-y-4">
              {plans[2].features.map((feature, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white" disabled>
                Book a place
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-8">
            Transform your AI tool's visibility with our comprehensive platform that brings together cutting-edge
            promotion, seamless integration, and unlimited growth possibilities.
          </p>
        </div>
      </div>
      <Footer />
      <SubmitToolModal ref={submitModalRef} />
    </div>
  )
} 