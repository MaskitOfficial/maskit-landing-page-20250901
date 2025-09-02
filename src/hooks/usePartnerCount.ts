// /src/hooks/usePartnerCount.ts
import { useState, useEffect } from 'react';

export function usePartnerCount() {
  const [data, setData] = useState<{ count: number; total: number; loading: boolean; error: string | null }>({ count: 0, total: 100, loading: true, error: null });
  
  useEffect(() => {
    const fetchPartnerCount = async () => {
      try {
        const response = await fetch('/api/partner-count');
        if (!response.ok) {
          throw new Error('Failed to fetch partner count');
        }
        
        const result = await response.json();
        setData({
          count: result.count,
          total: result.total,
          loading: false,
          error: null
        });
      } catch (err) {
        setData(prev => ({
          ...prev,
          loading: false,
          error: err instanceof Error ? err.message : '데이터를 불러오는 중 오류가 발생했습니다.'
        }));
      }
    };
    
    fetchPartnerCount();
    
    // 5분마다 업데이트 (선택사항)
    const interval = setInterval(fetchPartnerCount, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);
  
  return data;
}