//整个计算逻辑的主方法
function submit() {
   //录入结果
   getResult();
  // 检验是否答案完备
    if(isComplete()){
    //计算结果
        calculate();
    //结果结构化输出
        structureOutput();
    }else {
       // 提示完成作答
        alertUser();
    }
}

var aws =[];
var score = 0;
function getResult() {
    //hard code
    //type 0:tiankong,1:xuanze;
    var aws1_1 = document.getElementById("1.1").value;
    var aws1_2_1 = document.getElementById("1.2.1").value;
    var aws1_2_2 = document.getElementById("1.2.2").value;
    var aws1_2_3 = document.getElementById("1.2.3").value;
    var maws1_1={type:0,value:aws1_1};
    var maws1_2_1={type:0,value:aws1_2_1};
    var maws1_2_2={type:0,value:aws1_2_2};
    var maws1_2_3={type:0,value:aws1_2_3};

    var aws2_1 = document.getElementById("2.1").checked;
    var aws2_2 = document.getElementById("2.2").checked;
    var aws3_1_1 = document.getElementById("3.1.1").checked;
    var aws3_1_2 = document.getElementById("3.1.2").checked;
    var aws3_1_3 = document.getElementById("3.1.3").checked;
    var aws3_2_1 = document.getElementById("3.2.1").checked;
    var aws3_2_2 = document.getElementById("3.2.2").checked;
    var aws3_2_3 = document.getElementById("3.2.3").checked;
    var aws4_1 = document.getElementById("4.1").checked;
    var aws4_2 = document.getElementById("4.2").checked;
    var aws5_1 = document.getElementById("5.1").value;
    var maws2_1 = {type:1,value:aws2_1};
    var maws2_2 = {type:1,value:aws2_2};

    if(aws3_1_1&&aws3_1_2&&aws3_1_3){
      var maws3_1 = {type:1,value:true};
    }else var maws3_1 = {type:1,value:false}

    if(aws3_2_1&&aws3_2_2&&aws3_2_3){
        var maws3_2 = {type:1,value:true};
    }else var maws3_2 = {type:1,value:false}

    var maws4_1 = {type:1,value:aws4_1};
    var maws4_2 = {type:1,value:aws4_2};

    var maws5_1 = {type:0,value:aws5_1};

    aws.push(maws1_1);
    aws.push(maws1_2_1);
    aws.push(maws1_2_2);
    aws.push(maws1_2_3);
    aws.push(maws2_1);
    aws.push(maws2_2);


    aws.push(maws3_1);
    aws.push(maws3_2);


    aws.push(maws4_1);
    aws.push(maws4_2);

    aws.push(maws5_1);


}

function isComplete() {

    if (aws[10].value == "" || aws[0].value=="" || aws[1].value == "" || aws[2].value == "" ||aws[3].value == "" )
        return false;
    return true;
}
var error = [];
function calculate() {
    var standard_answer = ["统一建模语言","封装性","继承性","多态性","模型是对现实世界的抽象"];
    var j =0;
    for(var i =0;i<aws.length;i++) {
        if(aws[i].type == 0) {
            if(j!=4&&aws[i].value == standard_answer[j] ){
                alert("i:"+i+"aws:"+aws[i].value+"j:"+j)
                score+=5;
            }else if(j==4&&aws[i].value == standard_answer[4]){
                score+=20;
            }else{
               error.push(i+1);
            }
            j++;
        }else {
            if(aws[i].value) {
                score +=10;
            }else  error.push(i+1);
        }
    }
}
function structureOutput() {
    var str = "";
    error.forEach((val)=>{
        str += val+",";
    })
    alert("恭喜你得分："+score+"错误的题目是："+str);

    window.location.href = window.location.href;
}
function alertUser() {
    alert("请完成题目后提交");
}
