import React from "react";
import { Link } from "react-router-dom";

interface AikinButtonProps {
  className?: string;
  onClick?: () => void;
  to?: string;
}

const AikinButton: React.FC<AikinButtonProps> = ({ className = "", onClick, to = "/" }) => {
  return (
    <Link to={to} onClick={onClick} className={`bg-[#7650C5] rounded-full px-6 py-2 flex items-center justify-center shadow hover:bg-[#6840b0] transition-colors ${className}`} style={{ minWidth: 100 }}>
      <span className="text-white text-2xl font-bold">Aikin</span>
    </Link>
  );
};

export default AikinButton; 