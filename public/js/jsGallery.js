/*
 To change this license header, choose License Headers in Project Properties.
 To change this template file, choose Tools | Templates
 and open the template in the editor.
 */
/* 
 Created on : 16/10/2016, 03:11:43 PM
 Author     : kevin
 */
var GalleryStatus = false;
$(function () {
    $.fn.Gallery = function () {


        var Panel = $(this);


        if (GalleryStatus === false || GalleryStatus === undefined) {
            init();
        }

        function OnLoadAnimation() {
            BloquerVista(Panel);
        }

        function loadGallery() {
            $(".gridder").gridderExpander({
                scrollOffset: 60,
                scrollTo: "panel", // "panel" or "listitem"
                animationSpeed: 400,
                animationEasing: "easeInOutExpo",
                onStart: function () {
                    console.log("Gridder Inititialized");
                },
                onExpanded: function (object) {
                    console.log("Gridder Expanded");
                    $(".carousel").carousel();
                },
                onChanged: function (object) {
                    console.log("Gridder Changed");
                },
                onClosed: function () {
                    console.log("Gridder Closed");
                }
            });
        }

        function init() {
            GalleryStatus = true;
            OnLoadAnimation();
            $.AjaxRapido({
                'url': $('#basePath').val()+'/application/index/gallery',
                'request': {},
                'Callback': function (htmlResponce) {
                    DesbloquearVista(Panel);
                    setTimeout(function () {
                        $(Panel).html(htmlResponce);
                    }, 100);
                    setTimeout(function () {
                        loadGallery();
                    }, 150);
                }
            });
        }

    };
});