"use client";
import { Configuration } from "@/.configuration";
import Loading from "@/components/loading";
import { getImageForType, getRocketType } from "@/models/rockets";
import { UpcomingLaunches } from "@/models/upcomingLaunchModel";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function UpcomingLaunchesView() {
	const [isLoading, setIsLoading] = useState(true);
	const [launchesModel, setLaunchesModel] = useState<UpcomingLaunches>();

	async function retrieveUpcomingLaunches() {
		setIsLoading(true);
		try {
			const resp = await axios.get(Configuration.UPCOMING_LAUNCHES_URL, {
				headers: {
					"content-type": "application/json",
					"x-api-key": Configuration.API_KEY,
				},
			});

			setLaunchesModel(resp.data);
		} catch (e) {
			console.warn(e);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		retrieveUpcomingLaunches();
	}, []);

	return (
		<div className="container md:mx-auto">
			<Loading isLoading={isLoading} />
			<ul role="list" className="divide-y divide-gray-100 md:px-10 sm:px-0">
				{launchesModel?.launches?.result.map((launch) => (
					<li key={launch.id} className="justify-between gap-x-6 py-5">
						<div className="lg:flex lg:h-full lg:w-full lg:mr-2 lg:pr-2">
							<div className="">
								<Image
									className="h-12 w-12 flex-none rounded-full bg-gray-50"
									src={getImageForType(getRocketType(launch.vehicle.name))}
									alt=""
									height={48}
									width={48}
								/>
								<p className="text-sm leading-6 text-gray-900">{launch.date_str}</p>
							</div>
							<div className="lg:ml-3">
								<p className="text-sm font-semibold leading-6 text-gray-900">{launch.name}</p>
								<p className="mt-1 truncate text-xs leading-5 text-gray-500">
									{launch.vehicle.name} - {launch.provider.name}
								</p>
								<p className="mt-1 truncate text-xs leading-5 text-gray-500">
									{launch.launch_description}
								</p>
								{launch.mission_description && (
									<p className="mt-1 truncate text-xs leading-5 text-gray-500">
										{launch.mission_description}
									</p>
								)}
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
