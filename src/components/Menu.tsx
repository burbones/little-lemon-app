import card_1 from '../img/greek salad.jpg';

function Menu() {
  return (
    <div className='menu'>
      <h1>Our menu:</h1>

      <article>
            <div className='pic'>
                <img src={card_1} alt='Greek Salad'/>
            </div>
            <div className='title'>
                <h3>Greek Salad</h3>
                <p className='price'>$12.99</p>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
        </article>

    </div>
  )
}

export default Menu;