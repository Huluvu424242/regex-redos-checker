import safeRegex from "https://esm.sh/safe-regex@2.1.1?bundle";

const patternEl = document.getElementById("pattern");
const resultEl = document.getElementById("result");
const btn = document.getElementById("analyze");

function showResult(type, msg) {
    resultEl.className = "result " + type;
    resultEl.textContent = msg;
    resultEl.style.display = "block";
}

function analyze() {
    const pattern = patternEl.value.trim();

    if (!pattern) {
        showResult("error", "Please enter a regex pattern.");
        return;
    }

    try {
        new RegExp(pattern);

        const ok = safeRegex(pattern);

        if (ok) {
            showResult("safe", "SAFE: no catastrophic backtracking pattern detected.");
        } else {
            showResult("unsafe", "POTENTIALLY VULNERABLE: catastrophic backtracking risk detected.");
        }
    } catch (e) {
        showResult("error", "Invalid regex: " + e.message);
    }
}
patternEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        btn.click();
    }
});

btn.addEventListener("click", analyze);