import { pool } from "../db.js";
//GET ADMIN
export const getAdmin = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM admin");
    res.json([rows]);
  } catch (error) {
    return res.sendStatus(500).json({
      message: "Something went wrong",
    });
  }
};
//GET ADMIN BY ID
export const getAdminById = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM admin where id_admin = ?", [
      req.params.id,
    ]);
    if (rows.length <= 0)
      return res.status(404).json({
        message: "Admin not found",
      });
    res.json(rows[0]);
  } catch (error) {
    return res.sendStatus(500).json({
      message: "Something went wrong",
    });
  }
};
//CREATE ADMIN
export const createAdmin = async (req, res) => {
  try {
    const { admin_key, password_admin } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO admin (admin_key,password_admin) VALUES (?,?)",
      [admin_key, password_admin]
    );

    res.send({
      id: rows.insertId,
      admin_key,
      password_admin,
    });
  } catch (error) {
    return res.sendStatus(500).json({
      message: "Something went wrong",
    });
  }
};
//UPDATE ADMIN
export const updateAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const { admin_key, password_admin } = req.body;

    const [result] = await pool.query(
      "UPDATE admin SET admin_key = IFNULL(?,admin_key), password_admin = IFNULL(?,password_admin) where id_admin = ?",
      [admin_key, password_admin, id]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Admin not found",
      });
    const [rows] = await pool.query("SELECT * FROM admin where id_admin = ?", [
      req.params.id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.sendStatus(500).json({
      message: "Something went wrong",
    });
  }
};
//DELETE ADMIN
export const deleteAdmin = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM admin where id_admin = ?", [
      req.params.id,
    ]);
    if (result.affectedRws <= 0)
      return res.status(404).json({
        message: "Admin not found",
      });
    res.sendStatus(204);
  } catch (error) {
    return res.sendStatus(500).json({
      message: "Something went wrong",
    });
  }
};
