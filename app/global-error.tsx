"use client";
import * as React from "react";

import { Button } from "../components/button";
import { Container } from "../components/container";
import { Heading } from "../components/heading";
import { Text } from "../components/text";

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	React.useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);
	return (
		<Container className="py-24 sm:py-32">
			<Text
				size="6"
				weight="semibold"
				className="text-primary-600"
				align="center"
			>
				Oops!
			</Text>
			<Heading as="h2" weight="medium" size="9" className="mt-4">
				Something went wrong
			</Heading>
			<Text lowContrast lineHeight="relaxed" className="mt-6" align="center">
				Please try refreshing the page or contact support if the problem
				persists.
			</Text>
			<div className="mt-10 flex items-center justify-center gap-x-6">
				<Button onClick={() => reset()} color="primary">
					Refresh page
				</Button>
			</div>
		</Container>
	);
}
