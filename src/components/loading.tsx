import Spinner from "@/components/spinner";

export default function Loading(props: { isLoading: boolean }) {
	return (
		<>
			{props.isLoading ? (
				<span>
					<Spinner />
				</span>
			) : null}
		</>
	);
}
