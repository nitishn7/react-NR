const Shimmer = () => {
	return (
		<div className="shimmer-container">
			{new Array(9).fill().map((_, index) => {
				return <div key={index} className="shimmer-card"></div>;
			})}
		</div>
	);
};

export default Shimmer;
