var kudos = [
   {
		"sender": "Peter",
		"dateSubmitted": "2023-08-19",
		"nominee": "Chris C.",
		"dateAction": "2023-08-10",
		"summary": "do something amazing",
		"wowWinner": "No",
		"wowWeek": 1
   },
   {
		"sender": "Peter",
		"dateSubmitted": "2023-08-14",
		"nominee": "Jack S.",
		"dateAction": "2023-08-08",
		"summary": "leading a thing to accomplish that feature",
		"wowWinner": "No",
		"wowWeek": 1
   },
   {
		"sender": "Peter",
		"dateSubmitted": "2023-08-01",
		"nominee": "Bryce D.",
		"dateAction": "2023-08-10",
		"summary": "surviving a marathon customer call",
		"wowWinner": "No",
		"wowWeek": 1
   }   
];

function marqueeString() {
	var kstring =  kudos.map(kudo => `On ${kudo.dateAction} ${kudo.nominee} wowed us by ${kudo.summary}!`);
	var dets = kstring.join(" -- ");
	var marquee = document.getElementById('kudos');
	marquee.textContent = dets;
	
	var m = document.querySelector('.marquee');
	var textWidth = m.scrollWidth;
	var duration = textWidth/200;
	m.style.animationDuration = duration + 's';
}

marqueeString();

