(function(exports) {
  function NotesListView(noteslist) {
    this.noteslist = noteslist;
  }



  NotesListView.prototype.returnHTMLString = function() {
    var output = '';
    for(var i = 0; i < this.noteslist.all().length; i++){
     var text = this.noteslist.all()[i].noteText().slice(0,20);
     output += "<li><div> " + text + " </div></li>";
    }

    var htmlString = '<ul>' + output + '</ul>';

    return htmlString;
    };

  exports.NotesListView = NotesListView;
})(this);
