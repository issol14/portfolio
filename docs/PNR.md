아래 문서는 “AI 코더(코딩 에이전트)에게 그대로 전달해서 구현까지 끝내게 하는” 작업 명세서(PRD/PNR 스타일)입니다. 요구사항이 불명확한 부분은 “기본 가정”으로 처리했고, 옵션은 “선택”으로 분리했습니다.

문서명: 개인 포트폴리오 사이트 구축 작업 명세서 (Next.js + Vercel + SEO 기본)

1. 프로젝트 개요

* 목적: 개인 포트폴리오(프로젝트/경력/소개/연락처)를 외부 공개용으로 제작하고, Vercel에 배포하여 커스텀 도메인으로 접속 가능하게 한다.
* 원칙: “예쁘고 현대적”한 UI/UX를 최우선으로 하되, 운영·모니터링·분석 등은 초기 범위에서 제외한다. 검색 노출(SEO) 기본만 적용한다.
* 대상 사용자: 채용 담당자/협업 파트너/고객이 빠르게 역량과 작업물을 파악할 수 있어야 한다.

2. 범위(Scope)
   포함

* Next.js 기반의 정적 성격 포트폴리오(SSG/ISR 중심, 서버리스 백엔드 최소화)
* 반응형 UI(모바일/태블릿/데스크탑)
* 핵심 페이지 구성(아래 IA 참고)
* 프로젝트 목록/상세(데이터 기반 관리)
* SEO 기본 세팅(메타데이터/OG/Twitter, sitemap, robots, canonical, 구조화 데이터 선택)
* Vercel 배포 및 커스텀 도메인 연결 가이드(사용자 도메인 보유)

제외(Non-goals)

* 회원가입/로그인
* DB, 관리자 CMS, 글 작성 관리 화면
* 복잡한 운영/품질(모니터링, 알림, 에러 트래킹, APM)
* 방문자 분석 도구 연동(GA 등)
* 다국어(i18n) (필요 시 2차 범위로 확장)

3. 기술 스택(필수)

* Framework: Next.js (App Router)
* Language: TypeScript
* Styling: Tailwind CSS
* UI Components: shadcn/ui (Radix 기반)
* Animation: Framer Motion (과하지 않게)
* Icons: lucide-react
* Deployment: Vercel
* Content: 로컬 데이터(우선) 기반 관리

  * 옵션 A(권장): `content/projects.ts` 같은 TS 데이터
  * 옵션 B: MDX(블로그/긴 글 필요 시)

4. 정보 구조(IA) 및 페이지 요구사항
   (1) Home (/)

* 목적: 첫 화면에서 “나는 누구인지 / 무엇을 했는지 / 무엇을 원하는지”가 10초 내 파악되게.
* 구성:

  * Hero 섹션: 이름/직무(예: AI R&D Lead)/한 줄 소개/CTA(프로젝트 보기, 연락하기)
  * Featured Projects 3~6개
  * Skills/Stack 요약(카테고리별)
  * Experience 하이라이트(최근 1~3개)
  * Contact 섹션(메일 링크)

(2) About (/about)

* 목적: 배경/가치관/강점/관심 분야를 문장으로 정리.
* 구성:

  * Profile 요약(짧은 문단)
  * Core competencies(3~6개 bullet)
  * Tech stack(태그/뱃지)
  * 링크(이력서 PDF 링크는 선택)

(3) Projects (/projects)

* 목적: 작업물 목록을 카드로 스캔 가능하게.
* 요구:

  * 프로젝트 카드: 제목, 기간(선택), 한 줄 설명, 태그, 썸네일(선택), 링크(상세)
  * 정렬: 기본 최신순(또는 중요도순)
  * 필터(선택): 태그 필터/검색(초기에는 단순 필터만)

(4) Project Detail (/projects/[slug])

* 목적: “무엇을/왜/어떻게/성과”를 스토리로 보여주기.
* 요구:

  * 문제/목표, 역할, 접근 방식, 기술 스택, 결과(지표/스크린샷), 배운 점
  * 외부 링크: GitHub/데모/문서(있는 경우)
  * OG 메타가 프로젝트별로 달라야 함(SEO/공유)

(5) Contact (/contact) (선택, Home에 포함이면 생략 가능)

* 단순 mailto 링크 + 소셜 링크(GitHub/LinkedIn 등)
* 폼 제출 백엔드는 제외. (추후 Formspree 등 연동 가능)

5. 디자인/UX 요구사항(“예쁘고 현대적” 기준)

* 전반 톤: 미니멀, 카드 기반 레이아웃, 충분한 여백, 타이포 대비.
* 다크 모드(선택): 구현해도 좋지만, 일정이 촉박하면 라이트 모드만 우선.
* 컴포넌트: shadcn/ui Button/Card/Badge/Separator/Accordion 등 활용.
* 애니메이션: Hero 진입, 카드 hover, 섹션 reveal 정도로 절제.
* 접근성: 기본 ARIA/키보드 포커스 보장(shadcn/ui 기본 준수)

