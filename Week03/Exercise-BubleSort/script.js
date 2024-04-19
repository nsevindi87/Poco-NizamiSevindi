function handleBubleSort(pArr) {
  if (!Array.isArray(pArr)) {
    return [];
  }

  for (let i = 0; i < pArr.length - 1; i++) {
    for (let j = 0; j < pArr.length - i - 1; j++) {
      if (pArr[j] > pArr[j + 1]) {
        [pArr[j], pArr[j + 1]] = [pArr[j + 1], pArr[j]];
        /*
        let temp = pArr[j];
        pArr[j] = pArr[j + 1];
        pArr[j + 1] = temp;
        */
      }
    }
    console.log(i);
  }

  return console.log(pArr);
}

const mixedList = [2, 6, 4, 1, 8, 3, 6];

handleBubleSort(mixedList); // list, null, undefined
