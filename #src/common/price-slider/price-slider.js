{
    let priceSlider = document.querySelector('.price-filter__slider');
    if (priceSlider) {
        let inputNumFrom = document.getElementById('priceStart');
        let inputNumTo = document.getElementById('priceEnd');
        let value = document.querySelector('.values-price-filter');

        let min = value.dataset.min;
        let max = value.dataset.max;
        let numStart = value.dataset.start;
        let numEnd = value.dataset.end;
        noUiSlider.create(priceSlider, {
            start: [+numStart, +numEnd],
            connect: true,
            tooltips: [wNumb({ decimals: 0, thousand: ',' }), wNumb({ decimals: 0, thousand: ',' })],
            range: {
                'min': [+min],
                '1%': [100, 100],
                'max': [+max],
            }
        });

        priceSlider.noUiSlider.on('update', function (values, handle) {

            var value = values[handle];

            if (handle) {
                inputNumTo.value = Math.round(value);
            } else {
                inputNumFrom.value = Math.round(value);
            }
        });

        inputNumTo.onchange = function () {
            setPriceValues()
        }

        inputNumFrom.onchange = function () {
            setPriceValues()
        }

        function setPriceValues() {
            let priceStartValue;
            let priceEndValue;
            if (inputNumFrom.value != '') {
                priceStartValue = inputNumFrom.value;
            }

            if (inputNumTo.value != '') {
                priceEndValue = inputNumTo.value;
            }

            priceSlider.noUiSlider.set([priceStartValue, priceEndValue])
        }
    }


}
