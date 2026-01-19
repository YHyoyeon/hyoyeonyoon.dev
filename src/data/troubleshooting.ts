/**
 * 주요 트러블슈팅 사례
 * 참고자료 기반으로 작성
 */

export interface Troubleshooting {
  id: string;
  title: { ko: string; en: string };
  date: string;
  problem: { ko: string; en: string };
  solution: { ko: string; en: string };
  result: { ko: string; en: string };
  technicalDetails?: { ko: string; en: string }[];
}

export const TROUBLESHOOTING_CASES: Troubleshooting[] = [
  {
    id: "subdomain-auth",
    title: {
      ko: "서브도메인 간 인증 문제 해결",
      en: "Resolved Cross-Subdomain Authentication Issues",
    },
    date: "2025-10-23",
    problem: {
      ko: "dev2.auth.softnyx.com과 dev2.www.softnyx.com은 서브도메인이 달라서 로컬스토리지 공유 불가",
      en: "LocalStorage could not be shared between different subdomains (dev2.auth.softnyx.com and dev2.www.softnyx.com)",
    },
    solution: {
      ko: "쿠키 기반 인증으로 전환하여 서브도메인 간 인증 문제 완전 해결",
      en: "Switched to cookie-based authentication to completely resolve cross-subdomain auth issues",
    },
    result: {
      ko: "서브도메인 간 인증 문제 완전 해결, 사용자 경험 개선 및 안정적인 인증 시스템 구축",
      en: "Completely resolved auth issues, improved UX, and established a stable authentication system",
    },
    technicalDetails: [
      {
        ko: "쿠키 Domain 설정: `.softnyx.com`",
        en: "Cookie Domain setting: `.softnyx.com`",
      },
      {
        ko: "SameSite 설정으로 보안 유지",
        en: "Maintained security via SameSite setting",
      },
      {
        ko: "프론트엔드에서 쿠키에서 accessToken 파싱하여 API 호출 시 헤더에 포함",
        en: "Frontend parses accessToken from cookie and includes it in headers for API calls",
      },
    ],
  },
  {
    id: "cors-issue",
    title: {
      ko: "CORS 문제 해결",
      en: "Resolved CORS Issues",
    },
    date: "2025-12-10",
    problem: {
      ko: "마켓플레이스에서 image2 도메인 연결 시 CORS 에러 발생",
      en: "CORS error occurred when connecting to image2 domain from marketplace",
    },
    solution: {
      ko: "CloudFront Distribution 설정 확인, API Gateway CORS 정책 수정",
      en: "Checked CloudFront Distribution settings and modified API Gateway CORS policy",
    },
    result: {
      ko: "CORS 문제 완전 해결, image2 도메인 정상 연결 확인",
      en: "Completely resolved CORS issues, confirmed normal connection to image2 domain",
    },
    technicalDetails: [
      {
        ko: "CloudFront Distribution 설정 확인",
        en: "Checked CloudFront Distribution settings",
      },
      {
        ko: "API Gateway CORS 정책 수정",
        en: "Modified API Gateway CORS policy",
      },
      {
        ko: "프론트엔드 Origin 헤더 설정",
        en: "Configured Frontend Origin header",
      },
    ],
  },
  {
    id: "status-api-bug",
    title: {
      ko: "Status API 버그 수정",
      en: "Fixed Status API Bug",
    },
    date: "2025-10-28",
    problem: {
      ko: "로그인 상태 확인 API 버그 및 로그아웃 기능 문제",
      en: "Bug in login status check API and logout function issues",
    },
    solution: {
      ko: "세션 쿠키 기반으로 데이터 처리하도록 변경",
      en: "Changed data processing to be based on session cookies",
    },
    result: {
      ko: "안정적인 인증 상태 관리 구현",
      en: "Implemented stable authentication status management",
    },
    technicalDetails: [
      {
        ko: "Express 세션 미들웨어 활용",
        en: "utilized Express session middleware",
      },
      {
        ko: "쿠키 기반 세션 관리",
        en: "Cookie-based session management",
      },
      {
        ko: "에러 핸들링 강화",
        en: "Enhanced error handling",
      },
    ],
  },
  {
    id: "signup-validation",
    title: {
      ko: "회원가입 ID 유효성 검사 오류",
      en: "Signup ID Validation Error",
    },
    date: "2025-10-21",
    problem: {
      ko: "올바른 형식의 userId를 보냈는데도 400 에러 발생",
      en: "400 Error occurred even when sending valid userId format",
    },
    solution: {
      ko: "ID 검증 로직 수정",
      en: "Modified ID validation logic",
    },
    result: {
      ko: "회원가입 정상 작동",
      en: "Signup works normally",
    },
    technicalDetails: [
      {
        ko: "정규표현식 패턴 확인",
        en: "Checked Regex patterns",
      },
      {
        ko: "유효성 검사 함수 로직 점검",
        en: "Checked validation function logic",
      },
      {
        ko: "에러 메시지 정확성 확인",
        en: "Verified error message accuracy",
      },
    ],
  },
  {
    id: "db-connection",
    title: {
      ko: "NFT 라이브 데이터베이스 연결 에러",
      en: "NFT Live Database Connection Error",
    },
    date: "2025-09-26",
    problem: {
      ko: "한국시간 Sep 26, 2025 00:01:19 ~ 00:06:36까지 live NFT 데이터베이스 연결 에러 발생 (서비스 중단 시간: 5분 17초)",
      en: "Live NFT database connection error occurred from Sep 26, 2025 00:01:19 ~ 00:06:36 KST (Downtime: 5m 17s)",
    },
    solution: {
      ko: "에러 로그 분석, 데이터베이스 연결 상태 모니터링, 재발 방지 대책 수립",
      en: "Analyzed error logs, monitored DB connection status, and established prevention measures",
    },
    result: {
      ko: "문제 원인 파악 및 모니터링 강화",
      en: "Identified root cause and strengthened monitoring",
    },
    technicalDetails: [
      {
        ko: "데이터베이스 연결 풀 고갈 가능성 분석",
        en: "Analyzed potential DB connection pool exhaustion",
      },
      {
        ko: "네트워크 문제 가능성 분석",
        en: "Analyzed potential network issues",
      },
      {
        ko: "모니터링 시스템 강화",
        en: "Strengthened monitoring system",
      },
    ],
  },
  {
    id: "external-service",
    title: {
      ko: "외부 서비스 장애 대응",
      en: "External Service Outage Response",
    },
    date: "2025-10-20",
    problem: {
      ko: "Docker Hub 시스템 중단, AWS US-EAST 리전 오류",
      en: "Docker Hub system outage, AWS US-EAST region errors",
    },
    solution: {
      ko: "Docker Hub 상태 모니터링, AWS 상태 모니터링 및 영향도 분석, 대안 방안 검토",
      en: "Monitored Docker Hub/AWS status, analyzed impact, and reviewed alternatives",
    },
    result: {
      ko: "서비스 안정성 확보 및 대응 방안 수립",
      en: "Secured service stability and established response plans",
    },
    technicalDetails: [
      {
        ko: "외부 서비스 의존성 리스크 관리의 중요성",
        en: "Importance of managing external service dependency risks",
      },
      {
        ko: "대안 레지스트리 검토",
        en: "Reviewed alternative registries",
      },
      {
        ko: "로컬 빌드 옵션 준비",
        en: "Prepared local build options",
      },
    ],
  },
];

