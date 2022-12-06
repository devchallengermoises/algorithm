<?php

class ArraySearch 
{
    public static function countItems(array $array, string $string): integer {

        $count = 0;
        $flatten = self::flatten($array);

        foreach ($flatten as $value) {
           $value === $string ? $count++ : $count;     
        }

        return $count;

    }

    public static function flatten(array $array): array {
        $return = array();
        array_walk_recursive($array, function($a) use (&$return) { $return[] = $a; });
        return $return;
    }

}


$arr = [
    'apple',
    ['banana', 'strawberry', 'apple'],
    [1, [2, ['a' => 'apple']]]
];



die(var_dump(ArraySearch::countItems($arr, 'apple')));

