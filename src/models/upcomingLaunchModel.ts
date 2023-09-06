export interface UpcomingLaunches {
	date: string | undefined;
	launches: Launches;
}

export interface Launches {
	count: number;
	last_page: number;
	limit: number;
	result: Result[];
	total: number;
	valid_auth: boolean;
}

export interface Result {
	cospar_id: string;
	date_str: string;
	id: number;
	launch_description: string;
	mission_description: string;
	missions: Mission[];
	modified: string;
	name: string;
	pad: Pad;
	provider: Provider;
	quick_text: any;
	slug: string;
	sort_date: string;
	suborbital: boolean;
	t0: string;
	tags: Tag[];
	vehicle: Vehicle;
	weather_condition: string;
	weather_icon: string;
	weather_summary: string;
	weather_temp: number;
	weather_updated: string;
	weather_wind_mph: number;
	win_close: string;
	win_open: string;
}

export interface Mission {
	description: string;
	id: number;
	name: string;
}

export interface Pad {
	id: number;
	location: Location;
	name: string;
}

export interface Location {
	country: string;
	id: number;
	name: string;
	slug: string;
	state: string;
	state_name: string;
}

export interface Provider {
	id: number;
	name: string;
	slug: string;
}

export interface Tag {
	id: number;
	text: string;
}

export interface Vehicle {
	company_id: number;
	id: number;
	name: string;
	pad: any;
	slug: string;
}
