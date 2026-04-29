// ── Stations Data ─────────────────────────────────────────────────────────────
const STATIONS = [
  { name: "Agartala Junction", code: "AGTL" },
  { name: "Agra Cantonment", code: "AGC" },
  { name: "Agra Fort", code: "AF" },
  { name: "Ahmedabad Junction", code: "ADI" },
  { name: "Ajmer Junction", code: "AII" },
  { name: "Akola Junction", code: "AK" },
  { name: "Aligarh Junction", code: "ALJN" },
  { name: "Alipurduar Junction", code: "APDJ" },
  { name: "Alleppey Junction", code: "ALLP" },
  { name: "Ambala Cantonment", code: "UMB" },
  { name: "Ambikapur Junction", code: "ABKP" },
  { name: "Amravati Junction", code: "AMI" },
  { name: "Amritsar Junction", code: "ASR" },
  { name: "Anand Vihar Terminal", code: "ANVT" },
  { name: "Asansol Junction", code: "ASN" },
  { name: "Aurangabad Junction", code: "AWB" },
  { name: "Ayodhya Junction", code: "AY" },
  { name: "Ballia Junction", code: "BUI" },
  { name: "Bandra Terminus", code: "BDTS" },
  { name: "Bareilly Junction", code: "BE" },
  { name: "Basti Junction", code: "BST" },
  { name: "Belagavi Junction", code: "BGM" },
  { name: "Bengaluru Cantonment", code: "BNC" },
  { name: "Berhampur Junction", code: "BAM" },
  { name: "Bhatinda Junction", code: "BTI" },
  { name: "Bhavnagar Terminus", code: "BVC" },
  { name: "Bhopal Junction", code: "BPL" },
  { name: "Bhopal Rani Kamlapati", code: "RKMP" }, // was HBJ
  { name: "Bhuj Junction", code: "BHUJ" },
  { name: "Bhagalpur Junction", code: "BGP" },
  { name: "Bhubaneswar Junction", code: "BBS" },
  { name: "Bikaner Junction", code: "BKN" },
  { name: "Bilaspur Junction", code: "BSP" },
  { name: "Bokaro Steel City", code: "BKSC" },
  { name: "Chandigarh Junction", code: "CDG" },
  { name: "Champa Junction", code: "CPH" },
  { name: "Chandrapur Junction", code: "CD" },
  { name: "Chennai Beach", code: "MSB" },
  { name: "Chennai Central MGR", code: "MGR" }, // was MAS
  { name: "Chennai Egmore", code: "MS" },
  { name: "Coimbatore Junction", code: "CBE" },
  { name: "Cuttack Junction", code: "CTC" },
  { name: "Darbhanga Junction", code: "DBG" },
  { name: "Dehradun Junction", code: "DDN" },
  { name: "Delhi Sarai Rohilla", code: "DEE" },
  { name: "Dhanbad Junction", code: "DHN" },
  { name: "Dimapur Junction", code: "DMV" },
  { name: "Dibrugarh Junction", code: "DBRG" },
  { name: "Durg Junction", code: "DURG" },
  { name: "Ernakulam Junction", code: "ERS" },
  { name: "Gaya Junction", code: "GAYA" },
  { name: "Gorakhpur Junction", code: "GKP" },
  { name: "Guwahati Junction", code: "GHY" },
  { name: "Gwalior Junction", code: "GWL" },
  { name: "Haridwar Junction", code: "HW" },
  { name: "Howrah Junction", code: "HWH" },
  { name: "Hyderabad Deccan", code: "HYB" },
  { name: "Indore Junction", code: "INDB" },
  { name: "Jabalpur Junction", code: "JBP" },
  { name: "Jaipur Junction", code: "JP" },
  { name: "Jammu Tawi", code: "JAT" },
  { name: "Jhansi Junction", code: "JHS" },
  { name: "Jodhpur Junction", code: "JU" },
  { name: "Kacheguda", code: "KCG" },
  { name: "Kannur Junction", code: "CAN" },
  { name: "Kanpur Central", code: "CNB" },
  { name: "Kathgodam Junction", code: "KGM" },
  { name: "Katra", code: "SVDK" },
  { name: "Kharagpur Junction", code: "KGP" },
  { name: "Kochuveli", code: "KCVL" },
  { name: "Kolkata", code: "KOAA" },
  { name: "Kollam Junction", code: "QLN" },
  { name: "Kota Junction", code: "KOTA" },
  { name: "Kozhikode", code: "CLT" },
  { name: "Lucknow Charbagh", code: "LKO" },
  { name: "Madurai Junction", code: "MDU" },
  { name: "Mangalore Central", code: "MAQ" },
  { name: "Mathura Junction", code: "MTJ" },
  { name: "Meerut City", code: "MTC" },
  { name: "Mumbai CSMT", code: "CSMT" }, // was CSTM
  { name: "Mumbai Central", code: "MMCT" },
  { name: "Mumbai LTT", code: "LTT" },
  { name: "Muzaffarpur Junction", code: "MFP" },
  { name: "Mysuru Junction", code: "MYS" },
  { name: "Nagpur Junction", code: "NGP" },
  { name: "New Delhi", code: "NDLS" },
  { name: "Patna Junction", code: "PNBE" },
  { name: "Prayagraj Junction", code: "PRYJ" },
  { name: "Pune Junction", code: "PUNE" },
  { name: "Raipur Junction", code: "R" },
  { name: "Rajkot Junction", code: "RJT" },
  { name: "Ranchi Junction", code: "RNC" },
  { name: "Rourkela Junction", code: "ROU" },
  { name: "Secunderabad Junction", code: "SC" },
  { name: "Sealdah", code: "SDAH" },
  { name: "Surat", code: "ST" },
  { name: "Thiruvananthapuram Central", code: "TVC" },
  { name: "Tiruchirappalli Junction", code: "TPJ" },
  { name: "Tirupati", code: "TPTY" },
  { name: "Udaipur City", code: "UDZ" },
  { name: "Ujjain Junction", code: "UJN" },
  { name: "Vadodara Junction", code: "BRC" },
  { name: "Varanasi Junction", code: "BSB" },
  { name: "Vasco Da Gama", code: "VSG" },
  { name: "Vijayawada Junction", code: "BZA" },
  { name: "Visakhapatnam Junction", code: "VSKP" },
  { name: "Warangal", code: "WL" }
];

