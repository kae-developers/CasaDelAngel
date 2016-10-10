/*
 To change this license header, choose License Headers in Project Properties.
 To change this template file, choose Tools | Templates
 and open the template in the editor.
 */
/* 
 Created on : 09/10/2016, 03:04:43 PM
 Author     : kevin
 */

function ErrorDisplay(titulo, msn, callback) {
    alert(msn);// importar jquery ui o la de boostrap 
}
var ValuesFace = {};
function BloquerVista(face){
    ValuesFace['background-color'] = face.css('background-color');
    face.css({
        'width':'100%',
        'height':'800px',
        'background-color':'#337ab7'
    });
    face.html('<div class="spinner"><div class="cube1"></div><div class="cube2"></div></div>');
}

function DesbloquearVista(face){
   face.css(ValuesFace);
   face.html('');
}

/*
 * 
 'url': '',
 'reques': {},
 'loadCallback': null,
 'Callback': null,
 'Error': null
 */
$(function () {
    $.AjaxRapido = function (options) {
        var Options = {
            'url': '',
            'request': {},
            'loadCallback': null,
            'Callback': null,
            'Error': null
        };

        $.extend(Options, options);
        $.ajax({
            url: Options['url'],
            data: Options['reques'],
            type: 'post',
            datatype: 'html',
            beforeSend: Options['loadCallback'],
            success: function (responce) {
                Options['Callback'](responce);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (Options['Error'] === null) {
                    ErrorDisplay('Error de Conexion', textStatus);
                } else {
                    Options['Error'](textStatus);
                }
            }
        });


    };
});
