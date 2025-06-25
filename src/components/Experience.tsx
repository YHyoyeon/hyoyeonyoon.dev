import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, Calendar, MapPin, ExternalLink, Code, Database, Cloud, Settings } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experiences = [
    {
      company: '㈜소프트닉스',
      position: '백엔드팀 사원',
      period: '2023.01 ~ 재직 중',
      location: '서울',
      description: 'NFT Marketplace, 운영툴 개발, 테스트 자동화, 로그 모니터링 등 다양한 프로젝트를 담당하며 백엔드 개발 역량을 키워왔습니다.',
      achievements: [
        {
          title: 'NFT Marketplace 개발',
          description: 'Node.js + TypeScript 기반의 마켓 API 구현 (상품 등록/구매, 거래 내역 그래프 API 등)',
          icon: Code
        },
        {
          title: '운영툴 개발',
          description: '운영자 관리/이벤트 관리 등을 위한 React 제어 백엔드 API',
          icon: Settings
        },
        {
          title: '테스트 자동화',
          description: 'Jest, Supertest, Zod 등 도입',
          icon: Code
        },
        {
          title: '로그 모니터링',
          description: 'Filebeat + ELK, AWS CloudWatch + Chatbot 연동',
          icon: Cloud
        },
        {
          title: 'Redis 활용',
          description: '이벤트 랭킹/통계 페이지 캐싱',
          icon: Database
        },
        {
          title: 'CI/CD 파이프라인 구축',
          description: 'GitHub Actions, Jenkins, AWS CodeDeploy',
          icon: Cloud
        },
        {
          title: 'Lambda 기반 개발',
          description: 'MemoryDB + Lambda로 사전예약 페이지 및 메일 전송 시스템 개발',
          icon: Code
        },
        {
          title: '성과 지표 시각화',
          description: 'Looker Studio(Data Studio) 사용',
          icon: Settings
        }
      ],
      technologies: ['TypeScript', 'Node.js', 'MySQL', 'Redis', 'AWS', 'Docker', 'Jenkins', 'GitHub Actions', 'Lambda', 'ELK', 'Jest', 'Supertest', 'Zod']
    },
    {
      company: '㈜콰가',
      position: '개발팀 사원',
      period: '2022.03 ~ 2022.12 (10개월)',
      location: '서울',
      description: '.NET 기반 API 개발과 시스템 리팩토링을 통해 개발 역량을 기르고 다양한 기술 스택을 경험했습니다.',
      achievements: [
        {
          title: '.NET 기반 API 개발',
          description: '회원/기업 정보, 결제, Coin Swap, 보증 거래 API',
          icon: Code
        },
        {
          title: 'Google API 연동',
          description: '메일 확인용 API 및 라이브러리 개발',
          icon: Settings
        },
        {
          title: '이미지 파일 관리',
          description: 'Azure File 활용 CRUD 기능 제공',
          icon: Database
        },
        {
          title: '시스템 리팩토링',
          description: '로그인/토큰 버그 수정, Swagger 문서화, SVN → Git 전환',
          icon: Code
        },
        {
          title: '데이터 처리 시스템 구축',
          description: 'MongoDB + LINQ 활용해 랭킹/스케줄러 기능 구현',
          icon: Database
        }
      ],
      technologies: ['C#', 'ASP.NET Core', 'MongoDB', 'MSSQL', 'Azure', 'SVN', 'Git', 'Swagger', 'LINQ']
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            4년간 다양한 프로젝트를 통해 백엔드 개발 역량을 키워왔습니다.
            <br />
            각 회사에서 담당한 주요 프로젝트와 성과를 소개합니다.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, expIndex) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: expIndex * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Company Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-6 h-6" />
                      <h3 className="text-2xl font-bold">{exp.company}</h3>
                    </div>
                    <p className="text-xl text-blue-100 mb-2">{exp.position}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-blue-200">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.slice(0, 6).map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {exp.technologies.length > 6 && (
                      <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                        +{exp.technologies.length - 6}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Company Content */}
              <div className="p-8">
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {exp.description}
                </p>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Achievements */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-6">주요 성과</h4>
                    <div className="space-y-4">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <motion.div
                          key={achievement.title}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: expIndex * 0.2 + achievementIndex * 0.1 }}
                          className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                        >
                          <achievement.icon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">
                              {achievement.title}
                            </h5>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {achievement.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-6">사용 기술</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: expIndex * 0.2 + techIndex * 0.05 }}
                          className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700 font-medium text-sm">{tech}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Career Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">경력 요약</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">4년+</div>
              <div className="text-blue-100">총 경력</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2개사</div>
              <div className="text-blue-100">근무 회사</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-blue-100">주요 프로젝트</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 