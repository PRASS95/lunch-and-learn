<?php

namespace Project\Helpers;

class Person
{
    public static function getBodyMassIndex($person)
    {
        // Calculate the body mass index
        return $person->get('weight') / ($person->get('height') * $person->get('height'));
    }
}
