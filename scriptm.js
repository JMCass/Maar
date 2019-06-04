"use strict";
(function(){
    var wear =  [
        {"name":"Conjunto Fit","description":"$99.00","author":"ABCD","collection":"Summer/Winter","wear":"./img/m1.jpeg","see_more":"https://kimoa.com"},
        {"name":"Conjunto blue militar","description":"$129.00","author":"ABCD","collection":"Summer/Winter","wear":"./img/m2.jpeg","see_more":"https://kimoa.com"},
        {"name":"Playera stretch","description":"$249.00","author":"ABCD","collection":"Summer/Winter","wear":"./img/m3.jpeg","see_more":"https://kimoa.com"},
        {"name":"Playera comfortblue","description":"$129.00","author":"ABCD","collection":"Summer/Winter","wear":"./img/m4.jpeg","see_more":"https://kimoa.com"},
        {"name":"Playera Fit","description":"$249.00","author":"ABCD","collection":"Summer/Winter","wear":"./img/m5.jpeg","see_more":"https://kimoa.com"},
        {"name":"Conjunto Arena","description":"$459.00","author":"ABCD","collection":"Summer/Winter","wear":"./img/m6.jpeg","see_more":"https://kimoa.com"},
        {"name":"Playera NYC","description":"$249.00","author":"ABCD","collection":"Summer/Winter","wear":"./img/m7.jpeg","see_more":"https://kimoa.com"},
        {"name":"Playera Cali","description":"$449.00","author":"ABCD","collection":"Summer/Winter","wear":"./img/m8.jpeg","see_more":"https://kimoa.com"},
        {"name":"Sudadera 3/4 verde","description":"$499.00","author":"ABCD","collection":"Summer/Winter","wear":"./img/m9.jpeg","see_more":"https://kimoa.com"},
        {"name":"Sudadera s/m black","description":"$699.00","author":"ABCD","collection":"Summer/Winter","wear":"./img/m10.jpeg","see_more":"https://kimoa.com"},
        {"name":"Playera Algodón Fit","description":"$539.00","author":"ABCD","collection":"Summer/Winter","wear":"./img/m11.jpeg","see_more":"https://kimoa.com"},
        {"name":"Playera Slim","description":"$549.00","author":"ABCD","collection":"Summer/Winter","wear":"./img/m12.jpeg","see_more":"https://kimoa.com"},
       
    ]


    function buildCard(portfolio){
        var  html = "<div class='col-md-3'>"+
                        "<div class='card'>"+
                            "<img src='"+portfolio.wear+"' class='card-img-top'>"+
                            "<div class='card-body'>"+
                                "<h5 class='card-title'>"+portfolio.name+"</h5>"+
                                "<p class='card-middle'>"+portfolio.description+"</p>"+
                                "<a class='card-text'>"+portfolio.author+"</a><br>"+
                                "<a class='card-text'>"+portfolio.collection+"</a>"+
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

