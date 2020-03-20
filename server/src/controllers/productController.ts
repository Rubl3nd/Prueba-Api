import {Request, Response} from 'express';
import pool from '../databse';
class ProductController{

  public async list (req: Request,res: Response){
    const products= (await pool).query('SELECT COUNT(*)  FROM products');
    res.json(products);
  }
  public async create (req: Request,res: Response):Promise<void>{
     const result=(await pool).query('INSERT INTO products set ?', [req.body]);
     res.json({message:'Producto Guardado'});
  }
  public async delete (req: Request,res: Response):Promise<void>{
    const{id}= req.params;
    (await pool).query('DELETE FROM products WHERE id= ?',[id]);
    res.json({message:'Mensaje eliminado'});
  }
}

export const productController= new ProductController();