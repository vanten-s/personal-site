
let inputbox = document.getElementById("book_name");

function parse_response(response) {
    let payload = response.data;

    if (payload === "E1") { return; }

    window.location.href += payload
}

function send() {
    let ws = new WebSocket("ws://127.0.0.1:1234");

    ws.addEventListener('open', (event) => {
        ws.send(inputbox.value);
    });

    ws.addEventListener('message', (response) => {
        parse_response(response);
    });
}

