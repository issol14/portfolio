# Personal Portfolio

Next.js 기반의 개인 포트폴리오 웹사이트입니다.

## 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Radix 기반)
- **Animation**: Framer Motion
- **Icons**: Lucide React

## 로컬 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start
```

개발 서버 실행 후 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 프로젝트 구조

```
src/
├── app/                    # Next.js App Router 페이지
│   ├── page.tsx           # 홈페이지
│   ├── about/             # About 페이지
│   ├── projects/          # 프로젝트 목록
│   │   └── [slug]/        # 프로젝트 상세
│   ├── contact/           # 연락처 페이지
│   ├── layout.tsx         # 루트 레이아웃
│   ├── sitemap.ts         # 자동 생성 sitemap
│   └── robots.ts          # robots.txt 설정
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Hero, Skills, Experience 등
│   └── ui/                # shadcn/ui 컴포넌트
├── content/               # 콘텐츠 데이터
│   ├── profile.ts         # 프로필 정보
│   ├── projects.ts        # 프로젝트 데이터
│   └── site.ts            # 사이트 설정
└── types/                 # TypeScript 타입 정의
```

## 콘텐츠 수정 방법

### 프로필 정보 수정

`src/content/profile.ts` 파일을 수정하세요:

```typescript
export const profile: Profile = {
  name: "이름",
  role: "직무",
  tagline: "한 줄 소개",
  bio: "상세 소개",
  email: "email@example.com",
  // ...
};
```

### 프로젝트 추가/수정

`src/content/projects.ts` 파일에서 프로젝트를 추가하거나 수정하세요:

```typescript
export const projects: Project[] = [
  {
    slug: "project-url-slug",
    title: "프로젝트 제목",
    summary: "카드에 표시될 요약",
    description: "상세 페이지 서문",
    role: "담당 역할",
    period: "2024.01 - 2024.12",
    tags: ["AI", "Web"],
    stack: ["Python", "React"],
    highlights: ["성과 1", "성과 2"],
    links: {
      github: "https://github.com/...",
      demo: "https://demo.example.com",
    },
  },
  // ...
];
```

### 사이트 설정 수정

`src/content/site.ts`에서 사이트 메타데이터를 수정하세요:

```typescript
export const siteConfig = {
  name: "Portfolio",
  description: "사이트 설명",
  url: "https://yourdomain.com",  // 실제 도메인으로 변경
  // ...
};
```

## Vercel 배포 방법

### 1. GitHub 레포지토리 연결

1. [Vercel](https://vercel.com)에 로그인
2. "Add New..." → "Project" 클릭
3. GitHub 레포지토리 선택
4. "Deploy" 클릭

### 2. 자동 배포 설정

- `main` 브랜치에 push하면 자동으로 Production 배포
- PR 생성 시 자동으로 Preview 배포

## 커스텀 도메인 연결

### 1. Vercel에서 도메인 추가

1. Vercel 프로젝트 대시보드 → "Settings" → "Domains"
2. 도메인 입력 후 "Add"

### 2. DNS 레코드 설정

도메인 등록기관(예: 가비아, Cloudflare 등)에서 다음 레코드를 추가하세요:

**A 레코드** (루트 도메인용):
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME 레코드** (www 서브도메인용):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

> Vercel 대시보드에서 정확한 값을 확인하세요. 값이 다를 수 있습니다.

### 3. SSL 인증서

Vercel이 자동으로 Let's Encrypt SSL 인증서를 발급합니다. DNS 전파 후 HTTPS가 활성화됩니다.

## Google Search Console 등록

### 1. Search Console 접속

[Google Search Console](https://search.google.com/search-console)에 접속합니다.

### 2. 속성 추가

1. "속성 추가" 클릭
2. "도메인" 선택 (권장) 또는 "URL 접두어" 선택
3. 도메인 입력

### 3. 소유권 확인 (DNS TXT 레코드 방식)

도메인 등록기관에서 다음 레코드를 추가하세요:

```
Type: TXT
Name: @
Value: google-site-verification=XXXXXX  (Search Console에서 제공)
```

### 4. 확인 완료 후

1. "확인" 버튼 클릭
2. 사이트맵 제출: `https://yourdomain.com/sitemap.xml`

### 체크리스트

- [ ] Search Console 속성 추가
- [ ] DNS TXT 레코드 추가
- [ ] 소유권 확인 완료
- [ ] 사이트맵 제출 (`/sitemap.xml`)
- [ ] 색인 생성 요청 (선택)

## 라이선스

MIT License
