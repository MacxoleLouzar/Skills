const connect = require("../DB/DbConnect");

const CreateJobRolestModel = async (jobData) => {
  const query =
    "Insert into JobRoles(rj_title, rj_description) VALUES($1, $2) RETURNING *";
  const values = [jobData.rj_title, jobData.rj_Description];

  try {
    const result = await connect.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const GetJobRolesModel = async () => {
  const query = "select * from JobRoles";
  try {
    const result = await connect.query(query);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

const GetJobRoleModel = async (Id) => {
  const query = "SELECT * FROM JobRoles WHERE rj_id = $1";
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
    "UPDATE JobRoles SET rj_title = $1, rj_description = $2 WHERE rj_id = $3 RETURNING *";
  const values = [updateJob.rj_title, updateJob.rj_Description, Id];

  try {
    const result = await connect.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const DeleteSingleJobRoleModel = async (Id) => {
  const query = "DELETE FROM JobRoles WHERE rj_id = $1";
  const value = [Id];

  try {
    await connect.query(query, value);
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
