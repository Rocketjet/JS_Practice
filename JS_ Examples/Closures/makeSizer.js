/* Давайте рассмотрим практический пример: допустим, мы хотим добавить на страницу несколько кнопок, которые будут менять размер текста. Как вариант, мы можем указать свойство font-size на элементе body в пикселах, а затем устанавливать размер прочих элементов страницы (таких, как заголовки) с использованием относительных единиц em: */

/* body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
}

h1 {
  font-size: 1.5em;
}

h2 {
  font-size: 1.2em;
} */

/*Тогда наши кнопки будут менять свойство font-size элемента body, а остальные элементы страницы просто получат это новое значение и отмасштабируют размер текста благодаря использованию относительных единиц.

Используем следующий JavaScript:*/
function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
};

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

/*Теперь size12, size14, и size16 - это функции, которые меняют размер текста в элементе body на значения 12, 14, и 16 пикселов, соответственно. После чего мы цепляем эти функции на кнопки примерно так:*/
document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;

/*
<a href="#" id="size-12">12</a>
<a href="#" id="size-14">14</a>
<a href="#" id="size-16">16</a>
*/
