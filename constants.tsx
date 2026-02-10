
import { Post, Project, SiteSettings } from './types';

export const DEFAULT_SETTINGS: SiteSettings = {
  title: "관우에너지",
  description: "지속 가능한 미래를 선도하는 태양광 에너지 파트너",
  primaryColor: "#007BFF",
  socialLinks: {
    instagram: "",
    facebook: "",
    blog: "https://blog.naver.com/gwenergy"
  }
};

export const INITIAL_POSTS: Post[] = [
  {
    id: "1",
    title: "2024 태양광 시장 전망과 정부 정책 변화",
    excerpt: "새로운 RPS 제도 변화와 탄소중립 실천을 위한 핵심 전략을 분석합니다.",
    content: "태양광 에너지 시장은 매년 급격하게 변화하고 있습니다. 특히 2024년은 탄소중립 목표 달성을 위한 정부의 강력한 의지가 반영되는 해입니다...",
    category: "산업 뉴스",
    imageUrl: "https://images.unsplash.com/photo-1509391366360-fe5bb584850a?q=80&w=800&auto=format&fit=crop",
    date: "2024.05.20"
  },
  {
    id: "2",
    title: "관우에너지, 50MW급 대규모 태양광 단지 완공",
    excerpt: "혁신적인 설계와 시공 능력을 입증하는 대규모 프로젝트가 성공적으로 완료되었습니다.",
    content: "전남 해남군 일대에 건설된 이번 단지는 효율적인 전력 생산을 위한 최신 트래커 시스템이 도입되었습니다.",
    category: "공지사항",
    imageUrl: "https://images.unsplash.com/photo-1466611653911-95282fc3656d?q=80&w=800&auto=format&fit=crop",
    date: "2024.05.15"
  }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: "p20",
    title: "솔라시도 태양광발전소",
    location: "전남 해남군",
    capacity: "98MW (ESS 300MW)",
    // 솔라시도 발전소의 독특한 대규모 레이아웃을 상징하는 고화질 항공 샷으로 교체
    imageUrl: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1200&auto=format&fit=crop",
    year: "2019"
  },
  {
    id: "p17",
    title: "예천솔라 태양광발전소",
    location: "경북 예천군",
    capacity: "6.0MW",
    imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop",
    year: "2024"
  },
  {
    id: "p16",
    title: "현대에너지 3호 발전소",
    location: "강원 삼척시",
    capacity: "3.0MW",
    imageUrl: "https://images.unsplash.com/photo-1466611653911-95282fc3656d?q=80&w=800&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: "p18",
    title: "흥천리 채움 발전소",
    location: "경북 예천군",
    capacity: "2.9MW",
    imageUrl: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=800&auto=format&fit=crop",
    year: "2024"
  },
  {
    id: "p4",
    title: "울진 광명전도 발전소",
    location: "경상북도 울진군",
    capacity: "2,000kW",
    imageUrl: "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=800&auto=format&fit=crop",
    year: "2022"
  },
  {
    id: "p11",
    title: "예산 대한통운 발전소",
    location: "충청남도 예산군",
    capacity: "1,000kW",
    imageUrl: "https://images.unsplash.com/photo-1509391366360-fe5bb584850a?q=80&w=800&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: "p19",
    title: "DSC 태양광발전소",
    location: "충남 아산시",
    capacity: "702kW",
    imageUrl: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop",
    year: "2024"
  },
  {
    id: "p6",
    title: "광명차량기지사업소",
    location: "경기도 광명시",
    capacity: "600kW",
    imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: "p3",
    title: "인천 하늘3중 태양광",
    location: "인천광역시 중구",
    capacity: "186kW",
    imageUrl: "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=800&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: "p1",
    title: "인천 하늘6고 태양광",
    location: "인천광역시 중구",
    capacity: "173kW",
    imageUrl: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=800&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: "p2",
    title: "인천 해양6초 태양광",
    location: "인천광역시 연수구",
    capacity: "147kW",
    imageUrl: "https://images.unsplash.com/photo-1509391366360-fe5bb584850a?q=80&w=800&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: "p10",
    title: "시흥시청 유휴부지",
    location: "경기도 시흥시",
    capacity: "102.6kW",
    imageUrl: "https://images.unsplash.com/photo-1466611653911-95282fc3656d?q=80&w=800&auto=format&fit=crop",
    year: "2022"
  },
  {
    id: "p9",
    title: "서울대공원 태양광",
    location: "경기도 과천시",
    capacity: "100kW",
    imageUrl: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop",
    year: "2021"
  },
  {
    id: "p12",
    title: "인천 중구청 태양광",
    location: "인천광역시 중구",
    capacity: "86kW",
    imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop",
    year: "2022"
  },
  {
    id: "p13",
    title: "인천 비즈니스고",
    location: "인천광역시 남동구",
    capacity: "76kW",
    imageUrl: "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=800&auto=format&fit=crop",
    year: "2022"
  },
  {
    id: "p7",
    title: "강원 고성정수장",
    location: "강원도 고성군",
    capacity: "70kW",
    imageUrl: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=800&auto=format&fit=crop",
    year: "2021"
  },
  {
    id: "p14",
    title: "경기 청계 유치원",
    location: "경기도 의왕시",
    capacity: "66kW",
    imageUrl: "https://images.unsplash.com/photo-1509391366360-fe5bb584850a?q=80&w=800&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: "p8",
    title: "인천체고 제2훈련동",
    location: "인천광역시 서구",
    capacity: "65kW",
    imageUrl: "https://images.unsplash.com/photo-1466611653911-95282fc3656d?q=80&w=800&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: "p15",
    title: "청람초등학교 태양광",
    location: "인천광역시 서구",
    capacity: "45.9kW",
    imageUrl: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: "p5",
    title: "여주농업기술센터",
    location: "경기도 여주시",
    capacity: "45kW",
    imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop",
    year: "2021"
  }
];
