function generateQR() {
    var inputBox = document.getElementById("text");
    var qrBox = document.getElementById("qrcode");
    var qrResult = document.getElementById("qr-result");
    var text = inputBox.value.trim();

    // clear old QR code first
    qrBox.innerHTML = "";

    // stop if the input is empty
    if (text === "") {
        qrResult.classList.remove("is-visible");
        alert("Please enter text or URL to generate a QR code.");
        return;
    }

    // create the new QR code
    new QRCode(qrBox, {
        text: text,
        width: 320,
        height: 320,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    // show the result area
    qrResult.classList.add("is-visible");
}