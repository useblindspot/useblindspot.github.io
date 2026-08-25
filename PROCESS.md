# Process

## Why I built it

I got into trading and needed a strategy. Mine was: check eToro's worst performers each day, and buy the ones that were big companies — at least $500m market cap — where the drop wasn't caused by anything serious enough to sink the company. Down meant cheap, big meant safe.

Looking back, the rule itself leaned on assumptions I hadn't examined — that yesterday's price told me what the stock was worth, that size meant safety, that a fall implied a bounce.

Early on it worked. I had a winning streak — best was MercadoLibre on 8 May, about 12% — though I can't rule out that it was luck. What I do know is that in that stretch I was actually following my own rules.

Then I stopped. I started taking trades that didn't meet my criteria, and the losses followed. The rules hadn't changed. I had.

Around the same time I had a school economics assignment on nudge theory, and something clicked: if small framing effects can push people into decisions without them noticing, that was a fair description of what I'd been doing to myself. I'd started trading and started studying nudges in the same few months, and I could see one in the other.

So the problem wasn't finding a better strategy. It was that I couldn't tell, at the moment of a trade, whether I wanted it because of my reasoning or because of a bias. That's what I built the site to ask me.

## How it works

One box. You type what you're about to do and why, in normal language, the way you'd explain it to a friend. It reads your wording against six documented biases and shows you what it picked up.

That's the whole thing. There's no account, no portfolio to connect, no chart, no signal.

The core isn't the score — it's that you have to write the reasoning down. You can't put a trade into full sentences without hearing which part is thin. Most of the time you already know; the biases work by keeping you from saying it out loud. Making you say it is the intervention.

I kept it this simple on purpose. My own failure wasn't a complicated one — I had a rule, and I stopped following it. Complexity would have made that easier to hide, not harder: more indicators, more conditions, more places to find a reason for what I already wanted to do. A tool meant to catch you talking yourself into something can't itself be something you can talk your way around.

Two modes: trading, and everyday decisions.

## What I made vs what tools made

Mine: the idea, which economic theories to build it on, which six biases to track, the questions, the choice to intervene before the decision instead of after, and all the writing.

Not mine: the code. I built the interface with Claude. `support.js` is a generated runtime I didn't write.

## What it isn't

Not a validated test. No reliability testing, no comparison against an established instrument. It matches patterns in language — it will miss things and it will flag things wrongly.

It's a prompt to think, not a diagnosis. It doesn't improve returns and I don't claim it does.

To make any accuracy claim I'd need to validate it against a real instrument, test whether results are stable, and run a control — does writing your reasoning down without any scoring do the same thing? That last one might show the scoring adds nothing.

## Data

Sharing is opt-in and off by default. Six scores, mode, experience level, and one follow-up answer. Nothing you type is ever sent.

---

Jaden Machado · useblindspot.github.io
