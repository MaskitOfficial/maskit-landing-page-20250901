/**
 * 클래스명들을 결합합니다.
 */
export function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ');
  }
  
  /**
   * 숫자를 통화 형식으로 포맷합니다.
   */
  export function formatCurrency(amount: number, currency = 'KRW', locale = 'ko-KR') {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      maximumFractionDigits: 0,
    }).format(amount);
  }
  
  /**
   * 외부 URL인지 확인합니다.
   */
  export function isExternalUrl(url: string) {
    return url.startsWith('http://') || url.startsWith('https://');
  }
  
  /**
   * 텍스트를 지정된 길이로 자릅니다.
   */
  export function truncateText(text: string, maxLength: number) {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  }