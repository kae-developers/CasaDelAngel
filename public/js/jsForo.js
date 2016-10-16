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
            'Estado': 0
        };

        if (Options['Estado'] === 0) {
            init();
        }

        function OnLoadAnimation() {
            BloquerVista($('#LadoIzquierdo'));
        }

        function RunAnimation() {
            $("#forobanner img").each(function (index) {
                $(this).delay(400 * index+1).fadeIn('slow');
            });
        }

        function init() {
            OnLoadAnimation();
            $.AjaxRapido({
                'url': 'foro',
                'request': {},
                'Callback': function (htmlResponce) {
                    DesbloquearVista($('#LadoIzquierdo'));
                    setTimeout(function () {
                        $('#LadoIzquierdo').html(htmlResponce);
                        RunAnimation();
                    }, 100);

                    Options['Estado'] = 1;
                }
            });
        }

    };
});