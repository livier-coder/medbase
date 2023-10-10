import { pool } from '../db.js';

//GET AGENDA
export const getAgenda = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM agenda");
      res.json([rows]);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };

//GET AGENDA BY ID
export const getAgendaById = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM agenda where id_agenda = ?", [
        req.params.id,
      ]);
      if (rows.length <= 0)
        return res.status(404).json({
          message: "Date not found",
        });
      res.json(rows[0]);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };
 
  
//CREATE AGENDA
export const createAgenda = async (req, res) => {
    try {
      const { doctor_key,fullname_patient,checkup_type,date_agenda,hour_agenda } = req.body;
      const [rows] = await pool.query(
        "INSERT INTO agenda (doctor_key,fullname_patient,checkup_type,date_agenda,hour_agenda) VALUES  (?,?,?,?,?)",
        [doctor_key,fullname_patient,checkup_type,date_agenda,hour_agenda]
      );
           
      res.send({
        id: rows.insertId,doctor_key,fullname_patient,checkup_type,date_agenda,hour_agenda
      });
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };

//UPDATE AGENDA
export const updateAgenda = async (req, res) => {
    try {
      const { id } = req.params;
      const { doctor_key,fullname_patient,checkup_type,date_agenda,hour_agenda } = req.body;
  
      const [result] = await pool.query(
        "UPDATE agenda SET doctor_key = IFNULL(?,doctor_key), fullname_patient = IFNULL(?,fullname_patient),checkup_type = IFNULL(?,checkup_type),date_agenda = IFNULL(?,date_agenda),hour_agenda = IFNULL(?,hour_agenda) where id_agenda = ?",
        [doctor_key,fullname_patient,checkup_type,date_agenda,hour_agenda,id]
      );
      if (result.affectedRows === 0)
        return res.status(404).json({
          message: "Agenda not found",
        });
      const [rows] = await pool.query("SELECT * FROM agenda where id_agenda = ?", [
        req.params.id,
      ]);
  
      res.json(rows[0]);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };

//DELETE AGENDA
export const deleteAgenda = async (req, res) => {
    try {
      const [result] = await pool.query("DELETE FROM agenda where id_agenda = ?", [
        req.params.id,
      ]);
      if (result.affectedRws <= 0)
        return res.status(404).json({
          message: "Agenda not found",
        });
      res.sendStatus(204);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };
  