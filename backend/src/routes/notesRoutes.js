import express from "express";
import {
  addNote,
  deleteNote,
  getAllNotes,
  updateNote,
  getNoteById,
} from "../controllers/notesController.js";

const router = express.Router();

export default router;

router.get("/", getAllNotes);

router.get("/:id", getNoteById);

router.post("/", addNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

// app.get("/api/notes", );
// app.post("/api/notes", (req, res) =>
//   res.status(201).json({ message: "Note created successfully" })
// );

// app.put("api/notes/:id", (req, res) =>
//   res.status(200).json({ message: "Note updated successfully" })
// );

// app.delete("api/notes/:id", (req, res) =>
//   res.status(200).json({ mesage: "Note deleted successfully" })
// );
