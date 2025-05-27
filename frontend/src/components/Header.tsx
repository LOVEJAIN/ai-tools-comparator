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

interface HeaderProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  onSearchKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ searchValue, onSearchChange, onSearchKeyDown }) => {
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
  const [jobForm, setJobForm] = useState({ title: '', company: '', location: '', description: '' });
  const [jobSuccess, setJobSuccess] = useState(false);

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
    } else {
      logout();
    }
  };

  const currentUser = googleUser || user;

  const handleHomeClick = () => {
    navigate('/', { replace: true, state: { forceShowMain: true } });
  };

  return (
    <header className="border-b bg-background">
      <div className="container flex h-16 items-center px-4 justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold whitespace-nowrap">
          <img src={AikinLogo} alt="Aikin Logo" className="h-11  object-contain" />
          <h3>Aikin</h3>
        </Link>
        <div className="flex-1 flex justify-center">
          <Input
            type="text"
            placeholder="Search for items..."
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            onKeyDown={onSearchKeyDown}
            className="max-w-lg w-full rounded-lg border px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <span onClick={handleHomeClick} style={{ cursor: 'pointer' }}>Home</span>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/jobs">Jobs</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/subscription">Advertise</Link>
          </Button>
          <Button variant="outline" onClick={() => submitModalRef.current?.open("submit")}>Submit AI Tool</Button>
          {currentUser && currentUser.isAdmin && (
            <Button variant="outline" onClick={() => navigate("/admin")}>Dashboard</Button>
          )}
          {(currentUser && (currentUser.isAdmin || (user && user.isVerified))) && (
            <Button variant="outline" onClick={() => setShowJobDialog(true)}>Submit Job</Button>
          )}
          {!currentUser ? (
            <>
              <Button
                className="header-btn"
                onClick={() => {
                  setIsDialogOpen(true);
                  setIsSignUp(false);
                }}
              >
                Log in
              </Button>
              <Button
                variant="outline"
                className="header-btn-outline"
                onClick={() => {
                  setIsDialogOpen(true);
                  setIsSignUp(true);
                }}
              >
                Sign up
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
                  <div className="text-xs text-muted-foreground mt-2">
                    <div>
                      Dummy Admin: <b>admin@example.com / password</b>
                    </div>
                    <div>
                      Dummy User: <b>user@example.com / password</b>
                    </div>
                  </div>
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
        </div>
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
              setJobForm({ title: '', company: '', location: '', description: '' });
            }}>
              <input className="border rounded px-3 py-2" placeholder="Job Title" value={jobForm.title} onChange={e => setJobForm({ ...jobForm, title: e.target.value })} required />
              <input className="border rounded px-3 py-2" placeholder="Company Name" value={jobForm.company} onChange={e => setJobForm({ ...jobForm, company: e.target.value })} required />
              <input className="border rounded px-3 py-2" placeholder="Location" value={jobForm.location} onChange={e => setJobForm({ ...jobForm, location: e.target.value })} required />
              <textarea className="border rounded px-3 py-2" placeholder="Job Description" value={jobForm.description} onChange={e => setJobForm({ ...jobForm, description: e.target.value })} required />
              <Button type="submit" className="bg-primary text-white w-full mt-2">Submit Job</Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;
