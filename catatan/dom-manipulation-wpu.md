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

### DOM Manipulation
#### DOM Element Manipulation Methods
- ```element.innerHTML```
- ```element.style.<property>```
- ```element.setAttribute()```
- ```element.classList``` :

A. Class List
- ```element.classList.add``` : Menambahkan kelas baru
- ```element.classList.remove``` : Menghapus kelas
- ```element.classList.toggle``` : Menambahkan jika belum ada kelasnya, menghapus jika sudah ada
- ```element.classList.item``` : Melihat nama kelas pada urutan tertentu
- ```element.classList.contains``` : Bertanya apakah ada kelas dengan nama tertentu?
- ```element.classList.replace``` : Mengganti kelas tertentu menjadi kelas lain

#### DOM Node Manipulation Methods
- ```document.createElement()``` : Membuat elemen baru
- ```document.createTextNode()``` : Membuat teks baru
- ```node.appendChild()``` : Memasukkan teks ke dalam elemen
- ```node.insertBefore()``` : Meletakkan elemen baru sebelum simpul tertentu
- ```parentNode.removeChild()```
- ```parentNode.replaceChild()```
