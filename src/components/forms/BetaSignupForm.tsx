'use client';

// /src/components/forms/BetaSignupForm.tsx
import { useState } from 'react';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import Button from '@/components/ui/Button';
import Alert from '@/components/ui/Alert';
import { formFields } from '@/data/formFields';

export default function BetaSignupForm() {
  const [formData, setFormData] = useState({
    spaceType: '',
    spaceName: '',
    ownerName: '',
    email: '',
    phone: '',
    currentSystem: '',
    monthlyBookings: '',
    ticketSales: '',
    painPoints: ''
  });
  
  const { isSubmitting, success, error, submitForm } = useFormSubmit('/api/submit-beta');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(formData);
  };
  
  if (success) {
    return (
      <div className="bg-green-50 p-6 rounded-lg text-center">
        <h3 className="text-xl font-bold text-green-800 mb-2">신청이 완료되었습니다!</h3>
        <p className="text-green-700">
          등록하신 이메일({formData.email})로 확인 메일을 발송했습니다.
          곧 담당자가 연락드릴 예정입니다.
        </p>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <Alert type="error" message={error} />}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 폼 필드 렌더링 */}
        {formFields.map(field => (
          <div key={field.name} className={field.fullWidth ? "col-span-1 md:col-span-2" : ""}>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={field.name}>
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            
            {field.type === 'select' ? (
              <select
                id={field.name}
                name={field.name}
                value={formData[field.name as keyof typeof formData] || ''}
                onChange={handleChange}
                required={field.required}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">선택해주세요</option>
                {field.options?.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            ) : field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                value={formData[field.name as keyof typeof formData] || ''}
                onChange={handleChange}
                required={field.required}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder={field.placeholder}
              />
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={formData[field.name as keyof typeof formData] || ''}
                onChange={handleChange}
                required={field.required}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder={field.placeholder}
              />
            )}
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md shadow-md"
        >
          {isSubmitting ? '처리 중...' : '베타 파트너 신청하기'}
        </Button>
      </div>
    </form>
  );
}