(function(exports) {
  function noteSaysHello() {
    var note = new Note("hello");

    assert.isTrue(note.noteText() == "hello");
  }
  noteSaysHello();
})(this);
