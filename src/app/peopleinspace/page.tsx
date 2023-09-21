"use client";
import { Configuration } from "@/.configuration";
import Loading from "@/components/loading";
import { PeopleInSpaceModel } from "@/models/peopleModel";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PeopleInSpace() {
	const [isLoading, setIsLoading] = useState(true);
	const [peopleModel, setPeopleModel] = useState<PeopleInSpaceModel>({
		message: "",
		number: 0,
		people: [],
		update_date: "",
	});

	async function retrievePeople() {
		try {
			const resp = await axios.get(Configuration.PEOPLE_IN_SPACE_URL, {
				headers: {
					"Content-Type": "application/json",
				},
			});

			setPeopleModel(resp.data);
		} catch (e) {
			console.warn(e);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		document.title = "People In Space - SpaceBits";
		setIsLoading(true);
		retrievePeople();
	}, []);

	return (
		<div>
			<Loading isLoading={isLoading} />
			<ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-5">
				{peopleModel?.people?.map((person) => (
					<li key={person.name} className="divide-gray-200 col-span-1 divide-y rounded-lg bg-white shadow">
						<div className="flex w-full items-center justify-between space-x-6 p-6 text-black">
							<div className="flex-1 truncate">
								<div className="flex items-center space-x-3">
									<h3 className="text-gray-900 truncate text-sm font-medium">{person.name}</h3>
									<span
										className="bg-green-50 text-green-700 ring-green-600/20 inline-flex
											flex-shrink-0 items-center rounded-full px-1.5 py-0.5 text-xs font-medium
											ring-1 ring-inset"
									>
										{person.craft}
									</span>
								</div>
							</div>
							<Image
								className="bg-gray-300 h-10 w-10 flex-shrink-0 rounded-full"
								src={person.imgUrl ?? "/placeholder.jpg"}
								alt=""
								height={100}
								width={100}
							/>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
