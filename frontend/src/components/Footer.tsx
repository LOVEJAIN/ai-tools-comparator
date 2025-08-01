import React, { useState, useEffect, Suspense } from "react";
import { useData } from "@/contexts/DataContext";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

function AnimatedBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} style={{ width: '100%', height: '100%' }}>
      <ambientLight intensity={0.1} />
      <directionalLight position={[10, 10, 5]} intensity={0.3} />
      <Suspense fallback={null}>
        <Sphere args={[1, 100, 200]} scale={2.5} position={[-2, -1, -3]}>
          <MeshDistortMaterial color="#111216" attach="material" distort={0.3} speed={1.5} roughness={0.4} />
        </Sphere>
        <Sphere args={[1, 100, 200]} scale={1.8} position={[3, 1, -2]}>
          <MeshDistortMaterial color="#18181b" attach="material" distort={0.4} speed={2} roughness={0.6} />
        </Sphere>
        <Sphere args={[1, 100, 200]} scale={1.2} position={[0, -2, -1]}>
          <MeshDistortMaterial color="#23272f" attach="material" distort={0.2} speed={1} roughness={0.3} />
        </Sphere>
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}

const faqs = [
  { q: "How do I submit my AI tool?", a: "Simply click the \"Submit AI Tool\" button at the top of the page and complete the submission form." },
  { q: "Is listing free?", a: "Yes, a basic listing is free. For added visibility, we offer paid options like featured and verified listings." },
  { q: "How are ratings calculated?", a: "Ratings are calculated based on user reviews and community feedback to ensure authenticity and relevance." },
  { q: "How can I contact support?", a: "Email us at adminuser@aikin.in" },
];

const API_BASE_URL = "https://backend-service-production-3bc1.up.railway.app";

