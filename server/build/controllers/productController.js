"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const databse_1 = __importDefault(require("../databse"));
class ProductController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = (yield databse_1.default).query('SELECT COUNT(*)  FROM products');
            res.json(products);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = (yield databse_1.default).query('INSERT INTO products set ?', [req.body]);
            res.json({ message: 'Producto Guardado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            (yield databse_1.default).query('DELETE FROM products WHERE id= ?', [id]);
            res.json({ message: 'Mensaje eliminado' });
        });
    }
}
exports.productController = new ProductController();
