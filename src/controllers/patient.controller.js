import { pool } from '../db.js';

//GET PATIENT
export const getPatient = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM patient");
      res.json([rows]);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };

//GET PATIENT BY ID
export const getPatientById = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM patient where id_patient = ?", [
        req.params.id,
      ]);
      if (rows.length <= 0)
        return res.status(404).json({
          message: "Patient not found",
        });
      res.json(rows[0]);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };
 
//CREATE PATIENT
export const createPatient = async (req, res) => {
    try {
      const { id_doctor,fullname_patient,cellphone_patient,email_patient,address,age,weight,height,civil_status,occupation,blood_type,record_date,checkup_reason,menarche,last_period,birthday,ctive_methods,abortions,note } = req.body;
      const [rows] = await pool.query(
        "INSERT INTO patient (id_doctor,fullname_patient,cellphone_patient,email_patient,address,age,weight,height,civil_status,occupation,blood_type,record_date,checkup_reason,menarche,last_period,birthday,ctive_methods,abortions,note) VALUES  (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [id_doctor,fullname_patient,cellphone_patient,email_patient,address,age,weight,height,civil_status,occupation,blood_type,record_date,checkup_reason,menarche,last_period,birthday,ctive_methods,abortions,note]
      );
           
      res.send({
        id: rows.insertId, id_doctor,fullname_patient,cellphone_patient,email_patient, address, age, weight, height, civil_status, occupation, blood_type,record_date,checkup_reason,menarche,last_period,birthday, ctive_methods,abortions,note
      });
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };

//UPDATE PATIENT
export const updatePatient = async (req, res) => {
    try {
      const { id } = req.params;
      const { id_doctor,fullname_patient,cellphone_patient,email_patient,address,age,weight,height,civil_status,occupation,blood_type,record_date,checkup_reason,menarche,last_period,birthday,ctive_methods,abortions,note } = req.body;
  
      const [result] = await pool.query(
        "UPDATE patient SET id_doctor = IFNULL(?,id_doctor), fullname_patient = IFNULL(?,fullname_patient),cellphone_patient = IFNULL(?,cellphone_patient),email_patient = IFNULL(?,email_patient),address = IFNULL(?,address),age = IFNULL(?,age),weight = IFNULL(?,weight),height = IFNULL(?,height),civil_status = IFNULL(?,civil_status),occupation = IFNULL(?,occupation),blood_type = IFNULL(?,blood_type),record_date = IFNULL(?,record_date),checkup_reason = IFNULL(?,checkup_reason),menarche = IFNULL(?,menarche),last_period = IFNULL(?,last_period),birthday = IFNULL(?,birthday),ctive_methods = IFNULL(?,ctive_methods),abortions = IFNULL(?,abortions),note = IFNULL(?,note) where id_patient = ?",
        [id_doctor,fullname_patient,cellphone_patient,email_patient,address,age,weight,height,civil_status,occupation,blood_type,record_date,checkup_reason,menarche,last_period,birthday,ctive_methods,abortions,note, id]
      );
      if (result.affectedRows === 0)
        return res.status(404).json({
          message: "Patient not found",
        });
      const [rows] = await pool.query("SELECT * FROM patient where id_patient = ?", [
        req.params.id,
      ]);
  
      res.json(rows[0]);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };

//DELETE PATIENT
export const deletePatient = async (req, res) => {
    try {
      const [result] = await pool.query("DELETE FROM patient where id_patient = ?", [
        req.params.id,
      ]);
      if (result.affectedRws <= 0)
        return res.status(404).json({
          message: "Patient not found",
        });
      res.sendStatus(204);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };
  