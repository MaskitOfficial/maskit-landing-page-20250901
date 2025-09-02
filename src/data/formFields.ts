// /src/data/formFields.ts
export const formFields = [
  {
    name: 'spaceType',
    label: '공간 유형',
    type: 'select',
    options: [
      { label: '공연장', value: '공연장' },
      { label: '스튜디오', value: '스튜디오' },
      { label: '갤러리', value: '갤러리' },
      { label: '세미나실', value: '세미나실' },
      { label: '스포츠 시설', value: '스포츠 시설' },
      { label: '기타', value: '기타' }
    ],
    required: true
  },
  {
    name: 'spaceName',
    label: '공간 이름',
    type: 'text',
    required: true
  },
  {
    name: 'ownerName',
    label: '대표자 이름',
    type: 'text',
    required: true
  },
  {
    name: 'email',
    label: '이메일',
    type: 'email',
    required: true
  },
  {
    name: 'phone',
    label: '전화번호',
    type: 'tel',
    required: true,
    placeholder: '010-0000-0000'
  },
  {
    name: 'currentSystem',
    label: '현재 사용 중인 관리 시스템',
    type: 'select',
    options: [
      { label: '수기/메모장', value: '수기/메모장' },
      { label: '엑셀', value: '엑셀' },
      { label: '구글 캘린더', value: '구글 캘린더' },
      { label: '예약 전문 솔루션', value: '예약 전문 솔루션' },
      { label: '자체 개발 솔루션', value: '자체 개발 솔루션' },
      { label: '없음', value: '없음' }
    ],
    required: false
  },
  {
    name: 'monthlyBookings',
    label: '월 평균 예약 건수',
    type: 'select',
    options: [
      { label: '10건 미만', value: '10건 미만' },
      { label: '10-50건', value: '10-50건' },
      { label: '50-100건', value: '50-100건' },
      { label: '100-300건', value: '100-300건' },
      { label: '300건 이상', value: '300건 이상' }
    ],
    required: false
  },
  {
    name: 'ticketSales',
    label: '티켓 판매 여부',
    type: 'select',
    options: [
      { label: '예, 티켓을 판매합니다', value: '예' },
      { label: '아니오, 티켓 판매가 없습니다', value: '아니오' },
      { label: '향후 티켓 판매를 계획 중입니다', value: '계획 중' }
    ],
    required: false
  },
  {
    name: 'painPoints',
    label: '현재 예약 관리의 주요 어려움이나 개선하고 싶은 점',
    type: 'textarea',
    fullWidth: true,
    required: false,
    placeholder: '현재 겪고 계신 어려움이나 필요한 기능에 대해 알려주세요.'
  }
];
