const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("This is the root!"));
router.post("/plans", controllers.createPlan);
router.get("/plans", controllers.getAllPlans);
router.get("/plans/:id", controllers.getPlanById);
router.put("/plans/:id", controllers.updatePlan);
router.delete("/plans/:id", controllers.deletePlan);

module.exports = router;


// goto app.js - add routes library
// it related to clients/src/components/shared/Nav.js