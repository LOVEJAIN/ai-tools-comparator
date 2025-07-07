import React, { useState, useEffect } from "react";
import { useData } from "@/contexts/DataContext";

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
            userId: user ? user.id : null,
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
            <div>Version: <span className="font-mono">2.5.0</span></div>
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
          <a href="https://x.com/aikin_in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition" aria-label="X (Twitter)">
            {/* X (Twitter) SVG */}
            <svg width="20" height="20" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1142.5 0H892.5L600 410.5L307.5 0H57.5L500 617.5L57.5 1227H307.5L600 816.5L892.5 1227H1142.5L700 617.5L1142.5 0Z" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/aikin-in/about" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition" aria-label="LinkedIn">
            {/* LinkedIn SVG - standard, not cut off */}
            <svg width="24" height="24" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.09 107.3 0 83.2 0 53.6A53.6 53.6 0 0 1 53.6 0c29.6 0 53.6 24.09 53.6 53.6 0 29.6-24.09 53.7-53.6 53.7zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.4s1.2-242.1 0-267.1h92.4v37.9c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.6 39.8 106.6 125.4V448z" fill="#0077B5"/>
            </svg>
          </a>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
            <h3 className="font-bold text-lg">User Reviews</h3>
          </div>
          {userReviews.length > 0 ? (
            <>
              <div className="mb-2 text-base italic text-center max-w-xl mx-auto" title={userReviews[reviewIdx]?.comment || ''}>
                "{getTrimmedReview(userReviews[reviewIdx]) || "No comment provided."}"
              </div>
              <div className="mb-3 text-xs text-muted-foreground text-center">- {getReviewerName(userReviews[reviewIdx])}</div>
              <div className="flex gap-4 justify-center mt-2">
                <button className="text-lg px-3 py-1 border rounded-full hover:bg-gray-100 transition" onClick={() => setReviewIdx((reviewIdx - 1 + userReviews.length) % userReviews.length)}>&lt;</button>
                <button className="text-lg px-3 py-1 border rounded-full hover:bg-gray-100 transition" onClick={() => setReviewIdx((reviewIdx + 1) % userReviews.length)}>&gt;</button>
              </div>
            </>
          ) : (
            <div className="mb-2 text-sm italic text-gray-500 text-center">No user reviews yet. Be the first to rate us!</div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between text-xs text-gray-400 py-2 border-t mt-2">
        <div className="flex gap-4 ml-2">
          <a href="https://twitter.com/aikin_ai" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><span style={{fontWeight:'bold',fontSize:'18px'}}>𝕏</span></a>
          <a href="https://www.linkedin.com/company/aikin-ai/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700"><svg className="inline w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"/></svg></a>
        </div>
        <div className="text-center flex-1">&copy; {new Date().getFullYear()} Aikin. All rights reserved.</div>
        <div style={{width:'60px'}}></div>
      </div>
    </footer>
  );
};

export default Footer; 