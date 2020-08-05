const el = (selector) => document.querySelector(selector);
const charts = el(".charts");
const radar = el("#radar");
// 基于准备好的dom，初始化echarts实例
radar.style.width = `${charts.clientWidth * 0.9}px`;
const myChart = echarts.init(radar);

// 指定图表的配置项和数据
const option = {
  color: ["#007ACC"],
  title: {},
  tooltip: {},
  radar: {
    shape: "circle",
    name: {
      textStyle: {
        color: "#fff",
        backgroundColor: "#555",
        borderRadius: 3,
        padding: [5, 5],
      },
    },
    indicator: [
      { name: "静态页面", max: 100 },
      { name: "编程基础", max: 100 },
      { name: "原生 JS", max: 100 },
      { name: "Vue 全家桶", max: 100 },
      { name: "项目开发", max: 100 },
      { name: "沟通能力", max: 100 },
    ],
  },
  series: [
    {
      name: "能力分配",
      type: "radar",
      areaStyle: { normal: {} },
      data: [
        {
          value: [100, 90, 90, 80, 70, 80],
          name: "能力分配",
        },
      ],
    },
  ],
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
