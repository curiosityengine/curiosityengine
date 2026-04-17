const inputBox = document.getElementById("inputBox");
const resultDiv = document.getElementById("result");

// 🔑 Safe for GitHub
const API_KEY = prompt("Enter Gemini API Key");

// ----------------------------
// EVENT
// ----------------------------
inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    processInput(inputBox.value.trim().toLowerCase());
  }
});

// ----------------------------
// MAIN FLOW
// ----------------------------
async function processInput(input) {
  resultDiv.textContent = "...";

  // 1️⃣ Try Math.js
  let processed = preprocess(input);
  let mathResult = tryMathJS(processed);

  if (mathResult !== null) {
    resultDiv.textContent = formatResult(mathResult);
    return;
  }

  // 2️⃣ Fallback to AI
  try {
    const answer = await getAIAnswer(input);
    resultDiv.textContent = answer;
  } catch (err) {
    console.error(err);
    resultDiv.textContent = "!";
  }
}

// ----------------------------
// PREPROCESSOR (INDIA SUPPORT)
// ----------------------------
function preprocess(input) {

  let str = input;

  // -------------------------
  // NUMBER SYSTEM NORMALIZATION
  // -------------------------

  // million → 1e6
  if (str.includes("million")) {
    str = str.replace(/(\d+(\.\d+)?)\s*million/g, (_, n) => `${n}e6`);
  }

  // billion → 1e9
  if (str.includes("billion")) {
    str = str.replace(/(\d+(\.\d+)?)\s*billion/g, (_, n) => `${n}e9`);
  }

  // trillion → 1e12
  if (str.includes("trillion")) {
    str = str.replace(/(\d+(\.\d+)?)\s*trillion/g, (_, n) => `${n}e12`);
  }

  // lakh → 1e5
  if (str.includes("lakh")) {
    str = str.replace(/(\d+(\.\d+)?)\s*lakh/g, (_, n) => `${n}e5`);
  }

  // crore → 1e7
  if (str.includes("crore")) {
    str = str.replace(/(\d+(\.\d+)?)\s*crore/g, (_, n) => `${n}e7`);
  }

  // lakh crore → 1e12
  if (str.includes("lakh crore")) {
    str = str.replace(/(\d+(\.\d+)?)\s*lakh crore/g, (_, n) => `${n}e12`);
  }

  // -------------------------
  // SPECIAL CASE: convert TO lakh
  // -------------------------
  if (str.includes("to lakh")) {
    str = str.replace("to lakh", "/1e5");
  }

  // convert TO crore
  if (str.includes("to crore")) {
    str = str.replace("to crore", "/1e7");
  }

  // convert TO million
  if (str.includes("to million")) {
    str = str.replace("to million", "/1e6");
  }

  // convert TO billion
  if (str.includes("to billion")) {
    str = str.replace("to billion", "/1e9");
  }

  // -------------------------
  // AREA FIX (kattha)
  // -------------------------
  if (str.includes("kattha")) {
    str = str.replace("kattha", "1361 sqft");
  }

  // -------------------------
  // HINGLISH SPLIT
  // -------------------------
  if (str.includes("baato")) {
    let nums = str.match(/(\d+).*?(\d+)/);
    if (nums) return `${nums[1]} / ${nums[2]}`;
  }

  // -------------------------
  // CLEAN WORDS
  // -------------------------
  str = str.replace(/(kitna|hota|hai|me|in|ko|batao)/g, "");

  return str.trim();
}

// ----------------------------
// MATH.JS ENGINE
// ----------------------------
function tryMathJS(input) {
  try {
    let result = math.evaluate(input);
    return typeof result === "number" ? result : null;
  } catch {
    return null;
  }
}

// ----------------------------
// AI FALLBACK (ONLY WHEN NEEDED)
// ----------------------------
async function getAIAnswer(input) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `
You are a calculator.

Return ONLY a number.
No explanation.
No units.

Input: ${input}
`
          }]
        }]
      })
    }
  );

  const data = await res.json();
  return data.candidates[0].content.parts[0].text.trim();
}

// ----------------------------
// FORMAT OUTPUT
// ----------------------------
function formatResult(num) {
  return parseFloat(Number(num).toFixed(2)).toString();
}
