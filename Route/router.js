const route = require("express").Router();
const {
  addUser,
  listUsers,
  listUser,
  editUser,
  deleteUser,
  addMonitor,
  listMonitors,
  listMonitor,
  editMonitor,
  deleteMonitor,
  listMonitorByUser,
  client,
} = require("../database/queries");
//SELECT ALL MONITORS

route.get("/", (req, res) => {
  res.status(200).json({
    msg: "Holamundo",
  });
});

/* ADAPTION  */

//  USER
route.post("/add-user", addUser);
route.get("/list-users", listUsers);
route.get("/list-user/:id", listUser);
route.post("/edit-user/:id", editUser);
route.get("/delete-user/:id", deleteUser);
//------------------------------------------------------------

//  MONITOR
route.post("/add-monitor", addMonitor);
route.get("/list-monitors", listMonitors);
route.get("/list-monitor/:id", listMonitor);
route.post("/edit-monitor/:id", editMonitor);
route.get("/delete-monitor/:id", deleteMonitor);
route.get("/list-monitor-user/:id", listMonitorByUser);

module.exports = route;
