import express from "express";
import {
  createJobs,
  deleteJobs,
  getJobs,
  getJobsById,
  updateJobs,
} from "../controllers/jobController.js";
import { verifyToken, companyOnly } from "../middleware/authUser.js";

const router = express.Router();

router.get("/jobs", verifyToken, companyOnly, getJobs);
router.get("/jobs/:id", verifyToken, companyOnly, getJobsById);
router.post("/jobs", companyOnly, companyOnly, createJobs);
router.delete("/jobs/:id", verifyToken, companyOnly, deleteJobs);
router.patch("/jobs/:id", verifyToken, companyOnly, updateJobs);

export default router;
