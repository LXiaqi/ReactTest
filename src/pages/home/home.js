import React from 'react'
import { Card } from 'antd';
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
        var myChart = echarts.init(document.getElementById('main'));
        var myMoney = echarts.init(document.getElementById('money'));
        var pies = echarts.init(document.getElementById('pie'));
        // 绘制饼图
        pies.setOption({
            title: {
                text: '某站点用户访问来源',
                subtext: '纯属虚构',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['李白', '韩信', '吕布', '赵云', '马超']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: 335, name: '李白'},
                        {value: 310, name: '韩信'},
                        {value: 234, name: '吕布'},
                        {value: 135, name: '赵云'},
                        {value: 1548, name: '马超'}
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        });
        // 绘制柱状图
        myChart.setOption({
            title: { text: '今日新增用户',textAlign:'center',x:'center', y:'top', },
            tooltip: {},
            xAxis: {
                data: ["小米", "华为", "OPPO", "ViVo", "苹果", "三星"]
            },
            yAxis: {},
            series: [{
                name: '新增',
                type: 'bar',
                data: [15, 50, 36, 10, 70, 20]
            }]
        });
        // 绘制折线图
        myMoney.setOption({
            title: {
                text: '周流水',textAlign:'center',x:'center', y:'top', },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
                padding:[40,0,0,0], 
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '直接访问',
                    type: 'line',
                    stack: '总量',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        })
    }
    render() {
        return (
            <div>
                <Crumbs />
                <Card className="homecard">
                    <div  id="pie" style={{ width: 1400, height: 400 }}></div>
                    <div  id="main" style={{ width: 1400, height: 400 }}></div>
                    <div  id="money" style={{ width: 1400, height: 500 }}></div>
                </Card>
            </div>
        )
    }
}
export default Home;