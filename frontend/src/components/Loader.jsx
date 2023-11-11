import { Spinner } from "react-bootstrap";

const Loader = () => {
	return (
		<Spinner
			animation="border"
			roll="status"
			style={{
				width: "100px",
				height: "100px",
				margin: "auto",
				display: "block",
			}}
		/>
	);
};

export default Loader;
