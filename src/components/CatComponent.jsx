import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { Link } from "react-router-dom";

function CatComponent({ cat }) {
	return (
		<>
			<Card
				style={{
					width: "100%",
				}}>
				<img
					alt='Sample'
					src={`https://robohash.org/${cat.email}.png?size=200x200&set=set4`}
					className='p-5'
				/>
				<CardBody>
					<CardTitle tag='h5'>{cat.name}</CardTitle>
					<CardText>{cat.email}</CardText>
					<Link to={`/cat/${cat.id}`}>
						<Button>See Cat details</Button>
					</Link>
				</CardBody>
			</Card>
		</>
	);
}

export default CatComponent;
