import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link href="/">
      <span className={`text-2xl font-bold text-blue-600 ${className}`}>
        브랜드명
      </span>
    </Link>
  );
};

export default Logo;