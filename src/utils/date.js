export default {
    formateDate(time) {
        let date = new Date(time);
        return date.getFullYear()+ '-' + (date.getMonth()+1)+ '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()+' ';
    },
    pageination(totals,callback) {
        return {
            onChange:(current)=> {
                callback(current);
            },
            pageSize:10,
            total:totals,
            showTotal:()=> {
                return `共${totals}条`
            },
        }
    }
}