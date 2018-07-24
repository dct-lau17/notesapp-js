(function(exports){
  function notesListView(){
    var noteslist = new Notes();
    noteslist.createNote("note1");
    noteslist.createNote("note2");
    view = new NotesListView(noteslist);
    assert.isTrue(view.returnHTMLString() === "<ul><li><div> note1 </div></li><li><div> note2 </div></li></ul>");
  }
  notesListView();
})(this);