const Footer: React.FC = () => {
  const { user } = useData();
  // Rate us state
  const [rating, setRating] = useState<number>(Number(localStorage.getItem('siteRating')) || 0);
  const [hover, setHover] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(!!localStorage.getItem('siteRating'));
  const [rateError, setRateError] = useState<string>("");

  // Contact us state
  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const [contactSent, setContactSent] = useState(false);
  const [contactError, setContactError] = useState<string>("");

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Review carousel state
  const [reviewIdx, setReviewIdx] = useState(0);

  // Version
  const version = "1.5.0";

  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    setSubmitted(!!localStorage.getItem('siteRating'));
  }, [user]);

  // Fetch real user reviews from backend
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/site-ratings`)
      .then(res => res.json())
      .then(data => {
        // Filter out reviews without a comment, sort by id descending, then take latest 10
        const filtered = data.filter(r => r.comment && r.comment.trim().length > 0);
        const sorted = filtered.sort((a, b) => (b.id || 0) - (a.id || 0));
        setUserReviews(sorted.slice(0, 10));
      })
      .catch(() => setUserReviews([]));
  }, []);

  // Handle rating submit
  const handleRateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRateError("");
    if (rating > 0) {
      try {
        await fetch(`${API_BASE_URL}/api/site-ratings`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: user ? user.username : null,
            email: user ? user.email : null,
            rating,
            comment
          })
        });
        localStorage.setItem('siteRating', String(rating));
        setSubmitted(true);
      } catch (err) {
        setRateError("Failed to submit rating. Please try again later.");
      }
    }
  };

  // Handle contact submit
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactError("");
    try {
      await fetch(`${API_BASE_URL}/api/contact-messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact)
      });
      setContactSent(true);
      setContact({ name: '', email: '', message: '' });
    } catch (err) {
      setContactError("Failed to send message. Please try again later.");
    }
  };

  // Helper to get display name for a review
  const getReviewerName = (review) => {
    if (review.email) return review.email;
    if (review.name) return review.name;
    if (review.userId) return `User ${review.userId}`;
    return "Anonymous";
  };

  // Helper to trim long reviews and show '...more'
  const getTrimmedReview = (review) => {
    const maxLen = 50;
    if (!review?.comment) return '';
    if (review.comment.length > maxLen) {
      return review.comment.slice(0, maxLen) + '...more';
    }
    return review.comment;
  };

  return (
    <footer className="relative min-h-[500px] overflow-hidden bg-gray-900">
      {/* 3D Animated Background */}
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
      </div>
      {/* Content Overlay */}
      <div className="relative z-10 p-6 min-h-[500px]">
        <div className="container mx-auto px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          {/* Contact Us */}
          <div className="rounded-xl shadow bg-gray-800/80 backdrop-blur-sm p-8 min-w-[280px] max-w-[400px] border border-gray-700 mb-2">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-emerald-500/20 rounded-lg">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7"/><path d="M21 10.5V17a2 2 0 0 1-2 2h-7"/><path d="M21 10.5l-9 6.5-9-6.5"/></svg>
              </div>
              <h3 className="font-bold text-lg text-emerald-400">Contact Us</h3>
            </div>
            {contactSent ? (
              <div className="text-green-400 text-sm mb-4">Thank you! We'll get back to you soon.</div>
            ) : (
              <form className="mb-2" onSubmit={handleContactSubmit}>
                <input className="w-full mb-2 px-2 py-1 border rounded bg-gray-700/50 border-gray-600 text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-400/30" type="text" placeholder="Your Name" value={contact.name} onChange={e => setContact({ ...contact, name: e.target.value })} required />
                <input className="w-full mb-2 px-2 py-1 border rounded bg-gray-700/50 border-gray-600 text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-400/30" type="email" placeholder="Your Email" value={contact.email} onChange={e => setContact({ ...contact, email: e.target.value })} required />
                <textarea className="w-full mb-2 px-2 py-1 border rounded bg-gray-700/50 border-gray-600 text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-400/30" placeholder="Message" value={contact.message} onChange={e => setContact({ ...contact, message: e.target.value })} required />
                {contactError && <div className="text-red-400 text-xs mb-2">{contactError}</div>}
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-1 rounded w-full transition" type="submit">Send</button>
              </form>
            )}
          </div>
          {/* Rate Us */}
          <div className="rounded-xl shadow bg-gray-800/80 backdrop-blur-sm p-8 min-w-[280px] max-w-[400px] border border-gray-700 mb-2">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-amber-500/20 rounded-lg">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
              <h3 className="font-bold text-lg text-amber-400">Rate Us</h3>
            </div>
            {submitted ? (
              <div className="text-green-400 text-sm">Thank you for rating us!</div>
            ) : (
              <form onSubmit={e => {
                e.preventDefault();
                if (!user) {
                  setRateError("Please log in to submit a rating.");
                  return;
                }
                handleRateSubmit(e);
              }} className="flex flex-col gap-2">
                <div className="flex gap-1 mb-1 justify-center">
                  {[1,2,3,4,5].map(star => (
                    <span
                      key={star}
                      className={`cursor-pointer text-3xl transition ${star <= (hover || rating) ? 'text-amber-400 scale-110' : 'text-gray-600'}`}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHover(star)}
                      onMouseLeave={() => setHover(0)}
                    >★</span>
                  ))}
                </div>
                <input className="w-full px-2 py-1 border rounded bg-gray-700/50 border-gray-600 text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-amber-400/30" type="text" placeholder="Leave a comment (optional)" value={comment} onChange={e => setComment(e.target.value)} />
                {rateError && <div className="text-red-400 text-xs mb-2">{rateError}</div>}
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-1 rounded w-full transition" type="submit">Submit</button>
              </form>
            )}
          </div>
          {/* About Us */}
          <div className="rounded-xl shadow bg-gray-800/80 backdrop-blur-sm p-8 min-w-[280px] max-w-[400px] border border-gray-700 mb-2 flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 bg-cyan-500/20 rounded-lg">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
                </div>
                <h3 className="font-bold text-lg text-cyan-400">About Us</h3>
              </div>
              <div className="text-sm text-gray-300 mb-2">At Aikin, we make it easy to find the right AI solution. As a leading directory of top-rated AI tools, we help individuals and businesses discover, compare, and review the latest technologies—all in one place. From automation and analytics to creative AI, Aikin guides you to the best fit for your needs.</div>
            </div>
            <div className="text-xs text-gray-400 mt-2 flex justify-between">
              <div>Version: <span className="font-mono">2.5.0</span></div>
              <div>Made in India 🇮🇳</div>
            </div>
          </div>
          {/* FAQ */}
          <div className="rounded-xl shadow bg-gray-800/80 backdrop-blur-sm p-8 min-w-[280px] max-w-[400px] border border-gray-700 mb-2">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
              </div>
              <h3 className="font-bold text-lg text-purple-400">FAQ</h3>
            </div>
            <div className="divide-y divide-gray-700">
              {faqs.map((faq, i) => (
                <div key={i} className="py-2">
                  <button className="font-semibold text-left w-full flex items-center gap-2 text-gray-200" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{faq.q}</span>
                    <svg className={`w-4 h-4 ml-auto transition-transform text-gray-400 ${openFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
                  </button>
                  {openFaq === i && <div className="text-sm text-gray-400 mt-1 pl-2">{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Socials and User Reviews */}
        <div className="flex justify-center mb-8">
  <div className="bg-gray-800/90 backdrop-blur-sm border border-gray-700 shadow-xl w-full max-w-[72rem] rounded-xl p-4 flex flex-col items-center h-auto min-h-[280px]">
    <div className="flex items-center justify-center gap-2 mb-3">
      <div className="p-1 bg-pink-500/20 rounded-lg">
        <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z"/>
        </svg>
      </div>
      <h2 className="text-xl font-bold text-pink-400">User Reviews</h2>
    </div>
    <div className="text-4xl text-pink-300 mb-2">“</div>
    <p className="text-gray-300 italic text-base mb-3 max-w-xl mx-auto text-center line-clamp-2 min-h-[48px]">
      {userReviews[reviewIdx]?.comment || "No comment provided."}
    </p>
    <p className="text-gray-400 text-sm mb-4">
      - {userReviews[reviewIdx] ? getReviewerName(userReviews[reviewIdx]) : ""}
    </p>
    <div className="flex items-center justify-center gap-4">
      <button className="text-gray-400 hover:text-gray-200" onClick={() => setReviewIdx((reviewIdx - 1 + userReviews.length) % userReviews.length)}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
      </button>
      <div className="flex gap-2">
        {userReviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setReviewIdx(idx)}
            className={`w-2 h-2 rounded-full transition-colors ${idx === reviewIdx ? "bg-pink-400" : "bg-gray-600"}`}
          />
        ))}
      </div>
      <button className="text-gray-400 hover:text-gray-200" onClick={() => setReviewIdx((reviewIdx + 1) % userReviews.length)}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
      </button>
    </div>
  </div>
</div>
        <div className="flex flex-col items-center justify-center mt-8">
  <div className="flex gap-4 mb-4">
    <a href="https://x.com/aikin_in" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 animate-float" style={{ animationDelay: '0s' }}>
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.7-.02-1.36-.21-1.94-.53v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 24 4.59a8.36 8.36 0 0 1-2.54.7z"/></svg>
    </a>
    <a href="https://www.linkedin.com/company/aikin-in/about/" target="_blank" rel="noopener noreferrer" className="bg-blue-700 hover:bg-blue-800 text-white rounded-full p-2 animate-float" style={{ animationDelay: '0.3s' }}>
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"/></svg>
    </a>
  </div>
  <p className="text-gray-400 text-sm mb-2">© 2025 Aikin. All rights reserved.</p>
  <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
</div>
      </div>
    </footer>
  );
};

export default Footer; 