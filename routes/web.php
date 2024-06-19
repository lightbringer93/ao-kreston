<?php

use Illuminate\Support\Facades\Route;
use Statamic\Facades\Data;
use Statamic\Facades\Site;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::statamic('example', 'example-view', [
//    'title' => 'Example'
// ]);

Route::get('/api/csrf', function () {
    return response()->json([
        'token' => csrf_token(),
    ]);
});

/*Route::get('/', function () {
    if ($data = Data::findByUri('/', Site::current()->handle())) {
        return $data;
    }
    //return redirect('/de', '302');
});*/

Route::get('/forum', function () {
    return redirect('/de/events/forum-2022');
});

Route::get('/', function () {
    return redirect('/de', '301');
});

Route::get('/en/home', function () {
    return redirect('/en', '301');
});

Route::get('/fr/home', function () {
    return redirect('/fr', '301');
});

Route::get('/fr/event-fr', function () {
    return redirect('/fr', '301');
});

Route::get('/fr/conditions-d-utilisation', function () {
    return redirect('/fr/conditions-dutilisation', '301');
});

Route::get('/fr/politique-de-confidentialite', function () {
    return redirect('/fr/les-services/politique-de-confidentialite', '301');
});

Route::get('/fr/les-services/reprrsentation-fiscale', function () {
    return redirect('/fr/les-services/representation-fiscale', '301');
});

Route::get('/en/services/financial-interim-management-en', function () {
    return redirect('/en/services/financial-interim-management', '301');
});

Route::get('/fr/les-services/financial-interim-management-fr', function () {
    return redirect('/fr/les-services/financial-interim-management', '301');
});

Route::get('/fr/about-us-fr/vision-fr', function () {
    return redirect('/fr/a-propos-de-nous/vision', '301');
});

Route::get('/fr/about-us-fr/vacancies-fr', function () {
    return redirect('/fr/a-propos-de-nous/vacancies', '301');
});

Route::get('/fr/about-us-fr/team-fr', function () {
    return redirect('/fr/a-propos-de-nous/team', '301');
});

Route::get('/fr/nouvelles/national-news-fr', function () {
    return redirect('/fr/nouvelles/national-news', '301');
});

Route::get('/fr/nouvelles/international-news-fr', function () {
    return redirect('/fr/nouvelles/international-news', '301');
});

Route::get('/fr/network-fr', function () {
    return redirect('/fr/reseau', '301');
});

Route::get('/fr/downloads-fr', function () {
    return redirect('/fr/telechargements', '301');
});

// Route::get('/de/dienstleistungen/fiskalvertretung', function () {
//    return redirect('/de/dienstleistungen/fiskalvertrag', '301');
// });

Route::get('/de/covid19', function () {
    return redirect('/de', '301');
});

Route::get('/de/events', function () {
    return redirect('/de', '301');
});

Route::get('/fr/events', function () {
    return redirect('/fr', '301');
});

Route::get('/en/events', function () {
    return redirect('/en', '301');
});

Route::get('/en/event', function () {
    return redirect('/en', '301');
});

Route::get('/de/event/history', function () {
    return redirect('/de/events/history', '301');
});

Route::get('/de/event/forum-2021', function () {
    return redirect('/de/events/forum-2021', '301');
});

Route::get('/de/event/forum-2019', function () {
    return redirect('/de/events/forum-2019', '301');
});

Route::get('/uploads/pdf/Anfahrt_Kontakt_Standort_Zürich.pdf', function () {
    return redirect('/assets/kontakt/anfahrt_kontakt_standort_zuerich.pdf', '301');
});

Route::get('/de/seminare/mehrwertsteuer-und-immobilien', function () {
    return redirect('/de/seminare/mwst-und-immobilien', '301');
});

Route::get('/en/services/professional-board-activities', function () {
    return redirect('/en/services/professional-board-activity', '301');
});

Route::get('/uploads/pdf/Anfahrt_Kontakt_Standort_Horgen.pdf', function () {
    return redirect('/assets/kontakt/anfahrt_kontakt_standort_horgen.pdf', '301');
});

Route::get('/uploads/pdf/Anfahrt_Kontakt_Standort_Eschenbach.pdf', function () {
    return redirect('/assets/kontakt/anfahrt_kontakt_standort_eschenbach.pdf', '301');
});

Route::get('/uploads/pdf/Anfahrt_Kontakt_Standort_Baar.pdf', function () {
    return redirect('/assets/kontakt/anfahrt_kontakt_standort_eschenbach.pdf', '301');
});

Route::get('/en/event-en/forum-2022', function () {
    return redirect('/en/events/invitation-to-the-kreston-forum-wissen-dialog', '301');
});

Route::get('/de/seminare/mwst-abrchg-leicht-gemacht', function () {
    return redirect('/de/seminare/mwst-abrechnung-leicht-gemacht', '301');
});

Route::get('/de/dienstleistungen/fiskalvertrag', function () {
    return redirect('/de/dienstleistungen/fiskalvertretung', '301');
});
