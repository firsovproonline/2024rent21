import {readBody} from "h3";
// @ts-ignore
export default eventHandler(async (event) => {
    const { data } = await readBody(event);
    // @ts-ignore
    if(data.email!=='' ){

    }else{
        return {error:301}
    }

})