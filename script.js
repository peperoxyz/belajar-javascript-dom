// DOM Selection!
// A. document.getElementById() : Js tolong cariin saya elemen dengan ID tertentu, yang ada di dalam document.

// Buat variabel untuk menampung elemen yg dipilih.
const tampungJudul = document.getElementById('judul');
// Manipulasi DOM
tampungJudul.style.color = 'red';
tampungJudul.style.backgroundColor = 'lightblue';
tampungJudul.innerHTML = 'Hello Dea Ananda Gunawan'

// B. document.getElementsByTagName() : Js tolong cariin saya elemen2 dengan nama tag tertentu, yang ada di dalam document.
const p = document.getElementsByTagName('p');
// Looping
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'yellow';
}
// Mengubah elements menjadi elemen: sebut index arraynya
const h1 = document.getElementsByTagName('h1')[0];

// C. documen.getElementsByClassName()
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini diubah dari javascript'