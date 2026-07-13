#!/bin/bash
cd "$(dirname "$0")"

phpExecutable=/opt/php82/bin/php

$phpExecutable please static:clear -q
$phpExecutable please static:warm -q
