import { Link } from "react-router-dom";

const Card = ({id, courseId, title, image, description, button}) => {
	return (
		<div to={"/course/" + id} className="card lesson">
			<img src={image} alt={"URL: " + image} className="card__image" />
			<div className="card__content">
				<h3 className="card__title">{title}</h3>
				<p className="card__description">{description}</p>
				{button && <Link to={`/course/${courseId}/lesson/${id}/lecture`} className="link brd card-small__button start lesson-card" key={id}>Start</Link>}
			</div>
		</div>
	);
};

export default Card;
