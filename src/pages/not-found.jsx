import Button from "../components/button";

const NotFound = () => {
	return (
		<div className='notfound'>
			<h1 className='notfound__title'>This page have not found 🥺</h1>
	  	<a href="/" aria-label="Home" className='notfound__link link brd'>Home</a>
			<Button text="Click Me" onClick={() => alert("Nothing new, let's go to study!")} className='notfound__button'/>
		</div>
	);
};

export default NotFound;
