<?php

function returnUniques($array) {
    
    $uniques = array_unique($array);
    
    $duplicates = array_diff_assoc($array, $uniques);
    
    $diff = array_diff($uniques, $duplicates);

    
    return $diff;
    
    
}






var_dump(returnUniques([1,2,1,3]));




