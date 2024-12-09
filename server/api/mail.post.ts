import {readBody} from "h3";
import {nodemailer} from "nodemailer"
// @ts-ignore
export default eventHandler(async (event) => {
    const { data } = await readBody(event);
    // @ts-ignore
    if(data.email!=='' ){

    }else{
        return {error:301}
    }

})