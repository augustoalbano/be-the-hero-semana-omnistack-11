const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');
const app = express();

/** Informar ao Express que será utilizado o formato JSON para o corpo das requisições.  
 *  Este código deve vir antes das requisições* 
 * **/

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;



/** 
 * Rota / Recurso
 */

/**
 * Métodos HTTP
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * - Query Params: Parâmetros nomeados/enviados na rota após o símbolo de "?" 
 * (filtros, paginação). Exemplo: para procurar somente os usuários com nome "Augusto", 
 * 
 * a url/rota ficará "http://localhost:3333/users?name=Augusto"
 * - Route Params: Parâmetros utilizados para identificar recursos 
 * (tabelas de dados no banco). Exemplo: "http://localhost:3333/users/:id"
 * 
 * - Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * Banco de dados:
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc.
 */

 /**
  * Driver : SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */

app.listen(3333);