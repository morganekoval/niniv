
function loadQuestions() {
	$(".start-button").hide();
	const order = randomOrder(questions.length);
	for (var i = 0; i < order.length; i++) {
		displayQuestion(order[i]);
	}
	// $("#main-test").append("<div><input type=\"submit\" value=\"Devine\"></div>");
	$("body").append("<div><button id=\"first-guess\" onclick=\"computeScores()\">Devine</button></div>");

}

function displayQuestion(num) {
	var html = "<fieldset><legend>"+questions[num].intitule+"</legend>";
	const order = randomOrder(questions[num].reponses.length);
	for (var i = 0; i < order.length; i++) {
		html += "<div><input type=\"radio\" value=\""+order[i]+"\" id=\""+num+order[i]+"\" name=\""+num+"\" checked><label for=\""+num+order[i]+"\">"+questions[num].reponses[order[i]].texte+"</label></div>";
	}
	html += "</fieldset>"
	$("#main-test").append(html);
}

function randomOrder(l) {
	var order = [];
	for (var i = 0; i < l; i++) {
		order.push(i);
	}
	return order.sort((a,b) => 0.5 - Math.random());
}

function findCorresp(letter) {
	switch(letter) {
		case 'a':
			scores.belier++;
			break;
		case 'b':
			scores.taureau++;
			break;
		case 'c':
			scores.gemeaux++;
			break;
		case 'd':
			scores.cancer++;
			break;
		case 'e':
			scores.lion++;
			break;
		case 'f':
			scores.vierge++;
			break;
		case 'g':
			scores.balance++;
			break;
		case 'h': 
			scores.scorpion++;
			break;
		case 'i':
			scores.sagittaire++;
			break;
		case 'j':
			scores.capricorne++;
			break;
		case 'k':	
			scores.verseau++;
			break;
		case 'l':
			scores.poissons++;
			break;
		default:
			return 'bipboup';	
	}
}

function computeScores() {
	// var scores = {belier: 0, taureau: 0, gemeaux: 0, cancer: 0, lion: 0, vierge: 0, balance: 0, scorpion: 0, sagittaire: 0, capricorne: 0, verseau: 0, poissons: 0};
	for (var i = 0; i < questions.length; i++) {
		var resp = questions[i].reponses[parseInt($(`input[name="${i}"]:checked`).val())].signes;
		for (var j = 0; j < resp.length; j++) {
			findCorresp(resp[j]);
			// scores.findCorresp(resp[i])++;
		}

	}
	console.log(scores);
	rank = ranking();
	// console.log(rank[0]);
	// console.log(correspSignes[rank[0]]);
	makeAGuess();
}

function ranking() {
	var items = Object.keys(scores).map((key) => { return [""+key, scores[key]] });
	items.sort((first, second) => { return first[1] - second[1] });
	return items.map((e) => { return e[0] });
}

function nothingBelow(tab, val) {
	for (var i = 0; i < tab.length; i++) {
		if (tab[i] <= val) {
			return false;
		}
	}
	return true;
}

function nothingAbove(tab, val) {
	for (var i = tab.length - 1; i >= 0; i--) {
		if (tab[i] >= val) {
			return false;
		}
	}
	return true;
}

function stillPossible(signe) {
	if (nothingAbove(annee[correspSignes[signe].debut.mois-1],correspSignes[signe].debut.jour) && nothingBelow(annee[correspSignes[signe].fin.mois-1],correspSignes[signe].fin.jour)) {
		return false;
	}
	return true;
}

function subAbove(tab,val) {
	var res = [];
	for (var i = tab.length - 1; i >= 0; i--) {
		if (tab[i] >= val) {
			res.push(tab[i]);
		} else {
			return res;
		}
	}
	return res;
}

function subBelow(tab,val) {
	var res = [];
	for (var i = 0; i < tab.length; i++) {
		if (tab[i] <= val) {
			res.push(tab[i]);
		} else {
			return res;
		}
	}
	return res;
}

