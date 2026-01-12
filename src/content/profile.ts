import { Profile } from "@/types/profile";

export const profile: Profile = {
  name: "홍길동",
  role: "AI R&D Lead",
  tagline: "기술로 문제를 해결하고, 가치를 만듭니다.",
  bio: `안녕하세요, 저는 AI와 소프트웨어 개발에 열정을 가진 개발자입니다.

복잡한 문제를 단순하고 우아한 솔루션으로 해결하는 것을 좋아합니다. 스타트업부터 대기업까지 다양한 환경에서 프로덕트를 설계하고 출시한 경험이 있으며, 팀을 이끌며 함께 성장하는 것을 즐깁니다.

현재는 AI/ML 기술을 활용한 혁신적인 프로덕트 개발에 집중하고 있습니다.`,
  email: "hello@example.com",
  location: "Seoul, South Korea",
  resumeUrl: "/resume.pdf",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/username",
      icon: "Github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/username",
      icon: "Linkedin",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/username",
      icon: "Twitter",
    },
  ],
  competencies: [
    "AI/ML 시스템 설계 및 프로덕션 배포",
    "대규모 분산 시스템 아키텍처 설계",
    "풀스택 웹/모바일 애플리케이션 개발",
    "팀 리딩 및 기술 멘토링",
    "애자일/스크럼 프로젝트 관리",
  ],
  skillCategories: [
    {
      name: "Languages",
      skills: ["Python", "TypeScript", "Go", "Rust"],
    },
    {
      name: "AI/ML",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "LangChain"],
    },
    {
      name: "Frontend",
      skills: ["React", "Next.js", "Vue.js", "Tailwind CSS"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "FastAPI", "PostgreSQL", "Redis"],
    },
    {
      name: "DevOps",
      skills: ["Docker", "Kubernetes", "AWS", "GCP"],
    },
  ],
  experiences: [
    {
      company: "Tech Company A",
      role: "AI R&D Lead",
      period: "2023.01 - Present",
      description:
        "AI 기반 프로덕트의 연구개발을 총괄하며, 팀을 이끌어 혁신적인 솔루션을 만들어가고 있습니다.",
      highlights: [
        "10명 규모의 AI 팀 리딩",
        "핵심 ML 파이프라인 구축으로 개발 속도 3배 향상",
        "신규 AI 프로덕트 2개 성공적 출시",
      ],
    },
    {
      company: "Startup B",
      role: "Senior Software Engineer",
      period: "2021.03 - 2022.12",
      description:
        "초기 스타트업에서 핵심 백엔드 시스템을 설계하고 구축했습니다.",
      highlights: [
        "마이크로서비스 아키텍처 도입",
        "시스템 안정성 99.9% 달성",
        "시리즈 A 투자 유치 기여",
      ],
    },
    {
      company: "Enterprise C",
      role: "Software Engineer",
      period: "2019.01 - 2021.02",
      description:
        "대기업 환경에서 엔터프라이즈급 시스템 개발 경험을 쌓았습니다.",
      highlights: [
        "레거시 시스템 현대화 프로젝트 참여",
        "성능 최적화로 응답 시간 60% 개선",
      ],
    },
  ],
};
