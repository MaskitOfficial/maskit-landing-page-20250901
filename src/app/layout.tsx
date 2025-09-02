import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '랜딩 페이지 | 브랜드명',
  description: '비즈니스 성장을 위한 혁신적인 솔루션을 제공합니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}