import "./Coin.css";

const Coin = ({ isHidden, image }) => {
	return (
		<>
			<img
				className={`Coin-image ${isHidden}`}
				src={image}
				alt="no img found"
				data-testid="coin-image"
			/>
		</>
	);
};

export default Coin;
