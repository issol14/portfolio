# TODO

포트폴리오 사이트 개선 및 개인화 작업 목록

## 🎯 필수 - 개인화 작업

### 1. 개인 정보 업데이트
- [ ] `src/content/profile.ts`
  - [ ] `name`: "홍길동" → 실제 이름으로 변경
  - [ ] `role`: 실제 직무로 변경
  - [ ] `tagline`: 개인 슬로건 작성
  - [ ] `bio`: 자기소개 작성
  - [ ] `email`: 실제 이메일 주소로 변경
  - [ ] `location`: 실제 위치 변경 (필요시)
  - [ ] `resumeUrl`: 실제 이력서 파일 경로 설정
  - [ ] `socialLinks`: GitHub, LinkedIn, Twitter 실제 URL로 변경
  - [ ] `competencies`: 실제 역량으로 교체
  - [ ] `skillCategories`: 실제 기술 스택으로 업데이트
  - [ ] `experiences`: 실제 경력 사항으로 교체

### 2. 사이트 설정 업데이트
- [ ] `src/content/site.ts`
  - [ ] `name`: 사이트 이름 변경 (필요시)
  - [ ] `description`: 사이트 설명 작성
  - [ ] `url`: 실제 도메인으로 변경 (예: https://yourname.com)
  - [ ] `author`: 실제 이름으로 변경
  - [ ] `keywords`: 개인화된 키워드 추가
  - [ ] `links`: 실제 소셜 링크로 변경

### 3. 프로젝트 정보 업데이트
- [ ] `src/content/projects.ts`
  - [ ] 샘플 프로젝트 4개 → 실제 프로젝트로 교체
  - [ ] 각 프로젝트별:
    - [ ] `slug`: 고유한 URL 슬러그 설정
    - [ ] `title`, `summary`, `description`: 프로젝트 설명 작성
    - [ ] `role`, `period`: 역할 및 기간 입력
    - [ ] `tags`, `stack`: 실제 기술 스택 태그 작성
    - [ ] `highlights`: 주요 성과 작성
    - [ ] `links`: GitHub, 데모, 문서 URL 추가
    - [ ] `coverImage`: 프로젝트 이미지 경로 설정

## 🖼️ 리소스 추가

### 4. 이미지 파일 추가
- [ ] `/public/og-image.png` - 소셜 미디어 공유용 OG 이미지 생성
- [ ] `/public/resume.pdf` - 이력서 PDF 파일 추가 (또는 경로 변경)
- [ ] `/public/images/` 폴더 생성
  - [ ] 프로젝트 커버 이미지들 추가
    - [ ] `project-ai-analytics.png`
    - [ ] `project-automation.png`
    - [ ] `project-fintech.png`
    - [ ] 기타 프로젝트 이미지

## ✨ 기능 개선

### 5. 다크 모드 토글 추가
- [ ] `src/components/ui/theme-toggle.tsx` 컴포넌트 생성
- [ ] Header에 테마 전환 버튼 추가
- [ ] 로컬스토리지에 테마 설정 저장
- [ ] 시스템 테마 자동 감지 기능

### 6. 블로그 섹션 추가 (선택)
- [ ] `/src/app/blog/` 디렉토리 구조 설계
- [ ] 마크다운 파일 기반 블로그 시스템 구축
- [ ] 블로그 목록 페이지 생성
- [ ] 블로그 상세 페이지 생성
- [ ] RSS 피드 생성

### 7. 애널리틱스 연동
- [ ] Google Analytics 설정
  - [ ] GA 추적 ID 발급
  - [ ] `src/app/layout.tsx`에 GA 스크립트 추가
  - [ ] 환경 변수로 관리 (선택)

### 8. SEO 개선
- [ ] 각 페이지별 메타데이터 최적화
- [ ] 프로젝트별 OG 이미지 생성 (선택)
- [ ] JSON-LD 스키마 데이터 검증
- [ ] robots.txt 확인 및 조정

## 🚀 배포 준비

### 9. Vercel 배포
- [ ] Vercel 계정 연결
- [ ] GitHub 레포지토리 연동
- [ ] 자동 배포 설정 확인
- [ ] 환경 변수 설정 (필요시)

### 10. 도메인 연결 (선택)
- [ ] 도메인 구매
- [ ] Vercel에서 커스텀 도메인 설정
- [ ] DNS 레코드 설정
  - [ ] A 레코드: `@` → Vercel IP
  - [ ] CNAME 레코드: `www` → Vercel
- [ ] SSL 인증서 자동 발급 확인

### 11. SEO 등록
- [ ] Google Search Console 등록
  - [ ] 도메인 소유권 확인 (DNS TXT 레코드)
  - [ ] 사이트맵 제출 (`/sitemap.xml`)
  - [ ] 색인 생성 요청
- [ ] Naver 웹마스터 도구 등록 (선택)

## 🎨 UI/UX 개선 (선택)

### 12. 추가 UI 개선
- [ ] 로딩 상태 표시 (스켈레톤 UI)
- [ ] 애니메이션 개선
- [ ] 모바일 최적화 확인
- [ ] 접근성(a11y) 개선
- [ ] 페이지 전환 애니메이션

### 13. 성능 최적화
- [ ] 이미지 최적화 (WebP 변환, 압축)
- [ ] Lighthouse 점수 확인 및 개선
- [ ] Core Web Vitals 최적화
- [ ] 번들 사이즈 분석

## 📝 문서화

### 14. 문서 업데이트
- [ ] README.md 개인화
- [ ] CLAUDE.md 검토 및 보완
- [ ] 코드 주석 추가 (필요시)

## 🧪 테스트 (선택)

### 15. 테스트 추가
- [ ] Jest 설정
- [ ] 컴포넌트 단위 테스트 작성
- [ ] E2E 테스트 (Playwright/Cypress)

---

## 📌 우선순위

### 높음 (High)
1. 개인 정보 업데이트 (항목 1, 2, 3)
2. 이미지 파일 추가 (항목 4)
3. Vercel 배포 (항목 9)

### 중간 (Medium)
4. 다크 모드 토글 추가 (항목 5)
5. 애널리틱스 연동 (항목 7)
6. SEO 등록 (항목 11)

### 낮음 (Low)
7. 블로그 섹션 추가 (항목 6)
8. 도메인 연결 (항목 10)
9. UI/UX 개선 (항목 12, 13)
10. 테스트 추가 (항목 15)

---

## 📅 진행 상황

- **시작일**: 2026-01-19
- **목표 완료일**: TBD
- **현재 진행률**: 0/15 항목 완료

---

## 💡 참고사항

- 체크박스를 완료하면 `[x]`로 표시
- 우선순위가 높은 항목부터 진행 권장
- 각 항목 완료 후 커밋 권장
