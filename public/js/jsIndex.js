$(document).ready(function () {
    $.CuboRender({
        'ContenedorCubo': 'ContenedorCubo',
        'PanelFrente': {'layoutName': 'LadoCentral', 'OnloadCallback': LoadLeftPanel},
        'PanelIzquierda': {'layoutName': 'LadoIzquierdo', 'OnloadCallback': LoadCentralPanel},        
    });
});

function LoadLeftPanel(){
    $.Foro();
}

function LoadCentralPanel(){
    
}