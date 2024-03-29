/*
Write a function sort_cards() that sorts a shuffled list of cards, so that any given list of
cards is sorted by rank, no matter the starting collection.*/

function sortCards(array) {
  const rankValues = {
    A: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, T: 10, J: 11, Q: 12, K: 13
  };
  return array.sort((a, b) => rankValues[a] - rankValues[b] )
}


console.log(sortCards(['3', '9', 'A', '5', 'T', '8', '2', '4', 'Q', '7', 'J', '6', 'K']))