function calulateInterest() {
    let Principal = parseFloat(document.getElementById('principal').value);
    let Rate = parseFloat(document.getElementById('rate').value);
    let Time = parseFloat(document.getElementById('time').value);

    var Interest = (Principal * Rate * Time) / 100;
    document.getElementById('result').innerHTML = 'Simple Interest: #' + Interest.toFixed(2);
}

function clearResult() {
    document.getElementById('principal').value = '';
    document.getElementById('rate').value = '';
    document.getElementById('time').value = '';
    document.getElementById('result').innerHTML = '';
}