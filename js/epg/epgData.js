//----------------------------------------------------------------
// store (contains the products)
//
function EPGData() {
    this.epgData = [
        new program("1", "program1", "channel description!"),
        new program("2", "program2", "channel description!", 16, 90, 0, 1, 1, 1, 2),
        new program("3", "program3", "channel description!", 4, 120, 0, 2, 1, 2, 2),
        new program("4", "program4", "channel description!", 3, 50, 4, 4, 1, 2, 0),
        new program("5", "program5", "channel description!", 10, 100, 0, 0, 0, 1, 2),
        new program("6", "program6", "channel description!", 11, 50, 4, 4, 1, 1, 1),
        new program("7", "program7", "channel description!", 8, 100, 0, 3, 0, 1, 1),
        new program("8", "program8", "channel description!", 8, 50, 4, 4, 0, 1, 2),
        new program("9", "program9", "channel description!", 14, 90, 1, 4, 0, 2, 2),
        new program("10", "program10", "channel description!", 18, 125, 1, 4, 0, 2, 2)
    ];
}
EPGData.prototype.getEPGData= function (name) {
    for (var i = 0; i < this.epgData.length; i++) {
        if (this.epgData[i].name == name)
            return this.epgData[i];
    }
    return null;
};
