import type {User} from "$lib/data/types"
	
export const user: User = 
		{
			intro: {
				image: "profile_3.jpg",
				firstname: "Fabrice",
				lastname: "Riquet",

			},
			main: {
				age: "49",
				birthdate: "04/05/1973",
				job: "Agent de maitrise Sécurité Incendie",
				email: "fabezio@outlook.fr",
				phone: "06 52 81 29 46",
			},

			hobbies: ["Cinéma SF & fantastique", "informatique"],
			address: {
				street: "Rue du Rhin",
				number: "3",
				zipcode: "44470",
				city: "Carquefou",
				country: "France"
			}
			
		}