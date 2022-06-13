// DOM Selection!
// A. document.getElementById() : Js tolong cariin saya elemen dengan ID tertentu, yang ada di dalam document.
// B. document.getElementsByTagName() : Js tolong cariin saya elemen2 dengan nama tag tertentu, yang ada di dalam document.
// C. document.getElementsByClassName() : Js tolong cariin saya elemen2 dengan nama class tertentu, yang ada di dalam document.

// D. document.querySelector() -> Menghasilkan element yg pertama kali ditemukan
const p4 = document.querySelector('#b p')
p4.style.color = 'green';

const li2 = document.querySelector('#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange'

// E. document.querySelectorAll() -> Menghasilkan NodeList
const pAll = document.querySelectorAll('p');

// Mengubah atau mempersempit root node
// yang awalnya document -> menjadi sectionB
const sectionB = document.getElementById('b');
const para4 = sectionB.querySelector('p');
para4.style.color = 'purple';