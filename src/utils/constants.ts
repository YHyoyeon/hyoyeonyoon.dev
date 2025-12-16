/**
 * 프로젝트 전역 상수들
 * @deprecated 이 파일은 유지보수를 위해 남겨두었습니다. 새로운 데이터는 src/data/resume.ts를 사용하세요.
 */

export const PERSONAL_INFO = {
  NAME: "윤효연",
  EMAIL: "gydus.dev@gmail.com",
  BLOG_URL: "https://dungdung-developer.tistory.com/",
} as const;

export const CAREER_INFO = {
  START_DATE: "2022-03-01",
  SOFTNIX_START_DATE: "2023-01-01",
  QUAGGA_END_DATE: "2022-12-31",
} as const;

export const SOCIAL_LINKS = [
  {
    name: "instagram",
    url: "https://instagram.com/moxystudio",
    icon: "instagram",
  },
  {
    name: "github",
    url: "https://github.com/moxystudio",
    icon: "github",
  },
  {
    name: "dribbble",
    url: "https://dribbble.com/moxystudio",
    icon: "dribbble",
  },
  {
    name: "behance",
    url: "https://behance.net/moxystudio",
    icon: "behance",
  },
  {
    name: "facebook",
    url: "https://facebook.com/madewithmoxy",
    icon: "facebook",
  },
  {
    name: "twitter",
    url: "https://twitter.com/moxystudio",
    icon: "twitter",
  },
  {
    name: "medium",
    url: "https://medium.com/moxystudio",
    icon: "medium",
  },
  {
    name: "linkedin",
    url: "https://linkedin.com/company/moxy-studio",
    icon: "linkedin",
  },
] as const;

export const SECTIONS = [
  "hero",
  "experience",
  "skills",
  "contact",
] as const;
