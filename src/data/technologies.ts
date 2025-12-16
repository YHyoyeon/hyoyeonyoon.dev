/**
 * 기술 스택 데이터
 * 참고자료 기반으로 작성
 */

export interface TechnologyCategory {
  title: string;
  icon: string;
  color: string;
  skills: string[];
}

export const TECHNOLOGY_CATEGORIES: TechnologyCategory[] = [
  {
    title: "Backend Development",
    icon: "Server",
    color: "blue",
    skills: [
      "TypeScript 5.9.3",
      "Node.js 22.20.0",
      "Express.js 5.1.0",
      "JavaScript (ES2022)",
    ],
  },
  {
    title: "Database & Cache",
    icon: "Database",
    color: "green",
    skills: [
      "MySQL 8.0+",
      "Sequelize 6.37.7",
      "Redis 5.8.2",
      "ioredis 5.8.0",
    ],
  },
  {
    title: "Infrastructure & DevOps",
    icon: "Cloud",
    color: "orange",
    skills: [
      "AWS (EC2, S3, CloudFront, ALB, ECR, Lambda, API Gateway, SES, AMI)",
      "Docker",
      "Docker Compose",
      "Jenkins",
      "GitHub Actions",
      "Ansible",
      "Serverless Framework",
    ],
  },
  {
    title: "Authentication & Security",
    icon: "Shield",
    color: "purple",
    skills: [
      "JWT (RS256)",
      "OAuth2",
      "OIDC",
      "Firebase Admin SDK",
      "Inversify 6.2.2",
    ],
  },
  {
    title: "Validation & Testing",
    icon: "Zap",
    color: "indigo",
    skills: [
      "Zod 4.1.11",
      "Joi 17.13.3",
      "Jest",
      "Supertest",
      "Sinon",
    ],
  },
  {
    title: "Monitoring & Logging",
    icon: "Settings",
    color: "pink",
    skills: [
      "CloudWatch",
      "Sentry",
      "Winston 3.18.3",
      "ELK Stack",
      "Filebeat",
    ],
  },
  {
    title: "Frontend & Tools",
    icon: "Code",
    color: "cyan",
    skills: [
      "React",
      "Next.js",
      "Swagger",
      "pnpm 10.24.0",
      "Git",
      "draw.io",
    ],
  },
];

