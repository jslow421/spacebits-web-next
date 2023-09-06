import Image from "next/image";

export default function Home() {
	return (
		<div className="relative isolate px-6 pt-14 lg:px-8">
			<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
				<div className="text-center">
					<h1 className="text-gray-900 dark:text-blue-300 text-4xl font-bold tracking-tight sm:text-6xl">
						SpaceBits
					</h1>
					<p className="text-gray-600 dark:text-white mt-6 text-lg leading-8">
						This is a work in progress. Soon to come features:
					</p>
					<ul className="">
						<li>Photo of the day</li>
						<li>And hopefully more!</li>
					</ul>
					<p className="text-gray-600 mt-6 text-lg leading-8">Working features:</p>
					<ul className="">
						<li>People in Space</li>
						<li>Daily near earth objects</li>
						<li>Upcoming launches</li>
					</ul>
					<p className="text-gray-600 dark:text-gray-300 mt-6 text-lg leading-8">
						Note - "currently working" just means there's data. Layout and styling is still a work in
						progress.
					</p>
				</div>
			</div>
		</div>
	);
}
