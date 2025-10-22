function slash4Calc(event) {
    console.log(event.target.value)
    document.getElementById('output').innerText = Math.round(event.target.value / 4);
    document.getElementById('output').setAttribute("var", document.getElementById('output').innerText * 4)
}