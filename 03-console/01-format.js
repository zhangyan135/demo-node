var user={
  'name':"张燕",
  'QQ':"491979798",
  'age':"20"
};
log('name:%s',user.name);
log('age:%d',user.age);
log('zhangYan Info:',user);

log('qq: %s', user.qq);       // 输出方式一：占位符输出
log('qq:', user.qq);          // 输出方式二：逗号间隔，多变量输出
log('qq: ' + user.qq);        // 输出方式三：拼接字符串输出
log(`qq: ${user.qq}`);        // 输出方式四：模板字符串输出
