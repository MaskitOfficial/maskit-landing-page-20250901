// 일반적인 컴포넌트 props 타입
export interface SectionProps {
    className?: string;
    id?: string;
  }
  
  // 버튼 컴포넌트 타입
  export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'outline' | 'text';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    fullWidth?: boolean;
  }
  
  // 제품 / 서비스 타입
  export interface Product {
    id: string;
    title: string;
    description: string;
    features: string[];
    price?: {
      amount: number;
      currency: string;
      period?: string;
    };
    isPopular?: boolean;
  }
  
  // 고객 후기 타입
  export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    role: string;
    company: string;
    avatarUrl?: string;
  }
  
  // FAQ 항목 타입
  export interface FaqItem {
    id: string;
    question: string;
    answer: string;
  }
  
  // 기능 항목 타입
  export interface Feature {
    id: string;
    icon: string;
    title: string;
    description: string;
    imageUrl?: string;
  }
  
  // 베타 신청 폼 데이터 타입
  export interface BetaSignupData {
    spaceType: string;
    spaceName: string;
    ownerName: string;
    email: string;
    phone: string;
    currentSystem: string;
    monthlyBookings: string;
    ticketSales: string;
    painPoints: string;
    [key: string]: string;
  }
  
  // 일반 문의 폼 데이터 타입
  export interface ContactFormData {
    timestamp: string;
    companyName: string;
    email: string;
    contactPerson: string;
    phone: string;
    inquiry: string;
    [key: string]: string;
  }
  
  // 구글 시트 응답 타입
  export interface SheetResponse<T> {
    success: boolean;
    data?: T[];
    rowCount?: number;
    error?: string;
    messageId?: string;
  }
  
  // 구글 시트에서 받은 제출 데이터 타입 (BetaSignupData 확장)
  export interface SubmissionData extends BetaSignupData {
    Timestamp: string;
  }
  
  // 이메일 로그 타입
  export interface EmailLog {
    timestamp: string;
    recipient: string;
    subject: string;
    status: string;
    data?: Record<string, unknown>;
  }