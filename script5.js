// // Inline HTML
// const p3 = document.querySelector('.p3');

// // Method
// function ubahWarnaP3() {
//     return p3.style.backgroundColor = 'salmon';
// }
// const ubahWarnaP2 = () => p2.style.backgroundColor = 'lightgreen'

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;

// // addEventListener
// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function() {
//     // tangkap parent
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const textLiBaru = document.createTextNode('item Baru');
//     // terapkan teks
//     liBaru.appendChild(textLiBaru);
//     // simpan
//     ul.appendChild(liBaru);
// });

// // Event handler menimpa event sebelumnya!
const p3 = document.querySelector(".p3");
p3.onclick = function () {
  p3.style.backgroundColor = "red";
};

p3.onclick = function () {
  p3.style.color = "red";
};

// addEventListener() tidak menimpa dan menjalankan kedua fungsinya!
p3.addEventListener("dblclick", function () {
  p3.style.backgroundColor = "lightyellow";
});
p3.addEventListener("click", function () {
  p3.style.color = "red";
});
