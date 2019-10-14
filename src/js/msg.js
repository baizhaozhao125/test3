//功能：保存弹幕相关
 //1.msgObj构造函数
  var msgObj = function(){
      this.x = [];  //弹幕文字x坐标1
      this.y = [];  //弹幕文字y坐标2
      this.m = [];  //弹幕文字3
      this.spd = []; //弹幕速度4
      this.font = []; //弹幕字体5
      this.color = []; //弹幕颜色6
      this.alive = [];//弹幕状态true显示 false隐藏7
   }
  //2.为构造函数添加属性 num = 100  #节省内存
    msgObj.prototype.num = 100;
  //3.为构造函数添加方法init   表示初始化
    msgObj.prototype.init = function(){
      //3.1:创建循环遍历所有弹幕
      for(var i=0;i<this.num;i++ ){
      //3.2:赋值x canWidth
          this.x[i] = canWidth;
      //3.3:赋值y  随机 0~481
      //弹幕用户输入完成在随机选位置
          this.y[i] = 0;
      //3.4:赋值m 文字 输入内容  '111'
          this.m[i] = "";
      //3.5文字大小与颜色  12px  #fff
          this.font[i] = "12px";
          this.color[i] = "#fff";
     //3.6赋值spd   3
          this.spd[i] = 3;
      //3.7赋值alive  临时改成ture  用于测试
          this.alive[i] = false;
          }          
       }
 //4.为构造函数添加放 draw绘制 表示初始化
    msgObj.prototype.draw = function(){ 
      //4.01:清除画布
      ctx.clearRect(0,0,canWidth,canHeight);
      //4.1 创建循环遍历每个弹幕文字
      for(var i=0;i<this.num;i++){
      //4.2 判断当前文字是否是显示状态
        if(this.alive[i]){
      //4.3 获取当前文字的颜色
        ctx.fillStyle = this.color[i];          
      //4.4 获取当前文字的大小
        ctx.font = this.font[i]+" SimHei";        
      //4.5 获取当前文字的内容
      var m = this.m[i];        
      //4.6 修改文字速度 ???
      this.x[i] -=this.spd[i];
      //4.7 绘制文本
      ctx.fillText(m,this.x[i],this.y[i]);
      //4.8:判断如果文字移动画布
      //修改状态为false ??
      if(this.x[i]<0){
        //4.9:将当前文字状态修改false
        this.alive[i] = false;
        //4.10:修改文字x
        this.x[i] = canWidth;
            }
          }
        }
      }
   //5:将msg.js添加02.html
   //6:测试
    // var obj = new msgObj();
    // obj.init();
    // obj.draw();
   //7:在main.js创建构造函数对象
     //并且调用
//8:添加一个新弹幕 
//  用户在输入框中输入文字
//功能:
// (1)参数:obj={
//   msg:"999",
//   color:"#fc0",
//   font:"22px"
// }
// (2)如何产生弹幕
//按顺序查找第一个状态false,显示
  msgObj.prototype.add = function(obj){
    //1:创建循环遍历所有弹幕
    for(var i=0;i<this.num;i++){
    //2:判断当前弹幕状态是否false
      if(this.alive[i]==false){
    //3:是否false(选中) 
    //4:修改状态为ture  
        this.alive[i]=true;
    //5:随机分配y
        this.y[i]=Math.random()*canHeight;
    //6:随机分配速度
        this.spd[i]=1+Math.random()*10;
    //7:指定字体,依赖参数 obj
        this.font[i]=obj.font;
    //8:指定颜色,依赖参数 obj
        this.color[i]=obj.color;
    //9:指定内容,依赖参数 obj
        this.m[i]=obj.msg;
    //10:返回一次挑一个
          return;
      }
    }
  }
    

 




