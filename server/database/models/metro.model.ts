import connectionMysql from '../config/mysql';
export default {
    async findAllItem(q: any) {
        let WHERE = ``

        if(WHERE!==''){
            WHERE = ` WHERE ` + WHERE
        }
        let page = q.page
        if(page > 0)page--
        q.perPage = q.perPage*1
        page = page * q.perPage
        //console.log(WHERE)
        const queryTotal = 'SELECT count(id) as total FROM metroRent21 '+WHERE;
        const [total] = await connectionMysql.execute(queryTotal);
        const query = 'SELECT * FROM metroRent21 '+WHERE+` order by ID desc limit `+page+','+q.perPage;
        const [rows] = await connectionMysql.execute(query);
        return {rows: rows , total: total[0].total as number}   ;     
        /*
SELECT DISTINCT ULITCA
FROM `im_object`
LIMIT 0 , 30        
        
        */
    }    
}