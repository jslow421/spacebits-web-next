import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/navbar";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "SpaceBits",
	description: "Bits about space",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
