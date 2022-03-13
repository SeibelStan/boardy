var conn = new WebSocket('ws://' + location.host + ':8085');
conn.onopen = function (e) {
    console.log("Connection established!");
};

conn.onmessage = function (e) {
    console.log(e.data);
};
