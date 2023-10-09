function hotSingles(arr1, arr2) {
  let resultArr = [];

  for (let i = 0; i < arr1.length; i++) {
    let found = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      resultArr.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    let found = false;
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        found = true;
        break;

      }
    }
    if (!found) {
      resultArr.push(arr2[i]);
    }
  }

  return [...new Set(resultArr)];
}
console.log(hotSingles([77, "basketweave"], [78, 42, "basketweave"]));
