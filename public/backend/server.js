const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // Cambiar si tenés otro usuario
  password: '',        // Poné tu contraseña si tenés una
  database: 'summerpiscinas'
});

db.connect(err => {
  if (err) {
    console.error('❌ Error al conectar a MySQL:', err);
  } else {
    console.log('✅ Conectado a MySQL correctamente');
  }
});

// Ruta simple de prueba
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente 🏝️');
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor iniciado en http://localhost:${PORT}`);
});
