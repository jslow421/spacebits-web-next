export class NearEarthObjects {
	updated_date_time: string | undefined;
	data: NearEarthObjectData | undefined;
}

export class NearEarthObjectData {
	links: Link | undefined;
	element_count: number | undefined;
	near_earth_objects: NearEarthObject[] | undefined;
}

export class Link {
	next: string | undefined;
	prev: string | undefined;
	this: string | undefined;
}

export class NearEarthObject {
	id: string | undefined;
	name: string | undefined;
	nasa_jpl_url: string | undefined;
	absolute_magnitude_h: number | undefined;
	estimated_diameter: EstimatedDiameter | undefined;
	is_potentially_hazardous_asteroid: boolean | undefined;
	close_approach_data: CloseApproachData[] | undefined;
	is_sentry_object: boolean | undefined;
	links: Link | undefined;
}

export class EstimatedDiameter {
	kilometers: Kilometers | undefined;
	meters: Meters | undefined;
	miles: Miles | undefined;
	feet: Feet | undefined;
}

export class Kilometers {
	estimated_diameter_min: number | undefined;
	estimated_diameter_max: number | undefined;
}
export class Meters {
	estimated_diameter_min: number | undefined;
	estimated_diameter_max: number | undefined;
}

export class Miles {
	estimated_diameter_min: number | undefined;
	estimated_diameter_max: number | undefined;
}

export class Feet {
	estimated_diameter_min: number | undefined;
	estimated_diameter_max: number | undefined;
}

export class CloseApproachData {
	close_approach_date: string | undefined;
	close_approach_date_full: string | undefined;
	epoch_date_close_approach: number | undefined;
	relative_velocity: RelativeVelocity | undefined;
	miss_distance: MissDistance | undefined;
	orbiting_body: string | undefined;
}

export class RelativeVelocity {
	kilometers_per_second: string | undefined;
	kilometers_per_hour: string | undefined;
	miles_per_hour: string | undefined;
}

export class MissDistance {
	astronomical: string | undefined;
	lunar: string | undefined;
	kilometers: string | undefined;
	miles: string | undefined;
}
