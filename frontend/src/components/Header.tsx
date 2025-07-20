import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "@/contexts/DataContext";
import { useGoogleAuth } from "@/contexts/GoogleAuthContext";
import { GoogleLogin } from '@react-oauth/google';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from '@/components/ui/separator';
import SubmitToolModal, { SubmitToolModalHandle } from "./SubmitBanner";
import AikinLogo from "../assets/aikin-logo.png";
import { Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  onSearchKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  showMainContent?: boolean;
  setShowMainContent?: (v: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ searchValue, onSearchChange, onSearchKeyDown, showMainContent, setShowMainContent }) => {
  const { user, login, logout, register } = useData();
  const { googleUser, handleGoogleSuccess, handleGoogleError, logout: googleLogout } = useGoogleAuth();
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const submitModalRef = useRef<SubmitToolModalHandle>(null);
  const [showJobDialog, setShowJobDialog] = useState(false);
  const [jobForm, setJobForm] = useState({ title: '', company: '', location: '', description: '', link: '' });
  const [jobSuccess, setJobSuccess] = useState(false);
  const location = window.location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showFeaturesDropdown, setShowFeaturesDropdown] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(form.email, form.password);
    setIsDialogOpen(false);
    setForm({ username: "", email: "", password: "" });
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    register(form.username, form.email, form.password);
    setIsDialogOpen(false);
    setForm({ username: "", email: "", password: "" });
  };

  const handleLogout = () => {
    if (googleUser) {
      googleLogout();
    }
    logout();
  };

  const currentUser = googleUser || user;

  const handleHomeClick = () => {
    navigate('/', { replace: true, state: { forceShowMain: true } });
  };

  const handleAikinClick = () => {
    if (location === "/" && showMainContent && setShowMainContent) {
      setShowMainContent(false);
    } else {
      navigate("/");
    }
  };

  return (
    <header className="w-full bg-[#10182a]">
      <div className="container flex h-16 items-center px-2 sm:px-4 md:px-8 gap-2 flex-wrap justify-between min-w-0">
        <div className="flex items-center gap-2 cursor-pointer flex-shrink-0 min-w-0" onClick={() => {
          if (setShowMainContent) setShowMainContent(false);
          navigate('/', { replace: true, state: { forceShowMain: true } });
          window.scrollTo(0, 0);
        }}>
          <img src={AikinLogo} alt="Aikin Logo" className="h-8 w-8 md:h-10 md:w-10 rounded-full" />
          <span className="font-semibold text-lg md:text-xl text-white ml-1">Aikin</span>
        </div>
        <div className="hidden md:flex flex-1 justify-start ml-2">
          <div className="relative w-full max-w-lg flex items-center">
            <span className="absolute left-3 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </span>
            <Input
              type="text"
              placeholder="adding a verified tool every hour.."
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              onKeyDown={onSearchKeyDown}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder:text-gray-400 bg-[#19213a]"
            />
          </div>
        </div>
        {/* Navigation and buttons remain on the right */}
        <nav className="hidden md:flex gap-2 items-center flex-shrink-0 ml-auto">
          <Button asChild variant="ghost" className="header-btn-outline bg-[#10182a] hover:bg-[#10182a] hover:text-white">
            <Link to="/ai-agents"><span className="text-white">AI Agents</span></Link>
          </Button>
          <Button asChild variant="ghost" className="header-btn-outline bg-[#10182a] hover:bg-[#10182a] hover:text-white">
            <Link to="/mcp-servers"><span className="text-white">MCP Servers</span></Link>
          </Button>
          <Button asChild variant="ghost" className="header-btn-outline bg-[#10182a] hover:bg-[#10182a] hover:text-white">
            <Link to="/subscription"><span className="text-white">Advertise</span></Link>
          </Button>
          {/* More Features Dropdown (remove Advertise from here) */}
          <div className="relative">
            <Button variant="ghost" className="header-btn-outline flex items-center gap-1 px-2 bg-[#10182a] hover:bg-[#10182a] hover:text-white" onClick={() => setShowFeaturesDropdown(v => !v)}>
              <span className="text-white">More Features</span> <ChevronDown className="w-4 h-4 text-gray-300" />
            </Button>
            {showFeaturesDropdown && (
              <div
                className="absolute top-full left-0 bg-[#10182a] border rounded shadow-lg mt-2 z-50 min-w-[180px]"
                onMouseLeave={() => setShowFeaturesDropdown(false)}
              >
                <Button asChild variant="ghost" className="w-full justify-start px-2 py-2 bg-[#10182a] hover:bg-[#10182a]" onClick={() => {
                  submitModalRef.current?.open("submit");
                  setShowFeaturesDropdown(false);
                }}>
                  <span className="text-white">Submit AI Tool</span>
                </Button>
                <Button asChild variant="ghost" className="w-full justify-start px-2 py-2 bg-[#10182a] hover:bg-[#10182a]" onClick={() => setShowFeaturesDropdown(false)}>
                  <Link to="/jobs"><span className="text-white">Jobs</span></Link>
                </Button>
              </div>
            )}
          </div>
        </nav>
        {currentUser && currentUser.isAdmin && (
          <Button variant="outline" className="hidden md:inline-flex" onClick={() => navigate("/admin")}>Dashboard</Button>
        )}
        {/* Mobile Nav: only show hamburger and logo on small screens */}
        <div className="flex md:hidden items-center gap-2 flex-wrap justify-end flex-1">
          <Button variant="outline" size="sm" className="px-2 py-1" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b shadow z-50 absolute left-0 right-0 top-16">
            <div className="flex flex-col gap-2 p-4">
              {/* Mobile Search Bar inside dropdown */}
              <Input
                type="text"
                placeholder="adding a verified tool every hour.."
                value={searchValue}
                onChange={(e) => onSearchChange(e.target.value)}
                onKeyDown={onSearchKeyDown}
                className="w-full rounded px-2 py-1 text-sm border shadow-sm focus:outline-none focus:ring-2 focus:ring-primary mb-2 text-white placeholder:text-gray-400 bg-[#19213a] border-none"
              />
              <Button asChild variant="outline" className="header-btn-outline w-full" onClick={() => setMobileMenuOpen(false)}>
                <Link to="/ai-agents" className="text-white">AI Agents</Link>
              </Button>
              <Button asChild variant="outline" className="header-btn-outline w-full" onClick={() => setMobileMenuOpen(false)}>
                <Link to="/mcp-servers" className="text-white">MCP Servers</Link>
              </Button>
              <Button asChild variant="outline" className="header-btn-outline w-full" onClick={() => setMobileMenuOpen(false)}>
                <Link to="/subscription" className="text-white">Advertise</Link>
              </Button>
              <Button asChild variant="outline" className="header-btn-outline w-full" onClick={() => setMobileMenuOpen(false)}>
                <Link to="/jobs" className="text-white">Jobs</Link>
              </Button>
              <Button variant="outline" onClick={() => { submitModalRef.current?.open("submit"); setMobileMenuOpen(false); }} className="header-btn-outline w-full">
                <span className="text-white">Submit AI Tool</span>
              </Button>
              {/* Only show Log in and Sign up once in the mobile dropdown if not logged in */}
              {!currentUser ? (
                <>
                  <Button
                    className="header-btn text-white w-full"
                    onClick={() => {
                      setIsDialogOpen(true);
                      setIsSignUp(false);
                      setMobileMenuOpen(false);
                    }}
                  >
                    Log in
                  </Button>
                  <Button
                    variant="outline"
                    className="header-btn-outline bg-[#3A63F1] hover:bg-[#2d4db3] text-white border-none w-full"
                    onClick={() => {
                      setIsDialogOpen(true);
                      setIsSignUp(true);
                      setMobileMenuOpen(false);
                    }}
                  >
                    Sign up
                  </Button>
                </>
              ) : (
                <Button
                  variant="outline"
                  className="header-btn-outline w-full"
                  onClick={handleLogout}
                >
                  Sign out
                </Button>
              )}
            </div>
          </div>
        )}
        {/* REMOVE Log in and Sign up buttons from the header bar (outside mobile dropdown) */}
        {/* The following block is removed: */}
        {/*
        {!currentUser ? (
          <>
            <Button
              className="header-btn text-white"
              onClick={() => {
                setIsDialogOpen(true);
                setIsSignUp(false);
              }}
            >
              Log in
            </Button>
            <Button
              variant="outline"
              className="header-btn-outline bg-[#3A63F1] hover:bg-[#2d4db3] text-white border-none"
              onClick={() => {
                setIsDialogOpen(true);
                setIsSignUp(true);
              }}
            >
              <span className="text-white">Sign up</span>
            </Button>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogContent className="sm:max-w-[400px]">
                <DialogHeader>
                  <DialogTitle>{isSignUp ? "Sign Up" : "Log In"}</DialogTitle>
                </DialogHeader>
                <form
                  onSubmit={isSignUp ? handleSignUp : handleLogin}
                  className="space-y-4 pt-2"
                >
                  {isSignUp && (
                    <Input
                      name="username"
                      placeholder="Username"
                      value={form.username}
                      onChange={handleChange}
                      required
                    />
                  )}
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full bg-primary text-white hover:bg-primary/90 transition"
                  >
                    {isSignUp ? "Sign Up" : "Log In"}
                  </Button>
                  
                  <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                      <Separator className="w-full" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-center mt-4">
                    <div className="w-full max-w-[280px] mx-auto">
                      <GoogleLogin
                        onSuccess={handleGoogleSuccess}
                        onError={handleGoogleError}
                        useOneTap
                        width="280"
                        theme="filled_blue"
                        size="large"
                        text="continue_with"
                        shape="rectangular"
                        logo_alignment="left"
                      />
                    </div>
                  </div>

                  <div className="text-xs text-center mt-4">
                    {isSignUp ? (
                      <span>
                        Already have an account?{" "}
                        <button
                          type="button"
                          className="underline"
                          onClick={() => setIsSignUp(false)}
                        >
                          Log in
                        </button>
                      </span>
                    ) : (
                      <span>
                        Don&apos;t have an account?{" "}
                        <button
                          type="button"
                          className="underline"
                          onClick={() => setIsSignUp(true)}
                        >
                          Sign up
                        </button>
                      </span>
                    )}
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </>
        ) : (
          <div className="flex items-center gap-2">
            {googleUser && (
              <img
                src={googleUser.picture}
                alt={googleUser.name}
                className="w-8 h-8 rounded-full"
              />
            )}
            <span className="text-sm font-medium">
              {googleUser ? googleUser.name : (user?.username || user?.email)}
            </span>
            <Button
              variant="outline"
              className="header-btn-outline"
              onClick={handleLogout}
            >
              Sign out
            </Button>
          </div>
        )}
        */}
      </div>
      <SubmitToolModal ref={submitModalRef} />
      <Dialog open={showJobDialog} onOpenChange={setShowJobDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Submit a Job Opportunity</DialogTitle>
          </DialogHeader>
          {jobSuccess ? (
            <div className="text-green-600 text-center py-4">Job posted successfully!</div>
          ) : (
            <form className="flex flex-col gap-3" onSubmit={e => {
              e.preventDefault();
              setJobSuccess(true);
              setTimeout(() => setJobSuccess(false), 2000);
              setShowJobDialog(false);
              setJobForm({ title: '', company: '', location: '', description: '', link: '' });
            }}>
              <input className="border rounded px-3 py-2 text-white placeholder:text-gray-400 bg-[#19213a] border-none" placeholder="Job Title" value={jobForm.title} onChange={e => setJobForm({ ...jobForm, title: e.target.value })} required />
              <input className="border rounded px-3 py-2 text-white placeholder:text-gray-400 bg-[#19213a] border-none" placeholder="Company Name" value={jobForm.company} onChange={e => setJobForm({ ...jobForm, company: e.target.value })} required />
              <input className="border rounded px-3 py-2 text-white placeholder:text-gray-400 bg-[#19213a] border-none" placeholder="Location" value={jobForm.location} onChange={e => setJobForm({ ...jobForm, location: e.target.value })} required />
              <input className="border rounded px-3 py-2 text-white placeholder:text-gray-400 bg-[#19213a] border-none" placeholder="Job Posting Link" type="url" value={jobForm.link} onChange={e => setJobForm({ ...jobForm, link: e.target.value })} required />
              <textarea className="border rounded px-3 py-2 text-white placeholder:text-gray-400 bg-[#19213a] border-none" placeholder="Job Description" value={jobForm.description} onChange={e => setJobForm({ ...jobForm, description: e.target.value })} required />
              <Button type="submit" className="bg-primary text-white w-full mt-2">Submit Job</Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;
