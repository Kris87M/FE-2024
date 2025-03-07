import styles from './Favorite.module.scss';
import PageTitle from "../PageTitle/PageTitle";
import Card from "../Card/Card";
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';

const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCards);

    if (favoriteCards.length === 0) 
    return ( 
      <PageTitle title='Favorite' subtitle='No cards' />
    );


  return (
    <>
      <PageTitle title='Favorite' subtitle='Lorem ipsum' />
      <div className={styles.container}>
        <div className={styles.column}>
          <ul className={styles.cards}>
            { favoriteCards.map(card => <Card key={card.id} id={card.id} isFavorite={card.isFavorite} title={card.title} />) }
          </ul>
        </div>
      </div>
    </>
  )
}

export default Favorite
