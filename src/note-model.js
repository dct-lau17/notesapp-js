(function(exports) {
  function Note(string) {
    this.note = string;
  };
   Note.prototype.note = function () {
     return this.note
   }
  exports.Note = Note;
})(this);
