const JobsModel = require("../Model/JobRolesModel");

const AddJobCtrl = async (req, res) => {
  const job = req.body;
  try {
    const jobs = await JobsModel.CreateJobRolestModel(job);
    res.status(200).json({ data: jobs, message: "Job added succeessful" });
  } catch (error) {
    res.status(500).json({ error: "Error creating JobRole", error });
  }
};

const GetJobCtrl = async (req, res) => {
  try {
    const Job = await JobsModel.GetJobRolesModel();
    res.status(200).json({ data: Job, message: "All Jobs" });
  } catch (error) {
    res.status(500).json({ error: "Error Gettingg Jobs", error });
  }
};

const GetOneJobCrl = async (req, res) => {
  const _id = req.params.id;
  try {
    const job = await JobsModel.GetJobRoleModel(_id);
    if (job) {
      res.status(200).json({ data: job, message: "Data for one Job Role" });
    } else {
      res.status(404).json({ message: "Data not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error Getting Job", error });
  }
};

const UpdateJobCTRL = async (req, res) => {
  const _id = req.params.id;
  const job = req.body;
  try {
    const jobrole = await JobsModel.UpdateJobRoleModel(_id, job);
    res.status(200).json({ data: jobrole, message: "Updated successful" });
  } catch (error) {
    res.status(500).json({ message: "Error Getting Job", error });
  }
};

const DeleteJobCTRL = async (req, res) => {
  const _id = req.params.id;
  try {
    await JobsModel.DeleteSingleJobRoleModel(_id);
    res.status(200).json({ message: "Job Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error Getting Job", error });
  }
};
module.exports = {
  AddJobCtrl,
  GetJobCtrl,
  GetOneJobCrl,
  UpdateJobCTRL,
  DeleteJobCTRL,
};
