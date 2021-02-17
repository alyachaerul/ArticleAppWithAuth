# Authentication and Authorization Process

- Authentication -> who are you? -> ada tanda pengenal dengan login melalui akun yang telah terdaftar
   - Tindakan mengkonfirmasi kebenaran suatu bagian dari data
   - Menggunakan library Passport.js
- Authorization -> what permissions do you have? -> Ketika sudah masuk, akan ada akses tertentu yang diberikan untuk setiap pengguna
- JWT (JSON Web Token) = sebuah token menggunakan JSON sebagai payloadnya, token merupakan kode diamna pengguna dapat satu untuk masing-masing akun
   - Merupakan sebuah library
   - jwt.io -> for the references
   - Header -> algorithm & token type
   - Payload -> berisi data
   - Verify Siganture -> sebuah kunci ada kode secret (seperti halnya gerigi di kunci yang berbeda)
- Bearer Token : sebuah cara untuk memasukkan kunci / key
- Passport.js --> sebuah modul dimana sebagai cara supaya kita bisa melakukan authorization --> untuk melakukan authorization
   - Terdiri dari beberapa modul
   - Yang dilakukan JWT SIGN mengenskripsi ID, tugas anon function dalam passport memecah kode tersebut dengan menggunakan JWT SECRET isi payload dengan body.
