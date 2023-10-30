const connect = require("./DB/DbConnect.js");

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

module.exports = { CreateDepartmentModel, GetDepartmentsModel };
