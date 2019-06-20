$(document).ready(function () {
    //JQuery - Авто калькулятор
    let $imgsList = $('.colorsSelector .colorItem');
    let $modelName = $('.model-name');
    let $modelSpecsHolder = $('#modelSpecs');
    let $modelPricesHolder = $('#modelPrice');
    let $priceUSD = $('#modelPriceUSD');
    let $button = $('.button');

    let $modelSpecs,$modelPrice;
    $modelSpecs = '';
    $modelPrice = 0;


    //ВЫБОР ЦВЕТА
$imgsList.on('click', function (e) {
    let $img = $('#imgAuto');
    let $imgPath = $(this).attr('data-img-path');
    $img.fadeOut(200, function () {
       $(this).attr('src', $imgPath).fadeIn(200);
    });

function calculatePrice() {
    $modelPrice = $('#engine1400').val();
    // $modelPrice = $modelPrice + $('input[name=transmission]:checked', '#autoForm').val();
    // $modelPrice = $modelPrice + $('input[name=package ]:checked', '#autoForm').val();
    // alert($modelPrice);
    console.log($modelPrice);
};
$('#autoForm input').on('change', function () {
   calculatePrice();
});

calculatePrice();

});

});