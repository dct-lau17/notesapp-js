(function(exports) {
  function Note(string) {
    this.note = string;
  }

   Note.prototype.showNote = function() {
     return this.note;
   };
  exports.Note = Note;
})(this);
