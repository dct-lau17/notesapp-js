(function(exports) {
  function NotesListView(noteslist) {
    this.noteslist = noteslist;
  }



  NotesListView.prototype.returnHTMLString = function() {
    var output = '';
    for(var i = 0; i < this.noteslist.all().length; i++){
      output += "<li><div> " + this.noteslist.all()[i].noteText() + " </div></li>";
    }

    var htmlString = '<ul>' + output + '</ul>';

    return htmlString;
    };

  exports.NotesListView = NotesListView;
})(this);
