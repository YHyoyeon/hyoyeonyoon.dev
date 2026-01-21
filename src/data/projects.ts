/**
 * 주요 프로젝트 데이터
 * 참고자료 기반으로 작성
 */

export interface Project {
  id: string;
  title: { ko: string; en: string };
  period: string; // Period usually shared or simple enough, but could be localized if format matters. Let's keep simple for now or localize if needed. Actually resume.ts generalized it.
  overview: { ko: string; en: string };
  achievements: { ko: string; en: string }[];
  technologies: string[];
  highlights?: { ko: string; en: string }[];
}

export const PROJECTS: Project[] = [
  {
    id: "portal-remaster",
    title: {
      ko: "엔터프라이즈 서버 포털",
      en: "Enterprise Server Portal",
    },
    period: "2025.07 ~ 2025.12",
    overview: {
      ko: "엔터프라이즈 서버 포털은 대규모 소프트웨어 생태계를 위한 사용자 인증, 빌링, 시스템 관리를 통합하는 정교한 웹 애플리케이션 모음입니다. 모던 모노레포 아키텍처를 기반으로 구축되어 관리자 대시보드, 사용자 포털, 인증 서비스를 단일의 응집력 있는 코드베이스로 통합했습니다.",
      en: "Enterprise Server Portal is a sophisticated suite of web applications integrating user authentication, billing, and system management for a large-scale software ecosystem. Built on a modern monorepo architecture, it unifies administrator dashboards, user portals, and authentication services into a single cohesive codebase.",
    },
    achievements: [
      {
        ko: "pnpm workspace와 Turborepo를 활용한 확장 가능한 모노레포 아키텍처 설계 (캐싱 및 병렬 실행으로 빌드 시간 40% 단축)",
        en: "Designed scalable monorepo architecture using pnpm workspace and Turborepo (Reduced build time by 40% via caching and parallel execution)",
      },
      {
        ko: "db-core, auth-core, ui-shared 등 재사용 가능한 패키지로 코드베이스 모듈화 및 4개 이상의 애플리케이션 간 일관성 확보",
        en: "Modularized codebase into reusable packages (db-core, auth-core, ui-shared) ensuring consistency across 4+ applications",
      },
      {
        ko: "백엔드 코어에 InversifyJS를 이용한 의존성 주입(DI) 구현으로 테스트 용이성 및 서비스 간 느슨한 결합 보장",
        en: "Implemented Dependency Injection (DI) in backend core using InversifyJS to ensure testability and loose coupling",
      },
      {
        ko: "Next.js 15와 React 19를 사용한 관리자 대시보드 구축 (ApexCharts 및 대화형 벡터 맵을 통한 실시간 데이터 시각화)",
        en: "Built admin dashboard using Next.js 15 and React 19 (Real-time data visualization with ApexCharts and interactive vector maps)",
      },
      {
        ko: "서버 사이드 렌더링(SSR) 및 다국어 지원(i18next)을 갖춘 고성능 인증 UI(auth-ui) 개발",
        en: "Developed high-performance Auth UI with SSR and i18next support",
      },
      {
        ko: "Tailwind CSS v4 및 Radix UI를 도입하여 반응형, 접근성, 테마 지원 디자인 시스템 구축",
        en: "Established design system using Tailwind CSS v4 and Radix UI for responsiveness, accessibility, and theming",
      },
      {
        ko: "OAuth2, JWT 관리, 다중 로그인 전략을 지원하는 중앙화된 인증 서비스 개발",
        en: "Developed centralized auth service supporting OAuth2, JWT management, and multi-login strategies",
      },
      {
        ko: "복잡한 데이터베이스 스키마 설계 (MySQL/Sequelize) 및 데이터 무결성 보장",
        en: "Designed complex database schemas (MySQL/Sequelize) ensuring data integrity",
      },
      {
        ko: "Express.js 마이크로서비스 전반의 API 엔드포인트 보안을 위한 RBAC(역할 기반 접근 제어) 미들웨어 구현",
        en: "Implemented RBAC middleware to secure API endpoints across Express.js microservices",
      },
      {
        ko: "AWS SES 연동(이메일) 및 Redis 통합(세션 관리/캐싱)",
        en: "Integrated AWS SES (Email) and Redis (Session management/Caching)",
      },
      {
        ko: "실시간 결제 처리를 위한 전용 Billing Webhook 마이크로서비스 구축 및 안정적인 이벤트 처리 보장",
        en: "Built dedicated Billing Webhook microservice ensuring reliable real-time payment event processing",
      },
      {
        ko: "Docker Compose Profiles를 활용하여 개발 환경 리소스 사용량 최적화 (필요한 서비스만 선택적 실행)",
        en: "Optimized dev environment resources using Docker Compose Profiles (Selective service execution)",
      },
      {
        ko: "ESLint, Prettier, Husky를 통한 엄격한 코드 품질 관리 및 Dependency Cruiser를 이용한 의존성 그래프 시각화",
        en: "Enforced strict code quality via ESLint, Prettier, Husky and visualized dependencies with Dependency Cruiser",
      },
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
      "AWS (SES, EC2, S3, CloudFront, Amplify)",
      "Docker & Turborepo (Compose Profiles)",
      "InversifyJS",
      "Dependency Cruiser",
      "Serverless Framework",
    ],
    highlights: [
      {
        ko: "50개 이상의 PORTAL 이슈 개발 및 완료",
        en: "Completed 50+ PORTAL development issues",
      },
      {
        ko: "서브도메인 간 인증 문제를 쿠키 기반 인증으로 해결",
        en: "Resolved cross-subdomain authentication using cookie-based auth",
      },
      {
        ko: "마이크로서비스 아키텍처 기반 인증 시스템 개발",
        en: "Developed Microservices Architecture based Authentication System",
      },
    ],
  },
  {
    id: "nft-trading",
    title: {
      ko: "NFT 마켓플레이스 트레이딩 시스템",
      en: "NFT Marketplace Trading System",
    },
    period: "2025.03 ~ 2025.05",
    overview: {
      ko: "기존 판매자 위주의 NFT 마켓플레이스를 양방향 트레이딩 시스템으로 개편하여 구매자와 판매자 모두가 능동적으로 거래할 수 있는 플랫폼으로 발전시켰습니다.",
      en: "Revamped the existing seller-focused NFT marketplace into a two-way trading system, evolving it into a platform where both buyers and sellers can actively trade.",
    },
    achievements: [
      {
        ko: "양방향 트레이딩 시스템 설계 및 구현",
        en: "Designed and implemented two-way trading system",
      },
      {
        ko: "블록체인 기반 안전한 거래 시스템 구축",
        en: "Built secure blockchain-based transaction system",
      },
      {
        ko: "사용자 경험 개선 (구매자 주도 거래 가능)",
        en: "Improved UX (Enabled buyer-driven trading)",
      },
      {
        ko: "Buy NFT 메뉴를 Trade NFT로 변경하여 판매/구매 통합 관리",
        en: "Unified actions by changing 'Buy NFT' to 'Trade NFT'",
      },
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
    title: {
      ko: "NFT 마켓플레이스 서비스 이전",
      en: "NFT Marketplace Migration",
    },
    period: "2025.12",
    overview: {
      ko: "NFT 마켓플레이스 서비스를 새로운 인프라로 이전하고 CI/CD 파이프라인을 구축하여 운영 효율성을 향상시켰습니다.",
      en: "Migrated NFT marketplace service to new infrastructure and established CI/CD pipelines to improve operational efficiency.",
    },
    achievements: [
      {
        ko: "서비스 다운타임 없이 안전한 마이그레이션 완료",
        en: "Completed safe migration with zero downtime",
      },
      {
        ko: "CI/CD 파이프라인 구축으로 배포 프로세스 자동화",
        en: "Automated deployment process with CI/CD pipelines",
      },
      {
        ko: "인프라 다이어그램 작성 및 문서화",
        en: "Created infrastructure diagrams and documentation",
      },
      {
        ko: "마켓 서버, 서비스 서버, 프론트엔드 전부 2.5.0 버전으로 업데이트 완료",
        en: "Updated market server, service server, and frontend to v2.5.0",
      },
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
    title: {
      ko: "볼리비아 우회 결제 대응",
      en: "Bolivia Bypass Payment Response",
    },
    period: "2025.06",
    overview: {
      ko: "볼리비아와 페루 간 환율 차이를 이용한 우회 결제 문제를 분석하고 대응 방안을 수립했습니다.",
      en: "Analyzed bypass payment issues using exchange rate differences between Bolivia and Peru and established response measures.",
    },
    achievements: [
      {
        ko: "우회 결제 현황 및 경로 파악",
        en: "Identified bypass payment status and routes",
      },
      {
        ko: "네오소닉스와 협의하여 가격 조율 및 제한 정책 수립",
        en: "Coordinated with Neosonyx to adjust prices and establish restriction policies",
      },
      {
        ko: "상세한 분석 보고서 작성",
        en: "Authored detailed analysis report",
      },
    ],
    technologies: [
      "데이터 분석",
      "비즈니스 리스크 분석",
    ],
  },
];

