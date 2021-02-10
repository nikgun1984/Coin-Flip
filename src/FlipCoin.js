import { useState } from "react";
import { coinSides } from "./helper";
import Coin from "./Coin";
import "./FlipCoin.css";

const FlipCoin = () => {
	const flipCoin = () => {
		const randSide = Math.round(Math.random());
		setSide(randSide);
		setHidden("");
		setImg(coinSides[side]);
		setNumFlips(numFlips + 1);
		side === 1 ? setNumTails(numTails + 1) : setNumHeads(numHeads + 1);
	};

	const [side, setSide] = useState(Math.round(Math.random()));
	const [img, setImg] = useState("");
	const [numFlips, setNumFlips] = useState(0);
	const [numHeads, setNumHeads] = useState(0);
	const [numTails, setNumTails] = useState(0);
	const [hidden, setHidden] = useState("FlipCoin-hidden");

	return (
		<div>
			<h1>Let's flip a coin</h1>
			<Coin isHidden={hidden} image={img} />
			<div className="d-flex justify-content-center">
				<button
					onClick={flipCoin}
					className="btn btn-outline-dark text-bold mt-4"
				>
					Flip MEEE!!!
				</button>
			</div>
			<p className="mt-4" id="result">
				Out of {numFlips} flips, there have been {numHeads} heads and {numTails}{" "}
				tails.
			</p>
		</div>
	);
};

export default FlipCoin;
