# Belajar Javascript DOM (Document Object Model)
Resource: dicoding

## Browser Object
Untuk dapat membuat website menjadi interaktif, kita membutuhkan Javascript. Untuk melakukan hal tersebut, Javascript harus dapat mengontrol elemen yang ada pada website - dilakukan dengan menggunakan object yang sudah ada pada web, yaitu WINDOW.
> Pada JS, browser dikenal sebagai WINDOW object dengan properti yang sangat banyak ; alert(), prompt(), close(), location(), history(), dll.

## Manipulasi DOM
DOM memberikan kita jalan untuk mengakses dan memanipulasi konten pada dokumen. DOM merupakan API untuk HTML, XML, atau SVG. 

### Mendapatkan Elemen
Untuk mengakses elemen melalui DOM, kita gunakan properti dari object window yang dinamakan ```document```
1. ```document.getElementById('display');``` : Me-return elemen dengan ID 'display'
2. ```document.getElementByName('button');``` : Me-return elemen dengan attribut 'button'
3. ```document.getElementByClassName('button');``` : Me-return elemen dengan class 'button'
4. ```document.getElementByTagname('div');``` : Me-return elemen dengan tag 'div'
5. ```document.querySelector('.button');``` : Me-return elemen pertama dengan class "button"
6. ```document.querySelectorAll('.button');``` : Me-return seluruh elemen dengan class "button"
