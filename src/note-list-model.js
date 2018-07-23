(function(exports) {
  function Notes() {
    this.notes = [];
  }

   Notes.prototype.createNote = function(string) {
     var note = new Note(string);
     this.notes.push(note);
   };

   Notes.prototype.all = function() {
     return this.notes;
   };

  exports.Notes = Notes;
})(this);
