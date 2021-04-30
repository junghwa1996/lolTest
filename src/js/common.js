
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
