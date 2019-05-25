"use strict";
(function(){
    var wear =  [
        {"name":"Conjunto top y short","description":"$549.00","wear":"./img/wm1.jpeg","see_more":"shop.html"},
        {"name":"Conjunto print sport","description":"$229.00","wear":"./img/wm2.jpeg","see_more":"https://kimoa.com"},
        {"name":"Leggins sports wine","description":"$299.00","wear":"./img/wm3.jpeg","see_more":"https://kimoa.com"},
        {"name":"Conjunto light pastel","description":"$479.00","wear":"./img/wm4.jpeg","see_more":"https://kimoa.com"},
        {"name":"Conjunto blackwidow","description":"$299.00","wear":"./img/wm5.jpeg","see_more":"https://kimoa.com"},
        {"name":"Top sport mom","description":"$199.00","wear":"./img/wm6.jpeg","see_more":"https://kimoa.com"},
        {"name":"Top floreado","description":"$249.00","wear":"./img/wm7.jpeg","see_more":"https://kimoa.com"},
        {"name":"Conjunto crossfit","description":"$449.00","wear":"./img/wm8.jpeg","see_more":"https://kimoa.com"},
        {"name":"Conjunto maarfit","description":"$799.00","wear":"./img/wm9.jpeg","see_more":"https://kimoa.com"},
        {"name":"Top sport mom","description":"$299.00","wear":"./img/wm10.jpeg","see_more":"https://kimoa.com"},
        {"name":"Playera pink-black","description":"$699.00","wear":"./img/wm11.jpeg","see_more":"https://kimoa.com"},
        {"name":"Leggings biker","description":"$349.00","wear":"./img/wm12.jpeg","see_more":"https://kimoa.com"},
       
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

