var pc_device = "win16|win32|win64|mac|macintel";

// 접속한 디바이스 환경
var this_device = navigator.platform;

if (this_device) {

  if (pc_device.indexOf(navigator.platform.toLowerCase()) < 0) {
    console.log('MOBILE');
  } else {
    console.log('PC');
    // alert('모바일 환경에서만 실행 가능합니다.');
    var body = document.getElementById("wrap");
    // body.style.display = "none";
  }

}

$(function () {

});

var b = $('.submit-btn');
var c = $('.count-number');
var add = 1;

b.click(function () {
  var idx = b.index(this);
  if (idx == 0) {
    t();
    add++
    modalNext('.quiz', '1', '2');
    c.text(add);
  } else if (idx == 4) {
    t();
    add++
    modalNext('.quiz', '2', '3');
    c.text(add);
  } else {
    f();
  }
});

function modalNext(page, current, next) {
  $(page + '-' + current).addClass('hidden');
  if (next === 'end') {
    modalClose();
  } else {
    $(page + '-' + next).removeClass('hidden');
  }
}

function t() {
  alert('정답! 잘하네?');
}
function f() {
  alert('이것도 못 맞춤?');
}
