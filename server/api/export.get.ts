// @ts-ignore
import * as url from "url";
import model from '../database/models/export.model';
// @ts-ignore
export default eventHandler(async (event) => {
    const params = await url.parse(event.node.req.url as string, true).query
    return await model.get(params as any);
})