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
            'reques': {},
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
