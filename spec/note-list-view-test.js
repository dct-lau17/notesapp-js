(function(){
  function notesListView(){
    var noteslist = new Notes();
    noteslist.createNote("note1");
    noteslist.createNote("note2");
    view = new NotesListView(noteslist);
    assert.isTrue(view.returnHTMLString() === "<ul><li><div> note1 </div></li><li><div> note2 </div></li></ul>");
  }

    function returns20Characters(){
        var noteslist = new Notes();
        noteslist.createNote("12345678912345678912");
        noteslist.createNote("note2");
        view = new NotesListView(noteslist);
        assert.isTrue(view.returnHTMLString() === "<ul><li><div> 12345678912345678912 </div></li><li><div> note2 </div></li></ul>");
    }


  notesListView();
  returns20Characters()
})();
