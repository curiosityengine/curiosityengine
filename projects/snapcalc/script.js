const inputBox = document.getElementById("inputBox");
const resultDiv = document.getElementById("result");

const API_KEY = prompt("Enter Gemini API Key");

// Enter key trigger
inputBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    calculate(inputBox.value.trim());
  }
});

async function calculate(input) {
  if (!input) return;

  resultDiv.textContent = "...";

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `
You are a calculator.

Return ONLY the final numeric answer.
No explanation.
No units.
No text.

lakh = 100000
crore = 10000000

If cannot calculate, return ?

Input: ${input}
`
                }
              ]
            }
          ]
        })
      }
    );

    const data = await res.json();

    let output = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    // Clean output
    output = output?.replace(/[^0-9.\-]/g, "");

    if (!output) output = "?";

    resultDiv.textContent = output;

  } catch (err) {
    console.error(err);
    resultDiv.textContent = "!";
  }
}
