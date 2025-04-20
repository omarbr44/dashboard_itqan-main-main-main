/// Dashboard--1 ///
const sidebar = document.getElementById("sidebar-nav");
const listd = document.getElementById("bi-listd");
const actionwave=document.getElementById("actionwave")
const colvf=document.getElementById("colvf")
const colvf1=document.getElementById("colvf1")
const colvf2=document.getElementById("colvf2")
const colvf3=document.getElementById("colvf3")
const colvf4=document.getElementById("colvf4")
const colvf5=document.getElementById("colvf5")
const colvf6=document.getElementById("colvf6")
const colvf7=document.getElementById("colvf7")
const colvf8=document.getElementById("colvf8")
const colvf9=document.getElementById("colvf9")
if (sidebar && listd) {
  listd.addEventListener('click', function() {
    sidebar.classList.toggle('collapsed');
    actionwave.classList.toggle('actionwaved');
    


  });
} else {
  console.error("العنصر sidebar-nav أو bi-listd غير موجود");
}
 function cliopen(){
  colvf.classList.toggle('actionwa');
  colvf1.classList.toggle('actionwa1');
  colvf2.classList.toggle('actionwa2');
  colvf3.classList.toggle('actionwa3');
  colvf4.classList.toggle('actionwa4');
  colvf5.classList.toggle('actionwa5');
  colvf6.classList.toggle('actionwa6');
  colvf7.classList.toggle('actionwa7');
  colvf8.classList.toggle('actionwa8');
  colvf9.classList.toggle('actionwa9');


 }
const buttonbox = document.getElementById("buttonbox");
const relativehider = document.getElementById("relative-hider");

if (buttonbox && relativehider) {
  buttonbox.addEventListener('click', function() {
    relativehider.style.display = "block";
  });
} else {
  console.error("العنصر buttonbox أو relative-hider غير موجود");
}

const ctx4 = document.getElementById("pie-chart")?.getContext('2d');
if (ctx4) {
  new Chart(ctx4, {
    type: "pie",
    data: {
      labels: ["قيد المطالبة", "تحت المراجعة", "مسبودة"],
      datasets: [{
        data: [30, 30, 40],
        backgroundColor: [
          'rgba(113, 70, 244, 1)',
          'rgba(241, 135, 49, 1)',
          'rgba(2, 160, 252, 1)'
        ],
        hoverOffset: 4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: {
              family: "Cairo",
              size: 13,
            },
            color: '#000000',
            usePointStyle: true,
            boxWidth: 60,
            padding: 8,
          }
        }
      }
    }
  });
} else {
  console.error("العنصر pie-chart غير موجود");
}

/// Dashboard--2 ///
const ctx = document.getElementById('myChart')?.getContext('2d');
if (ctx) {
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017'],
      datasets: [{
        label: 'Site A',
        data: [230, 140, 150, 160, 170, 180, 190],
        borderColor: 'rgba(20, 174, 227, 1)',
        borderWidth: 3,
        fill: false
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
} else {
  console.error("العنصر myChart غير موجود");
}

/// الجدول البيانات ///
const selectAllCheckbox = document.getElementById('select-all');
const checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');

if (selectAllCheckbox && checkboxes.length > 0) {
  selectAllCheckbox.addEventListener('change', function() {
    checkboxes.forEach(checkbox => {
      checkbox.checked = selectAllCheckbox.checked;
    });
  });

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const checkedCheckboxes = document.querySelectorAll('tbody input[type="checkbox"]:checked').length;
      selectAllCheckbox.checked = checkedCheckboxes === checkboxes.length;
      selectAllCheckbox.indeterminate = checkedCheckboxes > 0 && checkedCheckboxes < checkboxes.length;
    });
  });
} else {
  console.error("العنصر select-all أو checkboxes غير موجود");
}

/// إخفاء العنصر ///
const boo=document.getElementById("boo");
/// الجدول البيانات ///
function box(){
  relativehider.style.display="none"
}






document.querySelectorAll('.eye-icon').forEach(icon => {
  icon.addEventListener('click', function() {
    const row = this.closest('tr'); 
    row.style.display = 'none'; 
  });
});



const vertical = document.getElementById("vertical");
const more = document.getElementById("more");

vertical.addEventListener('click', function() {
  more.classList.toggle('show'); 
});

const relativemodal=document.getElementById("relativemodal");
function box(){
  relativemodal.style.display="none"
}

const relativebox1=document.getElementById("relativebox1")
function boxActive(){
  relativebox1.style.display="block"

}
const relativebox11=document.getElementById("relativebox11");
function box1(){
  relativebox1.style.display="none"
}
const relativebox12=document.getElementById("relativebox12");
function box12(){
  relativebox12.style.display="none"
}

function box122(){
  relativebox12.style.display="block"
}
const relativeb=document.getElementById('relativeb')
function box13(){
  relativeb.style.display="none"

}
function relativeb13(){
  relativeb.style.display="block"

}
const showbox=document.getElementById('showbox')
function showbox1(){
  showbox.style.display="block"
  relativeb.style.display="none"


}
const updata=document.getElementById('updata');

function boxupdata(){
  updata.style.display="block"
  relativeb.style.display="none"


}
const updatabox=document.getElementById("updatabox");
function showupdata(){
   updata.style.display="none"
   updatabox.style.display="block"

}
function bocupdata(){
  updata.style.display="none"
  updatabox.style.display="block"

}
function bocupdata(){
  updata.style.display="none"
  updatabox.style.display="block"

 }

document.getElementById('toggle1').addEventListener('change', function() {
  const toggleBg = document.getElementById('toggle-bg1');
  const toggleCircle = document.getElementById('toggle-circle1');
  if (this.checked) {
      toggleBg.style.backgroundColor = '#0051ff';
      toggleCircle.style.transform = 'translateX(100%)';
  } else {
      toggleBg.style.backgroundColor = '#f3f4f6';
      toggleCircle.style.transform = 'translateX(0)';
  }
});

document.getElementById('toggle2').addEventListener('change', function() {
  const toggleBg = document.getElementById('toggle-bg2');
  const toggleCircle = document.getElementById('toggle-circle2');
  if (this.checked) {
      toggleBg.style.backgroundColor = '#0051ff';
      toggleCircle.style.transform = 'translateX(100%)';
  } else {
      toggleBg.style.backgroundColor = '#f3f4f6';
      toggleCircle.style.transform = 'translateX(0)';
  }
});



const radioButtons = document.querySelectorAll('input[type="radio"]');

// إضافة حدث "change" لكل زر
radioButtons.forEach((radio) => {
    radio.addEventListener('change', function () {
        // إزالة التحديد من جميع الأزرار
        radioButtons.forEach((rb) => {
            const innerCircle = rb.nextElementSibling.querySelector('div > div');
            innerCircle.style.transform = 'scale(0)'; // إخفاء النقطة الداخلية
            rb.nextElementSibling.style.borderColor = '#d1d5db'; // إعادة لون الحدود إلى الرمادي
        });

        // إذا تم تحديد الزر الحالي
        if (this.checked) {
            const innerCircle = this.nextElementSibling.querySelector('div > div');
            innerCircle.style.transform = 'scale(1)'; // تكبير النقطة الداخلية
            this.nextElementSibling.style.borderColor = '#3b82f6'; // تغيير لون الحدود إلى الأزرق
        }
    });
});

function servicebox(){
  relativehider.style.display="none"
}
