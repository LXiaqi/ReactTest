export default {
    formateDate(time) {
        let date = new Date(time);
        return date.getFullYear()+ '-' + (date.getMonth()+1)+ '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()+' ';
    },
    pageination(data,callback) {
        return {
            onChange:(current)=> {
                callback(current);
            },
            pageSize:10,
            total:data.totalCount,
            showTotal:()=> {
                return `共${data.totalCount}条`
            },
        }
    }
}