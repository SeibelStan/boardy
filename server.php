<?php

use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;
use MyApp\GameServer;

require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/app.php';

$server = IoServer::factory(
    new HttpServer(
        new WsServer(
            new GameServer()
        )
    ),
    8085
);

$server->run();
