import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AikinLogo from "../assets/aikin-logo.png";
import { GoogleLogin } from '@react-oauth/google';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDialogOpen(false);
    setForm({ username: "", email: "", password: "" });
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDialogOpen(false);
    setForm({ username: "", email: "", password: "" });
  };

  // Placeholder handlers for Google login
  const handleGoogleSuccess = (response: any) => {
    setIsDialogOpen(false);
  };
  const handleGoogleError = () => {
    alert('Google sign in failed');
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-[#10182a] via-[#151e36] to-[#181f3a] overflow-y-auto">
      {/* Header (sticky, always visible) */}
      <header className="flex items-center justify-between px-8 py-5 border-b border-white/5">
          <div className="flex items-center gap-3">
            <img src={AikinLogo} alt="Aikin Logo" className="h-10 w-10 rounded-xl bg-blue-600" />
            <span className="text-white text-2xl font-bold">Aikin</span>
          </div>
          <div className="flex gap-3">
            <Button
              className="border-slate-700 text-white hover:bg-slate-800 px-6 py-2 bg-transparent transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 text-base"
              style={{ fontSize: '0.8em' }}
              onClick={() => {
                setIsDialogOpen(true);
                setIsSignUp(false);
              }}
            >
              Sign In
            </Button>
            <Button
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 group text-base"
              style={{ fontSize: '0.8em' }}
              onClick={() => {
                setIsDialogOpen(true);
                setIsSignUp(true);
              }}
            >
              Sign Up
            </Button>
          </div>
        </header>
      {/* Main scrollable content */}
      <div className="flex flex-col min-h-screen w-full">
        {/* Modal for Sign In/Sign Up - copied from Header */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[400px]">
            <DialogHeader>
              <DialogTitle>{isSignUp ? "Sign Up" : "Log In"}</DialogTitle>
              <DialogDescription>
                {isSignUp
                  ? "Create a new account using your email and password, or sign up with Google."
                  : "Sign in to your account using your email and password, or continue with Google."}
              </DialogDescription>
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
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold hover:from-blue-600 hover:to-cyan-500 transition"
              >
                {isSignUp ? "Sign Up" : "Log In"}
              </Button>
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-[#181f3a] px-2 text-gray-400">
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
        {/* Main Content (Hero) */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4 min-h-[calc(100vh-80px)] relative">
          {/* Animated gradient blend at the bottom */}
          <div className="absolute left-0 right-0 bottom-0 h-24 pointer-events-none z-10" style={{background: "linear-gradient(to bottom, transparent 60%, #3a236e 100%)", transition: 'background 1s ease'}} />
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mt-12 mb-4">
            Innovation made <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">effortless</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-white/80 mb-4">Explore, connect, and create in one place</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-10">
            Transform your ideas into reality with our comprehensive platform that brings together cutting-edge tools, seamless collaboration, and unlimited creative possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 group"
              onClick={() => navigate("/home")}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-700 text-white hover:bg-slate-800 px-8 py-3 bg-transparent transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20"
              onClick={() => navigate("/home")}
            >
              Explore Features
            </Button>
          </div>
        </main>
        {/* Call to Action Section */}
        <section className="w-full bg-[#3a236e] py-24 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 text-center">Ready to start innovating?</h2>
          <p className="text-xl text-gray-200 mb-10 text-center max-w-2xl">Join thousands of creators and teams who are already building the future with our platform.</p>
          <form className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-xl">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-[260px] sm:w-[320px] px-4 py-3 rounded-lg bg-[#2a2047] text-white border border-transparent focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 placeholder:text-gray-400 text-lg"
              required
            />
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold text-lg border-2 border-transparent hover:border-purple-400 shadow hover:shadow-purple-500/20 transition-all duration-300"
            >
              Get Started
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default LandingPage; 