// ── Static Fallback DB for popular routes ──────────────────────────────────────
// Used when API fails or no key. Add more routes as needed.
const FALLBACK_TRAINS = {
  "BPL-NDLS": [
    { train_number: "12002", train_name: "New Delhi Shatabdi", run_days: ["Mon","Tue","Wed","Thu","Fri","Sat"], duration: "8h 40m" },
    { train_number: "12626", train_name: "Kerala Express", run_days: ["Daily"], duration: "11h 15m" },
    { train_number: "12138", train_name: "Punjab Mail", run_days: ["Daily"], duration: "12h 30m" },
    { train_number: "12432", train_name: "NZM Rajdhani", run_days: ["Mon","Thu","Sat"], duration: "8h 20m" }
  ],
  "NDLS-BPL": [
    { train_number: "12001", train_name: "Bhopal Shatabdi", run_days: ["Mon","Tue","Wed","Thu","Fri","Sat"], duration: "8h 35m" },
    { train_number: "12625", train_name: "Kerala Express", run_days: ["Daily"], duration: "11h 30m" },
    { train_number: "12137", train_name: "Punjab Mail", run_days: ["Daily"], duration: "12h 45m" }
  ],
  "CSMT-NDLS": [
    { train_number: "22221", train_name: "Rajdhani Express", run_days: ["Daily"], duration: "15h 35m" },
    { train_number: "12137", train_name: "Punjab Mail", run_days: ["Daily"], duration: "25h 10m" },
    { train_number: "12951", train_name: "Mumbai Rajdhani", run_days: ["Daily"], duration: "15h 50m" }
  ],
  "NDLS-CSMT": [
    { train_number: "22222", train_name: "Rajdhani Express", run_days: ["Daily"], duration: "15h 40m" },
    { train_number: "12138", train_name: "Punjab Mail", run_days: ["Daily"], duration: "25h 25m" },
    { train_number: "12952", train_name: "Mumbai Rajdhani", run_days: ["Daily"], duration: "15h 55m" }
  ],
  "HWH-NDLS": [
    { train_number: "12301", train_name: "Howrah Rajdhani", run_days: ["Mon","Tue","Wed","Thu","Fri","Sat"], duration: "17h 15m" },
    { train_number: "12313", train_name: "Sealdah Rajdhani", run_days: ["Daily"], duration: "17h 20m" },
    { train_number: "12303", train_name: "Poorva Express", run_days: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"], duration: "23h 40m" }
  ]
};

let verifiedByApi = false;
let fromStation = null;
let toStation = null;

const loaderPhrases = [
  "Fetching live train data…",
  "Checking 30-day schedule for weekly trains…",
  "Mapping hop routes via key corridors…",
  "Synthesising best route options…"
];

// ── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  setupAutocomplete("fromInput", "fromList");
  setupAutocomplete("toInput", "toList");
  document.getElementById("toInput").addEventListener("keydown", e => { if (e.key === "Enter") findRoutes(); });
  document.getElementById("fromInput").addEventListener("keydown", e => { if (e.key === "Enter") document.getElementById("toInput").focus(); });

  // Load saved keys
  document.getElementById("keyInput").value = getApiKey();
  document.getElementById("rapidKeyInput").value = getRapidApiKey();
  updateKeyIndicator();
});

