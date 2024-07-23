import connectionMysql from '../config/mysql';
import IFace from "../interfaces/im_object.interface";
export default {
    async findAllItem(q: any) {
        let orderBy = ``
        let WHERE = ``
        if(q.orderBy && q.orderBy !== '' && q.orderBy !== 'undefined'){
            orderBy =' ORDER BY '+q.orderBy+' '
        }


        if(q.OPP && q.OPP !== '' && q.OPP !== 'undefined'){
            if (WHERE !== ''){
                WHERE += ' AND '
            }
            WHERE += ` (OPP = '`+q.OPP+`')`
        }

        if(q.CENA_AR_M2_GOD_MAX && q.CENA_AR_M2_GOD_MAX !== '' && q.CENA_AR_M2_GOD_MAX !== 'undefined'){
            if (WHERE !== ''){
                WHERE += ' AND '
            }
            WHERE += ` ((CENA_AR_MES * 12) <= `+q.CENA_AR_M2_GOD_MAX+`)`
        }

        if(q.CENA_AR_M2_GOD_MIN && q.CENA_AR_M2_GOD_MIN !== '' && q.CENA_AR_M2_GOD_MIN !== 'undefined'){
            if (WHERE !== ''){
                WHERE += ' AND '
            }
            WHERE += ` ((CENA_AR_MES * 12) >= `+q.CENA_AR_M2_GOD_MIN+`)`
        }

        if(q.UNDERGROUND && q.UNDERGROUND !== '' && q.UNDERGROUND !== 'undefined'){
            if (WHERE !== ''){
                WHERE += ' AND '
            }
            WHERE += ` (UNDERGROUND = '`+q.UNDERGROUND+`')`
        }
        

        if(q.GOROD && q.GOROD !== '' && q.GOROD !== 'undefined'){
            if (WHERE !== ''){
                WHERE += ' AND '
            }
            WHERE += ` (GOROD = '`+q.GOROD+`')`
        }

        if(q.LIKEULITCA && q.LIKEULITCA !== '' && q.LIKEULITCA !== 'undefined'){
            if (WHERE !== ''){
                WHERE += ' AND '
            }
            WHERE += ` (ULITCA LIKE '%`+q.LIKEULITCA+`%')`
        }


        if(q.OKRUG && q.OKRUG !== '' && q.OKRUG !== 'undefined'){
            if (WHERE !== ''){
                WHERE += ' AND '
            }
            WHERE += ` (OKRUG = '`+q.OKRUG+`')`
        }

        if(q.TIPZD && q.TIPZD !== '' && q.TIPZD !== 'undefined'){
            if (WHERE !== ''){
                WHERE += ' AND '
            }
            WHERE += ` (TIPZD = '`+q.TIPZD+`')`
        }

        if(q.TIPP && q.TIPP !== '' && q.TIPP !== 'undefined'){
            if (WHERE !== ''){
                WHERE += ' AND '
            }
            WHERE += ` (TIPP LIKE '%`+q.TIPP+`%')`
        }

        if(q.METRO && q.METRO !== '' && q.METRO !== 'undefined'){
            if (WHERE !== ''){
                WHERE += ' AND '
            }
            WHERE += ` (METRO LIKE '%`+q.METRO+`%')`
        }        

        if(q.TIP && q.TIP !== '' && q.TIP !== 'undefined'){
            if (WHERE !== ''){
                WHERE += ' AND '
            }
            WHERE += ` (TIP = '`+q.TIP+`')`
        }

        if(q.id && q.id !== '' && q.id !== 'undefined'){
            if (WHERE !== ''){
                WHERE += ' AND '
            }
            WHERE += ` (id = '`+q.id+`')`
        }
        if(WHERE!==''){
            WHERE = ` WHERE ` + WHERE
        }
        let page = q.page
        if(page > 0)page--
        q.perPage = q.perPage*1
        page = page * q.perPage
        const queryTotal = 'SELECT count(id) as total FROM im_objectКtRent21 '+WHERE;
        //console.log(queryTotal)
        const [total] = await connectionMysql.execute(queryTotal);
        const query = 'SELECT * FROM im_objectКtRent21 '+WHERE+orderBy+` limit `+page+','+q.perPage;
        //console.log(query)
        const [rows] = await connectionMysql.execute(query);
        //console.log(q.perPage,total)
        if(q.dopinfo){
            //const listMetro = Object.values(JSON.parse(rows[0].METRO))
            // @ts-ignore
            const findMetro = rows[0].UNDERGROUND
            // @ts-ignore  rows[0].LNG
            let findSql = `select DISTINCT ULITCA from im_objectКtRent21 WHERE TIP='`+rows[0].TIP+`' AND  METRO LIKE '%`+findMetro+`%'`
            const area = 1.5 / 111
            findSql = `SELECT
            DISTINCT ULITCA as RU
            FROM im_objectКtRent21 
            WHERE `+rows[0].LNG+` BETWEEN LNG - `+area+` AND LNG + `+area+ ` AND  `+ rows[0].LAT +`BETWEEN LAT - `+area+` AND LAT + `+area
        
            const [listUlita] = await connectionMysql.execute(findSql);
            listUlita.forEach(item=>{
                // @ts-ignore
                item.LATIN = connectionMysql.cyrill_to_latin(item.RU)
            })
            //console.log(listUlita)

            return {rows: rows as IFace[], total: total[0].total as number, listUlita:listUlita}   ;        

        }else{
            return {rows: rows as IFace[], total: total[0].total as number}   ;        

        }

    }    
}