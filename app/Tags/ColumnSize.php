<?php

namespace App\Tags;

use Statamic\Tags\Tags;

class ColumnSize extends Tags
{
    /**
     * The {{ column_size }} tag.
     *
     * @return string|array
     */
    public function index()
    {
        $type = $this->params->get('type', 'flex');
        $width = $this->params->get('width', 12);
        $screen = $this->params->get('screen', '');

        $prefix = $screen ? $screen.':' : '';

        switch ($type) {

            case 'flex':
                switch ((int) $width) {
                    case 12:
                        return "{$prefix}w-full {$prefix}block";

                    case 0:
                        return "{$prefix}hidden";

                    default:
                        return "{$prefix}w-{$width}/12 {$prefix}block";
                }

            case 'grid':
                return (int) $width ? "{$prefix}col-span-{$width} {$prefix}block" : "{$prefix}hidden";
        }
    }
}
