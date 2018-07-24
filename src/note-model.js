(function(exports) {
  function Note(string) {
    this.note = string;
  }

   Note.prototype.noteText = function() {
     return this.note;
   };
  exports.Note = Note;
})(this);
