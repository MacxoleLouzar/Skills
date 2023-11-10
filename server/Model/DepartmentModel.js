const connect = require("../DB/DbConnect");

const CreateDepartmentModel = async (deptData) => {
  const query =
    "Insert into Departments(dept_name, dept_address) VALUES($1, $2) RETURNING *";
  const values = [deptData.dept_name, deptData.dept_address];

  try {
    const result = await connect.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const GetDepartmentsModel = async () => {
  const query = "select * from Departments";
  try {
    const result = await connect.query(query);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

const GetSingleDeptModel = async (depId) => {
  const query = "SELECT * FROM Departments WHERE dept_id = $1";
  const value = [depId];

  try {
    const result = await connect.query(query, value);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const UpdateDepartmentModel = async (depId, updateDept) => {
  const query =
    "UPDATE Departments SET dept_name = $1, dept_address = $2 WHERE dept_id = $3 RETURNING *";
  const values = [updateDept.dept_name, updateDept.dept_address, depId];

  try {
    const result = await connect.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const DeleteSingleDeptModel = async (depId) => {
  // const query = "DELETE FROM Employees WHERE dept_id = $1";
  const value = [depId];
  try {
    await connect.query(
      "UPDATE Employees SET dept_id = NULL WHERE dept_id = $1",
      value
    );
    await connect.query(
      "DELETE FROM Departments WHERE dept_id = $1 RETURNING *",
      value
    );
    return;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  CreateDepartmentModel,
  GetDepartmentsModel,
  GetSingleDeptModel,
  UpdateDepartmentModel,
  DeleteSingleDeptModel,
};
