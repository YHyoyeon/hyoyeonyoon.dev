/**
 * 날짜 관련 유틸리티 함수들
 */

/**
 * 시작일부터 현재까지의 기간을 계산하여 한국어로 반환
 * @param startDate - 시작일 (YYYY-MM-DD 형식)
 * @param endDate - 종료일 (선택사항, 없으면 현재 날짜)
 * @returns 한국어 기간 문자열 (예: "2년 3개월")
 */
export const calculateDuration = (
  startDate: string,
  endDate?: string,
): string => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const years = Math.floor(diffDays / 365);
  const months = Math.floor((diffDays % 365) / 30);

  if (years > 0 && months > 0) {
    return `${years}년 ${months}개월`;
  }
  if (years > 0) {
    return `${years}년`;
  }
  if (months > 0) {
    return `${months}개월`;
  }
  return `${diffDays}일`;
};

/**
 * 경력 시작일부터 현재까지의 총 경력 기간 계산
 */
export const getTotalExperience = (): string => {
  return calculateDuration("2022-03-01");
};

/**
 * 소프트닉스 재직 기간 계산
 */
export const getSoftnixDuration = (): string => {
  return calculateDuration("2023-01-01");
};
