window.BLINDSPOT_MODES = {

/* ---------------- TRADING MODE ---------------- */
trading: {
  label:"Trading",
  copy:{
    heroH1:`You can't see your own biases.<br><span>This can.</span>`,
    heroP:`Retail traders don't lose because they lack information — they lose to predictable cognitive biases that fire at the moment of execution. Blindspot profiles <em>your</em> specific biases, then checks every trade decision against them before you pull the trigger.`,
    step1:`10 realistic trading scenarios score you 0–9 across six documented cognitive biases: loss aversion, FOMO, overconfidence, recency bias, anchoring and herding.`,
    step2:`Before executing a trade, explain what you're doing and why — in plain language, the way you'd actually think it.`,
    step3:`The engine reads your reasoning, cross-references it against your personal profile, and surfaces which blind spots may be active — before the trade, not after.`,
    navCheck:"Trade Check",
    checkTitle:"Trade Check",
    checkDesc:`Describe the trade you're about to make and <b>why</b>. Write it exactly how you're thinking it — the messier and more honest, the better the read.`,
    placeholder:`e.g. I'm down 22% on NVDA but I'm not selling at a loss — it always comes back. Everyone on r/wallstreetbets is saying it'll rip after earnings and I don't want to miss the move, so I'm actually thinking of doubling down here…`,
    subject:"trade",
    clearNote:`Your stated reasoning doesn't show the linguistic markers of the six tracked biases. That doesn't make the trade good — it means the <em>reasoning</em> reads clean. Two checks that still apply: is your position sized for being wrong, and do you have a written invalidation point?`
  },
  biases:{
    LA:{name:"Loss Aversion", color:"#f4645c",
      desc:"Losses hurt roughly twice as much as equivalent gains feel good (Kahneman & Tversky). In trading it shows up as holding losers too long, moving stops, refusing to realise a loss, and cutting winners early.",
      questions:[
        "If you didn't own this position, would you buy it today at this price?",
        "Is this decision about the asset's future — or about avoiding the pain of admitting a loss?",
        "What is your invalidation point, and are you honouring the one you set before entering?"
      ]},
    FOMO:{name:"FOMO", color:"#f5b942",
      desc:"Fear of missing out drives late entries into extended moves. The urgency you feel is a signal about the crowd's emotions, not about the asset's value.",
      questions:[
        "Would this trade still make sense if the price hadn't moved in the last two weeks?",
        "What's your edge entering now versus everyone who entered before you?",
        "If you miss this move entirely, what actually happens to your long-term results?"
      ]},
    OC:{name:"Overconfidence", color:"#7c5cff",
      desc:"Traders systematically overestimate their skill and information edge (Odean). It shows up as oversizing, overtrading, removing stops, and certainty language — 'guaranteed', 'can't lose', 'all in'.",
      questions:[
        "What specifically would prove you wrong, and how much will it cost to find out?",
        "Is this position sized so that being wrong is survivable — or only sized for being right?",
        "How many of your last 20 trades actually worked? Check, don't recall."
      ]},
    RB:{name:"Recency Bias", color:"#2dd4a0",
      desc:"Overweighting recent events as predictive of the future. Streaks, 'it keeps going up', and post-drawdown fear are all recency talking — small samples masquerading as signal.",
      questions:[
        "Is your evidence a real base rate, or just the last few days or trades?",
        "If the recent streak reversed tomorrow, would your thesis still stand?",
        "Are you extrapolating a trend or analysing a business/setup?"
      ]},
    AN:{name:"Anchoring", color:"#4f8ef7",
      desc:"Fixating on arbitrary reference prices — your entry, the 52-week high, 'where it was last month'. The market doesn't know or care what price you paid.",
      questions:[
        "Does your entry price have any bearing on where this asset goes next?",
        "Are you calling it 'cheap' relative to fundamentals, or relative to a past price?",
        "If you first saw this chart today with no history of owning it, what would you conclude?"
      ]},
    HD:{name:"Herding", color:"#e879f9",
      desc:"Following the crowd — social feeds, influencers, analyst consensus — instead of your own analysis (Shiller's narrative economics). Crowded trades feel safest exactly when they're most fragile.",
      questions:[
        "Strip away who else is in this trade — what does your own analysis say?",
        "If the person or forum you got this from went silent, would you still take it?",
        "Do you understand this position well enough to know when to exit without them?"
      ]}
  },
  questions:[
   {q:"You're down 18% on a position and the original reason you bought no longer holds. What do you do?",
    o:[["Sell — the thesis is broken; the loss is already sunk.",{}],
       ["Hold until it gets back to my entry price, then sell.",{LA:3,AN:2}],
       ["Buy more to lower my average cost.",{LA:2,OC:2}],
       ["Sell half, hold half — I can't take the full loss.",{LA:2}]]},
   {q:"A stock is up 40% in two weeks and your feed is full of people posting gains. You:",
    o:[["Buy now — it's clearly running and I don't want to miss it.",{FOMO:3,HD:2}],
       ["Buy a small 'starter' position just to be in it.",{FOMO:2,HD:1}],
       ["Add it to a watchlist and research it like any other idea.",{}],
       ["Wait for it to pull back to where it was last week, then buy.",{AN:2,FOMO:1}]]},
   {q:"You've won 5 trades in a row. For the next trade you:",
    o:[["Size up significantly — I'm clearly in sync with the market right now.",{OC:3,RB:2}],
       ["Size up a little — momentum matters.",{OC:1,RB:1}],
       ["Keep the same size — five trades proves nothing statistically.",{}],
       ["Size down — I'm probably due for a loss.",{RB:2}]]},
   {q:"You bought at $50. It's now $38. Nothing about the company has changed. Your plan:",
    o:[["Re-evaluate it as if I were deciding fresh today at $38.",{}],
       ["Hold until $50 — I'm not selling at a loss.",{AN:3,LA:3}],
       ["Set an alert at $50 and decide when it gets there.",{AN:2,LA:1}],
       ["Sell — it must be falling for a reason I can't see.",{HD:1,RB:1}]]},
   {q:"The market has dropped hard four days in a row. You think:",
    o:[["The next few days will probably be red too — I'm de-risking.",{RB:3}],
       ["It's oversold — a bounce is basically guaranteed.",{RB:2,OC:2}],
       ["Four days tells me little about the next four — I'll follow my plan.",{}],
       ["I'll wait until I see others start buying before I step in.",{HD:2}]]},
   {q:"A trader you follow — with a strong public track record — posts a high-conviction trade. You:",
    o:[["Take the trade — their track record speaks for itself.",{HD:3}],
       ["Take a smaller version of their trade.",{HD:2}],
       ["Use it as a research prompt but only act on my own analysis.",{}],
       ["Fade it — the crowd is usually wrong.",{OC:2}]]},
   {q:"Your own analysis says buy, but analyst consensus is firmly bearish. You:",
    o:[["Trust my work completely and size up — the crowd is missing it.",{OC:3}],
       ["Skip it — that many professionals can't all be wrong.",{HD:3}],
       ["Take the trade at normal size with a clearly defined invalidation.",{}],
       ["Take a tiny position, just in case I turn out to be right.",{FOMO:1,LA:1}]]},
   {q:"You almost bought a stock at $20 but passed. Three weeks later it's $35 and still climbing. You:",
    o:[["Buy now — I was right about it, and it'll keep going.",{FOMO:3,RB:2}],
       ["Refuse to pay $35 for something I could've had at $20.",{AN:3}],
       ["Re-evaluate it at $35 on current merits — my history with it is irrelevant.",{}],
       ["Wait for it to come back near $20.",{AN:2}]]},
   {q:"Your stop-loss is about to trigger. You:",
    o:[["Let it trigger — that's exactly what it's for.",{}],
       ["Move the stop lower to give the trade room to breathe.",{LA:3}],
       ["Remove the stop — I'll manage the exit manually.",{LA:2,OC:2}],
       ["Close the position just before the stop so I control the loss.",{LA:1}]]},
   {q:"A hot sector is at all-time highs and mainstream news covers it daily. You:",
    o:[["Get exposure now — this is a generational trend everyone can see.",{FOMO:2,HD:2,RB:1}],
       ["Short it — mainstream coverage marks the top.",{OC:2}],
       ["Assess valuations name by name; coverage isn't a signal either way.",{}],
       ["Buy whatever's up the most — leaders keep leading.",{RB:2,FOMO:1}]]}
  ],
  patterns:{
    LA:[
      [/break\s?-?even|get (back )?to (my )?entry|back to what i paid/ig,2],
      [/(can'?t|won'?t|refuse to|not going to|not selling) .{0,20}(sell|exit|close|realize|realise)? ?(at )?a loss/ig,3],
      [/not selling at a loss|sell(ing)? at a loss/ig,2],
      [/(it|price)('ll| will| always| usually)? ?(come|bounce|go|get)s? back/ig,2],
      [/(lower|bring down) my (average|avg|cost basis)|averag(e|ing) down|double?-? ?down|doubling down/ig,2],
      [/already (lost|down)|too late to sell|sunk/ig,2],
      [/(move|moving|widen|loosen|remove|removing|pull) (my |the )?stop/ig,3],
      [/give (it|the trade) (some |more )?room/ig,2],
      [/wait (for|until) (it|price) (to )?(recover|come back|get back)/ig,2],
      [/down \d+\s?%.{0,40}(hold|holding|not sell|keep)/ig,2],
      [/lock in (the )?loss/ig,2]
    ],
    FOMO:[
      [/miss(ing)? (out|the (move|run|boat|train|rally|opportunity))/ig,3],
      [/before it('?s| is) too late|last chance|now or never/ig,3],
      [/(don'?t|do not) want to miss/ig,3],
      [/to the moon|mooning|parabolic|going vertical|ripping|it'?ll rip|gonna rip/ig,2],
      [/everyone('?s| is| else is) (making|getting|printing|up)/ig,2],
      [/(taking off|running away|exploding|melting up)/ig,2],
      [/have to (get|be) in|need to (get|be) in|can'?t sit (this|it) out/ig,2],
      [/fomo/ig,3]
    ],
    OC:[
      [/(i'?m|i am) (sure|certain|positive|convinced)/ig,2],
      [/guaranteed|can'?t (lose|miss|fail|go wrong)|sure thing|no way (it|this) (drops|falls|fails)/ig,3],
      [/all[- ]?in|entire (account|portfolio)|everything i have|max(ing)? out/ig,3],
      [/easy money|free money|no[- ]?brainer|slam dunk|money printer/ig,2],
      [/i know (it|this|exactly|for a fact)/ig,2],
      [/\b(100%|definitely|obviously|clearly going)\b/ig,2],
      [/never wrong|always right|my (system|analysis|strategy) (never|always)/ig,3],
      [/don'?t need a stop|no stop ?-?loss needed|stops are for/ig,3],
      [/(siz(e|ing) up|bigger size|([2-9]|two|three)x my (usual|normal) size)/ig,2]
    ],
    RB:[
      [/last (few )?(week|weeks|month|days|sessions)/ig,1],
      [/(keeps?|kept) (going|climbing|rising|running|falling|dropping|pumping|dumping)/ig,2],
      [/(been|is) (going|running) (straight )?up|up every (day|week)/ig,2],
      [/streak|in a row|win(ning)? (streak|run)|hot (streak|hand)|on a roll/ig,3],
      [/\b(lately|recently)\b/ig,1],
      [/hot right now|momentum is (crazy|insane|strong)/ig,2],
      [/(due|overdue) for (a )?(bounce|correction|pullback|loss|win)/ig,2],
      [/this (always|keeps) happen(s|ing)/ig,1]
    ],
    AN:[
      [/(i )?(bought|got|entered|added) (it |in )?(at|@) ?\$?\d/ig,2],
      [/my (entry|cost basis|average|avg|buy[- ]?in)( price)?/ig,2],
      [/it (was|used to be|traded) (at|around|near) ?\$?\d/ig,2],
      [/52[- ]?week (high|low)|all[- ]?time (high|low)|ath\b/ig,1],
      [/(get|come|go) back to ?\$?\d/ig,2],
      [/cheap (now )?(compared|relative) to (where|what) it (was|traded)/ig,3],
      [/down (from|off) (\$?\d|its high)/ig,2],
      [/(it'?s|it is) (basically |practically )?on sale|discount to (where|what)/ig,2]
    ],
    HD:[
      [/reddit|wallstreetbets|wsb\b|stocktwits|discord|telegram|twitter|\bx\.com\b|youtube|tik ?tok|fintwit/ig,3],
      [/everyone('?s| is|'s| else)? (buying|in|talking|piling|long|bullish|saying|posting)/ig,3],
      [/my (friend|buddy|mate|coworker|colleague)|a guy i (follow|know)/ig,2],
      [/influencer|guru|(this|that|a) trader i follow|(his|her|their) (alerts?|calls?|signals?|picks?)/ig,2],
      [/analysts? (say|are|all|upgraded)|price target/ig,1],
      [/trending|viral|hype[d]?|everybody knows/ig,2],
      [/smart money|whales are|institutions are (buying|loading)/ig,2],
      [/(chat|group|forum|thread|community) (is|says|thinks|called)/ig,2]
    ]
  },
  examples:[
    "I'm down 22% on this stock but I'm not selling at a loss. It always comes back — I'll wait until it gets back to my entry at $54 and then get out. Actually thinking about averaging down here to lower my cost basis.",
    "This thing is up 60% in two weeks and everyone on Twitter is posting insane gains. It keeps ripping every single day and I don't want to miss the move — thinking of going in big before it's too late. A trader I follow says $200 is guaranteed.",
    "I've won six trades in a row, I'm clearly seeing the market well right now. I'm sure about this next setup — honestly it can't lose, so I'm sizing up 3x my usual and I don't think I need a stop on this one."
  ],
  exampleLabels:["Holding a loser","Chasing a runner","Hot streak"]
},

/* ---------------- EVERYDAY MODE ---------------- */
general: {
  label:"Everyday",
  copy:{
    heroH1:`Every big decision has a<br><span>blind spot. Find yours.</span>`,
    heroP:`Careers, money, relationships, big purchases — most bad decisions aren't information problems, they're bias problems. Blindspot profiles the specific cognitive biases that distort <em>your</em> choices, then checks any decision against them before you commit.`,
    step1:`10 realistic life scenarios score you 0–9 across six documented decision biases: sunk cost, status quo, overconfidence, social proof, anchoring and present bias.`,
    step2:`Before committing to a decision — quitting, buying, signing, staying — explain what you're doing and why, in plain language.`,
    step3:`The engine reads your reasoning, cross-references it against your personal profile, and surfaces which blind spots may be active — before you commit, not after.`,
    navCheck:"Decision Check",
    checkTitle:"Decision Check",
    checkDesc:`Describe the decision you're about to make and <b>why</b>. Write it exactly how you're thinking it — the messier and more honest, the better the read.`,
    placeholder:`e.g. I've already put three years into this degree so I can't quit now, even though I dread it. Everyone says finishing is the smart move, and honestly switching paths at this point feels like too much of a hassle…`,
    subject:"decision",
    clearNote:`Your stated reasoning doesn't show the linguistic markers of the six tracked biases. That doesn't make the decision right — it means the <em>reasoning</em> reads clean. Two checks that still apply: is the downside survivable if you're wrong, and have you priced in the cost of the alternative (including doing nothing)?`
  },
  biases:{
    SC:{name:"Sunk Cost", color:"#f4645c",
      desc:"Continuing because of what you've already invested — time, money, effort, identity — rather than future value (Thaler, Arkes & Blumer). The past investment is gone whether you continue or not; only the future counts.",
      questions:[
        "If you were starting from zero today, with no history, would you choose this path?",
        "Is the reason to continue about future payoff — or about justifying what's already spent?",
        "What would you tell a friend in exactly this position, minus your years invested?"
      ]},
    SQ:{name:"Status Quo", color:"#4f8ef7",
      desc:"Defaulting to the current state because change feels riskier and more effortful than it is (Samuelson & Zeckhauser). Inaction is also a decision — with its own costs that compound quietly.",
      questions:[
        "Is staying actually better, or just more familiar?",
        "If your current situation were presented to you today as a new option, would you choose it?",
        "What does another six months of not deciding cost you?"
      ]},
    OC:{name:"Overconfidence", color:"#7c5cff",
      desc:"Overestimating your knowledge, control and speed — the planning fallacy included. Shows up as certainty language, no plan B, and timelines and budgets that assume nothing goes wrong.",
      questions:[
        "What specifically would prove you wrong, and how would you know early?",
        "What did similar decisions actually cost or take last time — check, don't recall.",
        "If this goes wrong, is the downside survivable?"
      ]},
    SP:{name:"Social Proof", color:"#e879f9",
      desc:"Deciding because others are doing it, or because someone you admire recommends it (Cialdini). Their circumstances, risk tolerance and goals aren't yours — and crowds reverse without notifying you.",
      questions:[
        "Strip away who else is doing or recommending this — does it still make sense for you specifically?",
        "Is your evidence their outcome, or your own analysis of your situation?",
        "Would you still do this if you could never tell anyone about it?"
      ]},
    AN:{name:"Anchoring", color:"#f5b942",
      desc:"The first number or reference point dominates everything after it — asking prices, original salaries, 'was $400 now $200'. A discount off an arbitrary anchor is not value.",
      questions:[
        "Is your reference point actually relevant, or just the first number you saw?",
        "What would this be worth to you if you saw it fresh today, with no history?",
        "Are you evaluating the thing itself — or the distance from the anchor?"
      ]},
    PB:{name:"Present Bias", color:"#2dd4a0",
      desc:"Overweighting immediate reward or relief against long-term outcomes — including manufactured urgency ('today only') and deciding just to end the discomfort of deciding.",
      questions:[
        "How will this choice look in 10 minutes, 10 months, and 10 years?",
        "Is the deadline real, or manufactured — by a seller, or by your own impatience?",
        "Name the immediate reward pulling you. Would you still choose this without it?"
      ]}
  },
  questions:[
   {q:"You're two years into a degree, project or business that clearly isn't working. You:",
    o:[["Re-evaluate from zero — if the future payoff isn't there, I stop.",{}],
       ["Keep going — I've put in far too much to quit now.",{SC:3}],
       ["Keep going but quietly scale down my effort.",{SC:2,SQ:1}],
       ["Ask the people around me whether I should quit.",{SP:2}]]},
   {q:"Everyone in your circle is moving into a hot new field or trend. You:",
    o:[["Evaluate whether it actually fits my skills and goals, like any option.",{}],
       ["Get in — that many people can't be wrong.",{SP:3}],
       ["Feel like I'm falling behind and rush to join before it's too late.",{SP:2,PB:2}],
       ["Dismiss it precisely because it's popular.",{OC:2}]]},
   {q:"You're comfortable but stagnant at work. A promising but uncertain opportunity appears. You:",
    o:[["Compare both as fresh choices — including the hidden cost of staying.",{}],
       ["Stay — better the devil you know.",{SQ:3}],
       ["Stay — I've spent years building my standing here; leaving wastes that.",{SC:3,SQ:1}],
       ["Jump immediately — feeling comfortable means it's time to go.",{OC:2,PB:1}]]},
   {q:"You're negotiating for a car or flat with a listed asking price. You:",
    o:[["Work out its value from comparable data and ignore the listing price.",{}],
       ["Start from the asking price and aim a bit below it.",{AN:3}],
       ["Judge the deal by how much discount I got off asking.",{AN:2}],
       ["Pay close to asking — others are interested and I don't want to lose it.",{SP:1,PB:2}]]},
   {q:"Estimating how long a big project will take you, you:",
    o:[["Go with my gut estimate — I know my own speed.",{OC:3}],
       ["Gut estimate plus a small buffer.",{OC:1}],
       ["Check how long similar things actually took, and plan for the slow case.",{}],
       ["Whatever the deadline requires — I'll make it work.",{OC:2,PB:1}]]},
   {q:"There's something you want to buy now, versus saving toward a bigger goal. You:",
    o:[["Buy it — you only live once; future me can adjust.",{PB:3}],
       ["Buy it if it's on sale or the offer is about to end.",{PB:2,AN:1}],
       ["Wait 30 days — buy only if I still want it and it fits the plan.",{}],
       ["Agonise, then keep everything as it is.",{SQ:2}]]},
   {q:"Choosing something important — a doctor, a school, a big service — your main input is:",
    o:[["Star ratings and whatever most people picked.",{SP:3}],
       ["One trusted friend's recommendation, taken as decisive.",{SP:2}],
       ["Popularity as one input, checked against my specific needs.",{}],
       ["I avoid popular options on principle.",{OC:2}]]},
   {q:"A subscription or membership you barely use anymore. You:",
    o:[["Cancel — what I use today decides it.",{}],
       ["Keep it — I might get back into it, and I've been a member for years.",{SC:2,SQ:2}],
       ["Keep it — the renewal already went through, so may as well.",{SC:3}],
       ["Downgrade but keep something, so the years weren't for nothing.",{SC:2}]]},
   {q:"A 'today only' deal appears on something you'd been vaguely considering. You:",
    o:[["Buy — an offer like this won't come around again.",{PB:3,AN:1}],
       ["Buy if the discount off the original price is big enough.",{AN:3}],
       ["Decide as if there were no deadline — on value alone.",{}],
       ["Quickly ask friends whether they'd take it.",{SP:2}]]},
   {q:"Your bank or insurer raises prices. Switching would save real money but costs an afternoon. You:",
    o:[["Switch — the maths is clear.",{}],
       ["Stay — switching is a hassle and something could go wrong.",{SQ:3}],
       ["Plan to switch 'once things calm down'.",{SQ:2,PB:2}],
       ["Stay — most people stick with theirs, there's probably a reason.",{SP:2,SQ:1}]]}
  ],
  patterns:{
    SC:[
      [/already (spent|put( in)?|invested|paid|sunk|committed|sacrificed|given)/ig,3],
      [/too (far|deep|much|long) (in|into|invested|committed)? ?to (quit|stop|walk|leave|turn back|give up)/ig,3],
      [/(waste[d]?|throwing away) (all )?(that|the|my|those) (time|money|effort|years|work)/ig,3],
      [/come (this|so) far/ig,2],
      [/(years|months|so much) (of my life )?(into|on|building) (this|it)/ig,2],
      [/can'?t (quit|stop|give up|walk away) now/ig,3],
      [/make it (all )?worth (it|something)/ig,2],
      [/(would have been|all) for nothing/ig,3],
      [/i'?ve been (here|a member|doing this|at this) (for )?(years|so long)/ig,2]
    ],
    SQ:[
      [/better the devil (you|i) know/ig,3],
      [/(too much of a |such a )?hassle|too much effort|can'?t be bothered/ig,2],
      [/what if (something|it) goes wrong/ig,1],
      [/(always|we'?ve always) done it (this|that) way/ig,3],
      [/not the right time|when things (calm|settle|slow) down|once things calm/ig,2],
      [/stick (with|to) what i know|if it ain'?t broke/ig,3],
      [/comfortable|comfort zone/ig,1],
      [/(maybe|deal with it|decide|do it) later|put(ting)? it off|procrastinat/ig,2],
      [/(rather|safer to) (just )?(stay|keep things|leave it) (put|as they are|as is|alone)?/ig,2]
    ],
    OC:[
      [/(i'?m|i am) (sure|certain|positive|convinced)/ig,2],
      [/guaranteed|can'?t (fail|lose|go wrong)|sure thing|no way (it|this) (fails|goes wrong)/ig,3],
      [/i know (it|this|exactly|for a fact|what i'?m doing)/ig,2],
      [/\b(100%|definitely|obviously|easily)\b/ig,2],
      [/no plan b|nothing (can|will) go wrong|won'?t need a backup/ig,3],
      [/piece of cake|how hard (can|could) it be/ig,3],
      [/(i'?ll|i will) (just )?figure it out/ig,1],
      [/(unlike|not like) (most|other) people,? i/ig,2],
      [/(never|always) (fails?|works?) for me/ig,2]
    ],
    SP:[
      [/everyone( i know| else)?('?s| is)? (doing|buying|moving|switching|using|joining|saying|says|posting|talking)/ig,3],
      [/my (friends?|mates?|family|parents|brother|sister|coworkers?|colleagues?) (say|says|said|think|thinks|all|are all)/ig,2],
      [/reviews?|star ?ratings?|top[- ]?rated|best[- ]?seller|most popular/ig,2],
      [/influencer|saw (it|this) on (tiktok|instagram|youtube|reddit|twitter|facebook)/ig,3],
      [/(they|people) (say|all say|will think|would think|might think)/ig,2],
      [/trend(ing)?|viral|hype[d]?|everybody('?s| is)? (doing|on)/ig,2],
      [/no one (else )?(does|is doing) (it|this|that)/ig,1],
      [/(fall(ing)?|left) behind|everyone else is ahead/ig,2],
      [/that many people can'?t be wrong/ig,3]
    ],
    AN:[
      [/asking price|list(ed|ing) price|sticker price|original(ly)? (priced?|cost)/ig,2],
      [/(was|used to (be|cost)) \$?\d/ig,2],
      [/\d+\s?% (off|discount)|half (price|off)|marked down|on sale( from)?/ig,2],
      [/\brrp\b|\bmsrp\b/ig,2],
      [/compared to (what|where) it (was|used to)/ig,2],
      [/down from \$?\d/ig,2],
      [/(he|she|they) (started|opened|came in) at/ig,2],
      [/(such|what) a (deal|bargain|steal)/ig,2],
      [/my (old|previous|current) (salary|rent|price|rate)/ig,2]
    ],
    PB:[
      [/today only|limited time|ends (today|tonight|soon)|last (chance|day)|act (now|fast)|won'?t (last|come (a)?round again)/ig,3],
      [/right now|immediately|can'?t wait|need it now/ig,2],
      [/you only live once|yolo|treat myself|i deserve (it|this)/ig,2],
      [/(deal with|worry about) (it|that|the consequences) later|future me/ig,2],
      [/(just|really) want it now/ig,2],
      [/before (the price|it) goes up/ig,2],
      [/(sick|tired) of (thinking|deciding|waiting|going back and forth)/ig,2],
      [/get it over with|just (want to )?be done/ig,2]
    ]
  },
  examples:[
    "I've already put three years and most of my savings into this business. It's not really working but I can't quit now — all that time would have been for nothing. I've come so far, I just need to make it worth it.",
    "Everyone I know is switching into this field and my feed is full of people saying it changed their life. I feel like I'm falling behind. There's an enrollment discount that ends tonight so I need to decide right now.",
    "My insurer raised prices again. Switching would save me about $600 a year, but honestly it's such a hassle and something could go wrong with a new company. I'd rather just stay put — I've always done it this way and my current plan originally cost way less anyway."
  ],
  exampleLabels:["Can't quit now","Everyone's doing it","Staying put"]
}
};
