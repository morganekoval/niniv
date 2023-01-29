
function loadQuestions() {
	$(".start-button").hide();
	const order = randomOrder(questions.length);
	for (var i = 0; i < order.length; i++) {
		displayQuestion(order[i]);
	}
	// $("#main-test").append("<div><input type=\"submit\" value=\"Devine\"></div>");
	$("body").append("<div><button id=\"first-guess\" onclick=\"computeScores()\">> Devine</button></div>");

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

function findCorresp(letter,val) {
	switch(letter) {
		case 'a':
			scores["Bélier"]+=val;
			break;
		case 'b':
			scores["Taureau"]+=val;
			break;
		case 'c':
			scores["Gémeaux"]+=val;
			break;
		case 'd':
			scores["Cancer"]+=val;
			break;
		case 'e':
			scores["Lion"]+=val;
			break;
		case 'f':
			scores["Vierge"]+=val;
			break;
		case 'g':
			scores["Balance"]+=val;
			break;
		case 'h': 
			scores["Scorpion"]+=val;
			break;
		case 'i':
			scores["Sagittaire"]+=val;
			break;
		case 'j':
			scores["Capricorne"]+=val;
			break;
		case 'k':	
			scores["Verseau"]+=val;
			break;
		case 'l':
			scores["Poissons"]+=val;
			break;
		default:
			break;
	}
}

function computeScores() {
	// var scores = {belier: 0, taureau: 0, gemeaux: 0, cancer: 0, lion: 0, vierge: 0, balance: 0, scorpion: 0, sagittaire: 0, capricorne: 0, verseau: 0, poissons: 0};
	for (var i = 0; i < questions.length; i++) {
		var resp = questions[i].reponses[parseInt($(`input[name="${i}"]:checked`).val())].signes;
		for (var j = 0; j < resp.length; j++) {
			findCorresp(resp[j],1);
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
	nbGuess++;
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
	$("#test").replaceWith('<div id=\"test\"><div>Date de naissance : </br>  <button type="button" class="guess-button" onclick="changeDay()">'+guess[1]+'</button> <button type="button" class="guess-button" onclick="changeMonth()">'+readableMonth(guess[0])+'</button></div><div class="instructions">Cliquez sur une des valeurs fausses pour réessayer.</div><div><button onclick=\"end()\">> C\'est correct !</button></div></div>');
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

function changeDay() {
	for (var i = annee.length - 1; i >= 0; i--) {
		annee[i] = remove(annee[i], guess[1]);
	}
	makeAGuess();
}


function changeMonth() {
	annee[guess[0]] = [];
	makeAGuess();
}

// function tryAgain() {
// 	if ($('input[name="wrong"]:checked').val() != undefined) {
// 		annee[guess[0]] = remove(annee[guess[0]],guess[1]);
// 	} else {
// 		if ($('input[name="wrong-day"]:checked').val() != undefined) {
// 			for (var i = annee.length - 1; i >= 0; i--) {
// 				annee[i] = remove(annee[i], guess[1]);
// 			}
// 		} else {
// 			for (var i = annee.length - 1; i >= 0; i--) {
// 				annee[i] = onlyThisDay(annee[i], guess[1]);
// 			}
// 		} if ($('input[name="wrong-month"]:checked').val() != undefined) {
// 			annee[guess[0]] = [];
// 		} else {
// 			for (var i = annee.length - 1; i >= 0; i--) {
// 				if (i != guess[0]) {
// 					annee[i] = [];
// 				}
// 			}
// 		}
// 	}
// 	makeAGuess();
// }

function end() {
	// $("#guesses").replaceWith(`<div>Date trouvée en `+nbGuess+` essai(s) !!!</div><div><a href="mailto:particuliers@assistance.impots.gouv.fr?subject=On a deviné ma date de naissance !&body=C\'est très grave ce qu\'il se passe... Ma date de naissance a été devinée en ${nbGuess} essais !!>Envoyer un email au service des Impôts</a>`);
	var S = `<div>Date trouvée en `+nbGuess+` essai(s).</div><div>Voici le classement des signes basé sur votre test :<ol>`;
	rank = ranking();
	var index = rank.indexOf(fromGuessToSign());
	const nbSignes = rank.length;
	for (var i = nbSignes - 1; i >= 0; i--) {
		S+= (i==index) ? `<li class="correct-sign">${rank.pop()}</li>` : `<li>${rank.pop()}</li>` ;
	}
	S+= `</ol></div><div><a href="mailto:particuliers@assistance.impots.gouv.fr?subject=On a deviné ma date de naissance !&body=C\'est très grave ce qu\'il se passe... Ma date de naissance a été devinée en ${nbGuess} essai(s) !!">Envoyer un email au service des Impôts</a><div><button type="button"><a id="homepage-again" href="${document.URL}">> Recommencer</a></button><div>`;
	$("#test").replaceWith(S);

}


function loadSliders() {
	$(".start-button").hide();
	const order = randomOrder(sliderVal.length);
	for (var i = 0; i < order.length; i++) {
		displaySlider(order[i]);
	}
	// $("#main-test").append("<div><input type=\"submit\" value=\"Devine\"></div>");
	$("body").append("<div><button id=\"first-guess\" onclick=\"computeScoresSlider()\">> Devine</button></div>");

}

function displaySlider(num) {
	var html = `<fieldset><legend>Je suis une personne plutôt :</legend><div class="adjectifs"><span>`+sliderVal[num].adj1+"</span><span>"+sliderVal[num].adj2+`</div><div class="slidecontainer"><input type="range" min="0" max="100" value="50" class="slider" name="${num}" id="${num}"></div>`;
	$("#main-test").append(html);

}


function computeScoresSlider() {
	for (var i = 0; i < sliderVal.length; i++) {
		var val = $(`input[name="${i}"]`).val();
		var deb = 4;
		if (val < 25) {
			deb = 0;
		} else if (val < 45) {
			deb = 1;
		} else if (val < 55) {
			deb = 2;
		} else if (val <= 75) {
			deb = 3;
		}
		console.log(deb);
		for(var j = Math.max(0,deb-1); j < Math.min(sliderVal[i].signes.length,deb+2); j++) {
			console.log(sliderVal[i].signes[j]);
			var signe = sliderVal[i].signes[j];
			for(var k = 0 ; k < signe.length ; k++) {
				findCorresp(signe[k],(deb == j ? 1 : 0.5));
			}
		}

	}
	console.log(scores);
	rank = ranking();
	// console.log(rank[0]);
	// console.log(correspSignes[rank[0]]);
	makeAGuess();
}

function fromGuessToSign() {
	for (var key in correspSignes) {
		if ((correspSignes[key].debut.mois == guess[0] && correspSignes[key].debut.jour >= guess[1]) || (correspSignes[key].fin.mois == guess[0] && correspSignes[key].fin.jour <= guess[1])) {
			return key;
		}
	}
	return "";
}






