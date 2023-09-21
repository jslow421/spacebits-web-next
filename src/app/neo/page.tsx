"use client";
import { Configuration } from "@/.configuration";
import Loading from "@/components/loading";
import { NearEarthObjects } from "@/models/neoModel";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useEffect, useState } from "react";

export default function NeoPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [neoModel, setNeoModel] = useState<NearEarthObjects>({
		data: {
			element_count: 0,
			near_earth_objects: [],
			links: {
				next: "",
				prev: "",
				this: "",
			},
		},
		updated_date_time: "",
	});

	async function retrieveNeo() {
		try {
			setIsLoading(true);
			const resp = await axios.get(Configuration.NEO_URL, {
				headers: {
					"content-type": "application/json",
					"x-api-key": Configuration.API_KEY,
				},
			});

			setNeoModel(resp.data);
		} catch (e) {
			console.warn(e);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		document.title = "SpaceBits - Near Earth Objects";
		retrieveNeo();
	}, []);

	return (
		<div>
			<Loading isLoading={isLoading} />
			<div className={`container mx-auto bg-white px-4 sm:px-6 lg:px-8 ${isLoading ? " hidden" : ""}`}>
				<div className="-mx-4 mt-8 sm:-mx-0">
					<table className="divide-gray-300 min-w-full divide-y">
						<caption>
							{neoModel.data?.element_count} Near Earth objects for today - Retrieved:{" "}
							{neoModel.updated_date_time}
						</caption>
						<thead>
							<tr>
								<th
									scope="col"
									className="text-gray-900 py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-0"
								>
									Name
								</th>
								<th
									scope="col"
									className="text-gray-900 px-3 py-3.5 text-sm font-semibold lg:table-cell"
								>
									ID
								</th>
								<th
									scope="col"
									className="text-gray-900 px-3 py-3.5 text-sm font-semibold sm:table-cell"
								>
									Potentially Hazardous?
								</th>
								<th scope="col" className="text-gray-900 px-3 py-3.5 text-sm font-semibold">
									Min Est Diameter (Miles)
								</th>
							</tr>
						</thead>
						<tbody className="divide-gray-200 divide-y bg-white">
							{neoModel.data?.near_earth_objects?.map((neo) => (
								<tr key={neo.id}>
									<td className="text-gray-500 px-3 py-4 text-sm lg:table-cell">
										<a href={neo.nasa_jpl_url} target="_blank">
											{neo.name}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												className="inline h-4 w-4"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 
													21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
												/>
											</svg>
										</a>
									</td>
									<td className="text-gray-500 px-3 py-4 text-center text-sm lg:table-cell">
										{neo.id}
									</td>
									<td className="text-gray-500 flex justify-center px-3 py-4 text-left text-sm">
										{neo.is_potentially_hazardous_asteroid && (
											<span className="">
												<CheckCircleIcon className="h-5 w-5 text-red" />
											</span>
										)}
									</td>
									<td className="text-gray-500 px-3 py-4 text-center text-sm">
										{neo.estimated_diameter?.miles?.estimated_diameter_min}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
