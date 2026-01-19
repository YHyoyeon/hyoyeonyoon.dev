/**
 * 주요 프로젝트 데이터
 * 참고자료 기반으로 작성
 */

export interface Project {
  id: string;
  title: string;
  period: string;
  overview: string;
  achievements: string[];
  technologies: string[];
  highlights?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "portal-remaster",
    title: "엔터프라이즈 서버 포털 (Enterprise Server Portal)",
    period: "2025.07 ~ 2025.12",
    overview:
      "엔터프라이즈 서버 포털은 대규모 소프트웨어 생태계를 위한 사용자 인증, 빌링, 시스템 관리를 통합하는 정교한 웹 애플리케이션 모음입니다. 모던 모노레포 아키텍처를 기반으로 구축되어 관리자 대시보드, 사용자 포털, 인증 서비스를 단일의 응집력 있는 코드베이스로 통합했습니다.",
    achievements: [
      "pnpm workspace와 Turborepo를 활용한 확장 가능한 모노레포 아키텍처 설계 (캐싱 및 병렬 실행으로 빌드 시간 40% 단축)",
      "db-core, auth-core, ui-shared 등 재사용 가능한 패키지로 코드베이스 모듈화 및 4개 이상의 애플리케이션 간 일관성 확보",
      "백엔드 코어에 InversifyJS를 이용한 의존성 주입(DI) 구현으로 테스트 용이성 및 서비스 간 느슨한 결합 보장",
      "Next.js 15와 React 19를 사용한 관리자 대시보드 구축 (ApexCharts 및 대화형 벡터 맵을 통한 실시간 데이터 시각화)",
      "서버 사이드 렌더링(SSR) 및 다국어 지원(i18next)을 갖춘 고성능 인증 UI(auth-ui) 개발",
      "Tailwind CSS v4 및 Radix UI를 도입하여 반응형, 접근성, 테마 지원 디자인 시스템 구축",
      "OAuth2, JWT 관리, 다중 로그인 전략을 지원하는 중앙화된 인증 서비스 개발",
      "복잡한 데이터베이스 스키마 설계 (MySQL/Sequelize) 및 데이터 무결성 보장",
      "Express.js 마이크로서비스 전반의 API 엔드포인트 보안을 위한 RBAC(역할 기반 접근 제어) 미들웨어 구현",
      "AWS SES 연동(이메일) 및 Redis 통합(세션 관리/캐싱)",
      "ESLint, Prettier, Husky를 통한 엄격한 코드 품질 관리 및 Dependency Cruiser를 이용한 의존성 그래프 시각화",
    ],
    technologies: [
      "Node.js 22.20.0",
      "TypeScript 5.9.3",
      "Express.js 5.1.0",
      "Next.js 15",
      "React 19",
      "Tailwind CSS v4",
      "MySQL 8.0+ (Sequelize)",
      "Redis 5.8.2",
      "AWS (SES, EC2, S3, CloudFront)",
      "Docker & Turborepo",
      "InversifyJS",
      "Dependency Cruiser",
    ],
    highlights: [
      "50개 이상의 PORTAL 이슈 개발 및 완료",
      "서브도메인 간 인증 문제를 쿠키 기반 인증으로 해결",
      "마이크로서비스 아키텍처 기반 인증 시스템 개발",
    ],
  },
  {
    id: "nft-trading",
    title: "NFT 마켓플레이스 트레이딩 시스템",
    period: "2025.03 ~ 2025.05",
    overview:
      "기존 판매자 위주의 NFT 마켓플레이스를 양방향 트레이딩 시스템으로 개편하여 구매자와 판매자 모두가 능동적으로 거래할 수 있는 플랫폼으로 발전시켰습니다.",
    achievements: [
      "양방향 트레이딩 시스템 설계 및 구현",
      "블록체인 기반 안전한 거래 시스템 구축",
      "사용자 경험 개선 (구매자 주도 거래 가능)",
      "Buy NFT 메뉴를 Trade NFT로 변경하여 판매/구매 통합 관리",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "OpenFort API",
      "Blockchain",
    ],
  },
  {
    id: "nft-migration",
    title: "NFT 마켓플레이스 서비스 이전",
    period: "2025.12",
    overview:
      "NFT 마켓플레이스 서비스를 새로운 인프라로 이전하고 CI/CD 파이프라인을 구축하여 운영 효율성을 향상시켰습니다.",
    achievements: [
      "서비스 다운타임 없이 안전한 마이그레이션 완료",
      "CI/CD 파이프라인 구축으로 배포 프로세스 자동화",
      "인프라 다이어그램 작성 및 문서화",
      "마켓 서버, 서비스 서버, 프론트엔드 전부 2.5.0 버전으로 업데이트 완료",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "React",
      "GitHub Actions",
      "Jenkins",
      "AWS",
    ],
  },
  {
    id: "bolivia-payment",
    title: "볼리비아 우회 결제 대응",
    period: "2025.06",
    overview:
      "볼리비아와 페루 간 환율 차이를 이용한 우회 결제 문제를 분석하고 대응 방안을 수립했습니다.",
    achievements: [
      "우회 결제 현황 및 경로 파악",
      "네오소닉스와 협의하여 가격 조율 및 제한 정책 수립",
      "상세한 분석 보고서 작성",
    ],
    technologies: [
      "데이터 분석",
      "비즈니스 리스크 분석",
    ],
  },
];

