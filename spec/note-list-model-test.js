(function(exports) {
  function listingAllNote() {

    var note = "hello this is a note";
    var list = new Notes();

    list.createNote(note);
    assert.isTrue(list.all()[0].showNote() === note);
    // if(!list.all().includes("hello this is a note")){
    //   throw new Error("fail - does not include note");
    // }else{
    //   console.log("you passed mate!");
    // }
  }

  listingAllNote();
})(this);
