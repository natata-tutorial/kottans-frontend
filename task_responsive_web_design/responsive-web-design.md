https://web.dev/i18n/en/responsive-web-design-basics/


# Flexbox
---

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