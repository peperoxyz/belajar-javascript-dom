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

### DOM Event
Event pada Javascript merepresentasikan sebuah kejadian yang terjadi di dalam DOM: yang bisa dilakukan oleh user (mouse event, keyboard event, dll), atau dilakukan oleh API.

#### A. Cara Mendengarkan Event
- Event Handler ```onEvent```
  - Inline HTML Attribute
    Meletakkan atribut ```onEvent="function"``` di inline HTML target
    ```
    <p class="p3" onclick="ubahWarna()">paragraf 3</p>
    
    <script>
    const p3 = document.querySelector('.p3');
    const ubahWarna = () => p3.style.backgroundColor = 'salmon'
    </script>
    ```
  - Elemen method
    ```
    // Method
    function ubahWarnaP3() {
        return p3.style.backgroundColor = 'salmon';
    }
    const ubahWarnaP2 = () => p2.style.backgroundColor = 'lightgreen'

    const p2 = document.querySelector('.p2');
    p2.onclick = ubahWarnaP2;
    ```
- addEventListener() method
  ```
  // addEventListener
  const p4 = document.querySelector('section#b p');
  p4.addEventListener('click', function() {
      // tangkap parent
      const ul = document.querySelector('section#b ul');
      const liBaru = document.createElement('li');
      const textLiBaru = document.createTextNode('item Baru');
      // terapkan teks
      liBaru.appendChild(textLiBaru);
      // simpan
      ul.appendChild(liBaru);
  });
  ```
> Kapan pakai event handler, kapan pakai addEventListener?
> Event handler: perubahan baru akan menggantikan/menimpa perubahan sebelumnya, sedangkan addEventListener menambahkan event baru + menjalankan semua event yang telah dibuat.

#### B. Daftar Event
- Mouse Event
  - click, dblclick, mouseover, mouseenter, mouseleave, mouseup, wheel
- Keyboard Event
  - keydown, keypress, keyup
- Resources Event
- Focus Event
- View Event
- Form Event
  - reset, submit
- CSS Animation & Transition Event
- Drag & Drop Event
- dll
