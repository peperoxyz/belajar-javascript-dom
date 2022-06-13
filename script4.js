// DOM Manipulation (Node)
// 1. Buat dulu elemennya: elemen apa yang ingin ditambahkan 2. Bikin tulisan di dalam elemen tersebut 3. Pindahkan tulisan tersebut ke dalam tag yang sudah dibuat tadi 4. Simpan node baru tersebut.

// 1. Buat elemen baru: document.createElement()
const pBaru = document.createElement('p');
// 2. Bikin tulisan yang rencananya ingin dimasukkan ke dalam p yang baru dibuat
const textPBaru = document.createTextNode('Paragraf Baru dari Javascript');
// 3. Masukkan tulisan ke dalam paragraf
pBaru.appendChild(textPBaru);
// 4. Simpan pBaru di akhir dari elemen parent(section A)
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('item custom antara 1 & 2');
liBaru.appendChild(textLiBaru);

// parent dari tempat yg kita tuju: <ul> || elemen setelahnya: <li>item 2</li>
const ul = document.querySelector('section#b ul');
// const li2 = document.querySelector('section#b ul li:nth-child(2)')
const li2 = ul.querySelector('li:nth-child(2)');
// 4.a. Simpan di tempat tertentu(custom -> setelah item 1, sebelum item 2)
// parent.insertBefore(elemenYgInginDisimpan, elementSetelahnya)
ul.insertBefore(liBaru, li2);

// remove child: link || parentnya siapa: section A || elemen yg diremove: a
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// Mereplace child: tangkap parent || 
const sectionB = document.getElementById('b');
// Tangkap elemen yg ingin direplace
const p4 = sectionB.querySelector('p');
// bikin elemen pengganti
const h2Pengganti = document.createElement('h2');
const textPengganti = document.createTextNode('Judul Pengganti!');
h2Pengganti.appendChild(textPengganti);
// replace
sectionB.replaceChild(h2Pengganti, p4)

pBaru.style.backgroundColor = 'lightgreen';
h2Pengganti.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';