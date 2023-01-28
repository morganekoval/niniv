const questions = [
	{
		intitule: "Je prévois de rester tranquille chez moi toute la journée, et je reçois un message à la dernière minute pour me proposer de sortir.",
		reponses: [
			{
				texte: "Je ne réponds pas",
				signes: "ef"
			},
			{
				texte: "Je refuse",
				signes: "aej"
			},
			{
				texte: "J’accepte car cela fera plaisir à mes amis",
				signes: "cghlb"
			},
			{
				texte: "Je réponds que je ne peux pas car j’ai une urgence familiale",
				signes: "dh"
			},
			{
				texte: "Je réponds sans accepter ni refuser pour me laisser l’opportunité de rester chez moi",
				signes: "ijk"
			}
		]
	},
	{
		intitule: "L’anniversaire d’une personne proche arrive et il faudrait peut-être organiser quelque chose.",
		reponses: [
			{
				texte: "Je prends les devants et envoie un message à tout le monde pour prévoir une surprise",
				signes: "aefj"
			},
			{
				texte: "J’attends encore un peu",
				signes: "bgl"
			},
			{
				texte: "Ce n’est clairement pas moi qui m’occuperait de ce genre de choses",
				signes: "cd"
			},
			{
				texte: "J’ai plein d’idées que je propose à plein de gens mais aucune de ces choses ne se réalisera",
				signes: "hi"
			},
			{
				texte: "Je prévois un cadeau de mon côté",
				signes: "jk"
			}
		]
	},
	{
		intitule: "Un conflit éclate entre deux membres de mon entourage.",
		reponses: [
			{
				texte: "Je comprends les deux partis et ne préfère donc pas m’immiscer",
				signes: "lfc"
			},
			{
				texte: "Je fais quelques blagues pour détendre l’atmosphère",
				signes: "kie"
			},
			{
				texte: "Je joue le rôle de médiateur",
				signes: "jge"
			},
			{
				texte: "Je prends parti immédiatement et explique à la personne pourquoi elle a tort",
				signes: "ha"
			},
			{
				texte: "J’écoute le débat en silence",
				signes: "db"
			}
		]
	},
	{
		intitule: "Je vois une affiche pour un événement qui me plairait beaucoup.",
		reponses: [
			{
				texte: "J’envoie un message à plein d’amis en détaillant pourquoi tout le monde devrait m’accompagner à cet événement formidable",
				signes: "adeh"
			},
			{
				texte: "Je garde l’idée dans un coin de ma tête",
				signes: "gb"
			},
			{
				texte: "Je tape tout de suite l’intitulé sur internet pour avoir plus d’information",
				signes: "ck"
			},
			{
				texte: "Je rentre la date dans mon calendrier",
				signes: "jf"
			},
			{
				texte: "Trop bien ! Je n’irai jamais",
				signes: "il"
			}
		]
	},
	{
		intitule: "Je suis à un repas convivial et le plat est immangeable.",
		reponses: [
			{
				texte: "Je me force et finis mon assiette",
				signes: "lgd"
			},
			{
				texte: "Je m’exclame “digne d’un étoilé” sachant pertinemment que tout le monde sait que c’est infâme",
				signes: "kie"
			},
			{
				texte: "J’essaie de trouver une façon d’améliorer le plat avec ce qu’il y a à disposition sur la table",
				signes: "jfca"
			},
			{
				texte: "J’explique poliment que personne ne peut manger ça, tout en me proposant de préparer quelque chose d’autre rapidement",
				signes: "hea"
			},
			{
				texte: "C’est de la nourriture, ça se mange",
				signes: "b"
			}
		]
	},
	{
		intitule: "C’est l’heure du grand rangement et je fais le tri dans mes vêtements.",
		reponses: [
			{
				texte: "Impossible de me débarrasser de mes vêtements, j’y tiens trop",
				signes: "lkigb"
			},
			{
				texte: "Je fais un classement très organisé en fonction des vêtements que je mets le plus pour prendre une décision rationnelle",
				signes: "fj"
			},
			{
				texte: "Je me débarrasse de mes vieux trucs",
				signes: "ha"
			},
			{
				texte: "Je donne le surplus à ma famille ou mes amis",
				signes: "gfd"
			},
			{
				texte: "Je revends quelques vêtements en ligne",
				signes: "ec"
			}
		]
	},
	{
		intitule: "J’ai accepté une invitation à une soirée où je ne connais que la personne qui organise.",
		reponses: [
			{
				texte: "Je me rends sur place en avance pour aider aux préparatifs",
				signes: "fkjedc"
			},
			{
				texte: "Je vais discuter avec un peu tout le monde pour rencontrer de nouvelles personnes",
				signes: "kga"
			},
			{
				texte: "Je reste proche des boissons et de la nourriture en attendant que quelqu’un initie une discussion pour moi",
				signes: "dfj"
			},
			{
				texte: "Je me fais un ennemi au bout de 5 minutes en disant quelque chose de déplacé",
				signes: "iha"
			},
			{
				texte: "Je propose un jeu à tout le monde",
				signes: "bae"
			}
		]
	},
	{
		intitule: "Je suis à un rendez-vous au bar avec une personne mais il s’avère que nous avons très peu de points communs.",
		reponses: [
			{
				texte: "Ce n’est pas un problème, on peut toujours s’entendre sur certains points",
				signes: "ag"
			},
			{
				texte: "Je peux quand même passer une bonne soirée mais si je ne recontacterai pas cette personne",
				signes: "bj"
			},
			{
				texte: "Tout le monde est intéressant et cette personne a sûrement quand même des choses à raconter",
				signes: "ifc"
			},
			{
				texte: "Je n’arrive pas à suivre ce que la personne me raconte car je suis dans mes pensées",
				signes: "dl"
			},
			{
				texte: "Je mets fin au rendez-vous prématurément",
				signes: "klhe"
			}
		]
	},
	{
		intitule: "Je reviens de vacances et ai une journée plutôt calme au travail.",
		reponses: [
			{
				texte: "Il y a toujours des choses à faire et je peux avancer certains projets",
				signes: "jfa"
			},
			{
				texte: "Je vais voir mes collègues pour savoir si je peux les aider",
				signes: "kgea"
			},
			{
				texte: "Je trouve quelque chose de reposant à faire",
				signes: "lgb"
			},
			{
				texte: "Je m’engage sur plein de nouvelles choses à faire que j’abandonnerai dans quelques semaines",
				signes: "idc"
			},
			{
				texte: "Parfait, je ne fais rien",
				signes: "hed"
			}
		]
	},
	{
		intitule: "J’ai une présentation importante à faire devant beaucoup de gens qu’à mon habitude.",
		reponses: [
			{
				texte: "Ce n’est pas un problème pour moi",
				signes: "aehj"
			},
			{
				texte: "Je me prépare suffisamment au préalable pour être calme le jour venu",
				signes: "bfl"
			},
			{
				texte: "Je stresse énormément quelques minutes avant",
				signes: "cdfjl"
			},
			{
				texte: "J’ai pris des notes et si je suis mon plan à la lettre, tout se passera bien",
				signes: "g"
			},
			{
				texte: "J’ai préparé quelques blagues en espérant que ca suffise à cacher le fait que je suis mal à l’aise",
				signes: "ik"
			}
		]
	},
	{
		intitule: "On vous propose de jouer à un nouveau jeu.",
		reponses: [
			{
				texte: "Si tout le monde est partant, pas de problème",
				signes: "ld"
			},
			{
				texte: "J’adore les nouveaux jeux",
				signes: "cb"
			},
			{
				texte: "OK, que le meilleur gagne (c’est moi)",
				signes: "kjha"
			},
			{
				texte: "J’aide à expliquer les règles pour commencer plus vite",
				signes: "iea"
			},
			{
				texte: "J’espère que c’est un jeu en groupe",
				signes: "gf"
			}
		]
	},
	{
		intitule: "Je propose une activité qui me tient à coeur à des amis mais tout le monde me répond “on verra”.",
		reponses: [
			{
				texte: "Je réponds que j’ai besoin d’une réponse claire",
				signes: "aei"
			},
			{
				texte: "Je laisse le temps aux concernés de se décider",
				signes: "bcgj"
			},
			{
				texte: "J’essaie de prendre mes amis par les sentiments pour les convaincre d’accepter sur le champ",
				signes: "hd"
			},
			{
				texte: "Je me demande si ces personnes sont fâchées contre moi",
				signes: "fjl"
			},
			{
				texte: "J’essaie de trouver un compromis pour que les personnes acceptent",
				signes: "k"
			}
		]
	},
	{
		intitule: "J’apprends qu’une personne de mon entourage proche est d’un bord politique opposé au mien et je peine à comprendre le raisonnement derrière certaines idées.",
		reponses: [
			{
				texte: "J’écoute pour mieux comprendre et éviter le conflit",
				signes: "lgfcb"
			},
			{
				texte: "Je change de sujet en lançant une petite attaque passive-agressive qui met fin au débat",
				signes: "ek"
			},
			{
				texte: "Je ne parlerai plus à cette personne",
				signes: "j"
			},
			{
				texte: "Je me lance dans un débat sans fin car je pense pouvoir la faire changer d'avis",
				signes: "ihd"
			},
			{
				texte: "J’explique toute mes idées car cela me tient à coeur",
				signes: "ae"
			}
		]
	},
	{
		intitule: "J’ai commis une énorme boulette et une personne est très remontée contre moi.",
		reponses: [
			{
				texte: "Je me confonds en excuses et essaie peut-être même un peu trop de me rattraper",
				signes: "lgfcbd"
			},
			{
				texte: "Je trouve une façon de la faire rire pour qu’elle se calme",
				signes: "kie"
			},
			{
				texte: "Je mets les choses à plat pour repartir sur de bonnes bases",
				signes: "jea"
			},
			{
				texte: "Je promets que cela n’arrivera plus jamais",
				signes: "iha"
			},
			{
				texte: "Si la personne n’est pas prête à me pardonner, je n’y peux rien",
				signes: "fd"
			}
		]
	}

]