import { pool } from '../db.js';

//GET SUPPLIER
export const getSupplier = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM supplier");
      res.json([rows]);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };

//GET SUPPLIER BY ID
export const getSupplierById = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM supplier where id_supplier = ?", [
        req.params.id,
      ]);
      if (rows.length <= 0)
        return res.status(404).json({
          message: "Supplier not found",
        });
      res.json(rows[0]);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };
 
   
//CREATE SUPPLIER
export const createSupplier = async (req, res) => {
    try {
      const { name,description_supplier,order_date,delivery_date,to_pay,delivered } = req.body;
      const [rows] = await pool.query(
        "INSERT INTO supplier (name,description_supplier,order_date,delivery_date,to_pay,delivered) VALUES  (?,?,?,?,?,?)",
        [name,description_supplier,order_date,delivery_date,to_pay,delivered]
      );
           
      res.send({
        id: rows.insertId, name,description_supplier,order_date,delivery_date,to_pay,delivered
      });
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };

//UPDATE SUPPLIER
export const updateSupplier = async (req, res) => {
    try {
      const { id } = req.params;
      const { name,description_supplier,order_date,delivery_date,to_pay,delivered } = req.body;
  
      const [result] = await pool.query(
        "UPDATE supplier SET name = IFNULL(?,name), description_supplier = IFNULL(?,description_supplier),order_date = IFNULL(?,order_date),delivery_date = IFNULL(?,delivery_date),to_pay = IFNULL(?,to_pay),delivered = IFNULL(?,delivered) where id_supplier = ?",
        [name,description_supplier,order_date,delivery_date,to_pay,delivered,id]
      );
      if (result.affectedRows === 0)
        return res.status(404).json({
          message: "Supplier not found",
        });
      const [rows] = await pool.query("SELECT * FROM supplier where id_supplier = ?", [
        req.params.id,
      ]);
  
      res.json(rows[0]);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };

//DELETE SUPPLIER
export const deleteSupplier = async (req, res) => {
    try {
      const [result] = await pool.query("DELETE FROM supplier where id_supplier = ?", [
        req.params.id,
      ]);
      if (result.affectedRws <= 0)
        return res.status(404).json({
          message: "Supplier not found",
        });
      res.sendStatus(204);
    } catch (error) {
      return res.sendStatus(500).json({
        message: "Something went wrong",
      });
    }
  };
  