6. 콘텐츠 모델(프로젝트 데이터 스키마)
   아래 필드로 “projects 데이터”를 정의하고 목록/상세를 이 데이터로부터 생성.

* slug: string (URL)
* title: string
* summary: string (카드용 1~2줄)
* description: string (상세 서문)
* role: string (예: Tech Lead)
* period: string (예: 2025.03–2025.12)
* tags: string[]
* stack: string[] (기술 스택)
* highlights: string[] (성과 bullet)
* links: { github?: string; demo?: string; doc?: string }
* coverImage?: { src: string; alt: string } (선택)
* ogImage?: string (선택; 없으면 기본 OG 사용)

7. SEO 요구사항(필수)
   (1) 공통 메타데이터

* 사이트 전역 기본 title template, description, keywords(과하지 않게), metadataBase 설정
* canonical URL 설정(도메인 기반)
* Open Graph + Twitter Card 기본값
* favicon, apple-touch-icon 포함

(2) 페이지별 메타데이터

* Home/About/Projects는 고정 메타
* Project Detail은 프로젝트 데이터 기반으로 title/description/OG가 동적으로 생성되어야 함

(3) sitemap.xml / robots.txt

* sitemap.xml 자동 생성(정적 생성 또는 빌드 시 생성)
* robots.txt: 기본적으로 크롤링 허용 + sitemap 위치 명시
* noindex는 사용하지 않음(비공개 페이지 없다는 가정)

(4) 구조화 데이터(선택, 있으면 좋음)

* Person 또는 WebSite 스키마를 JSON-LD로 1개 정도만 간단히 추가

(5) Google Search Console 등록 가이드 제공(문서로)

* “도메인 속성(DNS TXT 검증)” 기준의 등록 절차를 간단히 안내(사용자가 직접 수행)

8. 성능/정적 자산 가이드(필수 수준)

* Next/Image 사용(가능하면)
* 이미지 리사이즈/압축된 썸네일 사용(원본 대형 이미지 직접 서빙 지양)
* 폰트는 next/font 사용, 불필요한 외부 로딩 최소화

9. 배포 요구사항(Vercel)

* GitHub 레포 생성 및 연결
* main 브랜치 push 시 Production 배포
* PR 생성 시 Preview 배포 활성(기본)
* 커스텀 도메인 연결을 위한 DNS 레코드 안내 문서 포함
* 환경변수: 원칙적으로 없음(SEO/도메인 정도는 코드 상수로)

10. 산출물(Deliverables)

* GitHub 레포(빌드/실행/배포 가능 상태)
* README.md:

  * 로컬 실행 방법
  * 콘텐츠(프로젝트 데이터) 수정 방법
  * Vercel 배포 방법
  * 도메인 DNS 연결 방법(어떤 레코드를 어디에 넣는지 “값은 Vercel 화면 기준”으로 안내)
  * Search Console 등록 체크리스트
* 기본 콘텐츠(placeholder)는 넣되, 사용자가 쉽게 교체 가능하게 구조화

11. 수용 기준(Acceptance Criteria) 체크리스트

* 로컬에서 `npm run dev`로 정상 실행
* Vercel 배포 후 HTTPS로 정상 접속
* Home/About/Projects/Project Detail 네비게이션 정상
* 프로젝트 데이터 추가/수정 시 목록/상세가 자동 반영
* 페이지별 title/description이 의도대로 노출
* OG/Twitter 미리보기 정상(프로젝트 상세는 프로젝트별로 달라짐)
* sitemap.xml, robots.txt가 배포 URL에서 접근 가능
* Lighthouse 기준 치명적 경고(접근 불가, 메타 누락 등) 없을 것(점수 목표는 강제하지 않음)

12. 작업 단계 제안(권장 일정/순서)

1) Next.js 프로젝트 초기화 + Tailwind + shadcn/ui 세팅
2) IA 기반 라우팅 구성(Home/About/Projects/[slug])
3) 프로젝트 데이터 모델 구축 + 목록/상세 렌더링
4) 디자인 polishing(타이포/여백/카드/애니메이션)
5) SEO: metadata/OG + sitemap/robots + icons
6) Vercel 배포 + 도메인 연결 가이드/README 정리

참고: AI 코더에게 전달할 초기 커맨드(가이드)
아래는 “구현 시작점” 정도만 제공하고, 구체 설치는 코더가 결정해도 됩니다.

```bash
npx create-next-app@latest portfolio --ts --tailwind --eslint --app
cd portfolio
# shadcn/ui 설치는 공식 절차에 따라 진행
npm run dev
```

원하시면, 위 명세서에 “사이트 문구(한국어/영어), 섹션별 카피라이팅, 프로젝트 상세 템플릿(문단 구조)”까지 포함해 코더가 콘텐츠까지 채우기 쉽게 확장 버전으로도 작성해드릴 수 있습니다.
