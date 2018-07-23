(function(exports) {
  function noteSaysHello() {
    var note = new Note("hello");
    if (note.note !== "hello") {
       throw new Error("note should say hello");

    }else {
      console.log("Pass")
    };

  };
  noteSaysHello();
})(this);
