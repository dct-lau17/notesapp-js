(function(exports){

  function NoteController(noteslist){
    var notelist = noteslist || new Notes();
    notelist.createNote("Favourite drink: seltzer");
    var view = new NotesListView(notelist);
    getHTML(view);

  }

  function getHTML(view) {
     var appDiv = document.querySelector('#app');
     appDiv.innerHTML = view.returnHTMLString();
  }

    exports.NoteController = NoteController;

    NoteController();
})(this);

// app.js
// var appDiv = document.querySelector('#app');
//
// new Controller(applyDiv)
// function Notecontroller (notelist, element)
//this.element = element
// In getHTML you can then use this.element.innerHTML = sada




