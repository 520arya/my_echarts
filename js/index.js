// 本土病例新增模块
// 立即执行函数（防止变量污染）(function(){})();
(function() {
    $(".tabs").on("click", "a", function() {
      $(this)
        .addClass("active")
        .siblings("a")
        .removeClass("active");
       console.log($(this).index());
      //   选取对应索引号的content
      $(".content")
        .eq($(this).index())
        .show()
        .siblings(".content")
        .hide();
    });
    // 1. 先克隆marquee里面所有的行（row）
    $(".localCases-marquee-view .marquee").each(function() {
      // console.log($(this));
      var rows = $(this)
        .children()
        .clone();
      $(this).append(rows);
    });
  })();

  (function() {
    $(".map-tabs").on("click", "a", function() {
      $(this)
        .addClass("active")
        .siblings("a")
        .removeClass("active");
       console.log($(this).index());
      //   选取对应索引号的content
      $(".chart")
        .eq($(this).index())
        .show()
        .siblings(".chart")
        .hide()
        ;
    });
    
  })();

  // 海外国家新增确诊TOP10
(function(){
  var myChart=echarts.init(document.querySelector('.bar'));
  option = {
    textStyle: {
      color: '#fff' // 文字颜色
    },
    dataset: [
      {
        dimensions: ['country', 'num', 'date'],
        source: [
          ['美国', 50141, '2022-11-11'],
          ['日本',  78577,  '2022-11-11'],
          ['韩国 ',  54519,  '2022-11-11'],
          ['英国',  24253,  '2022-11-11'],
          ['法国',27053,  '2022-11-11'],
          ['德国',  33703,  '2022-11-11'],
          ['希腊',61398,  '2022-11-11'],
          ['土耳其',57091,  '2022-11-11'],
          ['澳大利亚',  44100,  '2022-11-11']
        ]
      },
      {
        transform: {
          type: 'sort',
          config: { dimension: 'num', order: 'desc' }
        }
      }
    ],
    color:['#00f2f1'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    
    xAxis: {
      type: 'category',
      axisLabel: { interval: 0, rotate: 30 }
    },
    yAxis: {},
    series: {
      name: '新增确诊',
      type: 'bar',
      encode: { x: 'country', y: 'num' },
      datasetIndex: 1,
      label: {
        show: true,
        position: 'top',
        color:'#00f2f1'
        
      }
    }
  };
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();
  


// 全国新增确诊/新增无症状折线图模块


(function() {
  // (1)准备数据
  var data = {
    year: [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    ],
    quarter: [
      [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
      [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
    ],
    month: [
      [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
      [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
    ],
    week: [
      [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
      [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
    ]
  };
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".line"));
  // 2. 指定配置和数据
  var option = {
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      // 通过坐标轴来触发
      trigger: "axis"
    },
    legend: {
      // 距离容器10%
      right: "10%",
      // 修饰图例文字的颜色
      textStyle: {
        color: "#4c9bfd"
      }
      // 如果series 里面设置了name，此时图例组件的data可以省略
      // data: ["邮件营销", "联盟广告"]
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true,
      borderColor: "#012f4a",
      containLabel: true
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "#4c9bfd"
      },
      // 去除x坐标轴的颜色
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "#4c9bfd"
      },
      // 修改y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [
      {
        name: "新增确诊",
        type: "line",
        stack: "总量",
        // 是否让线条圆滑显示
        smooth: true,
        data: data.year[0]
      },
      {
        name: "新增无症状",
        type: "line",
        stack: "总量",
        smooth: true,
        data: data.year[1]
      }
    ]
  };
  // 3. 把配置和数据给实例对象
  myChart.setOption(option);
  // 4. tab切换效果制作
  // (2) 点击切换效果
  $(".diagram .caption").on("click", "a", function() {
    // 此时要注意这个索引号的问题
    index = $(this).index() - 1;
    // 点击当前a 高亮显示 调用active
    $(this)
      .addClass("active")
      .siblings("a")
      .removeClass("active");
    // 拿到当前a 的自定义属性值
    // console.log(this.dataset.type);
    // 根据拿到的值 去找数据
    // console.log(data.year);
    // console.log(data["year"]);
    // console.log(data[this.dataset.type]);
    var arr = data[this.dataset.type];
    // console.log(arr);
    // 根据拿到的数据重新渲染 series里面的data值
    option.series[0].data = arr[0];
    option.series[1].data = arr[1];
    // 重新把配置好的新数据给实例对象
    myChart.setOption(option);
  });
  // 5. tab栏自动切换效果
  //  开启定时器每隔3s，自动让a触发点击事件即可
  var as = $(".diagram .caption a");
  var index = 0;
  var timer = setInterval(function() {
    index++;
    if (index >= 4) index = 0;
    as.eq(index).click();
  }, 1000);
  // 鼠标经过sales，关闭定时器，离开开启定时器
  $(".diagram").hover(
    function() {
      clearInterval(timer);
    },
    function() {
      clearInterval(timer);
      timer = setInterval(function() {
        index++;
        if (index >= 4) index = 0;
        as.eq(index).click();
      }, 1000);
    }
  );
  // 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();