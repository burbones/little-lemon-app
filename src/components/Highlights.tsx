import card_1 from '../img/greek salad.jpg';
import card_2 from '../img/bruchetta.jpg';
import card_3 from '../img/lemon dessert.jpg';
import { Link } from 'react-router-dom';

function Highlights() {
  return (
    <div className="hightlights">
      <h1>This week's specials!</h1>
      <section>
        <article>
            <div className='pic'>
                <img src={card_1} alt='Greek Salad'/>
            </div>
            <div className='title'>
                <h3>Greek Salad</h3>
                <p className='price'>$12.99</p>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <h4>Order a delivery</h4>
        </article>

        <article>
            <div className='pic'>
                <img src={card_2} alt='Bruchetta'/>
            </div>
            <div className='title'>
                <h3>Bruchetta</h3>
                <p className='price'>$5.99</p>
            </div>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
            <h4>Order a delivery</h4>
        </article>

        <article>
            <div className='pic'>
                <img src={card_3} alt='Lemon Dessert'/>
            </div>
            <div className='title'>
                <h3>Lemon Dessert</h3>
                <p className='price'>$5.00</p>
            </div>
            <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <h4>Order a delivery</h4>
        </article>
        <Link to="/menu"><button>Online Menu</button></Link>
      </section>
    </div>  
  )
}

export default Highlights;
