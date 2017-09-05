from channels.routing import route
from dwalls.consumers import ws_connect, ws_disconnect, ws_receive

channel_routing = [
    route('websocket.connect', ws_connect),
    route('websocket.disconnect', ws_disconnect),
    route('websocket.receive', ws_receive, path=r"/(?P<wallName>[a-zA-Z0-9\-]+)/$"),
]

