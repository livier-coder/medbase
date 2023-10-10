import { pool } from '../db.js';

//GET ASSISTANT
export const getAssistant = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM assistant");
      res.json([rows]);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };

//GET ASSISTANT BY ID
export const getAssistantById = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM assistant where id_assistant = ?", [
        req.params.id,
      ]);
      if (rows.length <= 0)
        return res.status(404).json({
          message: "Assistant not found",
        });
      res.json(rows[0]);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };
 

//CREATE ASSISTANT
export const createAssistant = async (req, res) => {
    try {
      const { id_admin,fullname_assistant,email_assistant,user_assistant,password_assistant,suscription_assistant,expiration_assistant,assistant_key } = req.body;
      const [rows] = await pool.query(
        "INSERT INTO assistant (id_admin,fullname_assistant,email_assistant,user_assistant,password_assistant,suscription_assistant,expiration_assistant,assistant_key) VALUES  (?,?,?,?,?,?,?,?)",
        [id_admin,fullname_assistant,email_assistant,user_assistant,password_assistant,suscription_assistant,expiration_assistant,assistant_key]
      );
           
      res.send({
        id: rows.insertId, id_admin,fullname_assistant,email_assistant,user_assistant,password_assistant,suscription_assistant,expiration_assistant,assistant_key
      });
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };

//UPDATE ASSISTANT
export const updateAssistant = async (req, res) => {
    try {
      const { id } = req.params;
      const { id_admin,fullname_assistant,email_assistant,user_assistant,password_assistant,suscription_assistant,expiration_assistant,assistant_key } = req.body;
  
      const [result] = await pool.query(
        "UPDATE assistant SET id_admin = IFNULL(?,id_admin), fullname_assistant = IFNULL(?,fullname_assistant),email_assistant = IFNULL(?,email_assistant),user_assistant = IFNULL(?,user_assistant),password_assistant = IFNULL(?,password_assistant),suscription_assistant = IFNULL(?,suscription_assistant),expiration_assistant = IFNULL(?,expiration_assistant),assistant_key = IFNULL(?,assistant_key) where id_assistant = ?",
        [id_admin,fullname_assistant,email_assistant,user_assistant,password_assistant,suscription_assistant,expiration_assistant,assistant_key,id]
      );
      if (result.affectedRows === 0)
        return res.status(404).json({
          message: "Assistant not found",
        });
      const [rows] = await pool.query("SELECT * FROM assistant where id_assistant = ?", [
        req.params.id,
      ]);
  
      res.json(rows[0]);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };

//DELETE ASSISTANT
export const deleteAssistant = async (req, res) => {
    try {
      const [result] = await pool.query("DELETE FROM assistant where id_assistant = ?", [
        req.params.id,
      ]);
      if (result.affectedRws <= 0)
        return res.status(404).json({
          message: "Assistant not found",
        });
      res.sendStatus(204);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };
  