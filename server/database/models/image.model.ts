import connectionMysql from '../config/mysqlPhoto';
// @ts-ignore
import gm from 'gm'
function rotate (readStream,w,h) {
    return new Promise(function (resolve, reject) {
        gm(readStream, '1111.jpg')
            // @ts-ignore
        .resize(w*2,h*2)
        .toBuffer('webp',  (err, buffer)=> {
            // @ts-ignore
            resolve(buffer)
        })
    })
}

export default {
// @ts-ignore
    async imageGet(params: any) {
        let query = `SELECT PHOTO as IMG from foto WHERE UID='`+params.uid+`' AND STEP=0 LIMIT 0,1`
        if(params.puid) query = `SELECT PHOTO as IMG from foto WHERE UID='`+params.puid+`' AND TITLE='`+params.title+`' LIMIT 0,1`
        //console.log(query)
        const [img] = await connectionMysql.execute(query);

        if(params.size =='small'){
            if(img[0])
                return await rotate(img[0].IMG,90,160)
            else
                return null

        }else{
            if(img[0])
                return await rotate(img[0].IMG,800,null)
            else
                return null

        }

    }
}