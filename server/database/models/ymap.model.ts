import connectionMysql from '../config/mysql';
export default {
    async findAllItem(q: any) {
        let WHERE = ``
        if(q.OPP && q.OPP !== '' && q.OPP !== 'undefined'){
            if (WHERE !== ''){
                WHERE += ' AND '
            }
            WHERE += ` (OPP = '`+q.OPP+`')`
        }

        if(q.GOROD && q.GOROD !== '' && q.GOROD !== 'undefined'){
            if (WHERE !== ''){
                WHERE += ' AND '
            }
            WHERE += ` (GOROD = '`+q.GOROD+`')`
        }

        if(q.TIP && q.TIP !== '' && q.TIP !== 'undefined'){
            if (WHERE !== ''){
                WHERE += ' AND '
            }
            WHERE += ` (TIP = '`+q.TIP+`')`
        }

        if(WHERE!==''){
            WHERE = ` WHERE ` + WHERE
        }
        let page = q.page
        if(page > 0)page--
        q.perPage = q.perPage*1
        page = page * q.perPage
//        console.log(WHERE)
        const queryTotal = 'SELECT count(id) as total FROM im_objectКtRent21 '+WHERE+` GROUP BY ULITCA, DOM`;
        const [total] = await connectionMysql.execute(queryTotal);
        const query = 'SELECT LAT,LNG FROM im_objectКtRent21 '+WHERE+` GROUP BY ULITCA, DOM order by ID desc `;
        const [rows] = await connectionMysql.execute(query);
        return {rows: rows , total: total[0].total as number}   ;     
        /*
SELECT DISTINCT ULITCA
FROM `im_object`
LIMIT 0 , 30        
        
        */
    }    
}