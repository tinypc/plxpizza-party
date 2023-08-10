var kudos = [
   {
		"sender": "Peter",
		"dateSubmitted": "2023-08-19",
		"nominee": "Chris C.",
		"dateAction": "2023-08-10",
		"summary": "Something amazing",
		"wowWinner": "No",
		"wowWeek": 1
   },
   {
		"sender": "Peter",
		"dateSubmitted": "2023-08-14",
		"nominee": "Jack S.",
		"dateAction": "2023-08-08",
		"summary": "Leading a thing to accomplish that feature",
		"wowWinner": "No",
		"wowWeek": 1
   },
   {
		"sender": "Peter",
		"dateSubmitted": "2023-08-01",
		"nominee": "Bryce D.",
		"dateAction": "2023-08-10",
		"summary": "Marathon customer call",
		"wowWinner": "No",
		"wowWeek": 1
   }   
];

function marqueeString() {
	var kstring = JSON.stringify(kudos);
	console.log(kstring);
	
}

marqueeString();