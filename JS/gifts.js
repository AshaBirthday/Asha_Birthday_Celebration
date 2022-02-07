var pro_list = document.querySelectorAll('.pro_list li');
var card = document.querySelector('.card');
var pro_pic = document.querySelector('.pro_pic');
var pro_title = document.querySelector('.pro_title');
var pro_Description = document.querySelector('.pro_description');

pro_list.forEach(function(pro_listSingle) {
    pro_listSingle.addEventListener('click',function(){
        BgImg = this.style.backgroundImage;
        DataTitle = this.getAttribute("data-title");
        DataDescription = this.getAttribute("data-description");

         //alert(bgimg);
        for (var item of pro_list) {
            item.classList.remove('selected');
        }
        this.classList = "selected";

        var bg_radius1= Math.floor(Math.random() *(70-1) + 1);
        document.getElementById('radius1').style.left = bg_radius1+"vh";
        var bg_radius2= Math.floor(Math.random() *(70-1) + 1);
        document.getElementById('radius2').style.left = bg_radius2+"vh";
        var bg_radius3= Math.floor(Math.random() *(70-1) + 1);
        document.getElementById('radius3').style.left = bg_radius3+"vh";
        var bg_radius4= Math.floor(Math.random() *(70-1) + 1);
        document.getElementById('radius4').style.right = bg_radius4+"vh";
        var bg_radius5= Math.floor(Math.random() *(70-1) + 1);
        document.getElementById('radius5').style.right = bg_radius5+"vh";
        var bg_radius6= Math.floor(Math.random() *(70-1) + 1);
        document.getElementById('radius6').style.right = bg_radius6+"vh";
        
        card.classList = "card card_animated"
        setTimeout(function(){
            pro_pic.style.backgroundImage = BgImg;
            pro_title.innerHTML = DataTitle;
            pro_Description.innerHTML = DataDescription;

        },700);
        setTimeout(function(){
            card.classList.remove("card_animated");
        },1500)
    });
});


