// @ts-ignore
import { getServerSession } from '#auth';
import * as url from "url";
import model from '../database/models/im_object.modeel';

// @ts-ignore
export default eventHandler(async (event) => {
    const params = await url.parse(event.node.req.url as string, true).query
    return await model.findAllItem(params as any);
})