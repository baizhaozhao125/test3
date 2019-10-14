// 任务
// (1):创建弹幕对象
// (2):接收用户输入文字
//1:创建函数game  入口函数  调用 init() gameloop()
 //1.1:创建两个全局变量保存画布与画笔
    var c3;
    var ctx;
 //1.2:创建两个全局变量保存画布宽高
    var canWidth;
    var canHeight;
 //1.3:创建一个全局变量保存弹幕对象
    var msg;
    //1.4:创建四个全局变量
    //输入框/颜色/字体/发送按钮
    var inputMsg;
    var inputFont;
    var inputColor;
    var inputBtn;
  function game(){ 
    init();
    gameloop();
  }
//2:创建函数init 负责所有对象创建  init:初始化  创建对象.
//  并且对象赋值
  function init(){
    //2.1:获取画布对象赋值 c3
     c3 = document.getElementById("c3");
    //2.2:获取画笔对象赋值 ctx
     ctx = c3.getContext("2d");
    //2.3:获取画布宽度赋值 canWidth
     canWidth = c3.width;
    //2.4:获取画布高度赋值 canHeight
     canHeight = c3.height;
    //2.5:创建弹幕对象赋值 msg
     msg = new msgObj();
    //2.6:调用弹幕对象init函数
     msg.init();
     //2.7获取输入框赋值inputMsg
     inputMsg = document.getElementById("inputMsg");
     //2.8 获取文字大小列表赋值inputFont
     inputFont = document.getElementById("inputFont");
     //2.9获取文字颜色赋值inputColor
     inputColor = document.getElementById("inputColor");
     //2.10获取发送按钮
     inputBtn = document.getElementById("inputBtn");
     //2.11为按钮绑定点击事件并且制定事件处理函数 handleMsg
    inputBtn.addEventListener("click",handleMsg);
   }
//3:创建函数gameloop    创建定时器绘制游戏内容！！！！！！！
  function gameloop(){
    //3.1:创建定时器
    requestAnimationFrame(gameloop);
     //3.2: 调用弹幕绘制方法
    msg.draw();
    }
//4:将main.js 添加02.html
//5:当页面加载成功事件触发调用game
//document.body.onload = game(); 语法正确 
document.body.onload = game;
//6:创建函数处理用户输入的内容
    function handleMsg(){
      //(1):获取用户输入内容文字;颜色;大小
      var f = inputFont.value;
      var c = inputColor.value;
      var m = inputMsg.value;
    //  console.log(m+":"+f+":"+c);
      //(2):将数据转换js对象
      var obj = {
        msg:m,
        font:f,
        color:c
      }
      //(3):将js传递msg.add方法
      msg.add(obj);
    }







