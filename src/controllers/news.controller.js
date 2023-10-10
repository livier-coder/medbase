import { pool } from '../db.js';

//GET NEWS
export const getNews = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM news");
      res.json([rows]);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };

//GET NEWS BY ID
export const getNewsById = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM news where id_new = ?", [
        req.params.id,
      ]);
      if (rows.length <= 0)
        return res.status(404).json({
          message: "New not found",
        });
      res.json(rows[0]);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };
 
    
//CREATE NEWS
export const createNews = async (req, res) => {
    try {
      const { description_news,image_new } = req.body;
      const [rows] = await pool.query(
        "INSERT INTO news (description_news,image_new) VALUES  (?,?)",
        [description_news,image_new]
      );
           
      res.send({
        id: rows.insertId, description_news,image_new
      });
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };

//UPDATE NEWS
export const updateNews = async (req, res) => {
    try {
      const { id } = req.params;
      const { description_news,image_new } = req.body;
  
      const [result] = await pool.query(
        "UPDATE news SET description_news = IFNULL(?,description_news), image_new = IFNULL(?,image_new) where id_new = ?",
        [description_news,image_new,id]
      );
      if (result.affectedRows === 0)
        return res.status(404).json({
          message: "News not found",
        });
      const [rows] = await pool.query("SELECT * FROM news where id_new = ?", [
        req.params.id,
      ]);
  
      res.json(rows[0]);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };

//DELETE NEWS
export const deleteNews = async (req, res) => {
    try {
      const [result] = await pool.query("DELETE FROM news where id_new = ?", [
        req.params.id,
      ]);
      if (result.affectedRws <= 0)
        return res.status(404).json({
          message: "News not found",
        });
      res.sendStatus(204);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };
  