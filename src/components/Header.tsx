import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "@/contexts/DataContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import SubmitToolModal, { SubmitToolModalHandle } from './SubmitBanner';

interface HeaderProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchValue, onSearchChange }) => {
  const { user, login, logout, register } = useData();
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });
  const submitModalRef = useRef<SubmitToolModalHandle>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(form.email, form.password);
    setIsDialogOpen(false);
    setForm({ username: '', email: '', password: '' });
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    register(form.username, form.email, form.password);
    setIsDialogOpen(false);
    setForm({ username: '', email: '', password: '' });
  };

  return (
    <header className="border-b bg-background">
      <div className="container flex h-16 items-center px-4 justify-between gap-4">
        <Link to="/" className="text-2xl font-bold whitespace-nowrap">AI Tools Explorer</Link>
        <div className="flex-1 flex justify-center">
          <Input
            type="text"
            placeholder="Search for items..."
            value={searchValue}
            onChange={e => onSearchChange(e.target.value)}
            className="max-w-lg w-full rounded-lg border px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex items-center gap-4">
          <Link to="/jobs" className="header-link">Jobs</Link>
          <Link to="/subscription" className="header-link">Advertise</Link>
          <Button className="header-btn" onClick={() => submitModalRef.current?.open('submit')}>Submit AI Tool</Button>
          {user && user.isAdmin && (
            <Button className="header-btn" onClick={() => navigate("/admin")}>Dashboard</Button>
          )}
          {!user ? (
            <>
              <Button className="header-btn" onClick={() => { setIsDialogOpen(true); setIsSignUp(false); }}>Log in</Button>
              <Button variant="outline" className="header-btn-outline" onClick={() => { setIsDialogOpen(true); setIsSignUp(true); }}>Sign up</Button>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-[400px]">
                  <DialogHeader>
                    <DialogTitle>{isSignUp ? 'Sign Up' : 'Log In'}</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={isSignUp ? handleSignUp : handleLogin} className="space-y-4 pt-2">
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
                    <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90 transition">
                      {isSignUp ? 'Sign Up' : 'Log In'}
                    </Button>
                    <div className="text-xs text-center mt-2">
                      {isSignUp ? (
                        <span>Already have an account? <button type="button" className="underline" onClick={() => setIsSignUp(false)}>Log in</button></span>
                      ) : (
                        <span>Don&apos;t have an account? <button type="button" className="underline" onClick={() => setIsSignUp(true)}>Sign up</button></span>
                      )}
                    </div>
                  </form>
                  <div className="text-xs text-muted-foreground mt-2">
                    <div>Dummy Admin: <b>admin@example.com / password</b></div>
                    <div>Dummy User: <b>user@example.com / password</b></div>
                  </div>
                </DialogContent>
              </Dialog>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{user.username || user.email}</span>
              <Button variant="outline" className="header-btn-outline" onClick={logout}>Sign out</Button>
            </div>
          )}
        </div>
      </div>
      <SubmitToolModal ref={submitModalRef} />
    </header>
  );
};

export default Header;
