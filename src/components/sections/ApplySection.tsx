'use client';

import React, { useState, useEffect } from 'react';

const ApplySection: React.FC = () => {
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    name: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  // 모달 열렸을 때 배경 스크롤 방지
  useEffect(() => {
    if (showPrivacyModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // 컴포넌트 언마운트 시 스크롤 복원
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showPrivacyModal]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // 입력 시 에러 클리어
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/submit-apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          companyName: formData.company,
          email: formData.email,
          contactPerson: formData.name,
          phone: formData.phone,
          inquiry: formData.message,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        // 성공 시 폼 초기화
        setFormData({
          company: '',
          email: '',
          name: '',
          phone: '',
          message: '',
        });
        alert(result.message);
      } else {
        setError(result.error || '문의 접수에 실패했습니다.');
      }
    } catch (error) {
      console.error('Submit error:', error);
      setError('네트워크 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="apply" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">문의하기</h2>
            <p className="text-gray-600">
              아래 양식을 작성해주시면 빠르게 답변드리겠습니다.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                기업명
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="기업의 회사명을 입력해주세요"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#CE2C4F] focus:border-[#CE2C4F] outline-none transition-colors"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                이메일
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@company.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#CE2C4F] focus:border-[#CE2C4F] outline-none transition-colors"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                담당자
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="담당자 이름을 입력해주세요"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#CE2C4F] focus:border-[#CE2C4F] outline-none transition-colors"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                연락처
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="010-1234-5678"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#CE2C4F] focus:border-[#CE2C4F] outline-none transition-colors"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                문의내용
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="문의 내용을 자세히 적어주세요"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#CE2C4F] focus:border-[#CE2C4F] outline-none transition-colors resize-none"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacy"
                className="mt-1 w-4 h-4 text-[#CE2C4F] border-gray-300 rounded focus:ring-[#CE2C4F]"
                required
                disabled={isSubmitting}
              />
              <div className="text-sm text-gray-600">
                <label htmlFor="privacy" className="font-medium">
                  개인정보 수집 및 활용 동의
                </label>
                <p className="mt-1">
                  귀하의 개인정보는 문의 답변 및 서비스 개선을 위해 사용됩니다.
                </p>
                <button 
                  type="button" 
                  onClick={() => setShowPrivacyModal(true)}
                  className="text-[#CE2C4F] hover:underline focus:outline-none focus:underline"
                >
                  동의서 보기
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-900 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? '제출 중...' : '제출하기'}
            </button>
          </form>
        </div>
      </div>

      {/* 개인정보 동의서 모달 */}
      {showPrivacyModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowPrivacyModal(false);
            }
          }}
        >
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] flex flex-col shadow-2xl">
            {/* 모달 헤더 */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-900">개인정보 수집 및 활용 동의서</h3>
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 p-1"
                aria-label="모달 닫기"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* 모달 내용 - 스크롤 가능 */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p className="text-gray-900 font-medium">
                  귀하는 아래의 내용을 확인하고 ㈜MASKIT inc에서 (이하 "당사") 다음과 같이 귀하의 개인정보를 수집 및 처리하는 것에 동의하며, 귀하에게 발신하는 제품 및 서비스, 이벤트 초대 또는 기타 맞춤형 정보와 관련된 이메일 또는 전화를 허용하려면 개인정보 처리에 동의해 주십시요.
                </p>
                
                <p>
                  마케팅 이메일 하단에 있는 수신 거부 링크를 사용하여 언제든지 동의를 철회할 수 있습니다. 사용자 정보를 사용하는 방식에 대한 자세한 내용은 각사의 개인정보 취급방침을 참조하십시오.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                  <div>
                    <span className="font-medium text-gray-900">[제공받는 자]</span>
                    <span className="ml-2">MASKIT inc</span>
                  </div>
                  
                  <div>
                    <span className="font-medium text-gray-900">[수집 및 이용 목적]</span>
                    <div className="mt-1 space-y-2">
                      <p>(1) 제품 정보, 고객 행사 및 세미나, 세일즈 프로모션, 공연관련 뉴스 정보 제공, 제품 교육, 새로운 서비스 안내 등의 e-mail 제공 및 전화를 통한 안내와 고객 관리 및 마케팅 활동을 목적으로 귀하의 개인정보를 수집 및 활용하는 것에 동의합니다.</p>
                      <p>(2) 귀하의 정보가 전자 마케팅 활동 및 기타 용도로 사용될 수 있고, 처리를 위해 거주 국가 이외 지역으로 전송될 수 있으며, 이러한 지역의 데이터 보호 표준이 거주 국가와 다를 수 있음을 이해하고 인정합니다.</p>
                    </div>
                  </div>
                  
                  <div>
                    <span className="font-medium text-gray-900">[수집 항목]</span>
                    <span className="ml-2">기업명, 성명, 부서, 직책, 연락처, 이메일</span>
                  </div>
                  
                  <div>
                    <span className="font-medium text-gray-900">[보유 기간]</span>
                    <span className="ml-2">정보주체의 탈회 요청 및 개인정보 활용 거부 의사 표현시까지</span>
                  </div>
                  
                  <div>
                    <span className="font-medium text-gray-900">[이용에 대한 거부권리 및 불이익]</span>
                    <span className="ml-2">귀하는 위 항목에 해당하는 개인정보의 수집 및 이용에 대한 동의를 거부할 수 있으며, 동의를 거부한 경우 상기 수집 및 이용 목적에 명시된 서비스 및 혜택은 제공되지 않습니다.</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 모달 푸터 */}
            <div className="p-6 border-t border-gray-200">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="w-full bg-[#CE2C4F] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#b8243f] transition-colors focus:outline-none focus:ring-2 focus:ring-[#CE2C4F] focus:ring-offset-2"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ApplySection;
