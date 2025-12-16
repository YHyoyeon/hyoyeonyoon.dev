/**
 * 주요 트러블슈팅 사례
 * 참고자료 기반으로 작성
 */

export interface Troubleshooting {
  id: string;
  title: string;
  date: string;
  problem: string;
  solution: string;
  result: string;
  technicalDetails?: string[];
}

export const TROUBLESHOOTING_CASES: Troubleshooting[] = [
  {
    id: "subdomain-auth",
    title: "서브도메인 간 인증 문제 해결",
    date: "2025-10-23",
    problem:
      "dev2.auth.softnyx.com과 dev2.www.softnyx.com은 서브도메인이 달라서 로컬스토리지 공유 불가",
    solution:
      "쿠키 기반 인증으로 전환하여 서브도메인 간 인증 문제 완전 해결",
    result:
      "서브도메인 간 인증 문제 완전 해결, 사용자 경험 개선 및 안정적인 인증 시스템 구축",
    technicalDetails: [
      "쿠키 Domain 설정: `.softnyx.com`",
      "SameSite 설정으로 보안 유지",
      "프론트엔드에서 쿠키에서 accessToken 파싱하여 API 호출 시 헤더에 포함",
    ],
  },
  {
    id: "cors-issue",
    title: "CORS 문제 해결",
    date: "2025-12-10",
    problem: "마켓플레이스에서 image2 도메인 연결 시 CORS 에러 발생",
    solution:
      "CloudFront Distribution 설정 확인, API Gateway CORS 정책 수정",
    result: "CORS 문제 완전 해결, image2 도메인 정상 연결 확인",
    technicalDetails: [
      "CloudFront Distribution 설정 확인",
      "API Gateway CORS 정책 수정",
      "프론트엔드 Origin 헤더 설정",
    ],
  },
  {
    id: "status-api-bug",
    title: "Status API 버그 수정",
    date: "2025-10-28",
    problem: "로그인 상태 확인 API 버그 및 로그아웃 기능 문제",
    solution: "세션 쿠키 기반으로 데이터 처리하도록 변경",
    result: "안정적인 인증 상태 관리 구현",
    technicalDetails: [
      "Express 세션 미들웨어 활용",
      "쿠키 기반 세션 관리",
      "에러 핸들링 강화",
    ],
  },
  {
    id: "signup-validation",
    title: "회원가입 ID 유효성 검사 오류",
    date: "2025-10-21",
    problem: "올바른 형식의 userId를 보냈는데도 400 에러 발생",
    solution: "ID 검증 로직 수정",
    result: "회원가입 정상 작동",
    technicalDetails: [
      "정규표현식 패턴 확인",
      "유효성 검사 함수 로직 점검",
      "에러 메시지 정확성 확인",
    ],
  },
  {
    id: "db-connection",
    title: "NFT 라이브 데이터베이스 연결 에러",
    date: "2025-09-26",
    problem:
      "한국시간 Sep 26, 2025 00:01:19 ~ 00:06:36까지 live NFT 데이터베이스 연결 에러 발생 (서비스 중단 시간: 5분 17초)",
    solution:
      "에러 로그 분석, 데이터베이스 연결 상태 모니터링, 재발 방지 대책 수립",
    result: "문제 원인 파악 및 모니터링 강화",
    technicalDetails: [
      "데이터베이스 연결 풀 고갈 가능성 분석",
      "네트워크 문제 가능성 분석",
      "모니터링 시스템 강화",
    ],
  },
  {
    id: "external-service",
    title: "외부 서비스 장애 대응",
    date: "2025-10-20",
    problem: "Docker Hub 시스템 중단, AWS US-EAST 리전 오류",
    solution:
      "Docker Hub 상태 모니터링, AWS 상태 모니터링 및 영향도 분석, 대안 방안 검토",
    result: "서비스 안정성 확보 및 대응 방안 수립",
    technicalDetails: [
      "외부 서비스 의존성 리스크 관리의 중요성",
      "대안 레지스트리 검토",
      "로컬 빌드 옵션 준비",
    ],
  },
];

