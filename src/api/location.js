import axios from 'axios'
// 高德定位 api
export async function location() {
    const res = await axios.get('http://restapi.amap.com/v3/ip?key=554e7993d7c2163d48322e6df9cb0f0c');
    if(res.status === 200) {
        return res;
    }
}
// 获取天气
export async function weather(that) {
    const res = await axios.get('https://restapi.amap.com/v3/weather/weatherInfo?city='+that.state.citycode+'&key=554e7993d7c2163d48322e6df9cb0f0c');
    if(res.status === 200) {
        return res;
    }
}
// 高德地图
