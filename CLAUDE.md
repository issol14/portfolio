# CLAUDE.md

이 파일은 Claude Code(claude.ai/code)가 이 레포지토리에서 작업할 때 참고할 수 있는 가이드를 제공합니다.

## 명령어

```bash
# 개발
npm run dev          # 개발 서버 실행 (http://localhost:3000)
npm run build        # 프로덕션 빌드
npm run start        # 프로덕션 서버 실행
npm run lint         # ESLint 실행

# 참고: 현재 테스트 프레임워크는 설정되어 있지 않음
```

## 아키텍처 개요

이 프로젝트는 **Next.js 16 App Router** 기반의 포트폴리오 사이트로, **콘텐츠 중심의 정적 아키텍처**를 사용합니다. 모든 데이터는 TypeScript 파일에 저장되며 데이터베이스나 API 호출이 없습니다.

### 기술 스택
- **프레임워크**: Next.js 16.1.1 (App Router)
- **언어**: TypeScript 5 (strict mode)
- **스타일링**: Tailwind CSS v4 (OKLCH 색상 공간)
- **UI**: shadcn/ui (Radix 기반 컴포넌트)
- **애니메이션**: Framer Motion 12
- **아이콘**: Lucide React
- **사이트 언어**: 한국어 (lang="ko")

### 프로젝트 구조

```
src/
├── app/                              # Next.js 페이지 (모두 "use client")
│   ├── page.tsx                     # 홈 (Hero + 섹션들)
│   ├── layout.tsx                   # 루트 레이아웃 + 메타데이터
│   ├── about/page.tsx               # About 페이지
│   ├── projects/page.tsx            # 프로젝트 목록 (필터링 가능)
│   ├── projects/[slug]/page.tsx     # 동적 프로젝트 상세 페이지
│   ├── contact/page.tsx             # Contact 페이지
│   ├── robots.ts & sitemap.ts       # SEO 자동화
│   └── globals.css                  # Tailwind + CSS 변수
│
├── components/
│   ├── layout/                      # Header (모바일 메뉴), Footer
│   ├── sections/                    # 홈 섹션들 (Hero, Skills 등)
│   └── ui/                          # shadcn/ui 컴포넌트
│
├── content/                         # 데이터 레이어 (source of truth)
│   ├── site.ts                     # 사이트 설정, 메타데이터, OG 설정
│   ├── profile.ts                  # 개인 정보, 경력, 스킬
│   └── projects.ts                 # 프로젝트 + 헬퍼 함수
│
├── types/
│   ├── profile.ts                  # Profile, Experience, SkillCategory
│   └── project.ts                  # Project, ProjectLink, CoverImage
│
└── lib/utils.ts                     # 클래스 병합용 cn() 함수
```

## 데이터 흐름 (콘텐츠 중심 설계)

**모든 콘텐츠는 TypeScript 파일에서 정적으로 임포트됩니다:**

1. **데이터베이스 없음**: 콘텐츠는 `/src/content/*.ts`에 저장
2. **API 없음**: 데이터를 컴포넌트에서 직접 임포트
3. **타입 안전성**: 인터페이스는 `/src/types/`에 정의
4. **헬퍼 함수** (`projects.ts`):
   - `getProjectBySlug(slug)` - 단일 프로젝트 가져오기
   - `getFeaturedProjects()` - 상위 3개 프로젝트 가져오기
   - `getAllProjectSlugs()` - 정적 생성용 모든 슬러그 가져오기

**콘텐츠 수정 방법:**
- 프로필/소개/스킬 → `src/content/profile.ts` 수정
- 프로젝트 → `src/content/projects.ts` 수정
- 사이트 메타데이터/SEO → `src/content/site.ts` 수정

**새 프로젝트 추가 방법:**
1. `src/content/projects.ts`의 `projects` 배열에 항목 추가
2. 동적 페이지가 `generateStaticParams()`를 통해 자동 생성됨
3. 프로젝트는 태그별로 자동 필터링 가능

## 컴포넌트 아키텍처

### 레이아웃 컴포넌트
- **Header**: 모바일 햄버거 메뉴가 있는 고정 네비게이션, 토글용 클라이언트 상태
- **Footer**: 소셜 링크, 저작권

### 홈 페이지 섹션 (조합 가능)
모든 섹션은 스크롤 애니메이션을 위해 Framer Motion `whileInView` 사용:
- **Hero**: CTA 배너
- **FeaturedProjects**: 상위 3개 프로젝트
- **Skills**: 기술 스택 그리드 (뱃지)
- **Experience**: 타임라인
- **Contact**: CTA 섹션

### UI 컴포넌트 (shadcn/ui)
- Accordion, Badge, Button, Card, Navigation Menu, Separator
- "New York" 스타일, CSS 변수, Lucide 아이콘으로 구성
- `src/components/ui/`에 위치

## 스타일링 시스템

**Tailwind CSS v4** (PostCSS 아키텍처):

