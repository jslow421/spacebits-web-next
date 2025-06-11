"use client";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Features } from "~/features";

const navigation = [
	{ name: "Home", path: "/" },
];

if (Features.isEnabled(Features.available.peopleInSpace)) {
	navigation.push({ name: "People In Space", path: "/peopleinspace" });
}

if (Features.isEnabled(Features.available.upcomingLaunches)) {
	navigation.push({ name: "Upcoming Launches", path: "/upcominglaunches" });
}

if (Features.isEnabled(Features.available.neo)) {
	navigation.push({ name: "NEO", path: "/neo" });
}

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="mb-2 bg-gray-800">
			<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
				<Link href="/">
					<div className="-m-1.5 p-1.5">
						<span className="sr-only">SpaceBits</span>
						<Image className="h-8 w-auto" src="/apple-touch-icon.png" width={100} height={100} alt="" />
					</div>
				</Link>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-green-500"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<Link
							key={item.name}
							className="text-sm font-semibold leading-6 text-white"
							onClick={() => setMobileMenuOpen(false)}
							href={item.path}
						>
							{item.name}
						</Link>
					))}
				</div>
			</nav>
			<Dialog as="div" className="lg:hidden" onClose={() => setMobileMenuOpen(false)} open={mobileMenuOpen}>
				<div className="fixed inset-0 z-10" />
				<Dialog.Panel
					className="sm:ring-gray-900/10 fixed inset-y-0 right-0 z-10 w-full overflow-y-auto
                bg-white px-6 py-6 sm:max-w-sm sm:ring-1"
				>
					<div className="flex items-center justify-between">
						<Link href="/" className="-m-1.5 p-1.5">
							<span className="sr-only">SpaceBits</span>
							<Image
								className="h-8 w-auto focus-visible:outline-none"
								src="/apple-touch-icon.png"
								alt=""
								width={100}
								height={100}
							/>
						</Link>
						<button
							type="button"
							className="text-gray-700 -m-2.5 rounded-md p-2.5"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="divide-gray-500/10 -my-6 divide-y">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<Link
										key={item.name}
										className="text-gray-900 hover:bg-gray-50 -mx-3 block rounded-lg px-3 py-2
                                        font-semibold leading-7 text-base"
										onClick={() => setMobileMenuOpen(false)}
										href={item.path}
									>
										{item.name}
									</Link>
								))}
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
