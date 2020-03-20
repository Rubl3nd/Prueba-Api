import {Router} from 'express';
import {productController} from '../controllers/productController'
class ProductRoutes{

    router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{

        this.router.get('/',productController.list);
        this.router.post('/',productController.create);
        this.router.delete('/:id',productController.delete);
    }
}

const productRoutes = new ProductRoutes();
export default productRoutes.router;