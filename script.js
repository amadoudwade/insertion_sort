

const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
      let currentElement = array[i];
      let lastIndex = i - 1;
  
      while (lastIndex >= 0 && array[lastIndex] > currentElement) {
        array[lastIndex + 1] = array[lastIndex];
        lastIndex--;
      }
      array[lastIndex + 1] = currentElement;
    }
  
    return array;
  };


  var tab = [];
  const n = prompt(`Veuillez saisir le nombre d'éléments du tableau:`)
  let i = 0
  do{
    tab[i] = prompt(`Veuillez saisir un nombre:`)
    i++
  }while(i < n)


  insertionSort(tab)
  console.log(tab)
  