function setupAutocomplete(inputId, listId) {
  const input = document.getElementById(inputId);
  const list = document.getElementById(listId);

  input.addEventListener("input", () => {
    const val = input.value.toLowerCase().trim();
    if (!val) { list.style.display = "none"; return; }
    const matches = STATIONS.filter(s =>
      s.name.toLowerCase().includes(val) || s.code.toLowerCase().includes(val)
    ).slice(0, 8);
    if (!matches.length) { list.style.display = "none"; return; }
    list.innerHTML = matches.map(s =>
      `<div class="ac-item" data-code="${s.code}" data-name="${s.name}">
        <span>${s.name}</span><span class="ac-code">${s.code}</span>
      </div>`
    ).join("");
    list.style.display = "block";
  });

  list.addEventListener("click", e => {
    const item = e.target.closest(".ac-item");
    if (!item) return;
    input.value = item.dataset.name;
    list.style.display = "none";
    if (inputId === "fromInput") fromStation = STATIONS.find(s => s.code === item.dataset.code);
    else toStation = STATIONS.find(s => s.code === item.dataset.code);
  });

  document.addEventListener("click", e => {
    if (!input.contains(e.target) &&!list.contains(e.target)) list.style.display = "none";
  });
}

// ── API Keys ──────────────────────────────────────────────────────────────────
function getApiKey() { return localStorage.getItem("hoprail_groq_key") || ""; }
function getRapidApiKey() { return localStorage.getItem("hoprail_rapid_key") || ""; }

function saveApiKey() {
  const groq = document.getElementById("keyInput").value.trim();
  const rapid = document.getElementById("rapidKeyInput").value.trim();
  if (groq) localStorage.setItem("hoprail_groq_key", groq);
  if (rapid) localStorage.setItem("hoprail_rapid_key", rapid);
  if (!groq &&!rapid) return;
  updateKeyIndicator();
  alert("Keys saved!");
}

function updateKeyIndicator() {
  const dot = document.getElementById("keyIndicator");
  if (!dot) return;
  dot.className = "key-indicator";
  if (getApiKey() && getRapidApiKey()) dot.classList.add("full");
  else if (getApiKey()) dot.classList.add("set");
}

// ── Cache Layer ───────────────────────────────────────────────────────────────
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days

function getCachedTrains(fromCode, toCode) {
  const key = `hoprail_trains_${fromCode}_${toCode}`;
  const cached = localStorage.getItem(key);
  if (!cached) return null;
  try {
    const { data, ts } = JSON.parse(cached);
    if (Date.now() - ts < CACHE_DURATION) {
      console.log(`Using cached trains for ${fromCode}-${toCode}`);
      return data;
    }
  } catch (e) {}
  return null;
}

function setCachedTrains(fromCode, toCode, data) {
  const key = `hoprail_trains_${fromCode}_${toCode}`;
  localStorage.setItem(key, JSON.stringify({ data, ts: Date.now() }));
}

