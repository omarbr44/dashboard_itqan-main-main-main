const chartRender = ()=>{
  var options = {
    series: [44, 55, 13 ],
    chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['قيد المعالجة','تحت المراجعة','مسودة'],
  title:{
  text:"الطلبات",
  align:"right",
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200,
  
      },
      legend: {
        position: 'center'
      }
    }
  }]
  };
  const chart = new ApexCharts(document.querySelector("#chartBar"), options);
  return chart.render();
}
chartRender ()


