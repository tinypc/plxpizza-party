var kudos = [
   {
		"submittedBy": "Chris Coleman",
		"dateSubmitted": "2023-08-11",
		"nominee": "Shawn Wonder",
		"dateAction": "Last Week",
		"summary": "always being the first to help",
		"team": 'PLX',
		"manager": "Peter Conway",
		"submittedByManager": "Peter Conway",
		"details": "We had a blocking bug with a big customer that took 5 days to complete. Every time I asked for help in the channel, Shawn would show up first and do everything he could to solve the problem.",
		"wow": "No",
		"wowWeek": 1
   },
   {
	  "submittedBy": "Donald Riedl",
	  "dateSubmitted": "2023-08-11",
	  "nominee": "Mychal Smith",
	  "dateAction": "2023-08-03",
	  "summary": "very quickly contributing to automation",
	  "team": "OMg",
	  "manager": "Simon",
	  "submittedByManager": "Peter Conway",
	  "details": "Mychal just started a couple of weeks ago but quickly started working on automation.  I gave him a quick overview of the repo and not long after he put up his first PR.  Since then he has been very invested in improving his code and suggesting improvements for our processes.",
		"wow": "No",
		"wowWeek": 1	  
   },
{
	
	"wowWeek": 1,
	"wow": "No",
  "submittedBy": "Donald Riedl",
  "dateSubmitted": "2023-08-11",
  "nominee": "Brendan Davidson",
  "dateAction": "2023-08-04",
  "summary": "Constantly finding ways to improve our processes",
  "team": "MWP",
  "manager": "Matt Dean",
  "submittedByManager": "Peter Conway",
  "details": "Brendan is still pretty new and is our only intern currently.  But he is a rockstar.  He is constantly working on something to improve our QA and Dev experience and he does it without being prompted.  He thinks of things that would make life easier and just goes out and figures out how to make it happen."
},
{
	"wowWeek": 1,
	"wow": "No",
	"submittedBy": "Jack Saller",
		"dateSubmitted": "2023-08-11",
		"nominee": "Ryan Poppe",
		"dateAction": "2023-08-08",
		"details": "Ryan recommended I test 2 specific use cases (check other manufacturers, and check the 'Fetch Tree…' button) after some changes I made to Scan Settings UI which led to me discovering other underlying problems with the change I had made and how we are recreating the folder structure, which made our code more resilient and error-proof",
		"team": 'Print Logix',
		"manager": "Peter Conway",
		"submittedByManager": "Peter Conway",
		"summary": "recommending I test 2 specific use cases, uncovering another underlying problem"
},
{
	"wowWeek": 1,
	"wow": "Yes",
	"submittedBy": "Jack Saller",
		"dateSubmitted": "2023-08-11",
		"nominee": "Chris Coleman, Daniel Fackrell, Shawn Wonder, and Larry Rich",
		"dateAction": "2023-08-04",
		"summary": "Spending multiple days troubleshooting and fixing a very difficult issue for LHM",
		"team": 'Print Logix',
		"manager": "Peter Conway",
		"submittedByManager": "Peter Conway",
		"details": "LHM discovered an issue the week of August 4th, and the nominees spent multiple full days troubleshooting, brainstorming, and coming up with a solution that would resolve their issue, with minimal impact to LHM's day-to-day"
	},
	{
	"wowWeek": 1,
	"wow": "No",
		"submittedBy": "Daniel Fackrell",
		"dateSubmitted": "2023-08-11",
		"nominee": "Jack Saller",
		"dateAction": "2023-08-01",
		"summary": "providing TypesScript training",
		"team": 'PLX',
		"manager": "Peter Conway",
		"submittedByManager": "Peter Conway",
		"details": "Jack led out on providing an initial training session on TypeScript"
	},
	{
	"wowWeek": 2,
	"wow": "No",
		"submittedBy": "OTG Retro",
		"dateSubmitted": "2023-08-14",
		"nominee": "Chad Sillitoe",
		"dateAction": "2023-08-14",
		"summary": "creating a framework for the team instead of just a ticket target",
		"team": 'OTG',
		"manager": "Peter Conway",
		"submittedByManager": "Peter Conway",
		"details": "Chad is creating a framework for testing."
	},
	{
	"wowWeek": 2,
	"wow": "Yes",
		"submittedBy": "OTG Retro",
		"dateSubmitted": "2023-08-14",
		"nominee": "Kit Robinson",
		"dateAction": "2023-08-11",
		"summary": "wrapping up the feature-flag related blocking customer bug",
		"team": 'OTG',
		"manager": "Peter Conway",
		"submittedByManager": "Peter Conway",
		"details": ""
	},
	{
	"wowWeek": 2,
	"wow": "Yes",
		"submittedBy": "OTG Retro",
		"dateSubmitted": "2023-08-14",
		"nominee": "Carlos Alvarado",
		"dateAction": "2023-08-11",
		"summary": "wrapping up the feature-flag related blocking customer bug",
		"team": 'OTG',
		"manager": "Peter Conway",
		"submittedByManager": "Peter Conway",
		"details": ""
	},
	{
	"wowWeek": 2,
	"wow": "No",
		"submittedBy": "OTG Retro",
		"dateSubmitted": "2023-08-14",
		"nominee": "Phil Clayton",
		"dateAction": "2023-08-11",
		"summary": "getting all the tickets that were in testing moving to done-done",
		"team": 'OTG',
		"manager": "Peter Conway",
		"submittedByManager": "Peter Conway",
		"details": ""
	},
	{
	"wowWeek": 2,
	"wow": "No",
		"submittedBy": "OTG Retro",
		"dateSubmitted": "2023-08-14",
		"nominee": "Peter Conway",
		"dateAction": "2023-08-11",
		"summary": "giving kudos visibility",
		"team": 'OTG',
		"manager": "Troy Campbell",
		"submittedByManager": "Peter Conway",
		"details": ""
	},
{"wowWeek": 4,
	"wow": "No",
		"submittedBy": "Phil Clayton",
		"dateSubmitted": "2023-08-25",
		"nominee": "Carlos Alvarado",
		"dateAction": "2023-08-24",
		"summary": "Helped me test OFN on iOS on VA using a simulator.",
		"team": "OTG",
		"manager": "Peter Conway",
		"submittedByManager": "Peter Conway",
		"details": "Seems like I've been blocked for many days but no longer! Thank you thank you thank you, Carlos!"
	}
   
];

