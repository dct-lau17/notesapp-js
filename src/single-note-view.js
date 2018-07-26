 (function(exports) {
    function singleNoteView(note) {
    this.note = note;
    }
    singleNoteView.prototype.getHTMLstring = function() {
    return '<div>'+this.note.noteText()+'</div>'
    };
    exports.singleNoteView = singleNoteView;
})(this);