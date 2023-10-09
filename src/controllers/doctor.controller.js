import { pool } from '../db.js';


//GET DOCTOR
export const getDoctor = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM doctor");
      res.json([rows]);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };

//GET DOCTOR BY ID
export const getDoctorById = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM doctor where id_doctor = ?", [
        req.params.id,
      ]);
      if (rows.length <= 0)
        return res.status(404).json({
          message: "Doctor not found",
        });
      res.json(rows[0]);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };

//CREATE DOCTOR
export const createDoctor = async (req, res) => {
    try {
      const { id_admin,fullname,email,user,password,suscription,expiration,doctor_key } = req.body;
      const [rows] = await pool.query(
        "INSERT INTO doctor (id_admin,fullname,email,user,password,suscription,expiration,doctor_key) VALUES (?,?,?,?,?,?,?,?)",
        [id_admin, fullname,email,user,password,suscription,expiration,doctor_key]
      );
           
      res.send({
        id: rows.insertId, id_admin, fullname,email,user,password,suscription,expiration,doctor_key
      });
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };

//UPDATE DOCTOR
export const updateDoctor = async (req, res) => {
    try {
      const { id } = req.params;
      const { id_admin,fullname,email,user,password,suscription,expiration,doctor_key } = req.body;
  
      const [result] = await pool.query(
        "UPDATE doctor SET id_admin = IFNULL(?,id_admin), fullname = IFNULL(?,fullname),email = IFNULL(?,email),user = IFNULL(?,user),password = IFNULL(?,password),suscription = IFNULL(?,suscription),expiration = IFNULL(?,expiration),doctor_key = IFNULL(?,doctor_key) where id_doctor = ?",
        [id_admin,fullname,email,user,password,suscription,expiration,doctor_key, id]
      );
      if (result.affectedRows === 0)
        return res.status(404).json({
          message: "Doctor not found",
        });
      const [rows] = await pool.query("SELECT * FROM doctor where id_doctor = ?", [
        req.params.id,
      ]);
  
      res.json(rows[0]);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };

//DELETE DOCTOR
export const deleteDoctor = async (req, res) => {
    try {
      const [result] = await pool.query("DELETE FROM doctor where id_doctor = ?", [
        req.params.id,
      ]);
      if (result.affectedRws <= 0)
        return res.status(404).json({
          message: "Doctor not found",
        });
      res.sendStatus(204);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };
  
