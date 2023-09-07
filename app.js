const express = require('express');
const app = express();

// Definisikan rute untuk mendapatkan semua tugas
app.get('/tasks', (req, res) => {
  // Logika untuk mendapatkan semua tugas dari database
  });

  // Definisikan rute untuk membuat tugas baru
  app.post('/tasks', (req, res) => {
    // Logika untuk membuat tugas baru dan menyimpannya ke database
    });

    // Definisikan rute untuk mendapatkan tugas berdasarkan ID
    app.get('/tasks/:id', (req, res) => {
      // Logika untuk mendapatkan tugas berdasarkan ID dari database
      });

      // Definisikan rute untuk mengupdate tugas berdasarkan ID
      app.put('/tasks/:id', (req, res) => {
        // Logika untuk mengupdate tugas berdasarkan ID di database
        });

        // Definisikan rute untuk menghapus tugas berdasarkan ID
        app.delete('/tasks/:id', (req, res) => {
          // Logika untuk menghapus tugas berdasarkan ID dari database
          });

          // Jalankan server pada port tertentu
          const port = process.env.PORT || 3000;
          app.listen(port, () => {
            console.log(`Server berjalan di port ${port}`);
            });