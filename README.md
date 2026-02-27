# Regex ReDoS Checker <img src="PoweredByKI.png" alt="Powered by KI" height="100" align="middle">

Static in-browser utility to quickly check JavaScript regular expressions for potential catastrophic backtracking (ReDoS risk).

## What it does

This tool performs a heuristic analysis of a regex pattern and flags constructs that may lead to exponential backtracking.

It runs entirely in the browser:
- No backend
- No tracking
- No data storage
- 100% static (GitHub Pages compatible)

## Usage

1. Open the page
2. Paste a regex pattern (without slashes)
3. Optionally provide flags (e.g. `i`, `m`, `u`)
4. Click **Analyze**

The tool will indicate:

- `SAFE` — no catastrophic backtracking pattern detected
- `POTENTIALLY VULNERABLE` — nested quantifiers or similar high-risk structures detected
- `Invalid regex` — syntax error

## Technical Notes

The checker uses the `safe-regex` heuristic algorithm.

This is:
- A static analysis
- Not a formal proof of safety
- Not engine-specific
- Not a guarantee against all ReDoS cases

Always validate regex behavior in context and consider runtime timeouts for production systems.

## Example of risky pattern

Nested quantifiers like this can cause catastrophic backtracking.

## License

MIT
