//修改之后的加法
function Add(arg1, arg2) {
  var r1, r2, m;
  try {
    r1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return (arg1 * m + arg2 * m) / m;
}
//修改之后的减法
function Minus(arg1, arg2) {
  var r1, r2, m, n;
  try {
    r1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  //动态控制精度长度
  n = r1 >= r2 ? r1 : r2;
  return ((arg1 * m - arg2 * m) / m).toFixed(n);
}
//修改之后的乘法
function Multiply(arg1, arg2) {
  if (!arg1 || !arg2) {
    return 0;
  }
  var m = 0,
    s1 = arg1.toString(),
    s2 = arg2.toString();
  m += s1.split('.')[1] ? s1.split('.')[1].length : 0;
  m += s2.split('.')[1] ? s2.split('.')[1].length : 0;
  var num1 = s1.replace('.', '') * 1;
  var num2 = s2.replace('.', '') * 1;
  return ((num1 * num2) / Math.pow(10, m)).toFixed(2);
}
//修改之后的除法
function Division(arg1, arg2) {
  var t1 = 0,
    t2 = 0,
    r1,
    r2;
  try {
    t1 = arg1.toString().split('.')[1].length;
  } catch (e) {}
  try {
    t2 = arg2.toString().split('.')[1].length;
  } catch (e) {}
  with (Math) {
    r1 = Number(arg1.toString().replace('.', ''));
    r2 = Number(arg2.toString().replace('.', ''));
    return (r1 / r2) * pow(10, t2 - t1);
  }
}

function getDateDiff(dateTime) {
  let dateTimeStamp = new Date(dateTime).getTime();
  let result = '';
  let minute = 1000 * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let halfamonth = day * 15;
  let month = day * 30;
  let year = day * 365;
  let now = new Date().getTime();
  let diffValue = now - dateTimeStamp;
  if (diffValue < 0) {
    return;
  }
  let monthEnd = diffValue / month;
  let weekEnd = diffValue / (7 * day);
  let dayEnd = diffValue / day;
  let hourEnd = diffValue / hour;
  let minEnd = diffValue / minute;
  let yearEnd = diffValue / year;
  if (yearEnd >= 1) {
    result = dateTime;
  } else if (monthEnd >= 1) {
    result = '' + parseInt(monthEnd) + '月前';
  } else if (weekEnd >= 1) {
    result = '' + parseInt(weekEnd) + '周前';
  } else if (dayEnd >= 1) {
    result = '' + parseInt(dayEnd) + '天前';
  } else if (hourEnd >= 1) {
    result = '' + parseInt(hourEnd) + '小时前';
  } else if (minEnd >= 1) {
    result = '' + parseInt(minEnd) + '分钟前';
  } else {
    result = '刚刚';
  }
  return result;
}

module.exports = {
  Add,
  Minus,
  Multiply,
  Division,
  getDateDiff,
};
