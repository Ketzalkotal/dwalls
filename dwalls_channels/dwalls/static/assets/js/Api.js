// websocket stuff
var wallSocket = new WebSocket('ws://' + window.location.host + '/'+Django.wall+'/');
var userSocket = new WebSocket('ws://' + window.location.host + '/users/');

userSocket.onopen = function open() {
    console.log('WebSockets connection created.');
};

userSocket.onmessage = function message(event) {
    var data = JSON.parse(event.data);
    // NOTE: We escape JavaScript to prevent XSS attacks.
    if(event.data.type === 'POST'){
        wallStore.dispatch({
            type: 'POST',
            post: event.data.post
        })
    }
    else{
        var username = encodeURI(data['username']);
        var user = $('li').filter(function () {
            return $(this).data('username') == username;
        });
        if (data['is_logged_in']) {
            user.html(username + ': Online');
        }
        else {
            user.html(username + ': Offline');
        }
    }
};

if (userSocket.readyState == WebSocket.OPEN) {
    userSocket.onopen();
}

