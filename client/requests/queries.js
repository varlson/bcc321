import axios from "axios";
export function queryUsers() {
  return new Promise((resolve, rej) => {
    const head = {
      headers: { "Content-Type": "application/json" },
    };
    axios
      .get("http://localhost:8001/api/list-users", head)
      .then((res) => {
        resolve(res.data.data);
      })
      .catch((error) => {
        rej(error);
      });
  });
}

export function deleteUser(id) {
  return new Promise((resolve, rej) => {
    const head = {
      headers: { "Content-Type": "application/json" },
    };
    axios
      .get(`http://localhost:8001/api/delete-user/${id}`, head)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        rej(error.response.data);
      });
  });
}

export function addUser(user) {
  return new Promise((resolve, rej) => {
    const head = {
      headers: { "Content-Type": "application/json" },
    };
    axios
      .post(`http://localhost:8001/api/add-user`, user, head)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        rej(error.response);
      });
  });
}

export function editUser(user) {
  return new Promise((resolve, rej) => {
    const head = {
      headers: { "Content-Type": "application/json" },
    };
    axios
      .post(`http://localhost:8001/api/edit-user/${user.id}`, user, head)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        rej(error.response);
      });
  });
}
