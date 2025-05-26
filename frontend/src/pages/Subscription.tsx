import { useRef } from "react";
import Footer from "@/components/Footer";
import SubmitToolModal, { SubmitToolModalHandle } from "@/components/SubmitBanner";

const plans = [
  {
    name: "Fast Listing",
    price: "Coming Soon",
    features: [
      "Published within 3 days",
      "With extra features",
      "Listed in 'Latest AI' on home page + Full AI List",
      "30 days in 'Aikin Selection' on Homepage",
      "Description of up to 165 characters",
      "An extra link to your product page",
      "Indexed on Google"
    ],
    cta: "Submit your website"
  },
  {
    name: "Verified Listing",
    price: "Coming Soon",
    features: [
      "All 'Fast Listing' features",
      "Verified blue check mark for trust",
      "Listed in 'Latest AI' on home page + Full AI List",
      "3 extra links to your product page",
      "You can write a text of up to 1000 words",
      "Add media: videos, audio and images",
      "60 days in 'Aikin Selection' on Homepage"
    ],
    cta: "Submit your website",
    popular: true
  },
  {
    name: "Featured Ads",
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
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container py-8 flex-1">
        <h1 className="text-3xl font-bold mb-6">Feature or Advertise Your AI Tool</h1>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <div key={idx} className={`subscription-card bg-white rounded-lg shadow p-8 border flex flex-col items-center${plan.popular ? ' shadow-lg' : ''}`}>
              {plan.popular && <div className="mb-2 text-xs font-bold text-primary">Most Popular</div>}
              <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
              <div className="text-3xl font-bold mb-1">{plan.price}</div>
              <ul className="text-left mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-green-500">✔</span> <span>{feature}</span></li>
                ))}
              </ul>
              <button className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition w-full" onClick={() => submitModalRef.current?.open('advertise')}>{plan.cta}</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <SubmitToolModal ref={submitModalRef} />
    </div>
  );
} 