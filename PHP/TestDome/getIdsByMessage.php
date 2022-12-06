<?php

    
function getIdsByMessage ($xmlString, $message) {
    
   $xml = new SimpleXMLIterator($xmlString);

    for( $xml->rewind(); $xml->valid(); $xml->next() ) {
      foreach($xml->getChildren() as $value) {
          
        if (trim($value) === trim($message)) {
             return ((array)$xml->current()['id']);
        }
        
      }
    } 
}    

$string = "<?xml version='1.0' encoding='UTF-8' ?>
    <log>
        <entry id='1'>
            <message>Application started</message>
        </entry>
        <entry id='2'>
            <message>Application ended</message>

        </entry>
    </log>";
    
print_r(getIdsByMessage($string, 'Application ended'));    





