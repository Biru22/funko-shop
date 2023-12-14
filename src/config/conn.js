const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'funko_schema',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

pool.getConnection((err, conn) => {
  if (err) {
    console.log('Error al establecer conexión con DB: ' + err);
  } else  {
    console.log('Conexión exitosa');
    conn.release();
  }
})

module.exports = {
  conn: pool.promise()
}