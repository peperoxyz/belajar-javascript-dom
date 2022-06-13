// DOM Manipulation (Elements)

const judul = document.getElementById('judul');
judul.innerHTML = ('<em>Halo Dea, semangat terus ya!</em>');

const sectionA = document.querySelector('section#a');
sectionA.innerHTML = ('Hello World!');

const judul = document.getElementById('judul');
judul.setAttribute('name', 'dea'); 

const a = document.querySelector('a');
a.setAttribute('id', 'link');

const p2 = document.querySelector('.p2');
// p2.classList.remove('label');
p2.classList.toggle('label');
p2.classList.toggle('label');