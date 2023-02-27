import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
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
					<Button>See Cat details</Button>
				</CardBody>
			</Card>
		</>
	);
}

export default CatComponent;
