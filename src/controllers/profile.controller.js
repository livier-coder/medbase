import { pool } from '../db.js';
//DOCTOR PROFILE
//GET PROFILE
export const getProfile = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM profile");
      res.json([rows]);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };

//GET PROFILE BY ID
export const getProfileById = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM profile where id_profile = ?", [
        req.params.id,
      ]);
      if (rows.length <= 0)
        return res.status(404).json({
          message: "Profile not found",
        });
      res.json(rows[0]);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };
 
  
//CREATE PROFILE
export const createProfile = async (req, res) => {
    try {
      const { id_doctor,user,photo,fullname,email,cellphone,social_media,suscription,expiration,specialty } = req.body;
      const [rows] = await pool.query(
        "INSERT INTO profile (id_doctor,user,photo,fullname,email,cellphone,social_media,suscription,expiration,specialty) VALUES  (?,?,?,?,?,?,?,?,?,?)",
        [id_doctor,user,photo,fullname,email,cellphone,social_media,suscription,expiration,specialty]
      );
           
      res.send({
        id: rows.insertId, id_doctor,user,photo,fullname,email,cellphone,social_media,suscription,expiration,specialty
      });
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };

//UPDATE PROFILE
export const updateProfile = async (req, res) => {
    try {
      const { id } = req.params;
      const { id_doctor,user,photo,fullname,email,cellphone,social_media,suscription,expiration,specialty } = req.body;
  
      const [result] = await pool.query(
        "UPDATE profile SET id_doctor = IFNULL(?,id_doctor), user = IFNULL(?,user),photo = IFNULL(?,photo),fullname = IFNULL(?,fullname),email = IFNULL(?,email),cellphone = IFNULL(?,cellphone),social_media = IFNULL(?,social_media),suscription = IFNULL(?,suscription) ,expiration = IFNULL(?,expiration) ,specialty = IFNULL(?,specialty) where id_profile = ?",
        [id_doctor,user,photo,fullname,email,cellphone,social_media,suscription,expiration,specialty,id]
      );
      if (result.affectedRows === 0)
        return res.status(404).json({
          message: "Profile not found",
        });
      const [rows] = await pool.query("SELECT * FROM profile where id_profile = ?", [
        req.params.id,
      ]);
  
      res.json(rows[0]);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };

//DELETE PROFILE
export const deleteProfile = async (req, res) => {
    try {
      const [result] = await pool.query("DELETE FROM profile where id_profile = ?", [
        req.params.id,
      ]);
      if (result.affectedRws <= 0)
        return res.status(404).json({
          message: "Profile not found",
        });
      res.sendStatus(204);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };
  