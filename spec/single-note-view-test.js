(function(exports) {
    var mockNote = {
        noteText: function() {
            return 'A string';
        }
    };
    function testSingleNoteCanBeInstantiated() {
       var singleNote = new singleNoteView(mockNote);
        assert.isTrue(singleNote instanceof singleNoteView)
    }
    function testReturnSingleNoteHTMLString(){
        // var note = new Note('Favourite drink: seltzer')
        var singlenote = new singleNoteView(mockNote);
        assert.isTrue(singlenote.getHTMLstring() === "<div>A string</div>")
    }
    testReturnSingleNoteHTMLString()
    testSingleNoteCanBeInstantiated()
})(this);