import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "ai-powered-analytics",
    title: "AI-Powered Analytics Platform",
    summary: "기업용 데이터 분석 플랫폼에 AI 기반 예측 기능을 구축했습니다.",
    description:
      "대규모 기업 데이터를 실시간으로 분석하고, 머신러닝 모델을 통해 비즈니스 인사이트를 제공하는 플랫폼을 설계하고 개발했습니다. 사용자 친화적인 대시보드와 자동화된 리포팅 시스템을 구현하여 의사결정 속도를 크게 향상시켰습니다.",
    role: "Tech Lead",
    period: "2024.01 - 2024.12",
    tags: ["AI/ML", "Data Analytics", "Enterprise"],
    stack: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS"],
    highlights: [
      "예측 정확도 92% 달성",
      "데이터 처리 시간 70% 단축",
      "월간 활성 사용자 5,000명 확보",
    ],
    links: {
      github: "https://github.com/username/ai-analytics",
      demo: "https://demo.example.com",
    },
    coverImage: {
      src: "/images/project-ai-analytics.png",
      alt: "AI Analytics Platform Dashboard",
    },
  },
  {
    slug: "smart-automation-system",
    title: "Smart Automation System",
    summary: "IoT 디바이스 연동 자동화 시스템을 설계하고 구현했습니다.",
    description:
      "수백 개의 IoT 센서와 연동하여 실시간 모니터링 및 자동 제어가 가능한 스마트 자동화 시스템을 구축했습니다. 마이크로서비스 아키텍처를 도입하여 확장성과 안정성을 확보했습니다.",
    role: "Backend Developer",
    period: "2023.06 - 2023.12",
    tags: ["IoT", "Automation", "Microservices"],
    stack: ["Go", "MQTT", "Kubernetes", "InfluxDB", "Grafana"],
    highlights: [
      "시스템 가동률 99.9% 달성",
      "실시간 데이터 처리 latency 50ms 이하",
      "운영 비용 40% 절감",
    ],
    links: {
      github: "https://github.com/username/smart-automation",
      doc: "https://docs.example.com",
    },
    coverImage: {
      src: "/images/project-automation.png",
      alt: "Smart Automation System Architecture",
    },
  },
  {
    slug: "mobile-fintech-app",
    title: "Mobile Fintech Application",
    summary: "간편 결제 및 자산 관리 기능을 갖춘 핀테크 앱을 개발했습니다.",
    description:
      "사용자 경험을 최우선으로 고려한 모바일 핀테크 애플리케이션을 개발했습니다. 생체인증, QR 결제, 자산 포트폴리오 관리 등 핵심 기능을 구현하고, 보안 인증을 통과했습니다.",
    role: "Full-stack Developer",
    period: "2023.01 - 2023.05",
    tags: ["Fintech", "Mobile", "Security"],
    stack: ["React Native", "Node.js", "MongoDB", "Redis", "Firebase"],
    highlights: [
      "앱스토어 평점 4.8점 획득",
      "보안 취약점 0건으로 인증 통과",
      "다운로드 10만 건 달성",
    ],
    links: {
      demo: "https://app.example.com",
    },
    coverImage: {
      src: "/images/project-fintech.png",
      alt: "Fintech App Screenshots",
    },
  },
  {
    slug: "content-recommendation-engine",
    title: "Content Recommendation Engine",
    summary: "개인화된 콘텐츠 추천 엔진을 설계하고 최적화했습니다.",
    description:
      "협업 필터링과 콘텐츠 기반 필터링을 결합한 하이브리드 추천 시스템을 구축했습니다. A/B 테스팅을 통해 지속적으로 알고리즘을 개선하고, 사용자 참여도를 크게 향상시켰습니다.",
    role: "ML Engineer",
    period: "2022.08 - 2022.12",
    tags: ["Recommendation", "Machine Learning", "Big Data"],
    stack: ["Python", "Spark", "Kafka", "Elasticsearch", "Docker"],
    highlights: [
      "클릭률 35% 향상",
      "체류 시간 25% 증가",
      "일일 추천 처리량 1억 건",
    ],
    links: {
      github: "https://github.com/username/recommendation-engine",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export function getFeaturedProjects(count: number = 3): Project[] {
  return projects.slice(0, count);
}
