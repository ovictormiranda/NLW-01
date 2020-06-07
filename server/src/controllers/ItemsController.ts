import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
    //Nao pode utilizar arrow function em classes
    async index (request: Request, response: Response) {
        const items = await knex('items').select('*');
        //SELECT * FROM items
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.0.109:3333/uploads/${item.image}`,
            }
        })
    
        return response.json(serializedItems);
    }
}

export default ItemsController;