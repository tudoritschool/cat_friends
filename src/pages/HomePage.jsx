import { Input, Card, Container, Row, Col, Button } from "reactstrap";
import { useState } from "react";
import CatComponent from "../components/CatComponent";

function HomePage() {
	const [searchText, setSearchText] = useState("");
	const [catFriends, setCatFriends] = useState([
		{ id: 1, name: "Cat 1", email: "cat1@email.com" },
		{ id: 2, name: "Cat 2", email: "cat2@email.com" },
		{ id: 3, name: "Cat 3 Test", email: "cat3@email.com" },
		{ id: 4, name: "Cat 4 Test", email: "cat4@email.com" },
		{ id: 5, name: "Cat 5", email: "cat5@email.com" },
	]);

	return (
		<Container>
			<Row className='mt-5'>
				<Col className='d-flex justify-content-center'>
					<h1>Cat Friends</h1>
				</Col>
			</Row>
			<Row>
				<Col className='d-flex justify-content-center'>
					<Input
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
					/>
					<Button className='ms-2'>Search</Button>
				</Col>
			</Row>
			<Row className='row-cols-4 mt-4'>
				{catFriends
					.filter((cat) => {
						return cat.name.includes(searchText);
					})
					.map((cat, index) => {
						return (
							<Col key={"cat_" + index} className='mt-3'>
								<CatComponent cat={cat} />
							</Col>
						);
					})}
			</Row>
		</Container>
	);
}

export default HomePage;
