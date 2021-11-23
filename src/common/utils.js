export function debounce(func, delay) {
    //防抖
    let timer = null
    return function() {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, arguments)
        }, delay)
    }
}

//时间格式化
//data 为new Data的对象 fmt为‘yyyy-MM-dd’d的格式
export function formateData(data, fmt) {
    //获取年份
    if (/(y+)/.test(fmt)) {
        let dataY = data.getFullYear() + "";
        //RegExp.$1在判断中出现过，且是括号括起来的，所以RegExp.$1就是'yyyy'
        fmt = fmt.replace(RegExp.$1, dataY.substr(4 - RegExp.$1.length))
    }
    //获取其他
    let o = {
        "M+": data.getMonth() + 1,
        "d+": data.getDate(),
        "h+": data.getHours(),
        "m+": data.getMinutes(),
        "s+": data.getSeconds()
    }

    for (const k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + ''
            fmt = fmt.replace(RegExp.$1, RegExp.length == 1 ? str : padLeftZero(str))
        }
    }
    return fmt
}

function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}