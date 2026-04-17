const inputBox = document.getElementById("inputBox");
const resultDiv = document.getElementById("result");

// 🔑 ADD YOUR GEMINI API KEY HERE
const API_KEY = prompt("Enter API Key:");

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

  // 1️⃣ Try local logic first (FREE + FAST)
  let localResult = handleLocal(input);
  if (localResult !== null) {
    resultDiv.textContent = formatResult(localResult);
    return;
  }

  // 2️⃣ Fallback to AI
  try {
    const parsed = await parseWithAI(input);
    const result = compute(parsed);

    resultDiv.textContent = result !== null ? formatResult(result) : "?";
  } catch (err) {
    console.error(err);
    resultDiv.textContent = "!";
  }
}

// ----------------------------
// LOCAL ENGINE (FAST)
// ----------------------------
function handleLocal(input) {

  // kg → pound
  if (input.includes("kg") && (input.includes("pound") || input.includes("lb"))) {
    let n = extractNumber(input);
    if (n) return n * 2.20462;
  }

  // km → mile
  if (input.includes("km") && input.includes("mile")) {
    let n = extractNumber(input);
    if (n) return n * 0.621371;
  }

  // percentage
  let percent = input.match(/(\d+)%\s*of\s*(\d+)/);
  if (percent) {
    return (percent[1] / 100) * percent[2];
  }

  // split
  if (input.includes("split")) {
    let nums = input.match(/(\d+).*?(\d+)/);
    if (nums) return nums[1] / nums[2];
  }

  // Indian: lakh → number
  if (input.includes("lakh")) {
    let n = extractNumber(input);
    if (n) return n * 100000;
  }

  // Indian: crore → number
  if (input.includes("crore")) {
    let n = extractNumber(input);
    if (n) return n * 10000000;
  }

  // Indian: kattha → sqft (default Bihar)
  if (input.includes("kattha") && input.includes("sqft")) {
    let n = extractNumber(input);
    if (n) return n * 1361;
  }

  // math
  if (/^[\d+\-*/().\s]+$/.test(input)) {
    try { return eval(input); } catch {}
  }

  return null;
}

// ----------------------------
// AI PARSER (GEMINI FREE)
// ----------------------------
async function parseWithAI(input) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `
Convert this into JSON. ONLY JSON.

Input: ${input}

Formats:

{"type":"conversion","value":1,"from":"kg","to":"pound"}
{"type":"percentage","value":10,"total":500}
{"type":"split","value":1200,"people":3}
{"type":"math","expression":"5+6*2"}

Support Indian units:
kattha, bigha, tola, lakh, crore
`
          }]
        }]
      })
    }
  );

  const data = await res.json();
  let text = data.candidates[0].content.parts[0].text;

  // Clean if AI wraps in ```json
  text = text.replace(/```json|```/g, "").trim();

  return JSON.parse(text);
}

// ----------------------------
// COMPUTE ENGINE
// ----------------------------
function compute(data) {
  if (!data) return null;

  switch (data.type) {

    case "conversion":
      if (data.from === "kg" && data.to.includes("pound")) {
        return data.value * 2.20462;
      }

      if (data.from === "km" && data.to.includes("mile")) {
        return data.value * 0.621371;
      }

      if (data.from === "kattha" && data.to === "sqft") {
        return data.value * 1361;
      }

      break;

    case "percentage":
      return (data.value / 100) * data.total;

    case "split":
      return data.value / data.people;

    case "math":
      try { return eval(data.expression); } catch { return null; }
  }

  return null;
}

// ----------------------------
// HELPERS
// ----------------------------
function extractNumber(str) {
  let m = str.match(/(\d+(\.\d+)?)/);
  return m ? parseFloat(m[1]) : null;
}

function formatResult(num) {
  return parseFloat(num.toFixed(2)).toString();
}
