function resizeControl(size, choice) {
    var fnRef
    switch (choice) {
        case 1:
            fnRef = function () {
                document
                    .getElementById('txtValue')
                    .setAttribute('style', `width:${size}px`)
            }
            break;

        case 2:
            fnRef = function () {
                document
                    .getElementById('btnClick')
                    .setAttribute('style', `width:${size}px`)
            }
            break;

        default:
            break;
    }
    return fnRef
}

function radioTextChanged() {
    if (document.getElementById('radioText').checked) {
        var resizeTextBox = resizeControl(300, 1)
        resizeTextBox()
    }
}

function radioBtnChanged() {
    if (document.getElementById('radioBtn').checked) {
        var resizeBtn = resizeControl(300, 2)
        resizeBtn()
    }
}