const capitalizeString = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const capitalizeWholeString = (str) =>{
    let arr = str.split(' ');
    let retArr = arr.map((el) => capitalizeString(el));
    let retStr = retArr.join(" ");
    return retStr;
}