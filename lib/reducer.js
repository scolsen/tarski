exports.flat = function (array){
  let flatr=function (acc, cur){
    if(Array.isArray(cur)) return acc.concat(cur.reduce(flatr, []));
    return acc.concat(cur);
  }
  
  return array.reduce(flatr, []);
}