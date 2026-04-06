function generateQR() {
  const text = document.getElementById("qrText").value;
  const qrImage = document.getElementById("qrImage");
  const downloadBtn = document.getElementById("downloadBtn");

  if (text.trim() === "") {
    alert("Please enter text or URL");
    return;
  }

  const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;

  qrImage.src = qrURL;
  downloadBtn.href = qrURL;
}