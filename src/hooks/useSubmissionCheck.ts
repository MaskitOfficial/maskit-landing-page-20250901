// /src/hooks/useSubmissionCheck.ts
import { useState } from 'react';

export function useSubmissionCheck() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [emailLogs, setEmailLogs] = useState<any[]>([]);

  const checkSubmissions = async (apiKey: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/check-submissions', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || '데이터 조회 중 오류가 발생했습니다.');
      }
      
      setSubmissions(result.sheetData?.data || []);
      setEmailLogs(result.emailLogs?.logs || []);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, submissions, emailLogs, checkSubmissions };
}
