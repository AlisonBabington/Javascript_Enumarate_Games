const IsogramFinder = function (word) {
  this.word = word.split('');
}

IsogramFinder.prototype.isIsogram = function () {
   return this.word.every ((letter, index) => {
      return this.word.indexOf(letter) === index
   });
}

module.exports = IsogramFinder;
