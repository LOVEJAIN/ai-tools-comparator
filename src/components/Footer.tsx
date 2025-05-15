import React from "react";

const Footer: React.FC = () => (
  <footer className="border-t bg-background mt-12">
    <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex-1 min-w-[200px]">
        <h3 className="font-bold text-lg mb-2">About Us</h3>
        <p className="text-sm text-muted-foreground max-w-xs">
          AI Tools Explorer is your one-stop directory for discovering, comparing, and reviewing the best AI tools on the web. We help users and businesses find the right AI for every need.
        </p>
      </div>
      <div className="flex-1 min-w-[200px]">
        <h3 className="font-bold text-lg mb-2">Follow Us</h3>
        <div className="flex gap-4">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">Twitter</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">LinkedIn</a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">GitHub</a>
        </div>
      </div>
      <div className="flex-1 min-w-[200px]">
        <h3 className="font-bold text-lg mb-2">Contact</h3>
        <p className="text-sm text-muted-foreground">Email: <a href="mailto:contact@aitoolsexplorer.com" className="underline">contact@aitoolsexplorer.com</a></p>
        <p className="text-sm text-muted-foreground">Advertise: <a href="mailto:ads@aitoolsexplorer.com" className="underline">ads@aitoolsexplorer.com</a></p>
      </div>
    </div>
    <div className="text-center text-xs text-muted-foreground py-4 border-t">
      &copy; {new Date().getFullYear()} AI Tools Explorer. All rights reserved.
    </div>
  </footer>
);

export default Footer;
