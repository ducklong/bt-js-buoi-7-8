var numberList = [];

// nguoi dung nhap so
document.getElementById("btnThemso").onclick = function () {
  var number = document.getElementById("txt_Number").value * 1;

  numberList.push(number);
  console.log(numberList);
  document.getElementById("footerCard").innerHTML =
    "Chuỗi của bạn là: " + numberList;
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
  document.getElementById("footerCard").innerHTML =
    "Tổng các số dương trong mảng là: " + tongsoduong;
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
  document.getElementById("footerCard").innerHTML =
    "Số các số dương trong mảng là: " + demsoduong;
};

// tim so nho nhat

document.getElementById("btnSonhonhat").onclick = function () {
  var sonhonhat = numberList[0];

  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] < sonhonhat) {
      sonhonhat = numberList[i];
    }
  }

  console.log(sonhonhat);
  document.getElementById("footerCard").innerHTML =
    "Số nhỏ nhất trong mảng là: " + sonhonhat;
};

// tim so duong nho nhat trong mang

document.getElementById("btnSoduongnhonhat").onclick = function () {
  var soduongnhonhat = numberList[0];

  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] < soduongnhonhat && numberList[i] > 0) {
      soduongnhonhat = numberList[i];
    }
  }

  console.log(soduongnhonhat);
  document.getElementById("footerCard").innerHTML =
    "Số dương nhỏ nhất trong mảng là: " + soduongnhonhat;
};

// tim so chan cuoi cung trong mang

document.getElementById("btnSochancuoicung").onclick = function () {
  var sochancuoicung = numberList[i];

  for (var i = 0; i < numberList.length - 1; i++) {
    if (numberList[i] % 2 === 0) {
      sochancuoicung = numberList[i];
      console.log(sochancuoicung);
      document.getElementById("footerCard").innerHTML =
        "Số chẵn cuối cùng trong mảng là: " + sochancuoicung;
    } else {
      document.getElementById("footerCard").innerHTML =
        "mảng ko có giá trị chẵn xuất: " + "-1" * 1;
    }
  }
};

// Sắp xếp mảng theo thứ tự tăng dần.

document.getElementById("btnSapxep").onclick = function () {
  var i = 0,
    j;
  while (i < numberList.length) {
    j = i + 1;
    while (j < numberList.length) {
      if (numberList[j] < numberList[i]) {
        var temp = numberList[i];
        numberList[i] = numberList[j];
        numberList[j] = temp;
      }
      j++;
    }
    i++;

    document.getElementById("footerCard").innerHTML =
      "Chuỗi đã được sắp xếp: " + numberList;
  }
};

//Tìm số nguyên tố đầu tiên trong mảng

document.getElementById("btnTimsonguyento").onclick = function () {
  function kiem_tra_snt(n) {
    var check = true;

    if (n < 2) {
      check = false;
    } else if (n == 2) {
      check = true;
    } else if (n % 2 == 0) {
      check = false;
    } else {
      for (var i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i == 0) {
          check = false;
          break;
        }
      }
    }

    return check;
  }

  var number = document.getElementById("number").value * 1;
  var stn = "";
  for (var i = 1; i <= number; i++) {
    if (kiem_tra_snt(i)) {
      stn += i + ", ";
    }
  }
  document.getElementById("footerCard").innerHTML =
    "Số nguyên tố đầu tiên là: " + "</br>" + stn;
};
