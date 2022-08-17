type Address = {
		street: string,
		number: string,
		zipcode: string,
		city: string,
		country: string,

	}
	export type User = {
		image: string,
		firstname: string,
		lastname: string,
		age: string,
		birthdate: string,
		job: string,
		email: string,
		phone: string,
		hobbies: string[],
		address: Address

	};