const connect = require("../DB/DbConnect");

const CreateJobRolestModel = async (jobData) => {
  const query =
    "Insert into positions(pos_name, pos_descrption) VALUES($1, $2) RETURNING *";
  const values = [jobData.pos_name, jobData.pos_descrption];

  try {
    const result = await connect.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const GetJobRolesModel = async () => {
  const query = "select * from positions";
  try {
    const result = await connect.query(query);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

const GetJobRoleModel = async (Id) => {
  const query = "SELECT * FROM positions WHERE pos_id = $1";
  const value = [Id];

  try {
    const result = await connect.query(query, value);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const UpdateJobRoleModel = async (Id, updateJob) => {
  const query =
    "UPDATE positions SET pos_name = $1, pos_descrption = $2 WHERE pos_id = $3 RETURNING *";
  const values = [updateJob.pos_name, updateJob.pos_descrption, Id];

  try {
    const result = await connect.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const DeleteSingleJobRoleModel = async (Id) => {
  const value = [Id];

  try {
    await connect.query(
      "UPDATE Employees SET pos_id = NULL WHERE pos_id = $1",
      value
    );
    await connect.query(
      "DELETE FROM positions WHERE pos_id = $1 RETURNING *",
      value
    );
    return;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  CreateJobRolestModel,
  GetJobRolesModel,
  GetJobRoleModel,
  UpdateJobRoleModel,
  DeleteSingleJobRoleModel,
};
