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
    $.CuboRender = function (options) {
        var Options = {
            'ContenedorMaestro': 'ContenedorViews', //Si usa el defaul definod en layout
            'ContenedorCubo': '',
            'PanelFrente': {'layoutName': '', 'OnloadCallback': ''},
            'PanelIzquierda': {'layoutName': '', 'OnloadCallback': ''},
            'PanelDerecha': {'layoutName': '', 'OnloadCallback': ''},
            'BotonIzquierda': 'BotonGiroCuboIzquierdo', //Si usa el defaul definod en layout
            'BotonDerecho': 'BotonGiroCuboDerecho', //Si usa el defaul definod en layout
            'Estado': 0//Esta en el centro -1 izquierda 1 Derecha no se hacer set desde afuera
        };

        $.extend(Options, options);

        var viewPort = $('#' + Options['ContenedorMaestro']);
        var Cubo = $('#' + Options['ContenedorCubo']);

        var PanelFrente = $('#' + Options['PanelFrente']['layoutName']);
        var PanelIzquierdo = $('#' + Options['PanelIzquierda']['layoutName']);
        var PanelDerecha = $('#' + Options['PanelDerecha']['layoutName']);

        PanelFrente.addClass('face').addClass('Frente').addClass('container');
        PanelIzquierdo.addClass('face').addClass('Izquierda').addClass('container');
        PanelDerecha.addClass('face').addClass('Derecha').addClass('container');


        var BotonIzquierdo = $('#' + Options['BotonIzquierda']);
        var BotonDerecho = $('#' + Options['BotonDerecho']);

        PanelIzquierdo.css({'visibility': 'hidden'});
        PanelDerecha.css({'visibility': 'hidden'});

        BotonDerecho.css({'display': 'block'});
        BotonIzquierdo.css({'display': 'block'});

        viewPort.addClass('viewPort');
        Cubo.addClass('Cubo');

        function RotarCentroIzquierdad() {
            PanelDerecha.css({'visibility': 'hidden'});
            PanelIzquierdo.css({'visibility': 'visible'});
            Cubo.css({'transform': 'scale(0.5,0.5)'});
            setTimeout(function () {
                Cubo.css({'transform': 'scale(1,1)'});
                PanelFrente.css({'visibility': 'hidden'});
            }, 1000);
            PanelFrente.css({'transform': 'rotateY(-90deg) translateX(-50%) rotateY(90deg) translateX(50%) rotateY(90deg)'});
            PanelIzquierdo.css({'transform': 'rotateY(-90deg) translateX(-50%) rotateY(0deg) translateX(50%) rotateY(90deg)'});

        }


        function RotarCentroDerecha() {
            PanelIzquierdo.css({'visibility': 'hidden'});
            PanelDerecha.css({'visibility': 'visible'});

            Cubo.css({'transform': 'scale(0.5,0.5)'});
            setTimeout(function () {
                Cubo.css({'transform': 'scale(1,1)'});
                PanelFrente.css({'visibility': 'hidden'});
            }, 1000);
            PanelFrente.css({'transform': 'rotateY(-90deg) translateX(-50%) rotateY(-90deg) translateX(50%) rotateY(90deg)'});
            PanelDerecha.css({'transform': 'rotateY(-90deg) translateX(-50%) rotateY(0deg) translateX(50%) rotateY(90deg)'});
        }


        function DeshacerRotacionCentroIzquierda() {
            PanelFrente.css({'visibility': 'visible'});
            Cubo.css({'transform': 'scale(0.5,0.5)'});
            setTimeout(function () {
                Cubo.css({'transform': 'scale(1,1)'});
                PanelIzquierdo.css({'visibility': 'hidden'});
            }, 1000);
            PanelFrente.css({'transform': ''});
            PanelIzquierdo.css({'transform': ''});
        }

        function DeshacerRotacionCentroDerecha() {
            PanelFrente.css({'visibility': 'visible'});
            Cubo.css({'transform': 'scale(0.5,0.5)'});
            setTimeout(function () {
                Cubo.css({'transform': 'scale(1,1)'});
                PanelDerecha.css({'visibility': 'hidden'});
            }, 1000);
            PanelFrente.css({'transform': ''});
            PanelDerecha.css({'transform': ''});
        }

        function ScrollTop(callback) {
            $(window).animate({scrollTop: 10}, 'slow', callback);
        }

        BotonIzquierdo.click(function () {
            if (Options['Estado'] === 0) {
                Options['PanelFrente']['OnloadCallback']();
                ScrollTop(function () {
                    RotarCentroIzquierdad();
                    Options['Estado'] = -1;
                    BotonIzquierdo.css({'display': 'none'});
                    BotonDerecho.css({'display': 'block'});
                });
            } else if (Options['Estado'] === 1) {
                ScrollTop(function () {
                    DeshacerRotacionCentroDerecha();
                    Options['Estado'] = 0;
                    BotonDerecho.css({'display': 'block'});
                    BotonIzquierdo.css({'display': 'block'});
                });
            }
        });

        BotonDerecho.click(function () {
            if (Options['Estado'] === -1) {
                //Options['PanelIzquierda']['OnloadCallback']();
                ScrollTop(function () {
                    DeshacerRotacionCentroIzquierda();
                    Options['Estado'] = 0;
                    BotonDerecho.css({'display': 'block'});
                    BotonIzquierdo.css({'display': 'block'});
                });
            } else if (Options['Estado'] === 0) {
                Options['PanelDerecha']['OnloadCallback']();
                ScrollTop(function () {
                    RotarCentroDerecha();
                    Options['Estado'] = 1;
                    BotonDerecho.css({'display': 'none'});
                    BotonIzquierdo.css({'display': 'block'});
                });
            }
        });

    };
});