function makeAGuess() {
	while(!stillPossible(rank[rank.length-1])) {
		rank.pop();
		if (rank.length < 1) {
			impossible();
			return;
		}
	}
	var signe = rank[rank.length-1];
	var mois1 = subAbove(annee[correspSignes[signe].debut.mois-1],correspSignes[signe].debut.jour);
	var mois2 = subBelow(annee[correspSignes[signe].fin.mois-1],correspSignes[signe].fin.jour);
	var selection = [];
	console.log(mois1);
	console.log(mois2);
	if (mois1.length > mois2.length) {
		selection = [correspSignes[signe].debut.mois,mois1];
	} else {
		selection = [correspSignes[signe].fin.mois,mois2];
	}
	var jour = selection[1][Math.floor(Math.random()*selection[1].length)];
	guess = [selection[0]-1,jour];
	console.log("Mon guess est le "+jour+readableMonth(guess[0]));
	console.log(rank);
	displayDateGuessed();
}

function impossible() {
	$("#test").replaceWith(`<div>OK, petit malin.</div><div><a href="mailto:particuliers@assistance.impots.gouv.fr?subject=Petit malin&body=C'est moi ! Le petit malin !">Envoyer un email au service des Impôts</a>`);

}

function readableMonth(month) {
	console.log(month);
	switch(month) {
		case 0: return "Janvier";
		case 1: return "Février";
		case 2: return "Mars";
		case 3: return "Avril";
		case 4: return "Mai";
		case 5: return "Juin";
		case 6: return "Juillet";
		case 7: return "Août";
		case 8: return "Septembre";
		case 9: return "Octobre";
		case 10: return "Novembre";
		case 11: return "Décembre";
		default: return "";
	}
}

function displayDateGuessed() {
	$("#first-guess").hide();
	$("#test").replaceWith("<div id=\"test\"><div>Votre date de naissance est le "+guess[1]+" "+readableMonth(guess[0])+".</div><div><input type=\"checkbox\" id=\"wrong-day\" name=\"wrong-day\"><label for=\"wrong-day\">Mauvais jour</label></input></div><div><input type=\"checkbox\" id=\"wrong-month\" name=\"wrong-month\"><label for=\"wrong-month\">Mauvais mois</label></input></div><div><input type=\"checkbox\" id=\"wrong\" name=\"wrong\" checked><label for=\"wrong\">C'est faux mais je ne te dis pas pourquoi</label></input></div><div><button onclick=\"tryAgain()\">Réessayer une nouvelle date</button></div><div><button onclick=\"end()\">C'est correct !</button></div></div>");
} 

function remove(tab,val) {
	const index = tab.indexOf(val);
	if (index == -1) {
		return tab;
	}
	const tab1 = tab.slice(0,index);
	if (index != tab.length-1) {
		return tab1.concat(tab.slice(index+1,tab.length));
	}
	return tab1;
}

function onlyThisDay(tab,val) {
	if (tab.indexOf(val) != -1) {
		return [val];
	}
	return [];
}


function tryAgain() {
	nbGuess++;
	if ($('input[name="wrong"]:checked').val() != undefined) {
		annee[guess[0]] = remove(annee[guess[0]],guess[1]);
	} else {
		if ($('input[name="wrong-day"]:checked').val() != undefined) {
			for (var i = annee.length - 1; i >= 0; i--) {
				annee[i] = remove(annee[i], guess[1]);
			}
		} else {
			for (var i = annee.length - 1; i >= 0; i--) {
				annee[i] = onlyThisDay(annee[i], guess[1]);
			}
		} if ($('input[name="wrong-month"]:checked').val() != undefined) {
			annee[guess[0]] = [];
		} else {
			for (var i = annee.length - 1; i >= 0; i--) {
				if (i != guess[0]) {
					annee[i] = [];
				}
			}
		}
	}
	makeAGuess();
}

function end() {
	// $("#guesses").replaceWith(`<div>Date trouvée en `+nbGuess+` essai(s) !!!</div><div><a href="mailto:particuliers@assistance.impots.gouv.fr?subject=On a deviné ma date de naissance !&body=C\'est très grave ce qu\'il se passe... Ma date de naissance a été devinée en ${nbGuess} essais !!>Envoyer un email au service des Impôts</a>`);
	$("#test").replaceWith(`<div>Date trouvée en `+nbGuess+` essai(s) !!!</div><div><a href="mailto:particuliers@assistance.impots.gouv.fr?subject=On a deviné ma date de naissance !&body=C\'est très grave ce qu\'il se passe... Ma date de naissance a été devinée en ${nbGuess} essai(s) !!">Envoyer un email au service des Impôts</a>`);

}






