const pg = require("pg");
require("dotenv").config();
const string = process.env.DB_URL;

const client = new pg.Client(string);

/* UDATATION  */

// ADD USER

const addUser = (req, res, next) => {
  const { id, name, password, fuso_horario } = req.body;

  if (!id || !name || !password || !fuso_horario) {
    return res.status(405).json({ error: "Informe todos os dados" });
  }

  client.query(
    "INSERT INTO Usuario VALUES($1, $2, $3, $4)",
    [id, name, password, fuso_horario],
    (error, success) => {
      if (error) {
        return res.status(500).json({
          msg: "Houve um erro interno ao tentar salvar dados",
          error: error,
        });
      }

      return res.status(201).json({
        msg: "Usuario salvo com sucesso",
      });
    }
  );
};

//-----------------------------------------
// LIST USERS

const listUsers = (req, res, next) => {
  client.query("SELECT * FROM Usuario", (error, success) => {
    if (error) {
      return res.status(500).json({
        msg: "Houve um erro interno ao listar usuarios",
        error: error,
      });
    }

    return res.status(201).json({
      data: success.rows,
    });
  });
};

//-----------------------------------------

const listUser = (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    return res.status(405).json({ error: "Informe o id do usuario" });
  }
  client.query(
    "SELECT * FROM Usuario WHERE id = $1",
    [id],
    (error, success) => {
      if (error) {
        return res.status(500).json({
          msg: "Usuario nao encontrado",
          error: error,
        });
      }

      return res.status(201).json({
        data: success.rows,
      });
    }
  );
};

// EDIT USER

const editUser = (req, res, next) => {
  const id = req.params.id;
  const { name, password } = req.body;
  if (!id || !name || !password) {
    return res.status(405).json({ error: "Informe os dados" });
  }

  // console.log(id, name, password);
  client.query(
    "UPDATE Usuario SET nome_de_usuario = $1, senha = $2 WHERE id = $3",
    [name, password, id],
    (error, success) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          msg: "Houve um erro interno, dados nao podem ser atualizados",
          error: error,
        });
      }

      return res.status(201).json({
        msg: "Dados atualizados com sucesso",
      });
    }
  );
};

//-----------------------------------------
// DELETE USER
const deleteUser = (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    return res.status(405).json({ error: "Informe os dados" });
  }

  // console.log(id, name, password);
  client.query("DELETE FROM Usuario WHERE id = $1", [id], (error, success) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        msg: "Houve um erro interno, usuario nao pode ser deletado",
        error: error,
      });
    }

    return res.status(201).json({
      msg: "Usuario deletado com sucesso",
    });
  });
};
//-----------------------------------------

// ADD MONITOR

const addMonitor = (req, res, next) => {
  const { id, name, id_user } = req.body;

  if (!id || !name || !id_user) {
    return res.status(405).json({ error: "Informe todos os dados" });
  }

  client.query(
    "INSERT INTO Monitor VALUES($1, $2, $3)",
    [id, name, id_user],
    (error, success) => {
      if (error) {
        return res.status(500).json({
          msg: "Houve um erro interno ao tentar adicionar monitor",
          error: error,
        });
      }

      return res.status(201).json({
        msg: "Monitor adicionado com sucesso",
      });
    }
  );
};

//-----------------------------------------
// LIST ALL MONITOR

const listMonitors = (req, res, next) => {
  client.query("SELECT * FROM Monitor", (error, success) => {
    if (error) {
      return res.status(500).json({
        msg: "Houve um erro interno ao listar monitores",
        error: error,
      });
    }

    return res.status(201).json({
      data: success.rows,
    });
  });
};

//-----------------------------------------

// LIST MONITOR
const listMonitor = (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    return res.status(405).json({ error: "Informe o id do monitor" });
  }
  client.query(
    "SELECT * FROM Monitor WHERE id = $1",
    [id],
    (error, success) => {
      if (error) {
        return res.status(500).json({
          msg: "Monitor nao encontrado",
          error: error,
        });
      }

      return res.status(201).json({
        data: success.rows,
      });
    }
  );
};
//---------------------------------------------------------------

// LIST MONITOR CREATED BY AN USER

const listMonitorByUser = (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    return res.status(405).json({ error: "Informe o id do monitor" });
  }
  client.query(
    "SELECT Monitor.nome, Usuario.nome_de_usuario, Monitor.id_usuario FROM Monitor, Usuario WHERE(Monitor.id_usuario = Usuario.id) AND Usuario.id = $1",
    [id],
    (error, success) => {
      if (error) {
        return res.status(500).json({
          msg: "Monitor nao encontrado",
          error: error,
        });
      }

      return res.status(201).json({
        data: success.rows,
      });
    }
  );
};

//-------------------------------------------------------

// EDIT MONITOR

const editMonitor = (req, res, next) => {
  const id = req.params.id;
  const { name, id_user } = req.body;
  if (!id_user || !name) {
    return res.status(405).json({ error: "Informe os dados" });
  }

  // console.log(id, name, password);
  client.query(
    "UPDATE Monitor SET nome = $1,  id = $2",
    [name, id_user],
    (error, success) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          msg: "Houve um erro interno, dados nao podem ser atualizados",
          error: error,
        });
      }

      return res.status(201).json({
        msg: "Dados atualizados com sucesso",
      });
    }
  );
};

//-----------------------------------------
// DELETE MONITOR
const deleteMonitor = (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    return res.status(405).json({ error: "Informe os dados" });
  }

  // console.log(id, name, password);
  client.query("DELETE FROM Monitor WHERE id = $1", [id], (error, success) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        msg: "Houve um erro interno, monitor nao pode ser deletado",
        error: error,
      });
    }

    return res.status(201).json({
      msg: "Monitor deletado com sucesso",
    });
  });
};
//-----------------------------------------

module.exports = {
  addUser,
  listUsers,
  listUser,
  editUser,
  deleteUser,
  addMonitor,
  listMonitors,
  listMonitor,
  deleteMonitor,
  editMonitor,
  listMonitorByUser,
  client,
};

//list-monitor-user
