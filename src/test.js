let arr = [1,1,1,2,2,2,8,8,8,8,5,5,6,6,7,7,11,12,12]

const getUniqueNum = (dutyArray) => {
    return [...new Set(dutyArray)]
}
console.log(getUniqueNum(arr))