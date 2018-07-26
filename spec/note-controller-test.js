(function(exports) {




  function initiatingNoteController() {

    // var div = document.createElement('DIV');
    // div.setAttribute('id', 'app');
    // document.body.appendChild(div);

    var noteController = new NoteController();
    assert.isTrue(noteController instanceof NoteController);
    // document.body.removeChild(div);
  }

  // function returnsHTMLstring() {
  //   function NotesListViewDouble() {
  //     this.returnHTMLStringCallCount = 0;
  //   }
  //
  //   NotesListViewDouble.prototype = {
  //     returnHTMLString: function() {
  //      this.returnHTMLStringCallCount++;
  //      return "<ul><li><div>note1</div></li></ul";
  //    }
  //  };
  //
  //  function NotesDouble() {
  //    this.createNoteCallCount = 0;
  //  }
  //
  //  NotesDouble.prototype.createNote = function() {
  //      this.createNoteCallCount++;
  //  };
  //
  //  NotesDouble.prototype.all = function() {
  //    return ["note", "note2"];
  //  };
  //
  //   var notelist = new NotesDouble();
  //   var view = new NotesListViewDouble(notelist);
  //   var noteController = new NoteController(notelist);
  //   assert.isTrue(this.returnHTMLStringCallCount === 1);
  // }

  initiatingNoteController();
  // returnsHTMLstring();
})(this);
