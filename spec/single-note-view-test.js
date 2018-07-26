(function(exports) {
    function testSingleNoteCanBeInstantiated() {
       var singleNote = new singleNoteView();
        assert.isTrue(singleNote instanceof singleNoteView)
    }
    function testReturnSingleNoteHTMLString(){
        var note = new Note('Favourite drink: seltzer')
        var singlenote = new singleNoteView(note);
        assert.isTrue(singlenote.getHTMLstring() === "<div>Favourite drink: seltzer</div>")
    }
    testReturnSingleNoteHTMLString()
    testSingleNoteCanBeInstantiated()
})(this);