const el = (selector) => document.querySelector(selector);

const elHeaderInfo = el(".header__info");
const birthdayTime = Date.parse("1996/8/18");
const now = Date.now();
const diffYears = parseInt((now - birthdayTime) / (1000 * 60 * 60 * 24 * 365));
const diffYearsText = diffYears ? `${diffYears}岁` : "-";
const headerInfoText = `男 | ${diffYearsText} | 前端开发工程师 | 北京 | 硕士`;
elHeaderInfo.textContent = headerInfoText;

const elCharts = el(".charts");
const elChartsUl = el(".charts>ul");
const elRadar = el("#radar");
// 基于准备好的dom，初始化echarts实例
elRadar.style.width = `${elCharts.clientWidth - elChartsUl.clientWidth}px`;
const myChart = echarts.init(elRadar);

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
      { name: "数据可视化", max: 100 },
      { name: "项目开发", max: 100 },
      { name: "沟通能力", max: 100 },
    ],
    radius: "70%",
    nameGap: 8,
  },
  series: [
    {
      name: "能力分配",
      type: "radar",
      areaStyle: { normal: {} },
      data: [
        {
          value: [100, 90, 90, 95, 90, 90, 85],
          name: "能力分配",
        },
      ],
    },
  ],
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
