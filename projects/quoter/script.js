const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const backgrounds = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1494526585095-c41746248156"
];

async function generateImage() {
  const quote = document.getElementById("quoteInput").value.trim();

  if (!quote) {
    alert("Enter a quote");
    return;
  }

  const img = new Image();
  img.crossOrigin = "anonymous";

  const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  img.src = randomBg;

  img.onload = () => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // overlay dark layer
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // text style
    ctx.fillStyle = "#fff";
    ctx.font = "bold 40px Inter";
    ctx.textAlign = "center";

    wrapText(quote, canvas.width / 2, canvas.height / 2, 600, 50);
  };
}

function wrapText(text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";
  let lines = [];

  for (let n = 0; n < words.length; n++) {
    let testLine = line + words[n] + " ";
    let metrics = ctx.measureText(testLine);
    let testWidth = metrics.width;

    if (testWidth > maxWidth && n > 0) {
      lines.push(line);
      line = words[n] + " ";
    } else {
      line = testLine;
    }
  }

  lines.push(line);

  let startY = y - (lines.length * lineHeight) / 2;

  lines.forEach((l, i) => {
    ctx.fillText(l, x, startY + i * lineHeight);
  });
}

function downloadImage() {
  const link = document.createElement("a");
  link.download = "quoter.png";
  link.href = canvas.toDataURL();
  link.click();
}
