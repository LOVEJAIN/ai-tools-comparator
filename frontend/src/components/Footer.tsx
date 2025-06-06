import React, { useState, useEffect } from "react";
import { useData } from "@/contexts/DataContext";

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
    <footer className="bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#f1f5f9] border-t mt-8 pt-6">
      <div className="container mx-auto px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-4">
        {/* Contact Us */}
        <div className="rounded-xl shadow bg-white/80 p-4 border border-gray-100 mb-2">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7"/><path d="M21 10.5V17a2 2 0 0 1-2 2h-7"/><path d="M21 10.5l-9 6.5-9-6.5"/></svg>
            <h3 className="font-bold text-lg">Contact Us</h3>
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
        {/* Rate Us */}
        <div className="rounded-xl shadow bg-white/80 p-4 border border-gray-100 mb-2">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <h3 className="font-bold text-lg">Rate Us</h3>
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
        {/* About Us */}
        <div className="rounded-xl shadow bg-white/80 p-4 border border-gray-100 mb-2 flex flex-col justify-between min-h-[220px]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
              <h3 className="font-bold text-lg">About Us</h3>
            </div>
            <div className="text-sm text-gray-700 mb-2">At Aikin, we make it easy to find the right AI solution. As a leading directory of top-rated AI tools, we help individuals and businesses discover, compare, and review the latest technologies—all in one place. From automation and analytics to creative AI, Aikin guides you to the best fit for your needs.</div>
          </div>
          <div className="text-xs text-gray-500 mt-2">
            <div>Version: <span className="font-mono">1.5.0</span></div>
            <div>Made in India 🇮🇳</div>
          </div>
        </div>
        {/* FAQ */}
        <div className="rounded-xl shadow bg-white/80 p-4 border border-gray-100 mb-2">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
            <h3 className="font-bold text-lg">FAQ</h3>
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
      {/* Socials and User Reviews */}
      <div className="container mx-auto px-2 md:px-0 max-w-4xl pb-2 flex flex-col md:flex-row gap-2 items-center justify-between">
        <div className="flex gap-4 mb-2">
          <a href="https://x.com/aikin_in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">Twitter</a>
          <a href="https://www.linkedin.com/company/aikin-in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">LinkedIn</a>
          <a href="https://github.com/aikin-in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
            <h3 className="font-bold text-lg">User Reviews</h3>
          </div>
          <div className="mb-2 text-sm italic">"{userReviews[reviewIdx].review}"</div>
          <div className="mb-2 text-xs text-muted-foreground">- {userReviews[reviewIdx].name}</div>
          <div className="flex gap-2 justify-center">
            <button className="text-xs px-2 py-1 border rounded hover:bg-gray-100" onClick={() => setReviewIdx((reviewIdx - 1 + userReviews.length) % userReviews.length)}>&lt;</button>
            <button className="text-xs px-2 py-1 border rounded hover:bg-gray-100" onClick={() => setReviewIdx((reviewIdx + 1) % userReviews.length)}>&gt;</button>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 py-2 border-t mt-2">&copy; {new Date().getFullYear()} Aikin. All rights reserved.</div>
    </footer>
  );
};

export default Footer; 