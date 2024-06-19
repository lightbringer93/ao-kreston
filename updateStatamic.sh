#!/bin/bash
cd "$(dirname "$0")"

phpExecutable=/opt/php81/bin/php
composerExecutable=/usr/local/psa/var/modules/composer/composer.phar

packagesToUpdate="statamic/cms withcandour/aardvark-seo"

$phpExecutable -d memory_limit=-1 $composerExecutable update $packagesToUpdate --with-dependencies
