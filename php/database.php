<?php

define('PG_HOST', 'ec2-34-200-15-192.compute-1.amazonaws.com');
define('PG_PORT', 5432);
define('PG_DATABASE', 'dbm9tm52lqr0bo');
define('PG_USER', 'emlsbprybpkbkc');
define('PG_PASSWORD', '5be64aebe8b8fcd3f08403749abf3979914cc85b63c82d7cfed5b89b0b1e9d93');
define('ERROR_ON_CONNECT_FAILED', 'Connection failed!');

function getDB() {
    return pg_pconnect (' host=' . PG_HOST .
                        ' port=' . PG_PORT .
                        ' dbname=' . PG_DATABASE .
                        ' user=' . PG_USER .
                        ' password=' . PG_PASSWORD
                       ) or die (ERROR_ON_CONNECT_FAILED);
}
?>