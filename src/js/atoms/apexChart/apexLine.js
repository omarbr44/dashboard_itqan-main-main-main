var options = {
  series: [
    {
      name: "الطلبات الأولي",
      data: [
        [1672531200000, 100],
        [1672617600000, 564],
        [1672704000000, 884],
        [1672790400000, 700],
        [1672876800000, 700],
        [1672963200000, 500],
      ],
    },
    {
      name: "الطلبات الثانية",
      data: [
        [1672531200000, 200],
        [1672617600000, 600],
        [1672704000000, 500],
        [1672790400000, 800],
        [1672876800000, 600],
        [1672963200000, 600],
      ],
    },
  ],
  chart: {
    id: 'realtime',
    height: 350,
    type: 'line',
    animations: {
      enabled: true,
      easing: 'linear',
      dynamicAnimation: {
        speed: 1000,
      },
    },
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  title: {
    text: 'إحصائية الطلبات',
    align: 'right',
  },
  markers: {
    size: 0,
  },
  xaxis: {
    type: 'datetime',
    labels: {
      formatter: function (value) {
        const date = new Date(value);
        return date.toLocaleString('ar-EG', { month: 'short', day: 'numeric' });
      },
    },
  },
  yaxis: {
    max: 1000,
  },
  legend: {
    show: false,
  },
};

var chart = new ApexCharts(document.querySelector('#chartLine'), options);
chart.render();