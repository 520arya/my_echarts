(function(){
    // 1.实例化对象
    var myChart=echarts.init(document.querySelector('.geo1'));
    
    // 2.指定配置和数据
    window.dataList = [
        {name: '澳门', value: 818},
        {name: '香港', value: 734},
        {name: '台湾', value: 22320},
        {name: '新疆', value: 20},
        {name: '宁夏', value: 275},
        {name: '青海', value: 9},
        {name: '甘肃', value: 14},
        {name: '陕西', value: 4},
        {name: '西藏', value: 12},
        {name: '云南', value: 21},
        {name: '贵州', value: 9},
        {name: '四川', value: 48},
        {name: '重庆', value: 114},
        {name: '海南', value: 8},
        {name: '广西', value: 2},
        {name: '广东', value: 546},
        {name: '湖南', value: 10},
        {name: '湖北', value: 6},
        {name: '河南', value: 124},
        {name: '山东', value: 5},
        {name: '江西', value: 2},
        {name: '福建', value: 30},
        {name: '安徽', value: 19},
        {name: '浙江', value: 32},
        {name: '江苏', value: 26},
        {name: '上海', value: 64},
        {name: '黑龙江', value: 8},
        {name: '吉林', value: 40},
        {name: '辽宁', value: 6},
        {name: '内蒙古', value: 100},
        {name: '山西', value: 53},
        {name: '河北', value: 29},
        {name: '天津', value: 27},
        {name: '北京', value: 64}
    ];
    var option = {
       
        
        
        tooltip: {
            triggerOn: "click",
            formatter: function(e, t, n) {
                return '.5' == e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value
            }
        }, 
        toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            }, // 提供下载工具
        visualMap: {
            textStyle: {
                color: '#fff' // 主标题文字颜色
            },
            min: 0,
            max: 100000,
            left: 26,
            bottom: 0,
            showLabel: !0,
            
            color:"#fff",
            
            pieces: [{
                gt: 10000,
                label:"> 10000人",
                
                
                color: "#8a1a23"
            }, {
                gte: 1000,
                lte: 10000,
                label: "1000 - 10000人",
                color: "#af0c10"
            }, {
                gte: 100,
                lt: 1000,
                label: "100 - 1000人",
                color: "#ff8c71"
            }, {
                gt: 10,
                lt: 100,
                label: "10 - 100人",
                color: "#ffd7bb"
            }, {
                gt: 1,
                lt: 10,
                label: "<10人",
                color: "#fef1cf"
            }],
            show: !0
        },
        geo: {
            map: "china",
            roam: !1,
            scaleLimit: {
                min: 1,
                max: 2
            },
            zoom: 1.1,
            top: 23,
            label: {
                normal: {
                    show: !0,
                    fontSize: "14",
                    color: "rgba(0,0,0,0.7)"
                }
            },
            itemStyle: {
                normal: {
                    //shadowBlur: 50,
                    //shadowColor: 'rgba(0, 0, 0, 0.2)',
                    borderColor: "rgba(0, 0, 0, 0.3)"
                },
                emphasis: {
                    areaColor: "#f2d5ad",
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    borderWidth: 0
                }
            }
        },
        series: [{
            name: "确诊病例",
            type: "map",
            geoIndex: 0,
            data: window.dataList
        }]
    };
    // 3.把数据和配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
      });
})();