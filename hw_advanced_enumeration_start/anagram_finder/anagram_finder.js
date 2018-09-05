const AnagramFinder = function (word) {
  this.word = word.toLowerCase();
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  let result = otherWords.filter ((wordToSearch) => {
    return wordToSearch.length === this.word.length
  });
  result = result.filter ((wordToSearch) => {
    return wordToSearch.toLowerCase() !== this.word
  });
  result = result.filter ((wordToSearch) => {
    return wordToSearch.toLowerCase().split('').every ((letter) => {
       return this.word.includes(letter)
    })
  });
return result
}


module.exports = AnagramFinder;
