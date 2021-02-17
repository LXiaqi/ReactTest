import axios from 'axios'
import qs from 'qs'
// 快递物流查询
export async function postcodeApi(regions,page) {
    let data = {
        apiKey:'R1XKVNl44310407d63859331be6c3a1016bdee987b85638',
        pageSize:10,
        province:regions,
        page:page
    }
    const res = await axios.post('https://api.apishop.net/common/postcode/getPostCodeByAddr',qs.stringify(data));
    if(res.status === 200) {
        return res;
    }
}