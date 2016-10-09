/*
 To change this license header, choose License Headers in Project Properties.
 To change this template file, choose Tools | Templates
 and open the template in the editor.
 */
/* 
 Created on : 09/10/2016, 07:55:43 AM
 Author     : kevin
 */

$(function () {
    $.Foro = function () {

        var Options = {
            'Estado': 0,
        };

        if (Options['Estado'] === 0) {
            init();
        }

        function OnLoadAnimation(){
            
        }

        function init() {
            $.AjaxRapido({
                'url': 'foro',
                'reques': {},
                'loadCallback': OnLoadAnimation,
                'Callback': function(htmlResponce){
                    $('#targetLadoIzquierdo').html(htmlResponce);
                }
            });
        }

    };
});