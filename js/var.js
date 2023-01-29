var scores = {'Bélier': 0, 'Taureau': 0, 'Gémeaux': 0, 'Cancer': 0, 'Lion': 0, 'Vierge': 0, 'Balance': 0, 'Scorpion': 0, 'Sagittaire': 0, 'Capricorne': 0, 'Verseau': 0, 'Poissons': 0};
var rank;
var guess = [0,0];
var nbGuess = 0;


const correspSignes = {
	"Bélier": {
		debut: {
			mois: 3,
			jour: 21
		},
		fin: {
			mois: 4,
			jour: 20
		}
	}, 
	"Taureau": {
		debut: {
			mois: 4,
			jour: 21
		},
		fin: {
			mois: 5,
			jour: 20
		}
	}, 
	"Gémeaux": {
		debut: {
			mois: 5,
			jour: 21
		},
		fin: {
			mois: 6,
			jour: 20
		}
	}, 
	"Cancer": {
		debut: {
			mois: 6,
			jour: 21
		},
		fin: {
			mois: 7,
			jour: 22
		}
	}, 
	"Lion": {
		debut: {
			mois: 7,
			jour: 23
		},
		fin: {
			mois: 8,
			jour: 22
		}
	}, 
	"Vierge": {
		debut: {
			mois: 8,
			jour: 23
		},
		fin: {
			mois: 9,
			jour: 22
		}
	}, 
	"Balance": {
		debut: {
			mois: 9,
			jour: 23
		},
		fin: {
			mois: 10,
			jour: 22
		}
	}, 
	"Scorpion": {
		debut: {
			mois: 10,
			jour: 23
		},
		fin: {
			mois: 11,
			jour: 21
		}
	}, 
	"Sagittaire": {
		debut: {
			mois: 11,
			jour: 23
		},
		fin: {
			mois: 12,
			jour: 21
		}
	}, 	
	"Capricorne": {
		debut: {
			mois: 12,
			jour: 22
		},
		fin: {
			mois: 1,
			jour: 20
		}
	},
	"Verseau": {
		debut: {
			mois: 1,
			jour: 21
		},
		fin: {
			mois: 2,
			jour: 18
		}
	},
	"Poissons": {
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