function marqueeString() {
	
	kudos.sort((a,b) => { 
		if (a.wowWeek===b.wowWeek) {
			if (a.wow === b.wow) {
				if (a.dateAction === b.dateAction) {
					if (a.dateSubmitted === b.dateSubmitted) {
						return a.nominee > b.nominee ? -1:1;
					}
					return a.dateSubmitted > b.dateSubmitted ? -1:1;
				}
				return a.dateAction > b.dateAction  ? -1: 1;
			} 
			return a.wow > b.wow ? -1: 1;
		}
		return a.wowWeek > b.wowWeek ? -1: 1;
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
		  filteredResults = kudos.filter(function (entry) { return (entry.team === 'PLX') || (entry.team === 'Print Logix') });
		  break;
		case 'petespizza.party': // Peter's direct reports
		  filteredResults = kudos.filter(function(entry) { return (entry.manager === 'Peter') || (entry.manager === 'Pete') || (entry.manager === 'Peter Conway') || (entry.manager==='Pete Conway') });
		  break;
		case 'vasion.party': // everything submitted
		default:
		  filteredResults = kudos;
	}
		
	var wows = 0;
	
	var karray =  filteredResults.map(kudo => { 
	if ((kudo.wow.toLowerCase() =='yes')||(kudo.wow ==1)) {
		wows++;	
		return `<div class='mpanel wow'>${kudo.dateAction} ${kudo.nominee} WOWed us by ${kudo.summary}! <small><small>-- ${kudo.submittedBy}</small></small></div>`
	} else {
		return ` <div class='mpanel'>${kudo.dateAction} ${kudo.nominee} impressed us by ${kudo.summary}! <small><small>-- ${kudo.submittedBy}</small></small></div>` 
	}});

	var dets = karray.join("<div class='mdivider'>🍕</div>");

	var marquee = document.getElementById('kudos');
	marquee.innerHTML = dets;
	
// 	console.log(dets);
	
	var m = document.querySelector('.marquee');
	var textWidth = m.scrollWidth;
	var duration = textWidth/200;
	m.style.animationDuration = duration + 's';
	
	document.documentElement.style.setProperty('--marqueeZero', (window.innerWidth + 100)+ 'px');
	document.documentElement.style.setProperty('--marquee100', (-1 * textWidth) + 'px');
}

function titleString () {
	var domain = new URL(window.location.href).hostname;
	var title = 'Welcome to the<BR>Pizza Party!';
	
	// the assumption is that the visitor is accessing based on the team/group desired
	var title;
	var pageTitle; 
	switch (domain) {
		case 'otgpizza.party': 
		  title = 'OTG<BR>Pizza Party!';
		  pageTitle = 'Welcome to the OTG Pizza Party!';
		  break;
		case 'plxpizza.party': // PLX only
		case 'plx.pizza': // PLX only
		  title = 'PLX<BR>Pizza Party!';
		  pageTitle = 'Welcome to the PLX Pizza Party!';
		  break;
		case 'petespizza.party': // Peter's direct reports
		  title = "Pete's Pizza<BR>Party!";
		  pageTitle = "Welcome to Pete's Pizza Party!";
		  break;
		case 'vasion.party': // everything submitted
		default:
		  title = 'Welcome to the<br>Pizza Party!';
		  pageTitle = 'Welcome to the Vasion Pizza Party!';
	}
	var div = document.getElementById('title');
	div.innerHTML= title;
	document.title = pageTitle;
}

marqueeString();
titleString();
