

# PROJECT : We&Olufsen

### • 프로젝트 소개
>**Bang & Olufsen 클론 코딩**  
https://www.bang-olufsen.com/ko/kr  
아이코닉 명품 오디오 브랜드 Bang & Olufsen가 가진 고급스러운 느낌을 담은 웹사이트  
회원가입, 로그인, 장바구니, 결제 등	커머스 사이트의 기본적인 FLOW 기능 구현

### • 작업기간 : 7월 18일 ~ 7월 29일 (2 week)

### • 팀원 소개
> wecode 35기 1차 프로젝트  
 Dev-Island TEAM  
  **FE** | 신수정, 심동규, 이현주, 정훈조  
  **BE** | 박서윤, 손찬규
 
### • 사용기술 및 협업 도구  
> FE: HTML, SCSS, Javascript, React, React-Router  
> BE: Phython, Django, MySQL  
> Common : Git&Github, AWS  
> Comunication : Notion, Slack, Trello  

### • 구현기능 및 사용 기술 소개 
![gif](https://user-images.githubusercontent.com/62737638/181909170-2f7bf398-dba9-4a8e-a60e-96a455406961.gif)

#### 1. 회원가입 페이지 (FE 정훈조)
##### - 클라이언트단 확인가능한 사항 불필요한 통신을 사전에 차단함
##### - 정규식 통해 이메일과 패스워드 조건 확인

#### 2. 로그인 페이지 (FE 정훈조)
##### - 클라이언트단 확인가능한 사항 불필요한 통신을 사전에 차단함
 
####  3. 메인 페이지 (FE 신수정)
##### - 메인 Full Banner 슬라이드 기능 구현  
메인 최상단에 위치한 슬라이드 상수데이터(MAIN_BANNER)를 사용해 map함수로 구조분해할당.     
moving을 state값으로 선언해, useEffect hook을 사용해 컴포넌트가 마운트 되었을 때    
데이터의 length값을 인식하여 슬라이드를 움직일 수 있도록 순환시킬 div에 인라인 스타일 값 적용.    
슬라이드가 3초에 한번씩 함수를 실행할 수 있도록 setInterval 함수를 이용해 구현했으며    
언마운트 시 슬라이드를 종료 할 수 있도록 clearInterval 사용.    
    
##### - 중앙 카테고리 슬라이드 기능 구현  
useRef, useState, useEffect hook을 활용한 슬라이드 구현    
상수데이터(SLIDER_NAV_DATA)를 사용해 슬라이드 가능 범위(클릭 횟수)에 제한 설정.  
슬라이드에 사용되는 동일한 모양의 버튼을 컴포넌트로 분리해    
각각의 기능을 수행할 수 있도록 className으로 스타일값을 props로 전달    
이전이미지와 다음이미지로 이동하는 로직 구현.   
##### - useRef를 이용한 돔 객체 불러오기  
슬라이드 내 이미지 width와 margin 값을 변수로 저장해 movingRange를  
slideRef의 style값으로 전달해주는 로직 구현.  

#### 4. 제품 리스트 페이지 (FE 심동규)
  
  
#### 5. 제품 상세 페이지 (FE 이현주)
##### - 장바구니 이동 모달 기능 구현  
sessionStorage.getItem(keyName) : keyName 에 해당하는 값을 리턴하며, 키가 없을때는 null 을 리턴한다.  
이 메서드를 사용해 키가 있으면 'purchase' 모달창이 열리고, 없으면 (null) 로그인 페이지로 이동하도록 구현하였다.  
모달창에 담긴 상품이 장바구니 페이지로 보내져야 하므로 API에 해당 상품에 대한 정보를 보내준다.  
fetch함수를 이용하여 정보를 보내고, result message가 ‘PUT_IN_CART_SUCCESS’ (첫상품) 또는 ‘CART_QUANTITY_CHANGED’(장바구니에 담겨있던 상품 추가 구매시) 일때 cart page로 보내지게 구현하였다.  
  
##### - 모달창 닫기 추가 기능  
켜져있는 모달창을 esc 를 눌렀을때와 모달창 영역 밖 마우스 클릭시에도 닫히게 구현하였다.  
addEventListener(type, listener) 메서드를 이용해서, 1) esc 눌렀을때와 2) 모달창 영역 밖 마우스 클릭시 모달창이 닫히게 구현하였다.  
1) e.keycode가 27이면 모달창이 닫히도록 이벤트를 주었다.  
2) 모달창 영역 밖에 해당하는 부분을 useRef를 통해 선택한 후, 해당 Element가 클릭 되었을 때만 모달창이 닫히도록 이벤트를 주었다.  
  
##### - Backend로부터 데이터 받아와서 뿌려주기  
fetch()함수를 이용하여 Backend로부터 데이터를 받아오는 기능 구현.  
고정된 api가 아닌  product id이므로 product list에서 클릭한는 상품에 따라 product id가 달라지므로 fetch(`${API주소}/${id}`) 로 구현.  
  
##### - useRef Hook을 이용한 페이지 내 위치 이동    
product detail page 내에 있는 메뉴 탭에서 각각의 메뉴 클릭시, 원하는 위치로 이동하도록 구현하였다. 
특정한 virtual Dom element를 선택하고자 할 때 useRef 훅을 사용한다.  
원하는 변수명으로 useRef()선언하고 선언하고자 하는 DOM에 ref 속성 추가해서 필요한 곳에서 변수명.current로 꺼내쓰는 로직을 사용하였다.

#### 6. 장바구니 페이지 (FE 정훈조)
##### - 아이템 수량 핸들링시 서버통신에 따라 핸들링함.
##### - 서버 pending시 후속 통신을 보류시킴
 
#### 7. my order 페이지 (FE 신수정)  
##### - sessionStorage에 저장시킨 토큰을 통해 구매내역 전달 받기  
fetch 함수의 header에 토큰을 확인하여 주문 정보 전달 받아 데이터를 맵 함수로 받는 로직 구현.  
##### - Toggle 버튼을 활용한 주문내역 상세보기 아코디언 구현
state를 Boolean값으로 받아 && 논리 연산자와 ! NOT 연산자를 활용해  
Toggle 버튼 클릭 시 컴포넌트가 보여지는 로직 구현.  
##### - 주문 취소 기능 구현 (정상 취소 시 조건부 랜더링)  
주문 삭제된 데이터를 백엔드에 전달.  
fetch함수 method 'PATCH'를 사용해 body에 order_id: item.id 상품 아이디 값을 전달.  
주문 삭제 완료 시 className의 삼항연산자를 사용해 백그라운드 컬러가 변경되도록 구현.  
(새로고침 시 백그라운드 컬러가 원복 되는 버그를 발견했으나 시간 관계상 수정하지 못하고 배포😭)  
##### - 주문 총 합계 금액 도출   
백엔드에서 전달받는 데이터를 이용해 reduce 함수를 사용한 배열 속 특정 값들의 누적 합계 도출.  
  
  
#### 8. 404 페이지  (FE 정훈조)
##### - 라우팅외 요청은 404 page로 리다이렉트

#### 9. NAV (FE 정훈조)
##### - Position sticky 활용하여 최상단 위치하게 
 
#### 10. Footer (FE 정훈조)
##### - 상수데이터 활용하여 구성
  
    
      
          

### • 참고
##### - 이 프로젝트는 Bang & Olufsen 사이트를 참조하여 학습 목적으로 만들었습니다.  
##### - 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.  
##### - 모든 사진은 저작권이 없는 사진을 사용했습니다.  
