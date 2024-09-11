import express from 'express';
import dotenv from 'dotenv';

// Carga las variables de entorno
dotenv.config();

const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Ruta para verificar que el servidor está funcionando
app.get('/', (req, res) => {
    res.send('Bienvenido al sistema de gestion de inventario de Addicted');
});

// Puerto del servidor
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
});
