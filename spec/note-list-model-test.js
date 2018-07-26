(function() {
  function listingAllNote() {

    function noteDouble() {
      this.newCallCount = 0;
    };

    noteDouble.prototype = {
      new: function() {
        this.newCallCount++;
      }
    };

    var list = new Notes();

    list.createNote("hello");
    assert.isTrue(list.all()[0].noteText() === "hello");
    // if(!list.all().includes("hello this is a note")){
    //   throw new Error("fail - does not include note");
    // }else{
    //   console.log("you passed mate!");
    // }
  }

  listingAllNote();
})();
