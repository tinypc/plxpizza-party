var kudos = [
   {
		"sender": "Three",
		"dateSubmitted": "2023-08-19",
		"nominee": "Chris C.",
		"dateAction": "2023-08-10",
		"summary": "do something amazing",
		"wowWinner": "No",
		"wowWeek": 2,
		"team": 'PLX',
		"manager": "Bob"
   },
   {
		"sender": "One",
		"dateSubmitted": "2023-08-14",
		"nominee": "Jack S.",
		"dateAction": "2023-08-08",
		"summary": "leading a thing to accomplish that feature",
		"wowWinner": "Yes",
		"wowWeek": 2,
		"team": 'OTG',
		"manager": "Peter"
   },
   {
		"sender": "Two",
		"dateSubmitted": "2023-08-01",
		"nominee": "Bryce D.",
		"dateAction": "2023-08-10",
		"summary": "surviving a marathon customer call",
		"wowWinner": "No",
		"wowWeek": 1,
		"team": 'PLX',
		"manager": "Peter"
   }   
];

function marqueeString() {
	
	kudos.sort((a,b) => { 
		if (a.wowWinner===b.wowWinner) {
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
		return a.wowWinner > b.wowWinner ? -1: 1;
	});
	
	
	var domain = new URL(window.location.href).hostname;
	
	// the assumption is that the visitor is accessing based on the team/group desired
	var filteredResults;
	switch (domain) {
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
		
	var wowWinners = 0;
	var karray =  filteredResults.map(kudo => { 
	if (kudo.wowWinner.toLowerCase() =='yes') {
		wowWinners++;
		return `<span class='wow'> On ${kudo.dateAction} ${kudo.nominee} WOWed us by ${kudo.summary}!</span>`
	} else {
		return ` On ${kudo.dateAction} ${kudo.nominee} impressed us by ${kudo.summary}!` 
	}});
	var dets = karray.join(" || ");
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
