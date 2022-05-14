const BarOptions = (data, category) => {
  const Options = {
    chart: {
      type: "bar",
      height: "300",
      width: data.length > 10 ? data.length * 120 : "100%",
      id: "Impression",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "15%",

        borderRadius: 7,
      },
    },
    colors: ["#001e5b"],

    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },

    xaxis: {
      categories: category,
      labels: {
        style: {
          fontSize: "16px",
          colors: [
            "#9F9F9F",
            "#9F9F9F",
            "#9F9F9F",
            "#9F9F9F",
            "#9F9F9F",
            "#9F9F9F",
          ],
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "16px",
          colors: ["#9F9F9F", "#9F9F9F", "#9F9F9F", "#9F9F9F", "#9F9F9F"],
        },
      },
    },

    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
        title: {
          formatter: (seriesName) => "Impressions - ",
        },
      },
    },
    responsive: [
      {
        breakpoint: 900,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 5,
            },
          },
        },
      },
      {
        breakpoint: 450,
        options: {
          plotOptions: {
            bar: { columnWidth: "65%" },
          },
          xaxis: {
            labels: {
              style: {
                fontSize: "13px",
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                fontSize: "11px",
              },
            },
          },
        },
      },
    ],
    series: [
      {
        data: data,
      },
    ],
  };

  return Options;
};
const AreaChartoptions = (data, categories) => {
  const Options = {
    series: [
      {
        name: "Kilometers",
        data: data,
      },
    ],
    chart: {
      height: 300,
      width: data.length * 120,
      type: "area",
      id: "area_chart",
    },
    colors: ["#EDA183"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: categories,
    },
  };
  return Options;
};

var BarChart = new ApexCharts(
  document.querySelector("#barChart"),
  BarOptions(
    [
      {
        x: "category A",
        y: 1000,
      },
      {
        x: "category B",
        y: 2000,
      },
      {
        x: "category C",
        y: 1500,
      },
      {
        x: "category C",
        y: 3500,
      },
      {
        x: "category C",
        y: 4000,
      },
      {
        x: "category C",
        y: 3000,
      },
    ],
    ["1st Week", "2nd Week", "3rd Week", "4th Week", "5th Week", "6th Week"]
  )
);
var Areachart = new ApexCharts(
  document.querySelector("#AreaChart"),
  AreaChartoptions(
    [1000, 2000, 1500, 3000, 3500, 3900, 2500, 4000, 3000, 3500, 4000],
    [
      "1 Day",
      "2 Day",
      "3 Day",
      "4 Day",
      "5 Day",
      "6 Day",
      "7 Day",
      "8 Day",
      "9 Day",
      "10 Day",
      "11 Day",
    ]
  )
);

const KilometerSelect = document.querySelector("#kilometer_select");
const ImpressionSelect = document.querySelector("#ImpressionSelect");
const UpdateLineData = (category, data) => {
  ApexCharts.exec(
    "area_chart",
    "updateOptions",
    {
      xaxis: {
        categories: category,
      },
    },
    true
  );
  ApexCharts.exec(
    "area_chart",
    "updateSeries",
    [
      {
        data: data,
      },
    ],
    true
  );
};

const UpdateBarData = (category, data, colors) => {
  ApexCharts.exec(
    "Impression",
    "updateOptions",
    {
      chart: {
        width: data.length > 8 ? data.length * 120 : "100%",
      },
      xaxis: {
        categories: category,
        labels: {
          style: {
            fontSize: "16px",
            colors: colors,
          },
        },
      },
    },
    true
  );
  ApexCharts.exec(
    "Impression",
    "updateSeries",
    [
      {
        data: data,
      },
    ],
    true
  );
};

KilometerSelect.addEventListener("change", (e) => {
  let Value = e.target.value;

  if (Value == "Daily") {
    UpdateLineData(
      [
        "1 Day",
        "2 Day",
        "3 Day",
        "4 Day",
        "5 Day",
        "6 Day",
        "7 Day",
        "8 Day",
        "9 Day",
        "10 Day",
        "11 Day",
      ],
      [1000, 2000, 1500, 3000, 3500, 3900, 2500, 4000, 3000, 3500, 4000]
    );
  } else if (Value == "Weekly") {
    UpdateLineData(
      [
        "1 Week",
        "2 Week",
        "3 Week",
        "4 Week",
        "5 Week",
        "6 Week",
        "7 Week",
        "8 Week",
        "9 Week",
        "10 Week",
        "11 Week",
      ],
      [6000, 8000, 1500, 3000, 3500, 3900, 2500, 4000, 3000, 3500, 4000]
    );
  } else if (Value == "Monthly") {
    UpdateLineData(
      [
        "1 Month",
        "2 Month",
        "3 Month",
        "4 Month",
        "5 Month",
        "6 Month",
        "7 Month",
        "8 Month",
        "9 Month",
        "10 Month",
        "11 Month",
        "12 Month",
      ],
      [1000, 12000, 1500, 3000, 3500, 3900, 2500, 4000, 3000, 3500, 4000, 5000]
    );
  } else if (Value == "Yearly") {
    UpdateLineData(
      [
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
      ],
      [10000, 12000, 1500, 3000, 3500, 3900, 4000, 3000, 3500, 4000, 5000]
    );
  }
});

