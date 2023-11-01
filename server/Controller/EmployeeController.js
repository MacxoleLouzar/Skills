const EmployeeModel = require("../Model/EmployeeModel");

const AddEmployeeCtrl = async (req, res) => {
  const emp = req.body;
  try {
    const employee = await EmployeeModel.CreateEmployeeModel(emp);
    res
      .status(200)
      .json({ data: employee, message: "Employee added succeessful" });
  } catch (error) {
    res.status(500).json({ error: "Error creating employee", error });
  }
};

const GetEmployeesCtrl = async (req, res) => {
  try {
    const employee = await EmployeeModel.GetEmployeesModel();
    res.status(200).json({ data: employee, message: "All Employees" });
  } catch (error) {
    res.status(500).json({ error: "Error Getting employee", error });
  }
};

const GetOneEmployeeCrl = async (req, res) => {
  const _id = req.params.id;
  try {
    const emp = await EmployeeModel.GetSingleEmployeeModel(_id);
    if (emp) {
      res.status(200).json({ data: emp, message: "Data for one employee" });
    } else {
      res.status(404).json({ message: "Data not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error Getting employee", error });
  }
};

const UpdateEmployeeCTRL = async (req, res) => {
  const _id = req.params.id;
  const emp = req.body;
  try {
    const employee = await EmployeeModel.UpdateEmployeeModel(_id, emp);
    res
      .status(200)
      .json({ data: employee, message: "Employee Updated successful" });
  } catch (error) {
    res.status(500).json({ message: "Error Getting Employee", error });
  }
};

const DeleteEmployeeCTRL = async (req, res) => {
  const _id = req.params.id;
  try {
    await EmployeeModel.DeleteSingleEmployeeModel(_id);
    res.status(200).json({ message: "Employee Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error Getting employee", error });
  }
};
module.exports = {
  AddEmployeeCtrl,
  GetOneEmployeeCrl,
  GetEmployeesCtrl,
  UpdateEmployeeCTRL,
  DeleteEmployeeCTRL,
};