// ── RapidAPI — Fetch Real Direct Trains with 30-day window ────────────────────
async function fetchDirectTrains(fromCode, toCode, rapidKey) {
  // 1. Check cache first
  const cached = getCachedTrains(fromCode, toCode);
  if (cached) return cached;

  // 2. Check static fallback if no API key
  if (!rapidKey) {
    const fallback = FALLBACK_TRAINS[`${fromCode}-${toCode}`];
    if (fallback) {
      showToast("Using offline timetable data. Add RapidAPI key for live data.");
      return fallback;
    }
    throw new Error("No RapidAPI key and no fallback data for this route");
  }

  // 3. Fetch from API - 30 day window
  const seen = new Map();
  const fetches = [];

  for (let day = 0; day < 30; day++) {
    const d = new Date();
    d.setDate(d.getDate() + day);
    const dateStr = d.toISOString().slice(0, 10);

    fetches.push(
      fetch(
        `https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations?fromStationCode=${fromCode}&toStationCode=${toCode}&dateOfJourney=${dateStr}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": rapidKey,
            "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
          },
        }
      ).then(r => r.ok? r.json() : null).catch(() => null)
    );
  }

  setLoaderText("Checking 30-day schedule for weekly trains…", 30);
  const results = await Promise.allSettled(fetches);

  for (const r of results) {
    if (r.status === "fulfilled" && r.value?.data) {
      if (r.value.status === false && r.value.message?.includes("Unauthorized")) {
        throw new Error("Invalid RapidAPI key. Please check your key in settings.");
      }
      if (r.value.status === false && r.value.message?.includes("rate")) {
        throw new Error("RapidAPI rate limit hit. Please wait a moment and try again.");
      }
      for (const train of r.value.data) {
        if (!seen.has(train.train_number)) seen.set(train.train_number, train);
      }
    }
  }

  const allTrains = Array.from(seen.values());

  // 4. Cache results for 7 days
  if (allTrains.length > 0) {
    setCachedTrains(fromCode, toCode, allTrains);
  } else {
    // If API returns empty, check fallback
    const fallback = FALLBACK_TRAINS[`${fromCode}-${toCode}`];
    if (fallback) {
      showToast("No live trains found. Showing offline timetable data.");
      return fallback;
    }
  }

  return allTrains;
}

function formatRealTrainsForPrompt(trains) {
  return trains.slice(0, 12).map(t => {
    const days = t.run_days || [];
    const daysStr = days.length === 7? "Daily" : days.join(", ");
    const dur = t.duration || t.duration_mins? `${Math.floor(t.duration_mins/60)}h ${t.duration_mins%60}m` : "~";
    return ` • ${t.train_name} (${t.train_number}) — runs: ${daysStr} — duration: ~${dur}`;
  }).join("\n");
}

// ── Main Search ───────────────────────────────────────────────────────────────
async function findRoutes() {
  const fromRaw = document.getElementById("fromInput").value.trim();
  const toRaw = document.getElementById("toInput").value.trim();

  if (!fromRaw ||!toRaw) return showError("Enter both source and destination");

  fromStation = fromStation || STATIONS.find(s => s.name.toLowerCase() === fromRaw.toLowerCase() || s.code.toLowerCase() === fromRaw.toLowerCase());
  toStation = toStation || STATIONS.find(s => s.name.toLowerCase() === toRaw.toLowerCase() || s.code.toLowerCase() === toRaw.toLowerCase());

  if (!fromStation ||!toStation) return showError("Select stations from the dropdown");
  if (fromStation.code === toStation.code) return showError("Source and destination can't be same");

  const fromName = fromStation.name;
  const toName = toStation.name;

  document.getElementById("hero").style.display = "none";
  showLoader();

  const groqKey = getApiKey();
  if (!groqKey) return showError("Please add your Groq API key in settings");

  verifiedByApi = false;

  try {
    let realTrains = null;
    const rapidKey = getRapidApiKey();

    if (fromStation?.code && toStation?.code) {
      setLoaderText("Fetching live train data from Indian Railways…", 10);
      try {
        realTrains = await fetchDirectTrains(fromStation.code, toStation.code, rapidKey);
        if (rapidKey && realTrains.length > 0) verifiedByApi = true;
      } catch (e) {
        if (e.message.includes("Invalid RapidAPI") || e.message.includes("rate limit")) {
          showToast(e.message);
        }
        console.warn("RapidAPI failed, checking fallback:", e.message);
        // Try fallback even if API key exists but fails
        realTrains = FALLBACK_TRAINS[`${fromStation.code}-${toStation.code}`] || [];
        if (realTrains.length > 0) {
          showToast("API failed. Using offline timetable data.");
        }
      }
    }

    setLoaderText("Planning routes with AI…", 65);
    const data = await callGroq(fromName, toName, groqKey, realTrains);

    document.getElementById("loader").style.display = "none";
    renderResults(data, fromName, toName);

  } catch (e) {
    document.getElementById("loader").style.display = "none";
    showError(e.message || "Failed to plan route. Please try again.");
  }
}

// ── Groq API ──────────────────────────────────────────────────────────────────
async function callGroq(from, to, apiKey, realTrains = null) {
  let verifiedBlock = "";

  if (realTrains!== null) {
    if (realTrains.length === 0) {
      verifiedBlock = `\n⚠ VERIFIED: Zero direct trains found between these stations in 30-day search. Use frequency="none", count=0, recommendation="hop".\n`;
    } else {
      verifiedBlock = `\n✅ VERIFIED BY IRCTC API/CACHE — use this data exactly for directTrains, do NOT change or omit any train:\n${formatRealTrainsForPrompt(realTrains)}\n(Total verified direct trains: ${realTrains.length})\n`;
    }
  }

  const systemPrompt = `You are HopRail, an Indian Railways expert. Respond with valid JSON only — no markdown, no prose, no code fences.`;

  const userPrompt = `Plan route from ${from} to ${to}.
${verifiedBlock}
${realTrains === null? `No live API data available. Use your knowledge — if even one weekly train might exist on this route, use frequency="rare" rather than "none".` : ""}

Return JSON:
{
  "sourceStation": "station name",
  "destinationStation": "station name",
  "directTrains": {
    "frequency": "none|rare|few_weekly|daily|multiple_daily",
    "count": 0,
    "trains": [{"name": "Train Name", "number": "12345", "daysPerWeek": 1, "approxDuration": "~18 hrs"}],
    "note": "brief note"
  },
  "recommendation": "direct|hop",
  "hopRoutes": [
    {
      "label": "Route via Junction X",
      "reliability": "high|medium|low",
      "estimatedTotalTime": "~20 hrs",
      "legs": [
        {
          "from": "Station A", "to": "Station B",
          "frequency": "Daily", "approxDuration": "~8 hrs", "distance": "~450 km",
          "waitRisk": "low|medium|high", "keyTrains": ["Train 1", "Train 2"],
          "notes": "optional"
        }
      ],
      "pros": ["point"], "cons": ["point"], "tip": "optional tip"
    }
  ]
}

Rules:
- If VERIFIED DATA is provided above, copy it into directTrains exactly as given.
- Always include 2–3 hopRoutes when recommendation is "hop".
- recommendation="direct" if frequency is few_weekly/daily/multiple_daily; "hop" if none/rare.`;

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "llama-3.1-70b-versatile",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      temperature: 0.2,
      max_tokens: 2048
    })
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    if (res.status === 401) throw new Error("Invalid API key. Please check your Groq key in settings.");
    throw new Error(err?.error?.message || `API error ${res.status}`);
  }

  const json = await res.json();
  const content = json.choices?.[0]?.message?.content || "";

  try {
    return JSON.parse(content);
  } catch {
    const match = content.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("AI returned invalid format");
    return JSON.parse(match[0]);
  }
}

// ── Render ────────────────────────────────────────────────────────────────────
function renderResults(data, fromRaw, toRaw) {
  const from = data.sourceStation || fromRaw;
  const to = data.destinationStation || toRaw;

  document.getElementById("resultFrom").textContent = from;
  document.getElementById("resultTo").textContent = to;
  document.getElementById("resultsMain").style.display = "block";

  const isDirect = data.recommendation === "direct";
  renderDirectSection(data.directTrains, isDirect);

  const hopSection = document.getElementById("hopSection");
  if (!isDirect && data.hopRoutes?.length) {
    document.getElementById("hopSectionLabel").textContent =
      `Recommended Hop Route${data.hopRoutes.length > 1? "s" : ""}`;
    document.getElementById("routesList").innerHTML =
      data.hopRoutes.map((r, i) => renderRouteCard(r, i)).join("");
    hopSection.style.display = "block";
  } else if (isDirect && data.hopRoutes?.length) {
    document.getElementById("hopSectionLabel").textContent = "Alternative Hop Route";
    document.getElementById("routesList").innerHTML =
      data.hopRoutes.slice(0, 1).map((r, i) => renderRouteCard(r, i)).join("");
    hopSection.style.display = "block";
  } else {
    hopSection.style.display = "none";
  }
}

function renderDirectSection(directTrains, isDirect) {
  const box = document.getElementById("directSection");
  const freq = directTrains?.frequency || "none";
  const trains = directTrains?.trains || [];
  const note = directTrains?.note || "";

  let title, sub, boxClass;
  if (freq === "daily" || freq === "multiple_daily") {
    boxClass = "direct"; title = "Direct trains available";
    sub = note || `${trains.length} direct train${trains.length!== 1? "s" : ""} found`;
  } else if (freq === "few_weekly") {
    boxClass = "limited"; title = "Very limited direct trains";
    sub = note || "Hop route recommended for reliable travel";
  } else {
    boxClass = "none";
    title = verifiedByApi? "No direct trains" : "No direct trains (AI estimate)";
    sub = verifiedByApi
     ? (note || "Verified by IRCTC data — a hop route is your best option")
      : (note || "No direct connectivity found — consider hop routes");
  }

  const trainsHtml = trains.length? `
    <div class="hr-train-list">
      ${trains.map(t => `
        <div class="hr-train-item">
          <span class="hr-train-num">${escHtml(t.number || "—")}</span>
          <span class="hr-train-name">${escHtml(t.name || "Unknown")}</span>
          <span class="hr-train-days">${t.daysPerWeek? `${t.daysPerWeek}×/wk` : escHtml(t.approxDuration || "")}</span>
        </div>
      `).join("")}
    </div>
  ` : "";

  const verifiedBadge = verifiedByApi
   ? `<span class="hr-verified-badge">✓ Verified by IRCTC</span>`
    : `<span class="hr-ai-badge">AI Estimate</span>`;

  box.className = `hr-direct-section ${boxClass}`;
  box.innerHTML = `
    <div class="hr-direct-header">
      <div class="hr-direct-icon"></div>
      <div>
        <div class="hr-direct-title">${title}</div>
        <div class="hr-direct-sub">${escHtml(sub)} ${verifiedBadge}</div>
      </div>
    </div>
    ${trainsHtml}
  `;
}

function renderRouteCard(route, index) {
  const legs = route.legs || [];
  const stations = buildStationList(legs);

  const stripHtml = `
    <div class="hr-route-strip">
      ${stations.map((s, i) => {
        const isFirst = i === 0;
        const isLast = i === stations.length - 1;
        const cls = isFirst? "origin" : isLast? "dest" : "hop";
        return `
          <div class="hr-station-node ${cls}">
            <div class="hr-station-dot"></div>
            <div class="hr-station-label">${escHtml(shortName(s))}</div>
          </div>
          ${!isLast? `<div class="hr-route-connector"></div>` : ""}
        `;
      }).join("")}
    </div>
  `;

  const legsHtml = legs.map(leg => `
    <div class="hr-leg-card">
      <div class="hr-leg-route">
        <div class="hr-leg-stations">
          <span>${escHtml(shortName(leg.from))}</span>
          <span class="hr-leg-arrow">→</span>
          <span>${escHtml(shortName(leg.to))}</span>
        </div>
        <div class="hr-leg-meta">
          <span class="hr-wait-badge ${leg.waitRisk || "low"}">${waitLabel(leg.waitRisk)}</span>
        </div>
      </div>
      <div class="hr-leg-detail">
        ${leg.frequency? `<span class="hr-leg-stat"><span class="hr-leg-stat-icon">⟳</span>${escHtml(leg.frequency)}</span>` : ""}
        ${leg.approxDuration? `<span class="hr-leg-stat"><span class="hr-leg-stat-icon">◷</span>${escHtml(leg.approxDuration)}</span>` : ""}
        ${leg.distance? `<span class="hr-leg-stat"><span class="hr-leg-stat-icon">↔</span>${escHtml(leg.distance)}</span>` : ""}
      </div>
      ${leg.keyTrains?.length? `
        <div class="hr-train-chips">
          ${leg.keyTrains.slice(0, 4).map(t => `<span class="hr-train-chip">${escHtml(t)}</span>`).join("")}
        </div>
      ` : ""}
      ${leg.notes? `<div style="font-size:0.72rem;color:var(--muted-light);margin-top:0.4rem">${escHtml(leg.notes)}</div>` : ""}
    </div>
  `).join("");

  const footerHtml = [
   ...(route.pros || []).map(p => `<div class="hr-route-pro">${escHtml(p)}</div>`),
   ...(route.cons || []).map(c => `<div class="hr-route-con">${escHtml(c)}</div>`),
   ...(route.tip? [`<div class="hr-route-tip">${escHtml(route.tip)}</div>`] : []),
  ].join("");

  return `
    <div class="hr-route-card">
      <div class="hr-route-head">
        <div>
          <span class="hr-route-num">Route ${index + 1}</span>
          <div class="hr-route-label">${escHtml(route.label || "Hop Route")}</div>
        </div>
        <div class="hr-route-badges">
          <span class="hr-reliability-badge ${route.reliability || "medium"}">${reliabilityLabel(route.reliability)}</span>
          ${route.estimatedTotalTime? `<span class="hr-time-badge">⏱ ${escHtml(route.estimatedTotalTime)}</span>` : ""}
        </div>
      </div>
      ${stripHtml}
      <div class="hr-legs">${legsHtml}</div>
      ${footerHtml? `<div class="hr-route-footer">${footerHtml}</div>` : ""}
    </div>
  `;
}

function buildStationList(legs) {
  if (!legs.length) return [];
  const result = [legs[0].from];
  for (const leg of legs) result.push(leg.to);
  return result;
}

function shortName(name) {
  if (!name) return "";
  return name
   .replace(" Junction", " Jn")
   .replace(" Cantonment", " Cantt")
   .replace(" Terminal", " Terml")
   .replace(" Terminus", " Terml");
}

function waitLabel(risk) {
  if (risk === "high") return "High wait risk";
  if (risk === "medium") return "Medium wait risk";
  return "Low wait risk";
}

function reliabilityLabel(r) {
  if (r === "high") return "● High reliability";
  if (r === "low") return "● Low reliability";
  return "● Medium reliability";
}

// ── UI Helpers ────────────────────────────────────────────────────────────────
function showLoader() {
  hideAll();
  document.getElementById("loader").style.display = "flex";
  let i = 0;
  setLoaderText(loaderPhrases[0], 0);
  window.loaderInterval = setInterval(() => {
    i = (i + 1) % loaderPhrases.length;
    setLoaderText(loaderPhrases[i], (i + 1) * 25);
  }, 1200);
}

function setLoaderText(text, progress) {
  const el = document.getElementById("loaderText");
  if (el) el.textContent = text;
  const bar = document.getElementById("loaderBar");
  if (bar) bar.style.width = `${Math.min(progress, 95)}%`;
}

function resetSearch() {
  verifiedByApi = false;
  hideAll();
  document.getElementById("hero").style.display = "block";
  document.getElementById("fromInput").focus();
  if (window.loaderInterval) clearInterval(window.loaderInterval);
}

function hideAll() {
  document.getElementById("resultsMain").style.display = "none";
  document.getElementById("emptyState").style.display = "none";
  document.getElementById("loader").style.display = "none";
}

function showError(msg) {
  hideAll();
  document.getElementById("emptyMsg").textContent = msg;
  document.getElementById("emptyState").style.display = "flex";
}

function showToast(msg) {
  console.log("Toast:", msg);
  // You can wire this to a real toast UI if you have one
  const toast = document.createElement("div");
  toast.className = "hr-toast";
