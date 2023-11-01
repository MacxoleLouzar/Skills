const DepartmentModel = require("../Model/DepartmentModel");

const AddDepartmentCtrl = async (req, res) => {
  const dep = req.body;
  try {
    const department = await DepartmentModel.CreateDepartmentModel(dep);
    res
      .status(200)
      .json({ data: department, message: "Department added succeessful" });
  } catch (error) {
    res.status(500).json({ error: "Error creating department", error });
  }
};

const GetDepartmentsCtrl = async (req, res) => {
  try {
    const department = await DepartmentModel.GetDepartmentsModel();
    res.status(200).json({ data: department, message: "All Departments" });
  } catch (error) {
    res.status(500).json({ error: "Error Gettingg department", error });
  }
};

const GetOneDepartmentCrl = async (req, res) => {
  const _id = req.params.id;
  try {
    const dept = await DepartmentModel.GetSingleDeptModel(_id);
    if (dept) {
      res.status(200).json({ data: dept, message: "Data for one Department" });
    } else {
      res.status(404).json({ message: "Data not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error Getting Deptmemnt", error });
  }
};

const UpdateDepartmentCTRL = async (req, res) => {
  const _id = req.params.id;
  const dept = req.body;
  try {
    const department = await DepartmentModel.UpdateDepartmentModel(_id, dept);
    res.status(200).json({ data: department, message: "Updated successful" });
  } catch (error) {
    res.status(500).json({ message: "Error Getting Deptmemnt", error });
  }
};

const DeleteDepartmentCTRL = async (req, res) => {
  const _id = req.params.id;
  try {
    await DepartmentModel.DeleteSingleDeptModel(_id);
    res.status(200).json({ message: "Department Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error Getting Deptmemnt", error });
  }
};
module.exports = {
  AddDepartmentCtrl,
  GetDepartmentsCtrl,
  GetOneDepartmentCrl,
  UpdateDepartmentCTRL,
  DeleteDepartmentCTRL,
};
