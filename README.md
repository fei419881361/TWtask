# TWtask
task108
```flow
st=>start: 点击计算分数
op1=>operation: 遍历结果
op2=>operation: 计算分数
op3=>operation: 输出结构化处理
op4=>operation: 提示完成
e=>end: 结束
op=>operation: 我的操作
cond=>condition: 检查是否做完？

st->op1->cond
cond(yes)->op2->op3->e
cond(no)->op4->e
```
