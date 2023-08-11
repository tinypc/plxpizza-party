var kudos = [
   {
		"submittedBy": "Chris Coleman",
		"dateSubmitted": "8/11/2023",
		"nominee": "Shawn Wonder",
		"dateAction": "Last Week",
		"summary": "always being the first to help.",
		"team": 'Print Logix',
		"manager": "Peter Conway",
		"submittedByManager": "Peter Conway",
		"details": "We had a blocking bug with a big customer that took 5 days to complete. Every time I asked for help in the channel, Shawn would show up first and do everything he could to solve the problem."
		"wow": "Yes",
		"wowWeek": 1
   },
   {
		"submittedBy": "Peter",
		"dateSubmitted": "2023-08-14",
		"nominee": "Jack S.",
		"dateAction": "2023-08-08",
		"summary": "leading a thing to accomplish that feature",
		"wow": "Yes",
		"wowWeek": 2,
		"team": 'PLX',
		"manager": "Peter"
   },
   {
		"submittedBy": "Chris",
		"dateSubmitted": "2023-08-01",
		"nominee": "Bryce D.",
		"dateAction": "2023-08-10",
		"summary": "surviving a marathon customer call",
		"wow": "No",
		"wowWeek": 1,
		"team": 'PLX',
		"manager": "Peter"
   },
   {
		"submittedBy": "George",
		"dateSubmitted": "2023-08-01",
		"nominee": "Larry R.",
		"dateAction": "2023-08-10",
		"summary": "solving a tough one",
		"wow": "Yes",
		"wowWeek": 2,
		"team": 'OTG',
		"manager": "Peter"
   }  ,
   {
		"submittedBy": "Jack",
		"dateSubmitted": "2023-08-01",
		"nominee": "Bryce D.",
		"dateAction": "2023-08-10",
		"summary": "just living the dream",
		"wow": "No",
		"wowWeek": 1,
		"team": 'MWP',
		"manager": "Tom"
   }  
   
];

function marqueeString() {
	
	kudos.sort((a,b) => { 
		if (a.wow===b.wow) {
			if (a.wowWeek === b.wowWeek) {
				if (a.dateAction === b.dateAction) {
					if (a.dateSubmitted === b.dateSubmitted) {
						return a.nominee > b.nominee ? -1:1;
					}
					return a.dateSubmitted > b.dateSubmitted ? -1:1;
				}
				return a.dateAction > b.dateAction  ? -1: 1;
			} 
			return a.wowWeek > b.wowWeek ? 1: -1;
		}
		return a.wow > b.wow ? -1: 1;
	});
	
	
	var domain = new URL(window.location.href).hostname;
	
	// the assumption is that the visitor is accessing based on the team/group desired
	var filteredResults;
	switch (domain) {
		case 'otgpizza.party': // OTG
		  filteredResults = kudos.filter(function (entry) { return entry.team === 'OTG' });
		  break;
		case 'plxpizza.party': // PLX only
		case 'plx.pizza': // PLX only
		  filteredResults = kudos.filter(function (entry) { return entry.team === 'PLX' });
		  break;
		case 'petespizza.party': // Peter's direct reports
		  filteredResults = kudos.filter(function(entry) { return entry.manager === 'Peter' });
		  break;
		case 'vasion.party': // everything submitted
		default:
		  filteredResults = kudos;
	}
		
	var wows = 0;
	var karray =  filteredResults.map(kudo => { 
	if (kudo.wow.toLowerCase() =='yes') {
		wows++;
		return `<span class='wow'> On ${kudo.dateAction} ${kudo.nominee} WOWed us by ${kudo.summary}!</span>`
	} else {
		return ` On ${kudo.dateAction} ${kudo.nominee} impressed us by ${kudo.summary}!` 
	}});

	var dets = karray.join(" 🍕 ");

	var marquee = document.getElementById('kudos');
	marquee.innerHTML = dets;
	
	console.log(dets);
	
	var m = document.querySelector('.marquee');
	var textWidth = m.scrollWidth;
	var duration = textWidth/200;
	m.style.animationDuration = duration + 's';
}

function titleString () {
	var domain = new URL(window.location.href).hostname;
	var title = 'Welcome to the<BR>Pizza Party!';
	
	// the assumption is that the visitor is accessing based on the team/group desired
	var title;
	switch (domain) {
		case 'otgpizza.party': 
		  title = 'OTG<BR>Pizza Party!';
		  break;
		case 'plxpizza.party': // PLX only
		case 'plx.pizza': // PLX only
		  title = 'PLX<BR>Pizza Party!';
		  break;
		case 'petespizza.party': // Peter's direct reports
		  title = "Pete's Pizza<BR>Party!";
		  break;
		case 'vasion.party': // everything submitted
		default:
		  title = 'Welcome to the<br>Pizza Party!';
	}
	var div = document.getElementById('title');
	div.innerHTML= title;
}

marqueeString();
titleString();
