import * as url from "url";
import model from '../database/models/spr.model';

// @ts-ignore
export default eventHandler(async (event) => {
    const params = await url.parse(event.node.req.url as string, true).query
    return await model.list(params as any);
})