- **CSS 변수 (OKLCH)**: `globals.css`의 테마 색상
- **다크 모드**: `.dark` 클래스 선택자 (다크 테마 지원)
- **반응형**: 모바일 우선 (`sm:`, `lg:` 브레이크포인트)
- **클래스 병합**: `lib/utils.ts`의 `cn()` 함수로 Tailwind 클래스 병합

**색상 팔레트**는 현대적인 색상 연산을 위해 OKLCH 사용. 전체 테마는 `globals.css` 참고.

## SEO & 메타데이터

**내장 SEO 기능:**
- 루트 레이아웃의 Next.js Metadata API (OpenGraph, Twitter 카드)
- `JsonLd.tsx`를 통한 JSON-LD Schema (Person + WebSite)
- 프로젝트 페이지의 동적 메타데이터 (`generateMetadata`)
- 자동 생성되는 `/sitemap.xml` 및 `/robots.txt`
- 한국어 지원 (`lang="ko"`)

**주요 메타데이터 소스:**
- 기본 메타데이터: `app/layout.tsx`
- 사이트 설정: `src/content/site.ts` (제목, 설명, OG 이미지)
- 프로젝트 OG 이미지: 프로젝트별 `ogImage` 필드

## 라우팅

```
/                    → 홈 (모든 섹션)
/about               → About 페이지
/projects            → 프로젝트 목록 (태그별 필터링)
/projects/[slug]     → 동적 프로젝트 상세
/contact             → Contact 페이지
/sitemap.xml         → 자동 생성
/robots.txt          → 자동 생성
```

**동적 라우트:**
- 프로젝트 페이지는 `generateStaticParams()`로 모든 슬러그를 사전 렌더링
- 슬러그는 `getAllProjectSlugs()` 헬퍼에서 가져옴

## 개발 패턴

### React 패턴
- 모든 페이지는 `"use client"` 지시어 사용 (클라이언트 컴포넌트)
- Framer Motion: `once: true`와 함께 `whileInView` 사용 (스크롤 시 한 번 트리거)
- 내비게이션: 내부 링크는 `next/link` 사용
- 상태: 최소한의 클라이언트 상태 (Header 모바일 메뉴만)

### 코드 구성
- **Barrel exports**: `components/layout/index.ts`, `components/sections/index.ts`
- **타입 임포트**: `src/types/`에서 타입 임포트
- **콘텐츠 임포트**: `src/content/`에서 임포트

### 경로 별칭
- `@/*`는 `./src/*`에 매핑 (`tsconfig.json`에 설정)
- 예시: `import { profile } from '@/content/profile'`

## 성능 최적화

- **정적 생성**: 모든 프로젝트 페이지가 빌드 시 사전 렌더링
- **코드 분할**: Next.js의 자동 라우트별 분할
- **CSS 변수**: 런타임 오버헤드 없는 동적 테마
- **Framer Motion**: 스크롤 시 한 번만 트리거되는 애니메이션 (`once: true`)
- **반응형 이미지**: Tailwind 반응형 유틸리티

## 배포 (Vercel)

**Vercel 배포 준비 완료:**
- 환경 변수 불필요
- `main` 브랜치에 push 시 자동 배포
- PR에 대한 프리뷰 배포
- 커스텀 도메인 지원 (DNS 설정은 README 참고)

**배포 후:**
- Google Search Console에 사이트맵 제출: `/sitemap.xml`
- Vercel 대시보드에서 커스텀 도메인 설정
- Let's Encrypt를 통한 SSL 자동 프로비저닝

## 주요 커스터마이징 포인트

포트폴리오를 수정할 때:

1. **개인 정보**: `src/content/profile.ts`
2. **프로젝트**: `src/content/projects.ts`
3. **사이트 메타데이터**: `src/content/site.ts`
4. **타입 정의**: `src/types/` (데이터 구조 변경 시)
5. **스타일 테마**: `app/globals.css` (CSS 변수)
6. **UI 컴포넌트**: `src/components/ui/` (shadcn/ui)

## 중요 사항

- **테스트 프레임워크 없음**: 필요 시 Jest/Vitest 추가 가능
- **정적 콘텐츠만**: CMS, 데이터베이스, 백엔드 없음
- **한국어**: 사이트 콘텐츠는 한국어 (`lang="ko"`)
- **타입 안전성**: 모든 콘텐츠에 TypeScript 인터페이스 적용
- **모바일 반응형**: 모든 레이아웃이 모바일 화면에 적응
- **shadcn/ui**: `npx shadcn@latest add [component]`로 새 컴포넌트 추가 가능

## 일반적인 작업

**새로운 shadcn/ui 컴포넌트 추가:**
```bash
npx shadcn@latest add [component-name]
```

**프로젝트 업데이트:**
`src/content/projects.ts`에서 해당 항목 수정

**사이트 테마 색상 변경:**
`app/globals.css`의 CSS 변수 수정 (OKLCH 값)

**새 페이지 추가:**
메타데이터 export와 함께 `src/app/[page-name]/page.tsx` 생성
