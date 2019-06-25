$(document).ready(function () {
    //JQuery - Авто калькулятор
    let $imgsList = $('.colorsSelector .colorItem');
    let $modelName = $('.model-name');
    let $modelSpecsHolder = $('#modelSpecs');
    let $modelPricesHolder = $('#modelPrice');
    let $button = $('.button');
    let $modelSpecs,$modelPrice;
    $modelSpecs = '';
    $modelPrice = 0;

    //КОГДА ИЗМЕНЯЕТСЯ ИНПУТ, ВЫЗЫВАЕТСЯ ФУНКЦИЯ ПОДСЧЁТА ЦЕНЫ
    $('#autoForm input').on('change', function () {
        calculatePrice();
        compileSpecs();
    });
    calculatePrice();
    compileSpecs();

    //ВЫБОР ЦВЕТА
    $imgsList.on('click', function (e) {
    let $img = $('#imgAuto');
    let $imgPath = $(this).attr('data-img-path');
    $img.fadeOut(200, function () {
       $(this).attr('src', $imgPath).fadeIn(200);
    });
    });
    //ПОДСЧЁТ ЦЕНЫ
    function calculatePrice() {
        let $modelPriceEngine = parseInt($('input[name=engine]:checked', '#autoForm').val());
        let $modelPriceTransmission = parseInt($('input[name=transmission]:checked', '#autoForm').val());
        let $modelPricePackage = parseInt($('input[name=package ]:checked', '#autoForm').val());
        $modelPrice = $modelPriceEngine + $modelPriceTransmission + $modelPricePackage;
        $modelPricesHolder.text(addSpace($modelPrice) + ' рублей');
    };
    //ВЫВОДИМ КОМПЛЕКТАЦИЮ
    function compileSpecs() {
        let $modelSpecsEngine = $('input[name=engine]:checked + label', '#autoForm').text();
        let $modelSpecsTransmission = $('input[name=transmission]:checked + label', '#autoForm').text();
        let $modelSpecsPackage = $('input[name=package]:checked + label', '#autoForm').text();
        $modelSpecs = `
        ${$modelSpecsEngine}
        ${$modelSpecsTransmission}
        ${$modelSpecsPackage}
        `;
        $modelSpecsHolder.text($modelSpecs);
    };


    //ФУНКЦИЯ ДЛЯ ПРОБЕЛОВ В СУММЕ (скаченная)
    function addSpace(nStr){
        nStr += "";
        x = nStr.split(".");
        x1 = x[0];
        x2 = x.length > 1 ? "." + x[1] : "";
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, "$1" + " " + "$2");
        }
        return x1 + x2;
    }
});