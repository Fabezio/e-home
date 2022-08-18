type Address = {
		street: string,
		number: string,
		zipcode: string,
		city: string,
		country: string,
	}
export	type Intro = {
		image: string,
		firstname: string,
		lastname: string,
	}
export	type Main = {
		age: string,
				birthdate: string,
				job: string,
				email: string,
				phone: string,
	}


	export type User = {
		intro: Intro,
		main: Main,
		hobbies: string[],
		address: Address

	};