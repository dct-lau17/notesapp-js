(function(exports) {
  function noteSaysHello() {
    var note = new Note("hello");

    assert.isTrue(note.showNote() == "hello");
  }
  noteSaysHello();
})(this);
