import { Link } from 'react-router-dom';
import { ReactComponent as LogoDiscord } from '../assets/ico/dicord.svg';
import { ReactComponent as LogoInstagram } from '../assets/ico/instagram.svg';
import { ReactComponent as LogoTelegram } from '../assets/ico/telegram.svg';
import { ReactComponent as LogoGithub } from '../assets/ico/github.svg';
import { ReactComponent as LogoFigma } from '../assets/ico/figma.svg';

const Footer = () => {
return (
    <footer className="footer">
				<div className="container">
					<div className="footer__title">THYNK</div>
					<div className="footer__nav">
						<div className="footer__link link-blue">
							<Link to="/" className='footer_link-a'>Main</Link>
						</div>
						<div className="footer__link left-triangle-blue"><Link to="/about" className='footer_link-a'>About</Link></div>
						<div className="footer__link left-triangle-blue"><Link to="https://t.me/thynkcommunity" className='footer_link-a'>Community</Link></div>
						<div className="footer__link left-triangle-blue"><Link to="https://telegra.ph/FAQ--Frequently-Asked-Questions-05-31" className='footer_link-a'>FAQ</Link></div>
						<div className="footer__link left-triangle-blue"><Link to="/login" className='footer_link-a'>Log&Reg</Link></div>
					</div>
					<div className="footer__copyright both-triangles-blue">
						Designed & Developed By Artemii Tsipino
					</div>
				<div className="footer__socials">
					<div className="footer__socials-title">Social</div>
					<div className="footer__socials-links">
						<div className="footer__socials-links inst"><LogoInstagram /></div>
						<div className="footer__socials-links disc"><LogoDiscord /></div>
						<div className="footer__socials-links teleg"><LogoTelegram /></div>
					</div>
				</div>
				<div className="footer__sources">
					<div className="footer__sources-title">Souces</div>
					<div className="footer__sources-links">
						<div className="footer__sources-links github"><LogoGithub /></div>
						<div className="footer__sources-links figma"><LogoFigma /></div>
					</div>
				</div>
				</div>
		</footer>
  );
};

export default Footer;
