var numberList = [];

// nguoi dung nhap so
document.getElementById("btnThemso").onclick = function () {
  var number = document.getElementById("txt_Number").value * 1;

  numberList.push(number);
  console.log(numberList);
};

// tong so duong
document.getElementById("btnTongsoduong").onclick = function () {
  var tongsoduong = 0;
  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0) {
        tongsoduong += numberList[i];
    }
  }
  console.log(tongsoduong);
};

// dem so duong

document.getElementById("btnDemsoduong").onclick = function () {
  var demsoduong = 0;
  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0) {
      demsoduong++;
    }
  }
  console.log(demsoduong);
};

// tim so nho nhat

document.getElementById("btnSonhonhat").onclick = function () {
    var demsoduong = 0;
    for (var i = 0; i < numberList.length; i++) {
      if (numberList[i] > 0) {
        demsoduong++;
      }
    }
    console.log(demsoduong);
  };