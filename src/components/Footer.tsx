import React, { useState } from "react";

const trustedBy = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
];

const userReviews = [
  { name: "Amit S.", review: "Superb directory for AI tools! Helped my startup a lot." },
  { name: "Priya R.", review: "Love the clean UI and the variety of tools listed." },
  { name: "John D.", review: "I found the perfect AI tool for my business here." },
  { name: "Sara K.", review: "The reviews and ratings are very helpful!" },
];

const faqs = [
  { q: "How do I submit my AI tool?", a: "Click the 'Submit AI Tool' button at the top and fill out the form." },
  { q: "Is listing free?", a: "Basic listing is free. Featured and verified listings are paid." },
  { q: "How are ratings calculated?", a: "Ratings are based on user submissions and reviews." },
  { q: "How can I contact support?", a: "Email us at contact@aitoolsexplorer.com." },
];

const Footer: React.FC = () => {
  // Rate us state
  const [rating, setRating] = useState<number>(Number(localStorage.getItem('siteRating')) || 0);
  const [hover, setHover] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(!!localStorage.getItem('siteRating'));

  // Contact us state
  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const [contactSent, setContactSent] = useState(false);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Review carousel state
  const [reviewIdx, setReviewIdx] = useState(0);

  // Version
  const version = "0.0.0";

  // Handle rating submit
  const handleRateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating > 0) {
      localStorage.setItem('siteRating', String(rating));
      setSubmitted(true);
    }
  };

  // Handle contact submit
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
    setContact({ name: '', email: '', message: '' });
  };

  return (
    <footer className="bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#f1f5f9] border-t mt-12 pt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">
        {/* About Us */}
        <div className="rounded-xl shadow bg-white/80 p-6 flex flex-col gap-4 border border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M12 4v16m0 0H3m9 0a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"/></svg>
            <h3 className="font-bold text-lg">About Us</h3>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs mb-2">
            AI Tools Explorer is your one-stop directory for discovering, comparing, and reviewing the best AI tools on the web. We help users and businesses find the right AI for every need.
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs font-semibold">Version:</span>
            <span className="text-xs">{version}</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs font-semibold">Made in India</span>
            <span role="img" aria-label="India">🇮🇳</span>
          </div>
        </div>
        {/* Contact Us & Rate Us */}
        <div className="flex flex-col gap-8">
          <div className="rounded-xl shadow bg-white/80 p-6 border border-gray-100 mb-2">
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
                <button className="bg-primary text-white px-4 py-1 rounded w-full hover:bg-primary/90 transition" type="submit">Send</button>
              </form>
            )}
          </div>
          <div className="rounded-xl shadow bg-white/80 p-6 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              <h3 className="font-bold text-lg">Rate Us</h3>
            </div>
            {submitted ? (
              <div className="text-green-600 text-sm">Thank you for rating us!</div>
            ) : (
              <form onSubmit={handleRateSubmit} className="flex flex-col gap-2">
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
                <button className="bg-primary text-white px-4 py-1 rounded w-full hover:bg-primary/90 transition" type="submit">Submit</button>
              </form>
            )}
          </div>
        </div>
        {/* Socials, FAQ, Trusted By, User Reviews */}
        <div className="flex flex-col gap-8">
          <div className="rounded-xl shadow bg-white/80 p-6 border border-gray-100 mb-2">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-5V6a2 2 0 0 1 2-2h3"/></svg>
              <h3 className="font-bold text-lg">Follow Us</h3>
            </div>
            <div className="flex gap-4 mb-4">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">Twitter</a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">LinkedIn</a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">GitHub</a>
            </div>
            <div className="border-t my-4" />
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
              <h3 className="font-bold text-lg">FAQ</h3>
            </div>
            <div className="mb-4 divide-y divide-gray-200">
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
            <div className="border-t my-4" />
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
              <h3 className="font-bold text-lg">Trusted By</h3>
            </div>
            <div className="flex gap-4 items-center mb-4 flex-nowrap overflow-x-auto pb-2">
              {trustedBy.map((c, i) => (
                <img key={i} src={c.logo} alt={c.name} title={c.name} className="h-8 w-auto bg-white rounded shadow p-1 min-w-[70px]" />
              ))}
            </div>
            <div className="border-t my-4" />
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
      </div>
      <div className="text-center text-xs text-muted-foreground py-4 border-t bg-white/70">
        &copy; {new Date().getFullYear()} AI Tools Explorer. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
