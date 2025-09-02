// /src/hooks/useFormSubmit.ts
import { useState } from 'react';

export function useFormSubmit(endpoint: string) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (data: Record<string, unknown>) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || '제출 중 오류가 발생했습니다.');
      }
      
      setSuccess(true);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
      return null;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, success, error, submitForm };
}