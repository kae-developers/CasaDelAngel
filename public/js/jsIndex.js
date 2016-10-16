$(document).ready(function () {
    $.CuboRender({
        'ContenedorCubo': 'ContenedorCubo',
        'PanelFrente': {'layoutName': 'LadoCentral', 'OnloadCallback': LoadLeftPanel},
        'PanelIzquierda': {'layoutName': 'LadoIzquierdo', 'OnloadCallback': LoadCentralPanel},      
        'PanelDerecha': {'layoutName': 'LadoDerecho', 'OnloadCallback': LoadrightPanel}      
    });
});

function LoadLeftPanel(){
    $.Foro();
}

function LoadCentralPanel(){
    
}

function LoadrightPanel(){
    $('#LadoDerecho').Gallery();
}