const Plan = require('../models/plan');

const createPlan = async (req, res) => {
  try {
    const plan = await new Plan(req.body)
    await plan.save()
    return res.status(201).json({
      plan,
    })
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

const getAllPlans = async (req, res) => {
  try {
    const plans = await Plan.find()
    return res.status(200).json({plans})
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPlanById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id)
    const plan = await Plan.findById(id)
    console.log(plan)
    if (plan) {
      return res.status(200).json({ plan });
    }
    return res.status(404).send('Plan with the specified ID does not exist')

  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const updatePlan = (req, res) => {
  try {
    const { id } = req.params;
    Plan.findByIdAndUpdate(id, req.body, { new: true }, (err, plan) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!plan) {
        res.status(500).send('Plan not found!');
      }
      return res.status(200).json(plan);
      console.log()
    })
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const deletePlan = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Plan.findByIdAndDelete(id)  //method from MongoDB
    if (deleted) {
      return res.status(200).send('Plan deleted');
    }
    throw new Error("Plan not found");
  } catch (error) {
    return res.status(500).send(error.message);
}
}


module.exports = {
  createPlan,
  getAllPlans,
  getPlanById,
  updatePlan,
  deletePlan,
}

//then set up routes/index.js and use the export modules

