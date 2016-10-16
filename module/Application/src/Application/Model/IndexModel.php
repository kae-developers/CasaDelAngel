<?php

namespace Application\Model;

class IndexModel {

    function __construct() {
        
    }

    function GetGallery() {
        $gallery = array();
        $files = scandir('public/img/basura');
        if (count($files) > 2) {
            for ($i = 2; $i < count($files); $i++) {
                array_push($gallery, array(
                    'thumbnail' => $files[$i],
                    'Descripcion' => 'Un libro (del latín liber, libri) es una obra impresa, manuscrita o pintada en una serie de hojas de papel, pergamino, vitela u otro material, unidas por un lado (es decir, encuadernadas) y protegidas con tapas, también llamadas cubiertas. Un libro puede tratar sobre cualquier tema.

Según la definición de la Unesco,1 un libro debe poseer 49 o más páginas (25 hojas o más), pues desde cinco hasta 48 páginas sería un folleto (desde tres hasta 24 hojas), y desde una hasta cuatro páginas se consideran hojas sueltas (en una o dos hojas).

También se llama "libro" a una obra de gran extensión publicada en varias unidades independientes, llamados "tomos" o "volúmenes". Otras veces se llama también "libro" a cada una de las partes de una obra, aunque físicamente se publiquen todas en un mismo volumen (ejemplo: Libros de la Biblia).',
                    'src' => $files[$i]
                ));
            }
        }

        return array('imagenes'=> $gallery);
    }

}
