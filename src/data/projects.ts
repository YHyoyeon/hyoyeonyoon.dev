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
    title: "Softnyx Portal 리마스터 프로젝트",
    period: "2025.07 ~ 2025.12",
    overview:
      "기존 www.softnyx.com 사이트를 현대적인 기술 스택으로 전면 리뉴얼하는 대규모 프로젝트입니다. 프론트엔드와 백엔드를 분리한 마이크로서비스 아키텍처로 전환하고, AWS 클라우드 인프라를 구축하여 확장성과 안정성을 확보했습니다.",
    achievements: [
      "AWS 기반 완전한 CI/CD 파이프라인 구축 (Jenkins, GitHub Actions)",
      "통합 인증 서버 구축 및 마이크로서비스 간 인증 미들웨어 개발",
      "RESTful API 개발 (회원가입, 로그인, 이벤트/공지, QnA, MyPage, 결제, 인증 등)",
      "결제 시스템 개발 (Tigo Money, Skrill, Xsolla, Payvalida 등 다중 결제사 연동)",
      "이메일 인증 시스템 구축 (Amazon SES 연동)",
      "운영툴 개발 (이벤트/공지, QnA 관리)",
      "배포 시간 80% 단축 (수동 배포 → 자동화된 CI/CD)",
    ],
    technologies: [
      "Node.js 22.20.0",
      "TypeScript 5.9.3",
      "Express.js 5.1.0",
      "MySQL 8.0+ (Sequelize)",
      "Redis 5.8.2",
      "AWS (EC2, S3, CloudFront, ALB, ECR, Lambda, API Gateway, SES)",
      "Jenkins",
      "GitHub Actions",
      "Docker",
      "Docker Compose",
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

