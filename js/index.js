$(document).on("submit", "#frm-register", Register);
$(document).on("submit", "#frm-login", Login);
$(".nav-item").ready(Ready);
$(document).on("click","#btn-view-details",ViewDetails);


function Ready() {
    var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);

    $(".nav-item a").each(function () {
        if ($(this).attr("href") == pgurl || $(this).attr("href") == '') {
            $(this).addClass("active");
        }
    });
}
function Register(e) {
    e.preventDefault();

    if ($("#password").val() == $("#confirm-password").val()) {
        $.ajax({
            type: "POST",
            url: "../php/register.php",
            data: $("#frm-register").serialize(),
            success: function (result) {
                result = $.parseJSON(result);

                if (result.success) {
                    alert("Registered successfully!");
                    $("#frm-register").trigger("reset");
                    location.href = "login.html";
                }
                else {
                    alert("Registered unsuccessfully!");
                }
            }
        });
    }
    else {
        $("#error").text("* Password mismatched.\n");
    }
}
function Login(e)
{
    e.preventDefault();
    $.ajax(
        {
            type: "POST",
            url: "../php/login.php",
            data: $("#frm-login").serialize(),
            success: function( result )
            {
                result = $.parseJSON(result);
                alert(result.success);
                if(result.success)
                {
                    alert("Login successfully!");
                    location.href="login.html";
                }
                else
                {
                    alert("Login failed!");
                }
            }
        });
}
$("#product-all").ready(ShowAllProduct);
function ShowAllProduct(){
    $("product-all").empty();
    var product=[
        {name:"Ho Ba leprechaun",price:"250.000",img:"https://bizgift.vn/wp-content/uploads/2019/07/xuong-san-xuat-thu-bong-1.jpg"},
        {name:"Doremon",price:"300.000",img:"https://salt.tikicdn.com/ts/tmp/ed/77/48/d1a3099692c054e3c8cce3467f7d5e8a.jpg"},
        {name:"Shin",price:"250.000",img:"https://salt.tikicdn.com/ts/tmp/50/fd/8c/8f270612468bf9886042947f019c57a5.jpg"},
        {name:"Donal Duck",price:"150.000",img:"https://anh.quatructuyen.com/media/catalog/product/cache/1/image/480x480/9df78eab33525d08d6e5fb8d27136e95/g/a/gau-bong-vit-donald-2.jpg"},
        {name:"Jerry mouse",price:"300.000",img:"https://images-fe.ssl-images-amazon.com/images/I/71GXZDecYmL.jpg"},
        {name:"Tom cat",price:"300.000",img:"https://shoptretho.com.vn/upload/image/product/20141215/meo-tom-2.jpg"},
        {name:"Red",price:"250.000",img:"https://salt.tikicdn.com/ts/product/a3/82/88/d692413d43d4641f9823841b1899ac2d.jpg"},
        {name:"Yellow",price:"250.000",img:"https://salt.tikicdn.com/ts/tmp/08/a6/9c/aa3fbeec475bf7362ac2a8a70e602f7e.jpg"},
        {name:"Batman",price:"300.000",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaWeHZzd9DDvjT-L_PC7LSPwagDZoPHJ3QZQ&usqp=CAU"},
        {name:"Captain America",price:"300.000",img:"https://gaubongdep.com/wp-content/uploads/2018/01/chieu-cao-cua-thu-nhoi-bong-hinh-shin-captain-america-1475145914.jpg"},
        {name:"Supperman",price:"250.000",img:"https://gaubongdep.com/wp-content/uploads/2017/09/hinh-san-pham-gau-bong-superman-sieu-nhan-truoc.jpg"},
        {name:"Ranger Hero Plushies",price:"300.000",img:"https://images-na.ssl-images-amazon.com/images/I/61aH7oOgo2L.jpg"},
        {name:"Red ranger bear",price:"200.000",img:"https://i.pinimg.com/originals/22/9e/2e/229e2eac76eda212bfa5238ab74c3901.jpg"},
        {name:"Time ranger",price:"250.000",img:"https://i5.walmartimages.com/asr/3ad7db21-71db-4d65-8489-196d0683334a_1.d80ac573e6f359f44550cfbcd39e87d9.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff"},
        {name:"Spider man",price:"150.000",img:"https://vn-test-11.slatic.net/p/f4aa19ff3e3aeeea5d7024b591fe0cbf.jpg_720x720q80.jpg_.webp"},
        {name:"Doctor Strange",price:"250.000",img:"https://cf.shopee.vn/file/e9e4dd0eb3c07be86b5ed29559d19862"},
        {name:"Stuffed squirrel",price:"150.000",img:"https://vn-live-01.slatic.net/p/65716690a27797d2897d9de67d1d2f31.jpg"},
        {name:"Stuffed pig",price:"200.000",img:"https://cf.shopee.vn/file/a7239bc33f8ec2cdb6b617f3e05d6e3f&zimken.jpg"},
        {name:"Stuffed Shiba dog",price:"300.000",img:"https://bucket.nhanh.vn/store/7239/ps/20201026/9_800x800.jpg"},
        {name:"Stuffed cow",price:"150.000",img:"https://concung.com/2019/07/43043-51482-large_mobile/thu-nhoi-bong-con-bo-cuoi.jpg"},
        {name:"Stuffed kittens",price:"200.000",img:"https://pandagift.vn/uploads/shops/Anh-thang-11/meo-bong-vang-1.jpg"},
        {name:"Stuffed penguins",price:"300.000",img:"https://salt.tikicdn.com/ts/product/64/74/0c/2cbf39ea38b23de2aa1eb18f73089e19.JPG"},
        {name:"Stuffed hamster",price:"150.000",img:"https://sc01.alicdn.com/kf/HTB1i6NjdQfb_uJkSnaVq6xFmVXai.jpg_350x350.jpg"},
        {name:"Stuffed panda",price:"200.000",img:"https://cf.shopee.vn/file/ad8c6cdb0a2bb8e5c5296c0eed08178f"}
    ];
   for(item of product ){
       var text = `
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="${item.img}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                      <h5 class="card-title">${item.name}</h5>
                      <p class="card-text">${item.price}</p>
                      <a href="#" class="btn btn-primary">View Detail</a>
                      <a href="#" class="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            </div>
       `;
          
                       $("#product-all").append(text);
   }
}

$("#cartoon-character").ready(ShowProduct);
function ShowProduct(){
    $("cartoon-character").empty();
    var product=[
        {name:"Ho Ba leprechaun",price:"250.000",img:"https://bizgift.vn/wp-content/uploads/2019/07/xuong-san-xuat-thu-bong-1.jpg"},
        {name:"Doremon",price:"300.000",img:"https://salt.tikicdn.com/ts/tmp/ed/77/48/d1a3099692c054e3c8cce3467f7d5e8a.jpg"},
        {name:"Shin",price:"250.000",img:"https://salt.tikicdn.com/ts/tmp/50/fd/8c/8f270612468bf9886042947f019c57a5.jpg"},
        {name:"Donal Duck",price:"150.000",img:"https://anh.quatructuyen.com/media/catalog/product/cache/1/image/480x480/9df78eab33525d08d6e5fb8d27136e95/g/a/gau-bong-vit-donald-2.jpg"},
        {name:"Jerry mouse",price:"300.000",img:"https://images-fe.ssl-images-amazon.com/images/I/71GXZDecYmL.jpg"},
        {name:"Tom cat",price:"300.000",img:"https://shoptretho.com.vn/upload/image/product/20141215/meo-tom-2.jpg"},
        {name:"Red",price:"250.000",img:"https://salt.tikicdn.com/ts/product/a3/82/88/d692413d43d4641f9823841b1899ac2d.jpg"},
        {name:"Yellow",price:"250.000",img:"https://salt.tikicdn.com/ts/tmp/08/a6/9c/aa3fbeec475bf7362ac2a8a70e602f7e.jpg"}
        
    ];
   for(item of product ){
       var text = `
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="${item.img}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                      <h5 class="card-title">${item.name}</h5>
                      <p class="card-text">${item.price}</p>
                      <a href="#" class="btn btn-primary">View Detail</a>
                      <a href="#" class="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            </div>
       `;
          
                       $("#cartoon-character").append(text);
   }
}
$("#power_ranger").ready(ShowProduct1);
function ShowProduct1(){
    $("power-ranger").empty();
    var product=[
        {name:"Batman",price:"300.000",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaWeHZzd9DDvjT-L_PC7LSPwagDZoPHJ3QZQ&usqp=CAU"},
        {name:"Captain America",price:"300.000",img:"https://gaubongdep.com/wp-content/uploads/2018/01/chieu-cao-cua-thu-nhoi-bong-hinh-shin-captain-america-1475145914.jpg"},
        {name:"Supperman",price:"250.000",img:"https://gaubongdep.com/wp-content/uploads/2017/09/hinh-san-pham-gau-bong-superman-sieu-nhan-truoc.jpg"},
        {name:"Ranger Hero Plushies",price:"300.000",img:"https://images-na.ssl-images-amazon.com/images/I/61aH7oOgo2L.jpg"},
        {name:"Red ranger bear",price:"200.000",img:"https://i.pinimg.com/originals/22/9e/2e/229e2eac76eda212bfa5238ab74c3901.jpg"},
        {name:"Time ranger",price:"250.000",img:"https://i5.walmartimages.com/asr/3ad7db21-71db-4d65-8489-196d0683334a_1.d80ac573e6f359f44550cfbcd39e87d9.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff"},
        {name:"Spider man",price:"150.000",img:"https://vn-test-11.slatic.net/p/f4aa19ff3e3aeeea5d7024b591fe0cbf.jpg_720x720q80.jpg_.webp"},
        {name:"Doctor Strange",price:"250.000",img:"https://cf.shopee.vn/file/e9e4dd0eb3c07be86b5ed29559d19862"}
        
    ];
   for(item of product ){
       var text = `
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="${item.img}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                      <h5 class="card-title">${item.name}</h5>
                      <p class="card-text">${item.price}</p>
                      <a href="#" class="btn btn-primary">View Detail</a>
                      <a href="#" class="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            </div>
       `;   
                       $("#power_ranger").append(text);
   }
}
$("#stuffed-animal").ready(ShowProduct2);
function ShowProduct2(){
    $("stuffed-animal").empty();
    var product=[
        {name:"Stuffed squirrel",price:"150.000",img:"https://vn-live-01.slatic.net/p/65716690a27797d2897d9de67d1d2f31.jpg"},
        {name:"Stuffed pig",price:"200.000",img:"https://cf.shopee.vn/file/a7239bc33f8ec2cdb6b617f3e05d6e3f&zimken.jpg"},
        {name:"Stuffed Shiba dog",price:"300.000",img:"https://bucket.nhanh.vn/store/7239/ps/20201026/9_800x800.jpg"},
        {name:"Stuffed cow",price:"150.000",img:"https://concung.com/2019/07/43043-51482-large_mobile/thu-nhoi-bong-con-bo-cuoi.jpg"},
        {name:"Stuffed kittens",price:"200.000",img:"https://pandagift.vn/uploads/shops/Anh-thang-11/meo-bong-vang-1.jpg"},
        {name:"Stuffed penguins",price:"300.000",img:"https://salt.tikicdn.com/ts/product/64/74/0c/2cbf39ea38b23de2aa1eb18f73089e19.JPG"},
        {name:"Stuffed hamster",price:"150.000",img:"https://sc01.alicdn.com/kf/HTB1i6NjdQfb_uJkSnaVq6xFmVXai.jpg_350x350.jpg"},
        {name:"Stuffed panda",price:"200.000",img:"https://cf.shopee.vn/file/ad8c6cdb0a2bb8e5c5296c0eed08178f"}
        
    ];
   for(item of product ){
       var text = `
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="${item.img}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                      <h5 class="card-title">${item.name}</h5>
                      <p class="card-text">${item.price}</p>
                      <a href="#" class="btn btn-primary">View Detail</a>
                      <a href="#" class="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            </div>
       `;
          
                       $("#stuffed-animal").append(text);
   }
}
function ViewDetails(product){
    $("#sDescription").empty();
    $("#sName").empty();
    console.log(product);
    var ID= product.getAttribute('data-product-id');
    console.log(ID);
    $.ajax({
        type: "POST", url: "../php/product_detail.php",
        data: {id: ID},
        success: function(result){
            result = $.parseJSON(result);
            $("#sDescription").append(result[0].description);
            console.log(result);
            $("#sName").append(result[0].name);
            console.log(result[0].img);
            document.getElementById("imgchange").src = result[0].img;
            
        }
    });
    $("#labelselect").hide();
    $("#detailshow").show();
}

