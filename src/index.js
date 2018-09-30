module.exports = function check(str, bracketsConfig) {
  //функция ES6
  
  let stack=[];
  let open=[];
  let close=[];

  for (let i = 0, lenBrackets =bracketsConfig.length; i < lenBrackets; i++) {
    open.push(bracketsConfig[i][0]);
    close.push(bracketsConfig[i][1]);
  }

  for (let i = 0, letStr=str.length; i < letStr; i++) {
   
    if (close.indexOf(str[i]) != -1)
    {
      if (stack.length == 0) {
        if (open.indexOf(str[i]) == -1) return false;
        else {
          stack.push(str[i]); 
        }
      } else {                
        let temp = stack.pop();
        if (open.indexOf(temp) != close.indexOf(str[i])) {
          if (open.indexOf(str[i]) == -1) return false;
          else {
            stack.push(temp);
            stack.push(str[i]);
          }
        }
      }
    } else {
          stack.push(str[i]);
    }
  }

  return  (stack.length == 0);
}