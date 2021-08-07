chrome.tabs.query({"active": true, "currentWindow": true}, ([tab]) => {
    const qrCode = new QRious({
        size: 200,
        element: document.getElementById("qr-code"),
        value: tab.url
    })
    document.getElementsByTagName("p")[0].innerText = "Scan using the Scanner App or Google Lens on your mobile device";
})
