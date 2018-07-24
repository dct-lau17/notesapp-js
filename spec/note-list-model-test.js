(function(exports) {
  function listingAllNote() {

    var note = "hello this is a note";
    var note2 = "hello this is another note";
    var list = new Notes();

    list.createNote(note);
    list.createNote(note2);
    assert.isTrue(list.all()[0].noteText() === note);
    // if(!list.all().includes("hello this is a note")){
    //   throw new Error("fail - does not include note");
    // }else{
    //   console.log("you passed mate!");
    // }
  }

  listingAllNote();
})(this);
