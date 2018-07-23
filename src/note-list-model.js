(function(exports) {
  function Notes() {
    this.notes = [];
  };

   Notes.prototype.addNote = function(note) {
     this.notes.push(note);
   };

   Notes.prototype.all = function() {
     return this.notes;
   };

  exports.Notes = Notes;
})(this);
