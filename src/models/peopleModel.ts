export class PeopleInSpaceModel {
	update_date: string | undefined;
	people: PersonInSpace[] | undefined;
	message: string | undefined;
	number: number | undefined;
}

export class PersonInSpace {
	name: string | undefined;
	craft: string | undefined;
	imgUrl: string | undefined;
	search_string: string | undefined;
}
