const connect = require("../DB/DbConnect");

const CreateEmployeeModel = async (empData) => {
  const query =
    "Insert into Employees(emp_name, emp_surname,emp_dob, emp_email,emp_hireddate,emp_salary, dept_id, pos_id) VALUES($1, $2, $3, $4, $5, $6,$7,$8) RETURNING *";
  const values = [
    empData.emp_name,
    empData.emp_surname,
    empData.emp_dob,
    empData.emp_email,
    empData.emp_hireddate,
    empData.emp_salary,
    empData.dept_id,
    empData.pos_id,
  ];

  try {
    const result = await connect.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const GetEmployeesModel = async () => {
  const query = "select * from Employees";
  try {
    const result = await connect.query(query);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

const GetSingleEmployeeModel = async (empId) => {
  const query = "SELECT * FROM Employees WHERE emp_id = $1";
  const value = [empId];

  try {
    const result = await connect.query(query, value);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const UpdateEmployeeModel = async (empId, updateEmp) => {
  const query =
    "UPDATE Employees SET emp_name = $1, emp_surnme = $2, emp_DOB = $3, emp_email = $4, emp_hired_date = $5, emp_Salary = $6, dept_id = $7, pos_id = $8 WHERE emp_id = $9 RETURNING *";
  const values = [
    updateEmp.emp_name,
    updateEmp.emp_surnme,
    updateEmp.emp_DOB,
    updateEmp.emp_email,
    updateEmp.emp_hired_date,
    updateEmp.emp_Salary,
    updateEmp.dept_id,
    updateEmp.pos_id,
    empId,
  ];

  try {
    const result = await connect.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const DeleteSingleEmployeeModel = async (empId) => {
  const query = "DELETE FROM Employees WHERE emp_id = $1";
  const value = [empId];

  try {
    await connect.query(query, value);
  } catch (error) {
    throw error;
  }
};
module.exports = {
  CreateEmployeeModel,
  GetEmployeesModel,
  GetSingleEmployeeModel,
  UpdateEmployeeModel,
  DeleteSingleEmployeeModel,
};
