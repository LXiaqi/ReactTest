import axios from 'axios'
import qs from 'qs'
// 通过手机号查询归属地
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export async function phonelocation(that) {
    let data = {
        mobileCode:that.state.searchphone,
        userID:''
    }
    const res = await axios.post('/WebServices/MobileCodeWS.asmx/getMobileCodeInfo',qs.stringify(data));
    if(res.status === 200) {
        return res;
    }
}
