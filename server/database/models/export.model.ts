import connectionMysql from '../config/mysql';
import msqlNode from '../config/mysqlPhoto';
const outExport ={}

export default {
    // @ts-ignore
    async get(params: any) {
        msqlNode.execute(`SELECT * FROM export WHERE TIP='rent21'  `).then(exportF=>{
            exportF[0].forEach(item => {
                if(!outExport[item.UID])outExport[item.UID]={PHOTO:[]}
                if (item['TITLE'] == 'METRO' || item['TITLE'] == 'GLMETRO' || item['TITLE'] == 'UD' || item['TITLE'] == 'UDTIP') {
                    if(!outExport[item['UID']]['METRO'])outExport[item['UID']]['METRO'] = {} 
                    if(!outExport[item['UID']]['METRO'][item.PUID])outExport[item['UID']]['METRO'][item.PUID] = {} 
    
                    outExport[item['UID']]['METRO'][item.PUID][item['TITLE']] = item['VAL']                
                }
                else{
                    if(item.TITLE=='PHOTO'){
                        outExport[item.UID]['PHOTO'].push({PUID:item.PUID,NAME:item.VAL,STEP:item.STEP})
                    }
                    else{
                        outExport[item.UID][item.TITLE] = item.VAL
                    }
                }
            })
            console.log(outExport)
        })
        return true
    }    
}