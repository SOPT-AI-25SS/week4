# Storm Open API 활용 예제

이 프로젝트는 [Storm Open API](https://app.apidog.com/project/689527)를 쉽게 활용하기 위한 예제 코드를 제공합니다. 문서 업로드와 질의응답 API를 간단하게 테스트해볼 수 있습니다.

## 기능

- **문서 업로드**: PDF 등의 파일을 Storm 시스템에 업로드

- **질의응답**: 업로드된 문서를 기반으로 질문하고 답변 받기

## 설치

```bash
# 저장소 클론
git clone [저장소 URL]
cd sopt-36-ai-study-week4

# 의존성 설치
npm install
```

## 환경 설정

프로젝트 루트에 `.env` 파일을 생성하고 다음 내용을 입력하세요:

```
STORM_API_KEY=your_api_key_here
STORM_DEFAULT_BUCKET_ID=your_bucket_id_here
WEBHOOK_URL=your_webhook_url_here (선택사항)
```

API 키와 버킷 ID는 Storm API 관리 콘솔에서 확인할 수 있습니다.

## 사용 방법

### 문서 업로드

```bash
# 기본 사용법
npm run upload -- [파일경로] [파서타입] [버킷ID]

# 예시
npm run upload -- sample.pdf DEFAULT 7327191997217075201
```

파라미터:

- `파일경로`: 업로드할 파일의 경로 (기본값: sample.pdf)
- `파서타입`: 문서 파싱 방식 (기본값: DEFAULT, 옵션: DEFAULT 또는 STORM_PARSE)
- `버킷ID`: 대상 버킷 ID (기본값: .env 파일에 설정된 값)

### 질문하기

```bash
# 기본 사용법
npm run ask -- "질문내용"

# 예시
npm run ask -- "강릉 막국수 맛집 알려줘"
```

## 예제 파일

`sample.pdf` 파일이 포함되어 있으며, 이 파일을 사용하여 API 테스트를 할 수 있습니다.

## 개발 정보

### 프로젝트 구조

```
src/
  ├── index.ts     # 메인 진입점
  └── functions.ts # API 호출 함수
```

### 빌드 및 실행

```bash
# 타입스크립트 컴파일
npm run build

# 개발 모드로 실행 (파일 변경 감지)
npm run dev
```

## API 문서

Storm API에 대한 더 자세한 내용은 [공식 문서](https://app.apidog.com/project/689527)를 참조하세요.

## 주의사항

- 이 프로젝트는 교육 및 테스트 목적으로 제공됩니다.
- 실제 서비스에 적용할 때는 적절한 예외 처리와 보안 설정을 추가하세요.
- API 키는 안전하게 관리하고 버전 관리 시스템에 직접 포함하지 마세요.
