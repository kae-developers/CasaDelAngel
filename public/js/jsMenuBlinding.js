$(function () {
    $.fn.MenuBlinding = function (options) {
        var Options = {
            'SecondaryMenu': '',
            'MainMenu': '',
            'Estado': 0
        };
        $.extend(Options, options);

        function closeMenus() {
            if (Options['Estado'] === 1) {
                MainMenu();
            }
        }
        
        $('body').prepend("<div class=\"BlockUiMainContenedor\"></div>");
        $('.BlockUiMainContenedor').click(closeMenus);

        function MainMenu() {
            if (Options['Estado'] === 0) {
                $('.BlockUiMainContenedor').css({'display':'block'})
                $(Options['MainMenu'] + ' , ' + Options['SecondaryMenu']).addClass('MoveWindowsRight');
                Options['Estado'] = 1;
                $('body').css({'overflow-y': 'hidden'});
            } else {
                $(Options['MainMenu'] + ' , ' + Options['SecondaryMenu']).removeClass('MoveWindowsRight');
                $('.BlockUiMainContenedor').css({'display':'none'});
                $('body').css({'overflow-y': 'auto'});
                Options['Estado'] = 0;
            }
        }

        $(this).click(function () {
            MainMenu();
        });
        
        $(this).hover(function(){
            $('#lb_menuMainBar').fadeIn();
        },function(){
            $('#lb_menuMainBar').fadeOut();
        });

    };
});