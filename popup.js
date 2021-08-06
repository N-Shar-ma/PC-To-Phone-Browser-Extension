chrome.tabs.query({"active": true, "currentWindow": true}, ([tab]) => {
    const qrCode = new QRious({
        size: 200,
        element: document.getElementById("qr-code"),
        value: tab.url
    })
    console.log(tab)
})
