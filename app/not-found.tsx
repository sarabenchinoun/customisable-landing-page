import { Button } from "@/components/button";
import { Container } from "@/components/container";

export default function NotFound() {
	return (
		<>
			<main className="h-full">
				<Container className="py-24 text-center sm:py-32">
					<p className="font-semibold text-base text-primary-600">404</p>
					<h1 className="mt-4 font-bold font-heading text-3xl text-gray-900 tracking-tight sm:text-5xl">
						Page not found
					</h1>
					<p className="mt-6 text-base text-gray-600 leading-7">
						Sorry, we couldn’t find the page you’re looking for.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<Button href="/" color="primary">
							Go back home
						</Button>
					</div>
				</Container>
			</main>
		</>
	);
}
