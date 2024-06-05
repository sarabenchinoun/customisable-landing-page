import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Text } from "@/components/text";

export default function NotFound() {
	return (
		<>
			<main className="h-full">
				<Container className="py-24 sm:py-32">
					<Text
						size="6"
						weight="semibold"
						className="text-primary-600"
						align="center"
					>
						404
					</Text>
					<Heading as="h2" weight="medium" size="9" className="mt-4">
						Page not found
					</Heading>
					<Text
						lowContrast
						lineHeight="relaxed"
						className="mt-6"
						align="center"
					>
						Sorry, we couldn’t find the page you’re looking for.
					</Text>
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
