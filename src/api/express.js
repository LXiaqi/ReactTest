import axios from 'axios'
import qs from 'qs'
// 快递物流查询
export async function express(that) {
    let data = {
        apiKey:'R1XKVNl44310407d63859331be6c3a1016bdee987b85638',
        expressNumber:that.state.searchNum
    }
    const res = await axios.post('https://api.apishop.net/common/express/getExpressInfo',qs.stringify(data));
    if(res.status === 200) {
        return res;
    }
}