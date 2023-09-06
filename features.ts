export class Features {
	static readonly isNeoEnabled = true;
	static readonly isUpcomingLaunchesEnabled = true;

	static readonly available = {
		neo: "neo",
		upcomingLaunches: "upcomingLaunches",
	};

	static isEnabled(feature: string): boolean {
		const isInDev = process.env.REACT_APP_IS_IN_DEV === "true";

		if (isInDev) {
			return true;
		}

		switch (feature) {
			case this.available.neo:
				return Features.isNeoEnabled;
			case this.available.upcomingLaunches:
				return Features.isUpcomingLaunchesEnabled;
			default:
				return false;
		}
	}
}
