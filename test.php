<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$arr = [
    'xxx' => 1,
];

apcu_store('test1', $arr);
print_r(apcu_fetch('test1'));
