export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="mt-2 bg-gray-800">
			<div className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8">
				<div className="text-center">
					<p className="text-sm text-white">
						© {currentYear} SpaceBits. Created by Slowik Cloud Solutions.
					</p>
				</div>
			</div>
		</footer>
	);
}