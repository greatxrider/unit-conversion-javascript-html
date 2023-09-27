const TemperatureConverter = (function () {
    function celciusToFahrenheit() {
        var celcius = document.getElementById("c");
        var fahrenheit = document.getElementById("f");

        if (celcius.value != "" && fahrenheit.value == "") {
            var f = (celcius.value * 9) / 5 + 32;
            fahrenheit.value = f;
            return true;
        } else if (fahrenheit.value != "" && celcius.value == "") {
            var c = ((fahrenheit.value - 32) * 5) / 9;
            celcius.value = c;
            return true;
        } else if (celcius.value != "" && fahrenheit.value != "") {
            var f = (celcius.value * 9) / 5 + 32;
            fahrenheit.value = f;
            return true;
        } else {
            alert("Please enter a value in one of the fields.");
            return false;
        }
    }
    return {
        celciusToFahrenheit: celciusToFahrenheit,
    };
})();

const WeightConverter = (function () {
    function kilogramsTopounds() {
        var kilograms = document.getElementById("kg");
        var pounds = document.getElementById("lbs");

        if (kilograms.value != "" && pounds.value == "") {
            var kg = kilograms.value * 2.2046;
            pounds.value = kg;
            return true;
        } else if (pounds.value != "" && kilograms.value == "") {
            var p = pounds.value / 2.2046;
            kilograms.value = p;
            return true;
        } else if (kilograms.value != "" && pounds.value != "") {
            var kg = kilograms.value * 2.2046;
            pounds.value = kg;
            return true;
        } else {
            alert("Please enter a value in one of the fields.");
            return false;
        }
    }
    return {
        kilogramsTopounds: kilogramsTopounds,
    };
})();

const DistanceConverter = (function () {
    function kilometersTomiles() {
        var kilometers = document.getElementById("km");
        var miles = document.getElementById("m");

        if (kilometers.value != "" && miles.value == "") {
            var km = kilometers.value * 0.62137;
            miles.value = km;
            return true;
        } else if (miles.value != "" && kilometers.value == "") {
            var m = miles.value / 0.62137;
            kilograms.value = m;
            return true;
        } else if (kilometers.value != "" && miles.value != "") {
            var km = kilometers.value * 0.62137;
            miles.value = km;
            return true;
        } else {
            alert("Please enter a value in one of the fields.");
            return false;
        }
    }
    return {
        kilometersTomiles: kilometersTomiles,
    };
})();

document.getElementById("temperature_button").addEventListener("click", TemperatureConverter.celciusToFahrenheit);
document.getElementById("weight_button").addEventListener("click", WeightConverter.kilogramsTopounds);
document.getElementById("distance_button").addEventListener("click", DistanceConverter.kilometersTomiles);