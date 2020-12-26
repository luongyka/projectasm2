<?php

define('PG_HOST', 'ec2-54-84-98-18.compute-1.amazonaws.com');
define('PG_PORT', 5432);
define('PG_DATABASE', 'd89sq7n25h7h3q');
define('PG_USER', 'ezjvhzsvkbjfoy');
define('PG_PASSWORD', '5ae06b5871a7e0039761da957fbfa71c54f760c2c83a0f6e513d3f5d9c851bb5');
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