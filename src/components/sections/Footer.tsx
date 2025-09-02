import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-16 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">마스킷</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              모바일 티켓과 데이터 인사이트 서비스로<br />
              문화예술산업의 디지털 전환을 선도합니다.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">QUICK LINKS</h4>
            <ul className="space-y-3">
              <li><Link href="https://home.maskit.co.kr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#CE2C4F] transition-colors duration-200">홈페이지</Link></li>
              <li><Link href="https://home.maskit.co.kr/blog" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#CE2C4F] transition-colors duration-200">블로그</Link></li>
              <li><Link href="https://home.maskit.co.kr/contact" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#CE2C4F] transition-colors duration-200">문의하기</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">회사 정보</h4>
            <div className="text-gray-300 space-y-3 text-sm leading-relaxed">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
                <span className="font-medium text-gray-200">㈜ 마스킷</span>
                <span>사업자등록번호: 140-81-99168</span>
                <span>대표이사: 배호연</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
                <p><span className="font-medium text-gray-200">본사:</span> 서울시 마포구 백범로31길 21, 서울창업허브 본관 414호</p>
                <p><span className="font-medium text-gray-200">연구소:</span> 서울특별시 서대문구 연세로2나길 61 404호</p>
                <p><span className="font-medium text-gray-200">부산지사:</span> 부산광역시 사상구 모라로 22, 1612호</p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 pt-2">
                <Link href="https://home.maskit.co.kr/contact" target="_blank" rel="noopener noreferrer" className="text-[#CE2C4F] font-medium hover:text-[#F03C5B] transition-colors duration-200">info@maskit.co.kr</Link>
                <span>통신판매신고번호: 2025-서울마포-0192</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-700">
          <div className="text-gray-400 text-sm text-center">
            © 2025 Maskit Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;