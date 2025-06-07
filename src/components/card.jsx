import { Link } from "react-router-dom";


const Card = ({id, title, description, image}) => {
	console.log({id, title, description, image});
	return (
		<Link to={"/course/" + id} className="card">
			<img src={image} alt={"URL: " + image} className="card__image" />
			<div className="card__content">
				<h3 className="card__title">{title}</h3>
				<p className="card__description">{description}</p>
			</div>
		</Link>
	);
};

export default Card;
