//----------------------------------------------------------------
// store (contains the products)
//
function channelsList() {
    this.channels = [
        new channel("1", "Channel1", "channel description!"),
        new channel("2", "Channel2", "channel description!", 16, 90, 0, 1, 1, 1, 2),
        new channel("3", "Channel3", "channel description!", 4, 120, 0, 2, 1, 2, 2),
        new channel("4", "Channel4", "channel description!", 3, 50, 4, 4, 1, 2, 0),
        new channel("5", "Channel5", "channel description!", 10, 100, 0, 0, 0, 1, 2),
        new channel("6", "Channel6", "channel description!", 11, 50, 4, 4, 1, 1, 1),
        new channel("7", "Channel7", "channel description!", 8, 100, 0, 3, 0, 1, 1),
        new channel("8", "Channel8", "channel description!", 8, 50, 4, 4, 0, 1, 2),
        new channel("9", "Channel9", "channel description!", 14, 90, 1, 4, 0, 2, 2),
        new channel("10", "Channel10", "channel description!", 18, 125, 1, 4, 0, 2, 2)
    ];
}
channelsList.prototype.getChannelsList= function (id) {
    for (var i = 0; i < this.channels.length; i++) {
        if (this.channels[i].name== id)
            return this.channels[i];
    }
    return null;
};
