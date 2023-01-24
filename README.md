# vipp HOTEL

## 소개

Pinterest에 올라온 디자인을 참고하여 제작하였으며, Youtube와 Flickr, Kakao API를 사용한 홈페이지입니다.<br> 전체적인 페이지의 구성은 기업형 레이아웃에 맞춰서 제작하였습니다.


## 기술 스택

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"><img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white"><img src="https://img.shields.io/badge/Redux-Saga-3776AB?style=for-the-badge&logo=Redux-Saga&logoColor=white"><img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"><img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"><img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">

- React@17
- SASS
- Redux-saga
- React-router@5
- Axios
- Youtube API
- Flickr API
- Kakao API
- Masonry
- Framer Motion@6

---

## 홈페이지 구성

### Main

처음 방문할 떼 큰 사진이 바로 보이기 때문에 웹 접근성을 고려하여 이미지의 전체적인 색을 어둡게 조정하였습니다.
메인에는 총 2개의 슬라이더가 존재하며, 첫번쩨 슬라이더는 로컬에 저장된 이미지를 무한으로 보여주는 슬라이더입니다.
두번째 슬라이더는 Flickr로부터 받아온 이미지를 전역상태로 관리하여 정해진 수치만큼 좌우로 움직이는 슬라이더입니다.

### Department

멤버들의 정보를 외부에서 받아오는 받아오는 방식으로 구현하였으며, 멤버들의 데이터를 리덕스를 통해 전역으로 관리할 수 가 있다.
인물사진이 hover가 되었을 시 카드처럼 돌아가는 효과를 볼 수 있습니다. 또한 동적으로 Flex의 순서 부여헸기 때문에 반응형에 따라 인물들의 순서와 텍스트 박스의 순서가 바뀌는 것을 확인할 수 있습니다.

### Youtube

리덕스 사가를 활용하여 유튜브로부터 받아온 데이터를 전역 상태에서 관리할 수 있습니다.
총 3개의 카테고리로 나눠어져 있어 카테고리 별로 해당하는 데이터를 받아와 Youtube에 직접가지 않고 팝업창을 통해 해당 싸이트에서 바로 유튜브 영상을 시청할 수 있습니다.
기본 6개의 영상만 호출을 하며, 현재 해당하는 카테고리의 영상을 더 보고싶다면 화살표 버튼을 클릭하여 추가적으로 영상을 더 불러올 수 있습니다.

### Gallery

플리커로부터 받아온 데이터를 활용한 형태로 제작하였습니다. 플리커 데이터는 Main 페이지에서 미리 불러왔기 때문에 해당 페이지에서는 리덕스 사가를 활용하여 전역상태에서 불러오기만 하여 보여주고 있습니다.
책갈피의 느낌으로 제작하였으며 해당 요소를 클릭하면 보다 큰 이미지로 확인할 수 있습니다.

### Contact

해당 페이지는 Form형태의 컴포넌트와 Map형태의 컴포넌트로 구성되어 있습니다.
<b>Form</b>형태의 컴포넌트는 각각의 정보를 클릭하여 제출시에 유효성을 검사하여 통과하지 못한 항목 아래에 경고 문구가 출력되며, 유효성 검사가 통과하면 경고 문구가 사라지고 있습니다.
<b>Map</b>형태의 컴포넌트는 카카오 API를 불러와 지도를 보여주고 있습니다.
총 3개의 버튼이 있어 지역 버튼을 클릭시에 해당 버튼에 맞는 데이터로 요청을 하여 각각에 맞는 지도를 보여주고 있습니다.

## 부가적인 파일

### anime.js

CRP를 생각하며 엘리먼트가 60프레임 이내로 동작하게 하기 위하여 제작한 코드입니다.
클래스 형태로 만들어져 있기에 좌우로 움직이는 것 뿐만 아니라 여러가지 움직임을 제어할 수 있는 파일입니다.

### Navbar_tablet.js

헤더에서 메뉴 버튼을 클릭하면 나오는 메뉴로 해당 컴포넌트는 리덕스를 사용하여 전역으로 관리되고 있습니다. Header.js에서 메뉴 버튼을 클릭하면 버튼에는 AciteStyle이 적용되며 동시에 Navbar_tablet컴포넌트가 동작하여 보여집니다.

### Modal.js

유튜브 페이지와 갤러리 페이지에서 엘리먼트를 클릭하면 해당 엘리먼트가 화면 전체에 팝업 형태로 보여지는 컴포넌트입니다. forwardRef를 사용하여 구현되어 있기 때문에 자신의 상태를 직접 관리하고 있습니다.

### Layout.js

Main 페이지를 제외한 sub 페이지의 레이아웃을 담당하는 파일입니다.

## 개선점과 해결과정

1. Modal.js를 만들면서 Modal을 사용하는 컴포넌트에서 Modal컴포넌트의 상태를 관리했기 때문에 <br> Modal.js에다가 상태를 관리하는 콜백을 전달하여 Modal.js에 Close버튼이 클릭되면 해당 콜백을 실행해 Modal을 사용하는 부모 컴포넌트에서 State를 조작하는 형태로 만들었다. <br>

   <b>해결방안</b>: forwardRef를 사용하여 Modal State를 다른 파일에서 관리하는 것이 아닌 Modal 자체에서 관리하게 변경하였으며, 이로인해 불필요한 콜백과 useState사용을 줄일 수 있었습니다.

2. Header.js에 존재하는 메뉴 버튼을 클릭하면 Navbar_tablet.js파일의 state가 true가 되며 화면에 보여지는 형태입니다. <br>

   초기에는 Main과 Sub에 각각 만들어 놓았지만 이로인하여 서브 페이지에서 메인 페이지로 이동할 떄 메뉴가 끊기는 현상이 있었습니다. 이를 해결하기 위해 forwardRef를 사용하여 App.js에 위치 시킨 후 prop으로 Main과 Sub에 전달하였습니다. 이 방법으로 끊김은 해결하였지만 prop-drilling이 발생했습니다.페이지의 구조가 복잡하지 않아 크게 상관은 없었지만 추후에 프로젝트가 커졌을 때를 위해 해결해보고자 하였습니다. <br>

   <b>해결방안</b>: redux-saga를 사용중이였기에 Navbar_tablet의 상태를 전역으로 관리하면 좋겠다고 생각하여 Navbar_tablet에 redux-saga를 적용하여 state를 전역으로 관리해보았습니다. 이렇게 함으로써 불필요한 prop-drilling을 해결하였고, 끊기는 현상또한 해결하였습니다.
