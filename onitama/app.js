function boardKey() {
    var match = location.search.match(/key=(xxx)/);
    if (match) {
        return match[1];
    }
    return false;
}

var conn = new WebSocket('ws://' + location.host + ':8085');
conn.onopen = function (e) {
    console.log("Connection established!");
    conn.send(
        JSON.stringify({ game: 'onitama', method: 'getState', data: { key: boardKey() } })
    );
};

conn.onmessage = function (e) {
    console.log(e.data);
};
