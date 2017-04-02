
$(document).ready(function(){
var MyScatter= echarts.init(document.getElementById('Scatter'));

var data = [
    [-1,
        1,
        0,
        0.75000000000000000000,
        0,
        0,
        "A000",
        "公司一"
    ],
    [
        2,
        0.5, 
        -0.890000000000000,
        0,
        0,
        0,
        "Z400",
        "公司二"
    ],
    [
        -2.5,
        -0.5,
        0,
        0,
        0, 
        -18.420000000000000,
        "2000",
        "公司三"
    ]
];
var textStyle = {
    color: '#333',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontFamily: '微软雅黑',
    fontSize: 14,
};
option = {
	
    backgroundColor: '#fff',
    grid:{},
 
  
    tooltip: {
        /*返回需要的信息*/
        formatter: function(param) {
            var value = param.value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 16px;padding-bottom: 7px;margin-bottom: 7px;"> ' + value[7] + '(' + value[6] + ')' +
                '</div>';
        }
    },
    xAxis: {
        type:'time',
        name:'时间轴',
        splitLine: {
            show: true,
        },
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
        },
        max: 5,
        min: -5,
    },
    yAxis: {
        type:'value',
        name:'情绪值',
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: true,
        },
        axisTick: {
            show: false
        },
        max: 1,
        min: -1,
    },
    series: [{
        name: '',
        data: data,
        type: 'scatter',
        symbolSize: 30
    }]
};
MyScatter.setOption(option);});