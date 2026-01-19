/**
 * 이력서 데이터
 * 참고자료 기반으로 작성
 */


export const PERSONAL_INFO = {
  NAME: {
    ko: "윤효연",
    en: "Yoon HyoYeon",
  },
  POSITION: {
    ko: "리드 / 시니어 풀스택 엔지니어 (Lead / Senior Full Stack Engineer)",
    en: "Lead / Senior Full Stack Engineer",
  },
  EXPERIENCE: {
    ko: "2025년 3월 ~ 현재",
    en: "Mar 2025 ~ Present",
  },
  SPECIALTY: {
    ko: "백엔드 개발, 인프라 구축, DevOps, 모노레포 아키텍처, DX 최적화, 마이크로서비스",
    en: "Backend Development, Infrastructure, DevOps, Monorepo Architecture, DX Optimization, Microservices",
  },
  EMAIL: "gydus.dev@gmail.com",
  BLOG_URL: "https://dungdung-developer.tistory.com/",
  GITHUB_URL: "https://github.com/YHyoyeon",
} as const;

export const CAREER = {
  START_DATE: "2025-03-01",
  CURRENT: true,
  COMPANY: {
    ko: "㈜소프트닉스",
    en: "Softnyx Co., Ltd.",
  },
  POSITION: {
    ko: "백엔드 개발자",
    en: "Backend Developer",
  },
} as const;

export const QUANTITATIVE_ACHIEVEMENTS = {
  PORTAL_ISSUES: {
    ko: "50개 이상",
    en: "50+ Issues",
  },
  API_DEVELOPED: {
    ko: "회원가입, 로그인, 이벤트/공지, QnA, MyPage, 결제, 인증 등",
    en: "Sign-up, Login, Events/Notice, QnA, MyPage, Payments, Auth, etc.",
  },
  DEPLOYMENT_TIME_REDUCTION: {
    ko: "80%",
    en: "80%",
  },
  CI_CD_PIPELINES: {
    ko: "2개",
    en: "2 Pipelines",
  },
} as const;

