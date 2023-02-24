https://web.dev/i18n/en/responsive-web-design-basics/


# Flexbox
---

https://www.youtube.com/playlist?list=PLM6XATa8CAG5mPV60dMmjMRrHVW4LmV2x

display: flex / inline-flex

justify-content: flex-start(default) / flex-end / flex-center / space-between / space-around 
// положение элементов по основной оси

align-items: stretch(default) / flex-start / flex-end /  center / baseline 
// положение элементов по дополнительной оси

align-content: flex-start / flex-end /  center / stretch / space-between / space-around 
// align-content отвечает за расстояние между рядами, в то время как align-items отвечает за то, как элементы в целом будут выровнены в контейнере.

flex-wrap: nowrap(default) / wrap / wrap-reverse

flex-flow: row wrap; 
// flex-direction и flex-wrap 

align-self: stretch(default) / flex-start / flex-end /  center / baseline 
// перезаписывает значение align-items

order: 1 
// порядок вывода элементов
 
flex-basis: auto(default) / % / px 
// базовый размер элемента, не равно ширине

flex-grow: 0(default) / 1 
//возможность элемента увеличиваться относительно его базового размера, 0 - не более flex-basis, 1 - заполнить всю доступную ширину контейнера

flex-shrink: 1(default) / 0 
// может ли элемент становиться менье базового размера, 0 - не меньше flex-basis, 1 - можно уменьшаться

flex: flex-grow flex-shrink flex-basis // короткая запись 
flex: 0 1 auto;

flex-direction: row(default), row-reverse, column, column-reverse

---

https://fls.guru/flexbox.html

# Grid Layout
----

https://www.youtube.com/watch?v=GV92IdMGFfA&list=PLM6XATa8CAG5pXQrW_kDaeZb_uIAMNZIm

	<div class="grid">
		<div class="grid__wrapper">
			<div class="grid__item"></div>
			<div class="grid__item"></div>
			<div class="grid__item"></div>
			<div class="grid__item"></div>
			<div class="grid__item"></div>
			<div class="grid__item"></div>
		</div>
	</div>

display: grid / inline-grid

grid-template: repeat(2, 1fr) / repeat(3, 1fr) // ряды / колонки
grid template: [start] "header header" 100px [row2]
	[row2] "side content" 1fr [row-end] / 150px 1fr; // ряды / колонки

grid-template-columns: 200px 150px 50%; // в px, %, fr ширина первой второй третьей колонки
grid-template-columns: auto 150px 50%; // автоматически подстраивается под контент
grid-template-columns: fit-content(100px) 150px 50%; // ограничивает запись не более fit-content
grid-template-columns: 200px minmax(150px, 1fr) 50%; // ширина второй колоники ограничена (мин шир, макс шир), можно использ fr только как макс шир
grid-template-columns: 1fr 1fr 1fr;
grid-template-columns: repeat(3, 1fr); // = 1fr 1fr 1fr;
grid-template-columns: repeat(3, 200px); // = 200px 200px 200px
grid-template-columns: 0.2fr 0.5fr 0.1fr; // меньше ширины контейнера
grid-template-columns: 33.33% 33.33% 33.33%; // = 1fr 1fr 1fr;
grid-template-columns: [start] 1fr [col2] 1fr [col3] 1fr [col-end]; //

grid template-rows: 200px 300px; // высота первой второй строки, как и колонки


	<div class="grid-wrapper">
		<div class="grid-header"></div>
		<div class="grid-side"></div>
		<div class="grid-content"></div>
	</div>

grid-template-areas:
	"header header"
	"side content";

grid-area: header; //


grid-auto-rows: 200px; // ширина неявного ряда
grid-auto-columns: 100px; // ширина неявной колонки, когда не задано явно сетки
grid-auto-flow: row / column / dense; // автоматическое размещение неявных элементов

grid-template-rows: [start] 1fr [row2] 1fr [row-end]; //
grid-template-columns: [start] 1fr [col2] 1fr [col3] 1fr [col-end]; // именование линий для колонок 

row-gap:20px; // отступы внутрь грид контейнера
column-gap: 0px;
gap: 20%;

## Grid Items

grid-row-start: 1;
grid-row-start: row2;
grid-row-end: 2;

grid-column-start: auto;
grid-column-start: col2;
grid-column-end: auto;

grid-row: start / row-end;
grid-column: 1 / 3;

order:3; // нужно задать для каждого элемента сетки

justify-items: stretch(default) / start; // выравнивание контента ячеек
align-items: stretch(default) / end;
align-self: stretch;
justify-self: stretch;

margin:auto; // по центру ячейки

---

https://fls.guru/grid.html

