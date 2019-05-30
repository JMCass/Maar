"use strict";
(function(){
    var wear =  [
        {"name":"Playera algodón","description":"$99.00","wear":"./img/beach1.jpeg","see_more":"https://kimoa.com"},
        {"name":"Short Turquesa","description":"$299.00","wear":"./img/beach3.jpeg","see_more":"https://kimoa.com"},
        {"name":"Short denim","description":"$299.00","wear":"./img/beach6.jpeg","see_more":"https://kimoa.com"},
        {"name":"Short lino mar","description":"$179.00","wear":"./img/beach4.jpeg","see_more":"https://kimoa.com"},
        {"name":"Pantalón slim","description":"$299.00","wear":"./img/beach2.jpeg","see_more":"https://kimoa.com"},
        {"name":"Short Gris City","description":"$149.00","wear":"./img/beach7.jpeg","see_more":"https://kimoa.com"},
        {"name":"Pantalón Whitepearl","description":"$149.00","wear":"./img/beach5.jpeg","see_more":"https://kimoa.com"},
        {"name":"Playera Icecream","description":"$99.00","wear":"./img/beach8.jpeg","see_more":"https://kimoa.com"},
        {"name":"Playera Love","description":"$99.00","wear":"./img/beach9.jpeg","see_more":"https://kimoa.com"},
        {"name":"Playera Selvamar","description":"$99.00","wear":"./img/beach10.jpeg","see_more":"https://kimoa.com"},
        {"name":"Playera Selfl ove","description":"$99.00","wear":"./img/beach11.jpeg","see_more":"https://kimoa.com"},
        {"name":"Playera Sun-Sun","description":"$129.00","wear":"./img/beach12.jpeg","see_more":"https://kimoa.com"},
        {"name":"Playera Sun-Sun","description":"$129.00","wear":"./img/beach13.jpeg","see_more":"https://kimoa.com"},
        {"name":"Playera Sun-Sun","description":"$129.00","wear":"./img/beach14.jpeg","see_more":"https://kimoa.com"},
        {"name":"Playera Sun-Sun","description":"$129.00","wear":"./img/beach15.jpeg","see_more":"https://kimoa.com"},
       
    ]


    function buildCard(portfolio){
        var  html = "<div class='col-md-3'>"+
                        "<div class='card'>"+
                            "<img src='"+portfolio.wear+"' class='card-img-top'>"+
                            "<div class='card-body'>"+
                                "<h5 class='card-title'>"+portfolio.name+"</h5>"+
                                "<p class='card-text'>"+portfolio.description+"</p>"+
                                "<a href='"+portfolio.see_more+"'class='btn btn-primary'>Comprar</a>"+
                            "</div>"+
                        "</div>"+
                    "</div>";
        
        return html;
    }

    for(var i = 0; i < wear.length; i++){
        document.getElementById('wear').innerHTML =  document.getElementById('wear').innerHTML + buildCard(wear[i]);
    }

})();