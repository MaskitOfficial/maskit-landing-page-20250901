"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Qless" 
              width={160} 
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#problem" className="text-gray-600 hover:text-[#CE2C4F] transition-colors">
            Problem
          </Link>
          <Link href="#solution" className="text-gray-600 hover:text-[#CE2C4F] transition-colors">
            Solution
          </Link>
          <Link href="#feedback" className="text-gray-600 hover:text-[#CE2C4F] transition-colors">
            Feedback
          </Link>
          <Link href="#partners" className="text-gray-600 hover:text-[#CE2C4F] transition-colors">
            Partners
          </Link>
          <Link href="#apply" className="text-gray-600 hover:text-[#CE2C4F] transition-colors">
            Apply
          </Link>
          <Link href="#faq" className="text-gray-600 hover:text-[#CE2C4F] transition-colors">
            FAQ
          </Link>
        </nav>

        {/* CTA 버튼 */}
        <div className="hidden md:block">
          <Link href="#contact" className="bg-[#CE2C4F] text-white px-6 py-2 rounded-md hover:bg-[#A02340] transition-colors">
            시작하기
          </Link>
        </div>

        {/* 모바일 메뉴 토글 버튼 */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link href="#problem" className="text-gray-600 hover:text-[#CE2C4F] transition-colors">
              Problem
            </Link>
            <Link href="#solution" className="text-gray-600 hover:text-[#CE2C4F] transition-colors">
              Solution
            </Link>
            <Link href="#feedback" className="text-gray-600 hover:text-[#CE2C4F] transition-colors">
              Feedback
            </Link>
            <Link href="#partners" className="text-gray-600 hover:text-[#CE2C4F] transition-colors">
              Partners
            </Link>
            <Link href="#apply" className="text-gray-600 hover:text-[#CE2C4F] transition-colors">
              Apply
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-[#CE2C4F] transition-colors">
              FAQ
            </Link>
            <Link href="#contact" className="bg-[#CE2C4F] text-white px-4 py-2 rounded-md text-center hover:bg-[#A02340] transition-colors">
              시작하기
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;