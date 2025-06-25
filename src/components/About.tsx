import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, GraduationCap, Target, MapPin, Calendar, Mail, Phone } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const personalInfo = [
    { icon: Mail, label: '이메일', value: 'gydus.dev@gmail.com' },
    { icon: MapPin, label: '주소', value: '서울 강남구 테헤란로53길' },
    { icon: Calendar, label: '생년', value: '1999년생 (25세)' }
  ]

  const education = {
    school: '우송대학교 뷰티디자인경영학과',
    period: '2018.02 ~ 2022.08',
    grade: '학점 3.29/4.5',
    status: '수료'
  }

  const goals = [
    {
      type: '단기 목표',
      content: '주도적인 개발자로서 오너십 발휘'
    },
    {
      type: '장기 목표', 
      content: '백엔드뿐 아니라 프론트·인프라를 아우르는 리더로 성장'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            C#으로 개발을 시작해 현재는 TypeScript를 주력으로 하는 백엔드 개발자입니다.
            <br />
            기획부터 배포까지 전 과정을 수행한 경험이 있으며, 새로운 기술을 두려워하지 않고 도전하며 성장해왔습니다.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">개인 정보</h3>
              </div>
              
              <div className="space-y-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <info.icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-gray-600">{info.label}</span>
                      <p className="text-gray-900">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">학력</h3>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-3"
              >
                <div>
                  <h4 className="font-semibold text-gray-900">{education.school}</h4>
                  <p className="text-gray-600">{education.period}</p>
                  <p className="text-gray-600">{education.grade}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    {education.status}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Goals and Introduction */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Goals */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-purple-600" />
                <h3 className="text-2xl font-bold text-gray-900">목표</h3>
              </div>
              
              <div className="space-y-6">
                {goals.map((goal, index) => (
                  <motion.div
                    key={goal.type}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="bg-white/50 rounded-xl p-6"
                  >
                    <h4 className="font-semibold text-purple-800 mb-2">{goal.type}</h4>
                    <p className="text-gray-700 leading-relaxed">{goal.content}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills Preview */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">주요 기술 스택</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-white/50 rounded-lg p-4 text-center"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">백엔드</h4>
                  <p className="text-sm text-gray-600">TypeScript, Node.js, ASP.NET Core</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="bg-white/50 rounded-lg p-4 text-center"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">데이터베이스</h4>
                  <p className="text-sm text-gray-600">MySQL, MongoDB, MSSQL, Redis</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="bg-white/50 rounded-lg p-4 text-center"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">클라우드/인프라</h4>
                  <p className="text-sm text-gray-600">AWS, Docker, Jenkins, GitHub Actions</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="bg-white/50 rounded-lg p-4 text-center"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">기타</h4>
                  <p className="text-sm text-gray-600">DevOps, RestAPI, ELK, Git</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 