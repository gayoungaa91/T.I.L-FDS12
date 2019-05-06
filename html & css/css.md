# 3. CSS

### CSS 기본 3가지
	1. 상속
	2. 겹침
	3. 우선순위

### (1)상속
* 레이아웃에 영향을 미치는 속성이 아닌, 디자인속성만 상속됨 (font-size,background-color etc..)
* Body : 기본폰트값 1em(16px) 

### (2)겹침
* 나중에 선언된게 1순위로 적용됨 
* img는 반대순서
	
### (3)우선순위
* **구체성이 높아지면 아래에 쓰더라도 우선순위가 높아진다**
* 요소 선택자 - 1 (element)
* 클래스 선택자 - 10
* 아이디 선택자 - 100
* Inline-style - 1000
* !important - vip

### CSS의 초기화
* CSS속성이 갖고있는 기본값을 초기화 시켜줌, 페이지 최상단에 선언
#### Eric Meyer’s “Reset CSS” 2.0  http://meyerweb.com/eric/tools/css/reset  License: none (public domain)

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


