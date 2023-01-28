var scores = {belier: 0, taureau: 0, gemeaux: 0, cancer: 0, lion: 0, vierge: 0, balance: 0, scorpion: 0, sagittaire: 0, capricorne: 0, verseau: 0, poissons: 0};
var rank;
var guess = [0,0];
var nbGuess = 1;


const correspSignes = {
	"belier": {
		debut: {
			mois: 3,
			jour: 21
		},
		fin: {
			mois: 4,
			jour: 20
		}
	}, 
	"taureau": {
		debut: {
			mois: 4,
			jour: 21
		},
		fin: {
			mois: 5,
			jour: 20
		}
	}, 
	"gemeaux": {
		debut: {
			mois: 5,
			jour: 21
		},
		fin: {
			mois: 6,
			jour: 20
		}
	}, 
	"cancer": {
		debut: {
			mois: 6,
			jour: 21
		},
		fin: {
			mois: 7,
			jour: 22
		}
	}, 
	"lion": {
		debut: {
			mois: 7,
			jour: 23
		},
		fin: {
			mois: 8,
			jour: 22
		}
	}, 
	"vierge": {
		debut: {
			mois: 8,
			jour: 23
		},
		fin: {
			mois: 9,
			jour: 22
		}
	}, 
	"balance": {
		debut: {
			mois: 9,
			jour: 23
		},
		fin: {
			mois: 10,
			jour: 22
		}
	}, 
	"scorpion": {
		debut: {
			mois: 10,
			jour: 23
		},
		fin: {
			mois: 11,
			jour: 21
		}
	}, 
	"sagittaire": {
		debut: {
			mois: 11,
			jour: 23
		},
		fin: {
			mois: 12,
			jour: 21
		}
	}, 	"capricorne": {
		debut: {
			mois: 12,
			jour: 22
		},
		fin: {
			mois: 1,
			jour: 20
		}
	},
	"verseau": {
		debut: {
			mois: 1,
			jour: 21
		},
		fin: {
			mois: 2,
			jour: 18
		}
	},
	"poissons": {
		debut: {
			mois: 2,
			jour: 19
		},
		fin: {
			mois: 3,
			jour: 20
		}
	}
};

var annee = [];
for (var i = 0; i < 12; i++) {
	var jours = [];
	var nb = 31;
	if (i == 1) {
		nb = 19;
	} else if ((i%7)%2 == 1) {
		nb--;
	}
	for (var j = 0; j < nb; j++) {
		jours.push(j+1);
	}
	annee.push(jours);
}

console.log(annee);



