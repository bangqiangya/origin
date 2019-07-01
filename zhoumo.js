let tempArr = [1,2,[3,4,[5,6,[7,8]]]] ;
function unid(arr){ 
    let result_str2 = arr.join(',').split(',');
    let result_number = result_str2.map(item=>{
        return Number(item);
    });
    return result_number;
}
console.log(unid(tempArr));

// toString() 方法可把一个逻辑值转换为字符串，并返回结果。

var a = tempArr.toString().split(",").map(item=>{
    return Number(item);
});
console.log(a)


var b = (tempArr+'').split(',').map(item=>{
    return Number(item);
});
console.log(b)
