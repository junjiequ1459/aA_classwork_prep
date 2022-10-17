function pyramidLayer(list) {
  let resultList = [];
  for (let i = 0; i < list.length - 1; i++) {
    resultList.push(list[i] + list[i + 1]);
  }
  return resultList;
}

list = [2, 3, 7, 5, 9];

console.log(pyramidLayer(list));
