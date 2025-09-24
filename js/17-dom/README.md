# DOM

## 노드 선택(Select)
- 선택자를 활용하여 DOM에서 요소 노드 선택

### querySelector(selector)
- **선택자**와 **일치하는 첫 번째 노드** 반환
- 태그, 클래스, 아이디 등 다양한 선택자 사용 가능

#### 기본 구조
```javascript
document.querySelector(selector);
```

#### 예시
```javascript
// 태그 이름 선택자
const element = document.querySelector("p");

// 클래스 이름 선택자
const element = document.querySelector(".class-name");

// 아이디 이름 선택자
const element = document.querySelector("#id-name");

```

### querySelectorAll(selector)
- 선택자(selector)와 **일치하는 모든 노드를 저장한 NodeList(배열과 유사한)** 반환
- ```forEach()```로 반복 가능

#### 기본 구조
```javascript
document.querySelectorAll(selector);
```

#### 예시
```javascript
// 모든 p 태그 선택
const elements = document.querySelectorAll("p");

elements.forEach((element, index) => {
  console.log(`문단 ${index + 1}: ${element.textContent}`);
});
```

## 노드 조작(Manipulate)
- 선택한 노드의 텍스트와 속성 조작

### 텍스트 조작
- ```textContent``` 속성: 노드의 텍스트에 접근
- 노드 내부의 모든 텍스트를 단순한 문자열로 취급

#### 기본 구조
```html
element.textContent = "새로운 텍스트";
```

#### 예시
```javascript
const element = document.querySelector("p");

// 텍스트 읽기
console.log(element["textContent"]);

// 텍스트 수정
element["textContent"] = "새로운 텍스트";
```
- **주의 상황** : 텍스트 수정 시, 자식 노드가 모두 제거되므로 주의

### 속성 조작
- ```getAttribute()```: 노드의 속성 값 읽기 메서드
- ```setAttribute()```: 노드의 속성 값 조작 메서드
- 속성 직접 접근: ```element.속성명```으로 직접 접근 가능

#### 기본 구조
```javascript
element.getAttribute("속성명"); // 속성 값 읽기
element.setAttribute("속성명", "새로운 값"); // 속성 값 조작
element.속성명 = "새로운 값"; // 속성 값 조작
```

#### 예시
```javascript
const link = document.querySelector("a");

// 속성 값 읽기
console.log(link.getAttribute("href"));

// 속성 값 변경하기
link.setAttribute("href", "https://dailyalgo.kr");

// 속성 직접 접근
console.log(link.href);
link.href = "https://www.naver.com";
```

## HTML 인라인 이벤트 속성
- HTML 문서의 요소에 특정 이벤트 속성에 대한 이벤트 핸들러를 직접 지정하는 방법
- 하나의 이벤트 속성에 하나의 이벤트 핸들러만 등록 가능
- 구조(HTML)와 동작(JS)를 분리하는 Vanilla(기본)   JavaScript에서는 권장하지 않는 방법
- 하지만 구조와 동작을 결합하는 React에서는 권장되는 방법

#### 예시
```html
<button onclick="handleClick()">클릭하세요</button>
<script>
  function handleClick() {
    alert("버튼 클릭됨");
  }
</script>
```

### ```addEventListener()```
- 이벤트 핸들러 등록 메서드
- 하나의 이벤트 속성에 여러 이벤트 핸들러를 등록하는 방법
- 구조와 동작을 분리할 수 있어서 Vanilla JavaScript에서 가장 권장되는 방법
#### 기본구조
```java
element.addEventListener(type, handler, options);
```

#### 예시
```java
const button = document.querySelector("#my-button");

button.addEventListener("click", function (event) {
  console.log("버튼 클릭됨");
});
```

## 이벤트 객체 (Event Object)
- 발생한 이벤트(event)의 정보를 담은 이벤트 핸들러의 매개변수
- 관례적으로 ```event``` 또는 ```e```로 표기

### 주요 속성
```javaScript
element.addEventListener("click", function (event) {
  // 이벤트가 발생한 요소
  console.log(event.target);

  // 이벤트 종류
  console.log(event.type);

  // 마우스 좌표
  console.log(event.clientX, event.clientY);

  // 키보드 이벤트의 경우, 입력된 키
  console.log(event.key);
});
```
### 주요 메서드
```event.preventDefault()```
- 이벤트가 발생했을 때 기본적으로 수행되는 동작을 막는 메서드
- 예를 들면, 폼(form) 제출을 막거나 링크(a) 태그의 기본 동작을 막을 수 있음
```javaScript
<a href="<https://www.google.com>">구글로 이동</a>
<script>
  const link = document.querySelector("a");
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
</script>
```



