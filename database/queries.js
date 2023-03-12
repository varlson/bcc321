const pg = require("pg");

const string = process.env.DB_URL;

const client = new pg.Client(string);

const getAllMonitors = (req, res, next) => {
  const { table } = req.body;

  if (!table)
    return res.status(5001).json({ msg: "por favor, informe tabela" });
  client.query(`select * from ${table}`, (err, results) => {
    if (err) {
      return res.status(501).json({
        msg: "Houve um erro interno",
        error: err,
      });
    }

    return res.status(200).json({
      monitor: results.rows,
    });
  });
};

const getMonitorById = (req, res, next) => {
  const { table, id, id_name } = req.body;
  console.log(table, id, id_name);
  if (!table) return res.status(501).json({ msg: "por favor, informe tabela" });
  client.query(
    `select * from ${table} where ${id_name} = $1`,
    [id],
    (err, results) => {
      if (err) {
        return res.status(501).json({
          msg: "Houve um erro interno",
          error: err,
        });
      }

      return res.status(200).json({
        monitor: results.rows,
      });
    }
  );
};

const updateTable = (req, res, next) => {
  const { table, id, name, adress } = req.body;
  // const {table, id, name, adress, date, sex, salario, id_sup,id_dep} = req.body

  client.query(
    `UPDATE ${table} SET NomeFunc = $1, Endereco = $2 WHERE ID_Func = $3`,
    [name, adress, id],
    (error, result) => {
      if (error) {
        return res.status(501).json({
          msg: "Houve um erro interno",
          error: error,
        });
      }

      return res.status(200).json({
        msg: "Dados atualizados com sucesso",
      });
    }
  );
};

/* DELETE  */
const deleteInTable = (req, res, next) => {
  const { table, id } = req.body;

  client.query(
    `DELETE FROM ${table} WHERE id_Func = $1`,
    [id],
    (error, result) => {
      if (error) {
        return res.status(501).json({
          msg: "Houve um erro interno",
          error: error,
        });
      }

      return res.status(200).json({
        msg: "Deletado com sucesso",
      });
    }
  );
};

const add = (req, res, next) => {
  const { table, data } = req.body;
  const {
    ID_Func,
    NomeFunc,
    Endereco,
    DataNasc,
    Sexo,
    Salario,
    ID_Superv,
    ID_Depto,
  } = data;

  console.log(
    ID_Func,
    NomeFunc,
    Endereco,
    DataNasc,
    Sexo,
    Salario,
    ID_Superv,
    ID_Depto
  );
  const arr_datas = [
    ID_Func,
    NomeFunc,
    Endereco,
    DataNasc,
    Sexo,
    Salario,
    ID_Superv,
    ID_Depto,
  ];
  client.query(
    `INSERT INTO ${table} (ID_Func, NomeFunc, Endereco, DataNasc, Sexo, Salario, ID_Superv, ID_Depto) VALUES ($1,$2,$3,$4, $5, $6, $7, $8)`,
    arr_datas,
    (error, result) => {
      if (error) {
        return res.status(501).json({
          msg: "Houve um erro interno",
          error: error,
        });
      }

      return res.status(200).json({
        msg: "Dados salvo com sucesso",
      });
    }
  );
};

module.exports = {
  getAllMonitors,
  client,
  getMonitorById,
  updateTable,
  deleteInTable,
  add,
};