ImpressionSelect.addEventListener("change", (e) => {
  let Value = e.target.value;
  if (Value == "Daily") {
    UpdateBarData(
      [
        "Day 1",
        "Day 2",
        "Day 3",
        "Day 4",
        "Day 5",
        "Day 6",
        "Day 8",
        "Day 9",
        "Day 10",
        "Day 11",
      ],
      [
        {
          x: "category A",
          y: 8000,
        },
        {
          x: "category B",
          y: 1000,
        },
        {
          x: "category C",
          y: 1500,
        },
        {
          x: "category C",
          y: 2500,
        },
        {
          x: "category C",
          y: 5000,
        },
        {
          x: "category C",
          y: 2000,
        },
        {
          x: "category C",
          y: 6000,
        },
        {
          x: "category C",
          y: 5000,
        },
        {
          x: "category C",
          y: 3000,
        },
        {
          x: "category C",
          y: 9000,
        },
      ],
      [
        "#9F9F9F",
        "#9F9F9F",
        "#9F9F9F",
        "#9F9F9F",
        "#9F9F9F",
        "#9F9F9F",
        "#9F9F9F",
        "#9F9F9F",
        "#9F9F9F",
        "#9F9F9F",
      ]
    );
  } else if (Value == "Weekly") {
    UpdateBarData(
      ["1st Week", "2nd Week", "3rd Week", "4th Week", "5th Week", "6th Week"],
      [
        {
          x: "category A",
          y: 1000,
        },
        {
          x: "category B",
          y: 2000,
        },
        {
          x: "category C",
          y: 1500,
        },
        {
          x: "category C",
          y: 3500,
        },
        {
          x: "category C",
          y: 4000,
        },
        {
          x: "category C",
          y: 3000,
        },
      ],
      ["#9F9F9F", "#9F9F9F", "#9F9F9F", "#9F9F9F", "#9F9F9F", "#9F9F9F"]
    );
  } else if (Value == "Monthly") {
    UpdateBarData(
      [
        "1st Month",
        "2nd Month",
        "3rd Month",
        "4th Month",
        "5th Month",
        "6th Month",
        "7th Month",
        "8th Month",
        "9th Month",
        "10th Month",
        "11th Month",
        "12th Month",
      ],
      [
        {
          x: "category A",
          y: 1500,
        },
        {
          x: "category B",
          y: 800,
        },
        {
          x: "category C",
          y: 1200,
        },
        {
          x: "category C",
          y: 1500,
        },
        {
          x: "category C",
          y: 3500,
        },
        {
          x: "category C",
          y: 2800,
        },
        {
          x: "category B",
          y: 800,
        },
        {
          x: "category C",
          y: 1200,
        },
        {
          x: "category C",
          y: 1500,
        },
        {
          x: "category C",
          y: 3500,
        },
        {
          x: "category B",
          y: 800,
        },
        {
          x: "category C",
          y: 1200,
        },
      ],
      [
        "#9F9F9F",
        "#9F9F9F",
        "#9F9F9F",
        "#9F9F9F",
        "#9F9F9F",
        "#9F9F9F",
        "#9F9F9F",
        "#9F9F9F",
        "#9F9F9F",
        "#9F9F9F",
        "#9F9F9F",
        "#9F9F9F",
      ]
    );
  } else if (Value == "Yearly") {
    UpdateBarData(
      [
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
      ],
      [
        {
          x: "category A",
          y: 1000,
        },
        {
          x: "category B",
          y: 800,
        },
        {
          x: "category C",
          y: 200,
        },
        {
          x: "category C",
          y: 100,
        },
        {
          x: "category C",
          y: 4500,
        },
        {
          x: "category C",
          y: 3800,
        },
        {
          x: "category B",
          y: 1800,
        },
        {
          x: "category C",
          y: 2200,
        },
        {
          x: "category C",
          y: 3500,
        },
        {
          x: "category C",
          y: 5500,
        },
        {
          x: "category B",
          y: 1800,
        },
      ],
      [
        "#9F9F9F",
        "#9F9F9F",
        "#9F9F9F",
        "#9F9F9F",
        "#9F9F9F",
        "#9F9F9F",
        "#9F9F9F",
        "#9F9F9F",
        "#9F9F9F",
        "#9F9F9F",
        "#9F9F9F",
        "#9F9F9F",
      ]
    );
  }
});

Areachart.render();
BarChart.render();
