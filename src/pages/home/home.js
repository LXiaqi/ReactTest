import React from 'react'
import { Card } from 'antd';
import { ExclamationCircleOutlined,CaretUpOutlined,CaretDownOutlined} from '@ant-design/icons';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
//折线图
import  'echarts/lib/chart/line';
// 饼图
import  'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import './home.less'
import Crumbs from './../../components/crumbs/crumbs'
class Home extends React.Component {
    componentDidMount() {
        // var myChart = echarts.init(document.getElementById('main'));
        // var myMoney = echarts.init(document.getElementById('money'));
        var Linechart = echarts.init(document.getElementById('Linechart'));
        // 绘制饼图
        // pies.setOption({
        //     title: {
        //         text: '某站点用户访问来源',
        //         subtext: '纯属虚构',
        //         left: 'center'
        //     },
        //     tooltip: {
        //         trigger: 'item',
        //         formatter: '{a} <br/>{b} : {c} ({d}%)'
        //     },
        //     legend: {
        //         orient: 'vertical',
        //         left: 'left',
        //         data: ['李白', '韩信', '吕布', '赵云', '马超']
        //     },
        //     series: [
        //         {
        //             name: '访问来源',
        //             type: 'pie',
        //             radius: '55%',
        //             center: ['50%', '60%'],
        //             data: [
        //                 {value: 335, name: '李白'},
        //                 {value: 310, name: '韩信'},
        //                 {value: 234, name: '吕布'},
        //                 {value: 135, name: '赵云'},
        //                 {value: 1548, name: '马超'}
        //             ],
        //             emphasis: {
        //                 itemStyle: {
        //                     shadowBlur: 10,
        //                     shadowOffsetX: 0,
        //                     shadowColor: 'rgba(0, 0, 0, 0.5)'
        //                 }
        //             }
        //         }
        //     ]
        // });
        // // 绘制柱状图
        // myChart.setOption({
        //     title: { text: '今日新增用户',textAlign:'center',x:'center', y:'top', },
        //     tooltip: {},
        //     xAxis: {
        //         data: ["小米", "华为", "OPPO", "ViVo", "苹果", "三星"]
        //     },
        //     yAxis: {},
        //     series: [{
        //         name: '新增',
        //         type: 'bar',
        //         data: [15, 50, 36, 10, 70, 20]
        //     }]
        // });
        // // 绘制折线图
        Linechart.setOption({
            xAxis: {
                type: 'category',
                show:false,
                boundaryGap: false,
                data: ['2020-12-20', '2020-12-21', '2020-12-22', '2020-12-23', '2020-12-24', ]
            },
            yAxis: {
                show:false,
                type: 'value'
            },
            series: [{
                
                data: [7,5,4,2,5,],
                type: 'line',
                areaStyle: {}
            }]
        })
    }
    render() {
        return (
            <div className="home_content">
                <Crumbs />
                {/* <Card className="homecard">
                    <div  id="pie" style={{ width: 1400, height: 400 }}></div>
                    <div  id="main" style={{ width: 1400, height: 400 }}></div>
                    <div  id="money" style={{ width: 1400, height: 500 }}></div>
                </Card> */}
                <div className="head_box">
                    <Card className="totalCard">
                        <div className="t_box">
                            <span>总销售额</span>
                            <ExclamationCircleOutlined className="icon_t" />
                        </div>
                        <div className="money">
                            ¥126560
                        </div>
                        <div className="trend">
                            <span>周同比11%  <CaretUpOutlined className="up" /></span>
                            <span className="last_span">日同比13% <CaretDownOutlined  className="on" /></span>
                        </div>
                        <div className="day_money">
                            <span>日销售额 ¥12,423</span>
                        </div>
                    </Card>
                    <Card className="totalCard">
                        <div className="t_box">
                            <span>访问量</span>
                            <ExclamationCircleOutlined className="icon_t" />
                        </div>
                        <div className="money">
                            8,864
                        </div>
                        <div className="trend">
                            <div  id="Linechart" style={{ width: 368, height: 40 }}></div>
                        </div>
                        <div className="day_money">
                            <span>日访问量 2,423</span>
                        </div>
                    </Card>
                    <Card className="totalCard">
                        <div className="t_box">
                            <span>总销售额</span>
                            <ExclamationCircleOutlined className="icon_t" />
                        </div>
                        <div className="money">
                            ¥126560
                        </div>
                        <div className="trend">
                            <span>周同比11%  <CaretUpOutlined className="up" /></span>
                            <span className="last_span">日同比13% <CaretDownOutlined  className="on" /></span>
                        </div>
                        <div className="day_money">
                            <span>日销售额 ¥12,423</span>
                        </div>
                    </Card>
                    <Card className="totalCard">
                        <div className="t_box">
                            <span>总销售额</span>
                            <ExclamationCircleOutlined className="icon_t" />
                        </div>
                        <div className="money">
                            ¥126560
                        </div>
                        <div className="trend">
                            <span>周同比11%  <CaretUpOutlined className="up" /></span>
                            <span className="last_span">日同比13% <CaretDownOutlined  className="on" /></span>
                        </div>
                        <div className="day_money">
                            <span>日销售额 ¥12,423</span>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}
export default Home;