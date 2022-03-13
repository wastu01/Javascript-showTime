// 關於更多 JS 基本功能可看鐵人賽文章：https://ithelp.ithome.com.tw/users/20120114/ironman/2307?page=1

function changeColor(newColor) {
    var elem = document.getElementById("updateTime");
    elem.style.color = newColor;
  }

function getTime(){
  
  var elem = document.getElementById("updateTime");
  alert (elem);
}

function changeInnerHtml() {

  var elem = document.getElementById("updateTime");
  var click = document.getElementById("time");
  click.innerHTML = elem.innerHTML;
}

function getDate(){
                var date = new Date();
                var date1 = date.toLocaleString();
                var div1 = document.getElementById("updateTime");
                div1.innerHTML = date1;
            }
 function copyEvent(id)
    {
        var str = document.getElementById(id);
        window.getSelection().selectAllChildren(str);
        document.execCommand("Copy")
    }