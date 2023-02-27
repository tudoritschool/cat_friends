import { Link, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

function InfoPage() {
	const navigate = useNavigate();

	const goToList = () => {
		// COD
		navigate("/cats");
	};

	return (
		<>
			<h1>Informatii despre aplicatie</h1>
			<Link to='/cats'>
				<Button>Mergi la lista!</Button>
			</Link>
			<Button color='primary' onClick={goToList}>
				Mergi la lista JS!
			</Button>
		</>
	);
}

export default InfoPage;
