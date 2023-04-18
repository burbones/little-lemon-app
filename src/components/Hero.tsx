import main_hero from '../img/main_hero.jpg';

function Hero() {
  return (
    <div className="hero">
        <section className="hero_content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button>Reserve a Table</button>
          <div className='box'>
            <img src={main_hero} alt="main hero" />
          </div>
        </section>

    </div>
  )
}

export default Hero
