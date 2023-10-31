const DepartmentModel = require('../Model/DepartmentModel')

const AddDepartmentCtrl = async(req, res) => {
    const dep = req.body;
    try {
        const department = await DepartmentModel.CreateDepartmentModel(dep)
        res.status(200).json({ data: department, message: 'Department added succeessful' });

    } catch (error) {
        res.status(500).json({ error: "Error creating department", error });
    }
}

const GetDepartmentsCtrl = async (req, res) => {
  try {
    const department = await DepartmentModel.GetDepartmentsModel();
    res
      .status(200)
      .json({ data: department, message: "All Departments" });
  } catch (error) {
    res.status(500).json({ error: "Error Gettingg department", error });
  }
};

const GetOneDepartmentCrl = async (req, res) => {
    const { _id } = req.params.id;
    try {
        
    } catch (error) {
        
    }
}

module.exports = { AddDepartmentCtrl, GetDepartmentsCtrl };