import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Cloud, Settings, Zap, Shield, Globe, GitBranch } from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      title: '백엔드/서버 개발',
      icon: Code,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50',
      skills: [
        { name: 'TypeScript', level: 90, description: '주력 언어, Node.js 환경에서 풀스택 개발' },
        { name: 'Node.js', level: 85, description: '서버 개발, API 구현, 마이크로서비스' },
        { name: 'ASP.NET Core', level: 75, description: 'C# 기반 웹 API 개발' }
      ]
    },
    {
      title: '데이터베이스',
      icon: Database,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50',
      skills: [
        { name: 'MySQL', level: 85, description: '주요 RDBMS, 스키마 설계, 쿼리 최적화' },
        { name: 'MongoDB', level: 80, description: 'NoSQL 데이터베이스, 문서 기반 데이터 모델링' },
        { name: 'MSSQL', level: 75, description: 'SQL Server 관리, 스토어드 프로시저' },
        { name: 'Redis', level: 80, description: '캐싱, 세션 관리, 실시간 데이터 처리' }
      ]
    },
    {
      title: '클라우드/인프라',
      icon: Cloud,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50',
      skills: [
        { name: 'AWS', level: 85, description: 'EC2, Lambda, CloudWatch, CodeDeploy' },
        { name: 'Docker', level: 80, description: '컨테이너화, 이미지 관리, 배포 자동화' },
        { name: 'Jenkins', level: 75, description: 'CI/CD 파이프라인 구축, 자동화' },
        { name: 'GitHub Actions', level: 80, description: 'GitOps, 워크플로우 자동화' }
      ]
    },
    {
      title: '기타 기술',
      icon: Settings,
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-50',
      skills: [
        { name: 'DevOps', level: 80, description: '개발-운영 통합, 자동화, 모니터링' },
        { name: 'RestAPI', level: 90, description: 'API 설계, 문서화, 버전 관리' },
        { name: 'ELK Stack', level: 75, description: '로그 수집, 분석, 시각화' },
        { name: 'Git', level: 85, description: '버전 관리, 브랜치 전략, 협업' }
      ]
    }
  ]

  const additionalSkills = [
    { name: 'Jest', category: '테스트' },
    { name: 'Supertest', category: '테스트' },
    { name: 'Zod', category: '검증' },
    { name: 'Sinon', category: '테스트' },
    { name: 'Data Studio', category: '분석' },
    { name: 'Jira', category: '프로젝트 관리' },
    { name: 'Confluence', category: '문서화' },
    { name: 'Lambda', category: '서버리스' },
    { name: 'MemoryDB', category: '데이터베이스' },
    { name: 'Azure', category: '클라우드' },
    { name: 'LINQ', category: '데이터 처리' },
    { name: 'Swagger', category: 'API 문서화' }
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            4년간 다양한 프로젝트를 통해 습득한 기술 스택입니다.
            <br />
            백엔드 개발부터 인프라, DevOps까지 폭넓은 영역을 다룹니다.
          </p>
        </motion.div>

        {/* Main Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className={`bg-gradient-to-br ${category.bgColor} rounded-2xl p-8`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-900">{skill.name}</span>
                      <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/50 rounded-full h-3 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className={`h-3 bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">추가 기술 스택</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-sm font-medium text-gray-600 mb-1">{skill.category}</div>
                <div className="font-semibold text-gray-900">{skill.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <Code className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">4개</div>
            <div className="text-gray-600">백엔드 언어</div>
          </div>
          
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <Database className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">4개</div>
            <div className="text-gray-600">데이터베이스</div>
          </div>
          
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <Cloud className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">4개</div>
            <div className="text-gray-600">클라우드/인프라</div>
          </div>
          
          <div className="text-center p-6 bg-orange-50 rounded-xl">
            <Settings className="w-8 h-8 text-orange-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">12개</div>
            <div className="text-gray-600">추가 기술</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 