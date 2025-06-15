import { Link } from "react-router-dom";


const CardSmall = ({id, courseId, title, image, number}) => {
	return (
		<Link to={`/course/${courseId}/lesson/${id}`} className="card-small__link">
			<li className="card-small">
				<div className="card-small__image">
					<img src={image} alt={image} />
				</div>
				<div className="card-small__title">Lesson {number}: {title}</div>
				<div className="card-small__navigate">
					<Link to={`/course/${courseId}/lesson/${id}/lecture`} className="link brd card-small__button start">Start</Link>
					<Link to={`/course/${courseId}/lesson/${id}`} className=" link brd card-small__button">Detail</Link>
				</div>	
			</li>
		</Link>
	);
};

export default CardSmall;
