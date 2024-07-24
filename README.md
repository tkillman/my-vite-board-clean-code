# entities

비지니스 핵심 로직 (view model), 파일명 규칙 \*.domain.ts

> ## dto/req,res
>
> 데이터 요청, 응답

# application

> ## controllers
>
> 사용자 요청 처리
>
> ## services
>
> 비즈니스 로직
>
> > ### services/impl
> >
> > 비즈니스 로직 구현체
>
> ## repositories
>
> 데이터 접근 방식 추상화, 도메인과 데이터 레이어 분리
>
> > ### repositories/impl
> >
> > 데이터 변경 구현체
> >
> > ### repositories/recoil
> >
> > recoil value
>
> # framework
>
> 외부 레이어
>
> > ## framework/api
> >
> > restful api 사용

# ui

화면 레이어

# wiremock

https://wiremock.org/

# wiremock template

https://wiremock.org/docs/mock-api-templates/
