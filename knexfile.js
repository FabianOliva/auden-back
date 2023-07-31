require('dotenv').config();
const path = require('path');

module.exports = {
  development: {
    client: process.env.DB_DRIVER || 'pg',
    connection: {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
      ssl: {
        rejectUnauthorized: false,
        // Opcional, si estás utilizando un certificado autofirmado
      },
    },
    migrations: {
      directory: path.join(__dirname, 'database', 'migrations'), 
      // Ruta personalizada para los archivos de migración
    },
  },
  // ...
};
