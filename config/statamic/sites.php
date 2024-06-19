<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Sites
    |--------------------------------------------------------------------------
    |
    | Each site should have root URL that is either relative or absolute. Sites
    | are typically used for localization (eg. English/French) but may also
    | be used for related content (eg. different franchise locations).
    |
    */

    'sites' => [

        'de' => [
            'name' => 'Deutsch',
            'locale' => 'de_CH',
            'url' => env('APP_URL').'de/',
        ],

        'en' => [
            'name' => 'Englisch',
            'locale' => 'en_US',
            'url' => env('APP_URL').'en/',
        ],

        'fr' => [
            'name' => 'Französisch',
            'locale' => 'fr_FR',
            'url' => env('APP_URL').'fr/',
        ],

    ],
];
