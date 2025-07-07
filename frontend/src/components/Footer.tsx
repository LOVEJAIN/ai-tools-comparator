import React, { useState, useEffect } from "react";
import { useData } from "@/contexts/DataContext";
import { Mail, Star, Info, HelpCircle, MessageCircle, Twitter, Linkedin, Github } from "lucide-react";

const userReviews = [
  { name: "Naman Goyal", review: "An excellent directory of AI tools—truly helped accelerate my startup's growth." },
  { name: "Shubhangi Tyagi", review: "Impressed by the clean interface and the wide range of AI tools available." },
  { name: "P Utkarsh", review: "Found the ideal AI solution for my business thanks to this platform." },
  { name: "Iti Jain", review: "User reviews and ratings made it easy to choose the right tool with confidence." },
];

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

  useEffect(() => {
    setSubmitted(!!localStorage.getItem('siteRating'));
  }, [user]);

  // Handle rating submit
  const handleRateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRateError("");
    if (rating > 0) {
      try {
        await fetch(`${API_BASE_URL}/api/site-ratings`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: null, rating, comment })
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

  return (
    <footer className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-teal-400/30 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-cyan-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-emerald-300/25 rounded-full blur-md animate-bounce delay-500"></div>
        <div className="absolute top-20 left-1/3 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 transform rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-40 right-1/4 w-6 h-6 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 left-20 w-4 h-16 bg-gradient-to-b from-emerald-300 to-transparent transform rotate-12 animate-pulse"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Contact Us Card */}
          <div className="group perspective-1000">
            <div className="relative preserve-3d transition-all duration-500 hover:rotate-y-12 hover:rotate-x-6">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-2xl blur-xl transform translate-z-4"></div>
              <div className="relative bg-gradient-to-br from-white/95 to-emerald-50/90 backdrop-blur-lg rounded-2xl p-6 border border-emerald-200/50 shadow-2xl transform-gpu">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg">Contact Us</h3>
                </div>
                {contactSent ? (
                  <div className="text-green-600 text-sm mb-4">Thank you! We'll get back to you soon.</div>
                ) : (
                  <form className="mb-2" onSubmit={handleContactSubmit}>
                    <input className="w-full mb-2 px-2 py-1 border rounded focus:ring-2 focus:ring-primary/30" type="text" placeholder="Your Name" value={contact.name} onChange={e => setContact({ ...contact, name: e.target.value })} required />
                    <input className="w-full mb-2 px-2 py-1 border rounded focus:ring-2 focus:ring-primary/30" type="email" placeholder="Your Email" value={contact.email} onChange={e => setContact({ ...contact, email: e.target.value })} required />
                    <textarea className="w-full mb-2 px-2 py-1 border rounded focus:ring-2 focus:ring-primary/30" placeholder="Message" value={contact.message} onChange={e => setContact({ ...contact, message: e.target.value })} required />
                    {contactError && <div className="text-red-500 text-xs mb-2">{contactError}</div>}
                    <button className="bg-primary text-white px-4 py-1 rounded w-full hover:bg-primary/90 transition" type="submit">Send</button>
                  </form>
                )}
              </div>
            </div>
          </div>
          {/* Rate Us Card */}
          <div className="group">
            <div className="relative transform transition-all duration-500 hover:scale-105 hover:-translate-y-4">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-white/95 to-yellow-50/90 backdrop-blur-lg rounded-2xl p-6 border border-yellow-200/50 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                    <Star className="w-5 h-5 text-white fill-white" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg">Rate Us</h3>
                </div>
                {submitted ? (
                  <div className="text-green-600 text-sm">Thank you for rating us!</div>
                ) : (
                  <form onSubmit={e => {
                    e.preventDefault();
                    if (!user) {
                      setRateError("Please log in to submit a rating.");
                      return;
                    }
                    handleRateSubmit(e);
                  }} className="flex flex-col gap-2">
                    <div className="flex gap-1 mb-1">
                      {[1,2,3,4,5].map(star => (
                        <span
                          key={star}
                          className={`cursor-pointer text-3xl transition ${star <= (hover || rating) ? 'text-yellow-400 scale-110' : 'text-gray-300'}`}
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHover(star)}
                          onMouseLeave={() => setHover(0)}
                        >★</span>
                      ))}
                    </div>
                    <input className="w-full px-2 py-1 border rounded focus:ring-2 focus:ring-primary/30" type="text" placeholder="Leave a comment (optional)" value={comment} onChange={e => setComment(e.target.value)} />
                    {rateError && <div className="text-red-500 text-xs mb-2">{rateError}</div>}
                    <button className="bg-primary text-white px-4 py-1 rounded w-full hover:bg-primary/90 transition" type="submit">Submit</button>
                  </form>
                )}
              </div>
            </div>
          </div>
          {/* About Us Card */}
          <div className="group">
            <div className="relative transform transition-all duration-700 hover:scale-105 hover:rotate-1">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/30 to-cyan-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
              <div className="relative bg-gradient-to-br from-white/95 to-teal-50/90 backdrop-blur-lg rounded-2xl p-6 border border-teal-200/50 shadow-2xl overflow-hidden">
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                    <Info className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg">About Us</h3>
                </div>
                <div className="text-sm text-gray-700 mb-2">At Aikin, we make it easy to find the right AI solution. As a leading directory of top-rated AI tools, we help individuals and businesses discover, compare, and review the latest technologies—all in one place. From automation and analytics to creative AI, Aikin guides you to the best fit for your needs.</div>
              </div>
            </div>
          </div>
          {/* FAQ Card */}
          <div className="group">
            <div className="relative transform transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-pink-500/30 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-white/95 to-purple-50/90 backdrop-blur-lg rounded-2xl p-6 border border-purple-200/50 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                    <HelpCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg">FAQ</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {faqs.map((faq, i) => (
                    <div key={i} className="py-2">
                      <button className="font-semibold text-left w-full flex items-center gap-2" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                        <span>{faq.q}</span>
                        <svg className={`w-4 h-4 ml-auto transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
                      </button>
                      {openFaq === i && <div className="text-sm text-muted-foreground mt-1 pl-2">{faq.a}</div>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* User Reviews Section */}
        <div className="relative mb-12 flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-blue-400/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-gradient-to-r from-white/90 to-pink-50/80 backdrop-blur-xl rounded-3xl p-8 border border-pink-200/50 shadow-2xl w-full max-w-3xl mx-auto flex flex-col items-center">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 text-xl">User Reviews</h3>
            </div>
            <div className="mb-2 text-sm italic text-center">"{userReviews[reviewIdx].review}"</div>
            <div className="mb-2 text-xs text-muted-foreground text-center">- {userReviews[reviewIdx].name}</div>
            <div className="flex gap-2 justify-center">
              <button className="text-xs px-2 py-1 border rounded hover:bg-gray-100" onClick={() => setReviewIdx((reviewIdx - 1 + userReviews.length) % userReviews.length)}>&lt;</button>
              <button className="text-xs px-2 py-1 border rounded hover:bg-gray-100" onClick={() => setReviewIdx((reviewIdx + 1) % userReviews.length)}>&gt;</button>
            </div>
          </div>
        </div>
        {/* Social Links and Copyright */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-teal-400/10 to-cyan-400/10 rounded-2xl blur-xl"></div>
          <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
            <div className="flex flex-col items-center space-y-6">
              <div className="flex items-center gap-8">
                <a href="https://x.com/aikin_in" target="_blank" rel="noopener noreferrer" className="group relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-2xl">
                    <Twitter className="w-6 h-6 text-white" />
                  </div>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-2xl">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-2xl">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                </a>
              </div>
              <div className="text-center">
                <p className="text-white/80 text-sm font-medium">© 2025 Aikin. All rights reserved.</p>
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 