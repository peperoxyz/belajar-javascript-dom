# Belajar Javascript DOM (Document Object Model)
Resource: Web Programming Unpas
## Document
Document: Isi dari sebuah website. || Object: Sebuah nilai/tipe data pada Javascript. || Model: Representasi data.

DOM: Antarmuka pemrograman berbasis objek yang merepresentasikan dokumen WEB - Representasi elemen HTML pada document untuk dijadikan sebuah object oleh browser. Elemen2 HTML yang menjadi output dokumen itu disimpan di dalam DOM Tree (Pohon hierarki DOM). 

> DOM membuat seluruh komponen dari halaman web dapat diakses dan dimanipulasi: Elemen HTML, atribut, text, dll.

## Apa yang akan kita pelajari?
1. DOM Selection : Bagaimana cara mengakses/memilih/menyeleksi elemen HTML melalui JS
2. DOM Manipulation : Bagaimana cara memanipulasi elemen HTML menggunakan DOM
3. DOM Traversal : Menelusuri elemen HTML lewat elemen HTML lainnya
4. Event Handling : Melakukan perubahan/penelusuran pada elemen yg diakibatkan oleh trigger

### DOM Tree
Tiap node pada DOM Tree memiliki tipe: Element, text, document, dll
> Node List: Kumpulan dari beberapa node(simpul)

>HTMLCollection: Kumpulan dari beberapa node dengan tipe element HTML. HTMLCollection bersifat live, sedangkan node list tidak.

#### Struktur Hierarki DOM Tree
- Root Node
  - Node yang menjadi sumber dari semua node lain di dalam DOM: document
- Parent Node
  - Node yang berada 1 tingkat di atas node yang lain
- Child Node
  - Node yang berada 1 tingkat di bawah node yang lain

### DOM Selection
#### DOM Selection Method
- ```getElementById()``` : [Elemen]
- ```getElementsByTagName()``` : [HTMLCollection] Mengambil elemen-elemen dengan nama tag tertentu
- ```getElementsByClassName()``` : [HTMLCollection]
- ```querySelector()``` : [Element]
- ```querySelectorAll()``` : [nodeList]

> Ketika kita memanipulasi elemen HTML styling(CSS)nya lewat Javascript, berarti kita menambahkan inline CSS ke HTML

A. document.getElementsByTagName() : Js tolong cariin saya elemen2 dengan nama tag tertentu, yang ada di dalam document.
```
const p = document.getElementsByTagName('p');
// Looping
for (i = 0; i <= 3; i++) {
    p[i].style.backgroundColor = 'yellow';
}
```

> Mengubah elements menjadi elemen: sebut index arraynya 
```const h1 = document.getElementsByTagName('h1')[0];```

B. querySelector()
```
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
```
