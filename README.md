# Fancy-Todo-API-Prisma

Sebuah API sederhana untuk mengelola daftar tugas (todo) dengan fitur CRUD (Create, Read, Update, Delete).

## Deskripsi

Fancy Todo API adalah sebuah aplikasi API yang dibangun menggunakan Node.js, Express.js, dan Prisma sebagai ORM untuk database MySQL. API ini menyediakan endpoint untuk mengelola daftar tugas (todo) dan pengguna yang terdaftar. Setiap pengguna dapat membuat, membaca, memperbarui, dan menghapus daftar tugas mereka sendiri.

## Teknologi Yang Digunakan

- Node.js
- Express.js
- Prisma
- MySQL

## Instalasi

1.  Kloning repositori ini ke dalam direktori lokal Anda.

```bash
git clone https://github.com/manzadhit/Fancy-Todo-API-Prisma.git
```

2.  Jalankan perintah `npm install` untuk menginstal semua dependensi yang dibutuhkan.
3.  Salin file `.env.example` dan ubah namanya menjadi `.env`.
4.  Edit file `.env` dan isi dengan nilai yang sesuai untuk setiap variabel lingkungan yang diperlukan. Pastikan untuk mengisi nilai `DATABASE_URL` dengan URL koneksi database MySQL yang benar.
5.  Jalankan perintah `npx prisma db push` untuk menerapkan skema database ke MySQL.
6.  Jalankan perintah `npm run dev` untuk menjalankan server API.

## Penggunaan

### Endpoint

- [User](#user)
  - [Create User](#create-user)
- [Todo](#todo)
### User

#### Create User

Membuat pengguna baru dengan memberikan nama pengguna, alamat email, dan nomor telepon.
**URL**

```bash
POST /user
```

**Body Request**

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "123456789"
}
```

**Response Success**

```json
{
  "status": 201,
  "message": "Successfully created user",
  "data": {
    "id": "8e3447de-8859-433d-98a6-b3c55109fb9f",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "123456789",
    "createdAt": "2024-05-08T00:34:04.437Z",
    "updatedAt": "2024-05-08T00:34:04.437Z"
  }
}
```

### Todo
