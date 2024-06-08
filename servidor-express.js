const mysql = require('mysql');

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'gamehub'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado ao banco de dados MySQL');
});

const novoUsuario = {
  username: 'oi',
  password: 'teste01'
};


db.query('INSERT INTO usuarios SET ?', novoUsuario, (err, result) => {
  if (err) {
    console.error('Erro ao inserir novo usuário:', err);
  } else {
    console.log('Novo usuário inserido com sucesso:', result);
  }
});

// Fechar conexão com o banco de dados após a inserção
db.end();
