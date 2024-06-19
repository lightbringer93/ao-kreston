<?php

namespace App\Tags;

use Statamic\Tags\Tags;

class InArray extends Tags
{
    /**
     * The {{ in_array }} tag.
     *
     * @return string|array
     */
    public function index()
    {
        $haystack = $this->params->get('haystack', []);
        $needle = $this->params->get('needle', '');

        if (is_object($haystack) && get_class($haystack) === 'Illuminate\Support\Collection') {
            return $haystack->has($needle);
        } else {
            return in_array($needle, $haystack);
        }
    }

    /**
     * The {{ in_array:example }} tag.
     *
     * @return string|array
     */
    public function example()
    {
        //
    }
}
