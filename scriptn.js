"use strict";
(function(){
    var wear =  [
        {"name":"Sudadera sport","description":"$449.00","wear":"./img/n1.jpeg","see_more":"https://kimoa.com"},
        {"name":"Pants sports-grey","description":"$229.00","wear":"./img/n2.jpeg","see_more":"https://kimoa.com"},
        {"name":"Playera fit","description":"$299.00","wear":"./img/n3.jpeg","see_more":"https://kimoa.com"},
        {"name":"Short verde","description":"$479.00","wear":"./img/n4.jpeg","see_more":"https://kimoa.com"},
        {"name":"Playera fit fire","description":"$299.00","wear":"./img/n5.jpeg","see_more":"https://kimoa.com"},
        {"name":"Playera NYC Sport","description":"$199.00","wear":"./img/n6.jpeg","see_more":"https://kimoa.com"},
        {"name":"Leggings tomboy grey","description":"$249.00","wear":"./img/n7.jpeg","see_more":"https://kimoa.com"},
        {"name":"Leggings tomboy pink","description":"$449.00","wear":"./img/n8.jpeg","see_more":"https://kimoa.com"},
        {"name":"Top cruzado","description":"$799.00","wear":"./img/n9.jpeg","see_more":"https://kimoa.com"},
        {"name":"Top blanco sport","description":"$299.00","wear":"./img/n10.jpeg","see_more":"https://kimoa.com"},
        {"name":"Top bikini sport","description":"$699.00","wear":"./img/n11.jpeg","see_more":"https://kimoa.com"},
        {"name":"Short biker","description":"$349.00","wear":"./img/n12.jpeg","see_more":"https://kimoa.com"},
       
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

