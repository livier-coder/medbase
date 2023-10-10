import { pool } from '../db.js';

//GET CHECKUP
export const getCheckup = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM checkup");
      res.json([rows]);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };

//GET CHECKUP BY ID
export const getCheckupById = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM checkup where id_checkup = ?", [
        req.params.id,
      ]);
      if (rows.length <= 0)
        return res.status(404).json({
          message: "Checkup not found",
        });
      res.json(rows[0]);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };
      
//CREATE CHECKUP
export const createCheckup = async (req, res) => {
    try {
      const { id_patient,fullname_patient,checkup_date,checkup_reason,diagnosis,indications,comments,images,checkup_gain } = req.body;
      const [rows] = await pool.query(
        "INSERT INTO checkup (id_patient,fullname_patient,checkup_date,checkup_reason,diagnosis,indications,comments,images,checkup_gain) VALUES  (?,?,?,?,?,?,?,?,?)",
        [id_patient,fullname_patient,checkup_date,checkup_reason,diagnosis,indications,comments,images,checkup_gain]
      );
           
      res.send({
        id: rows.insertId,id_patient,fullname_patient,checkup_date,checkup_reason,diagnosis,indications,comments,images,checkup_gain
      });
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };

//UPDATE CHECKUP
export const updateCheckup = async (req, res) => {
    try {
      const { id } = req.params;
      const { id_patient,fullname_patient,checkup_date,checkup_reason,diagnosis,indications,comments,images,checkup_gain } = req.body;
  
      const [result] = await pool.query(
        "UPDATE checkup SET id_patient = IFNULL(?,id_patient), fullname_patient = IFNULL(?,fullname_patient),checkup_date = IFNULL(?,checkup_date),checkup_reason = IFNULL(?,checkup_reason),diagnosis = IFNULL(?,diagnosis),indications = IFNULL(?,indications),comments = IFNULL(?,comments),images = IFNULL(?,images),checkup_gain = IFNULL(?,checkup_gain) where id_checkup = ?",
        [id_patient,fullname_patient,checkup_date,checkup_reason,diagnosis,indications,comments,images,checkup_gain,id]
      );
      if (result.affectedRows === 0)
        return res.status(404).json({
          message: "Checkup not found",
        });
      const [rows] = await pool.query("SELECT * FROM checkup where id_checkup = ?", [
        req.params.id,
      ]);
  
      res.json(rows[0]);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };

//DELETE CHECKUP
export const deleteCheckup = async (req, res) => {
    try {
      const [result] = await pool.query("DELETE FROM checkup where id_checkup = ?", [
        req.params.id,
      ]);
      if (result.affectedRws <= 0)
        return res.status(404).json({
          message: "Checkup not found",
        });
      res.sendStatus(204);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };
  