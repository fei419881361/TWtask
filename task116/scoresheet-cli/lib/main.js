let readlineSync = require('cli-interact');
module.exports = () => {
    let stuarr = [];
    while (true) {
        let chose = readlineSync.question("1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：");
        if (chose === '1') {
            let stuInfo = readlineSync.question("请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：");
            let buf = stuInfo.split(',');
            while (!stucantbenull(buf)) {
                stuInfo = readlineSync.question("请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：");
                buf = stuInfo.split(',');
            }
            let kname = [];
            let cj = [];
            let ave = 0;
            let sum = 0;

            for (let i = 4; i < buf.length; i++) {
                let kn = buf[i].split(':')[0];
                let cjj = buf[i].split(':')[1];
                sum += parseInt(cjj);
                kname.push(kn);
                cj.push(cjj);
            }
            let stu = {
                name: buf[0],
                num: buf[1],
                mz: buf[2],
                klass: buf[3],
                kname: kname,
                cj: cj,
                ave:sum/(buf.length - 4),
                sum:sum
            };
            stuarr.push(stu);
            console.log('学生' + stu.name + '的成绩被添加');
        }
        if (chose === '2') {
            let stunum = readlineSync.question("格式： 学号, 学号,...");
            let buf = stunum.split(',');
            while (buf.length == 0) {
                stunum = readlineSync.question('请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
                buf = stunum.split(',');
            }
            let sheet = "成绩单\n姓名|";
            for (let i = 0; i < stuarr[0].kname.length; i++) {
                sheet += stuarr[0].kname[i];
                sheet += '|';
            }
            sheet += '平均分|总分 \n';
            sheet += "========================\n";
            for (let i = 0; i < buf.length; i++) {
                for (let j = 0; j < stuarr.length; j++) {
                    if (buf[i] == stuarr[j].num) {
                        sheet += stuarr[j].name + '|';
                        for (let x = 0; x < stuarr[j].cj.length; x++) {
                            sheet += stuarr[j].cj[x]+'|';
                        }
                        sheet += stuarr[j].ave + "|";
                        sheet +=  stuarr[j].sum + "\n";
                    }
                }
            }
            sheet += "========================\n";
            let sum =0;
            let zws = [];
            for(let i =0;i<stuarr.length;i++){
                sum += stuarr[i].sum;
                zws.push(stuarr[i].sum);
            }
            zws.sort();
            sheet += '全班总分平均数：'+(sum / (stuarr.length)) + '\n';
            sheet += '全班总分中位数：'+(zws[parseInt(stuarr.length/2)]);
            console.log(sheet);
        }
        if(chose === '3'){
            break;
        }else{
            chose = readlineSync.question("请正确输入1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：");
        }

    }

}

function stucantbenull(buf) {
    if (buf.length < 5) {
        console.log('输入个数不对');
        return false;
    }
    for (let i = 0; i < buf.length; i++) {
        if (buf[i] == null) {
            console.log("输入为空");
            return false;
        }
    }
    return true;
}