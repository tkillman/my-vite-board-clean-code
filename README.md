# my-vite-board-clean-code

클린 아키텍처 형태의 게시판 코드작성

# 개발용어 규칙 문서

## 목차

1. [개요](#개요)
2. [용어 규칙](#용어-규칙)
   1. [일반 용어규칙](#일반-규칙)
   2. [업무 용어규칙](#업무-용어규칙)
   3. [행위 용어규칙](#행위-용어규칙)
3. [예제](#예제)
4. [참고자료](#참고자료)

## 개요

이 문서는 프로젝트에서 사용되는 개발 용어의 규칙을 정의합니다. 모든 개발자가 일관된 용어를 사용함으로써 코드의 가독성과 유지보수성을 높이기 위한 목적을 가지고 있습니다.

## 용어 규칙

### 일반 규칙

1. **CamelCase**: CamelCase를 사용합니다.
   - 예: `useBoardCreateController`

### 업무 용어규칙

1. **board**: 게시판 업무를 나타냅니다.

### 행위 용어규칙

1. **create**: 생성
2. **update**: 수정

# 프로젝트 구조

- `/.env.development`, `/.env.production`, `/.env.staging`: Environment-specific settings.
- `/.eslintrc.cjs`: ESLint configuration for code linting.
- `/.gitignore`: Specifies intentionally untracked files to ignore.
- `/.nvmrc`: Node version manager configuration to specify Node.js version.
- `/.prettierrc`: Prettier configuration for code formatting.
- `/.vscode/settings.json`: VS Code specific settings.
- `/circleDep`: CircleCI dependency file (assumed purpose).
- `/index.html`: Entry point HTML file for the web application.
- `/package.json`: Manages the project's dependencies, scripts, and more.
- `/public/`: Folder for static files.
- `/README.md`: This file, describing the project.
- `/src/`: Source code of the application.
  - `/App.css`: Styles for the main App component.
  - `/App.tsx`: Main App component.
  - `/application/`: Contains business logic separated into controllers, repositories, and services.
  - `/assets/`: Static assets like images, fonts, etc.
  - `/entities/`: Domain entities and data transfer objects (DTOs).
    - `/board.domain.ts`: Board domain entity.
    - `/boardComment.type.ts`: Type definition for board comments.
    - `/localstorageKey.domain.ts`: Domain entity for local storage keys.
    - `/dto/`: Data Transfer Objects.
  - `/framework/`: Framework-specific code.
  - `/index.css`: Global styles.
  - `/main.tsx`: Entry point for React application.
  - `/ui/`: UI components.
  - `/vite-env.d.ts`: TypeScript declarations for Vite-specific env variables.
- `/tsconfig.app.json`, `/tsconfig.json`, `/tsconfig.node.json`: TypeScript configuration files.
- `/vite.config.ts`: Vite configuration file.
- `/wiremock/`: Mock server configuration and data for Wiremock.
  - `/__files/`: Static response files.
  - `/mappings/`: Mapping files for dynamic responses.

## Scripts

- `dev-vite`: Starts the Vite development server.
- `serve-wiremock`: Starts the Wiremock server.
- `dev`: Runs both the Vite development server and Wiremock server concurrently.
- `build`: Compiles TypeScript code and builds the project with Vite.
- `lint`: Lints the project's TypeScript and TSX files.
- `preview`: Serves the built project using Vite's preview mode.
- `ts-check`: Type-checks the project using the TypeScript compiler.

This project is set up to facilitate development with a focus on clean code principles, leveraging the power of React, TypeScript, and Vite for a modern web development experience.

# wiremock

https://wiremock.org/

# wiremock template

https://wiremock.org/docs/mock-api-templates/
