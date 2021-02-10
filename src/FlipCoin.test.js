import { render, fireEvent } from "@testing-library/react";
import FlipCoin from "./FlipCoin";
import App from "./App";

beforeEach(function () {
	jest
		.spyOn(Math, "random")
		.mockReturnValueOnce(0.25)
		.mockReturnValueOnce(0.75);
});

afterEach(function () {
	Math.random.mockRestore();
});

// smoke test
it("testing if the app renders without crashing", function () {
	render(<App />);
});

// snapshot test
it("matches snapshot", function () {
	const { asFragment } = render(<App />);
	expect(asFragment()).toMatchSnapshot();
});

// specializing testing

it("checks if no image when page loads", function () {
	const { queryByTestId, queryByAltText, queryByText } = render(<FlipCoin />);
	// expect the image in the DOM, but hidden
	expect(queryByAltText("no img found")).toBeInTheDocument();
	expect(queryByTestId("coin-image")).toHaveClass("FlipCoin-hidden");

	// expect getting 1 flip which is either head or tail
	const btn = queryByText("Flip MEEE!!!");
	fireEvent.click(btn);
	const p = queryByText("Out of 1 flips, there have been 1 heads and 0 tails.");
	expect(p).toBeInTheDocument();

	fireEvent.click(queryByText("Flip MEEE!!!"));
	expect(
		queryByText("Out of 2 flips, there have been 1 heads and 1 tails.")
	).toBeInTheDocument();
});
