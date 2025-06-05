import { ReactComponent as ArrowDown } from '../assets/ico/arrow.svg';
import catLogo from '../assets/ico/cat-gray.svg';
import catLogoP from '../assets/ico/cat-purple.svg';
import catLogoO from '../assets/ico/cat-orange.svg';
import catLogoW from '../assets/ico/cat-white.svg';


const Home = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="home">
          <h1 className="home__title"><span className="home__mark">THYNK:</span> math, science, logic – all in one epic game :3</h1>
          <ArrowDown className="home__arrow" width={32} height={32} />
        </div>
        <div className="home__list">
          <div className="home__block">
            <div className="home__img jump">
              <img src={catLogo} alt={catLogo}/>
            </div>
            <div className="home__text">
              <div className="home__text-title green">Let’s play with us!</div>
              <div className="home__text-main">
                Learning can be fun!<br/>
                Imagine studying that feels like a game 🎮<br/>
                We’ve created a unique system where every task is a challenge, every quiz is a level, and correct answers bring you points, achievements, and real joy 🤩<br/>
                Collect stars, complete daily quests, compete with friends or just enjoy the ride.<br/>
                <br/>
                Learning is your game — and you’re here to win!
              </div>
            </div>
          </div>
          <div className="home__block image-right">
            <div className="home__img waving">
              <img src={catLogoW} alt={catLogoW}/>
            </div>
            <div className="home__text">
              <div className="home__text-title orange">We make your study is interesting :)</div>
              <div className="home__text-main">
                Your learning experience should feel like an adventure, not a chore ✨<br/>
                We believe education should be exciting and emotionally engaging.<br/>
                That’s why we’ve added visuals, mini-quests, surprise rewards, and interactive formats to keep you motivated every single day 🧠💡<br/>
                <br/>
                Don’t just memorize — understand.<br/>
                Don’t just read — explore.<br/>
                Don’t just study — enjoy!
              </div>
            </div>
          </div>
          <div className="home__block">
            <div className="home__img bounce-scale">
              <img src={catLogoO} alt={catLogoO}/>
            </div>
            <div className="home__text">
              <div className="home__text-title blue">Study with friends ^^</div>
              <div className="home__text-main">
                Learning is better when shared 🫶<br/>
                  Invite your friends, track each other’s progress, cheer for each other, and grow together.<br/>
                  We’ve added team missions, friend leaderboards, and even chat support so you can feel the vibe of a true learning community 💬💪<br/>
                  <br/>
                  Even the hardest challenges become easier when you're not alone.<br/>
                  Let’s grow smarter — together!
                </div>
            </div>
          </div>
          <div className="home__block image-right">
            <div className="home__img bouncy-wiggle">
              <img src={catLogoP} alt={catLogoP}/>
            </div>
            <div className="home__text">
              <div className="home__text-title red">Free plan can use anyone :D</div>
              <div className="home__text-main">
                Learning is better when shared 🫶<br/>
                  Invite your friends, track each other’s progress, cheer for each other, and grow together.<br/>
                  We’ve added team missions, friend leaderboards, and even chat support so you can feel the vibe of a true learning community 💬💪<br/>
                  <br/>
                  Even the hardest challenges become easier when you're not alone.<br/>
                  Let’s grow smarter — together!
                </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default Home;
