// 写一个正则表达式 匹配所有 Number 直接量
function regNum(val) {
  let reg = new RegExp("^[0-9]$");
  console.log(reg.test(val));
}

// 写一个 UTF-8 Encoding 的函数
function encodingUtf8(string) {
  const code = encodeURIComponent(s);
    const bytes = [];
    for (let i = 0; i < code.length; i++) {
        const c = code.charAt(i);
        if (c === '%') {
            bytes.push(parseInt(code.charAt(i + 1) + code.charAt(i + 2), 16) );
            i += 2;
        } 
        else {
            bytes.push(c.charCodeAt(0));
        }
    }
    return bytes;
}

// 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号
function regStr(val) {
  let reg = new RegExp( /"(?:[^"\\]|\\[\d\D])*"/)
  console.log(reg.test(val))
}
