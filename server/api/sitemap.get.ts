import { Server } from 'mysql2/typings/mysql/lib/Server';
import model from '../database/models/xml.model';

// @ts-ignore
export default eventHandler(async (event) => {
// @ts-ignore

    console.log('fffffff',event.context.rent21Factory)
    return await model.get();
})