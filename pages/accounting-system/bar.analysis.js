
const optionss = ({title,series,labels})=>{
  return  {
    series,
    chart: {
    width: 380,
    type: 'pie',
  },
  labels,
  title:{
  text:title,
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
}

  const chartt = new ApexCharts(document.querySelector("#chartBarBill"),
   optionss({title:"الفواتير",labels:["ادخال مخزني","فاتورة شراء","صرف مخزني"],series:[44, 55, 13 ]}));
  const chartRestrictions = new ApexCharts(document.querySelector("#chartBarRestrictions"),
  optionss({title:"القيود",labels:["صرف","قيد"],series:[40, 60 ]}));
   chartt.render();
   chartRestrictions.render();




