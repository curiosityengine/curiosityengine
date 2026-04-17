const inputBox = document.getElementById("inputBox");
const resultDiv = document.getElementById("result");
const API_KEY = prompt("Enter Gemini API Key");

inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    processInput(inputBox.value.trim());
  }
});

async function processInput(input) {
  resultDiv.textContent = "...";
  
  // First try simple math calculations
  const mathResult = tryMathCalculation(input);
  if (mathResult !== null) {
    resultDiv.textContent = formatResult(mathResult);
    return;
  }
  
  // Use AI for everything else (conversions, complex queries)
  try {
    const answer = await getAIAnswer(input);
    resultDiv.textContent = answer;
  } catch (err) {
    console.error(err);
    resultDiv.textContent = "?";
  }
}

function tryMathCalculation(input) {
  // Only try math.js if it looks like a pure calculation
  const calculationPattern = /^[\d\s\+\-\*\/\%\(\)\.]+$/;
  if (calculationPattern.test(input)) {
    try {
      let result = math.evaluate(input);
      return typeof result === "number" ? result : null;
    } catch {
      return null;
    }
  }
  return null;
}

async function getAIAnswer(input) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Convert or calculate this: "${input}"
            
Rules:
- Return ONLY the final number/result
- NO words, NO explanations, NO units
- Just the raw number
- For conversions, give just the converted value
- Round to 2 decimal places if needed

Examples:
Input: "1 kg is how much pound" → Output: 2.2
Input: "5 feet to meters" → Output: 1.52
Input: "100 usd to inr" → Output: 8350
Input: "2+2" → Output: 4
Input: "10% of 50" → Output: 5`
          }]
        }]
      })
    }
  );
  
  const data = await res.json();
  let answer = data.candidates[0].content.parts[0].text.trim();
  
  // Extract just the first number found if there's any text
  const numberMatch = answer.match(/-?\d+(?:\.\d+)?/);
  if (numberMatch) {
    answer = numberMatch[0];
  }
  
  return answer;
}

function formatResult(num) {
  return parseFloat(Number(num).toFixed(2)).toString();
}
