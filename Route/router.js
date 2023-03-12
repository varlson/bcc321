const route = require("express").Router();
const {
  getAllMonitors,
  getMonitorById,
  updateTable,
  deleteInTable,
  add,
} = require("../database/queries");
//SELECT ALL MONITORS

route.get("/", (req, res) => {
  res.status(200).json({
    msg: "Holamundo",
  });
});

route.post("/list-monitors", getAllMonitors);
route.post("/list-monitor", getMonitorById);
route.post("/update-monitor", updateTable);
route.post("/delete-table", deleteInTable);
route.post("/add", add);

module.exports = route;
