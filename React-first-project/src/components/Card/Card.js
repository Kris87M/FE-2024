import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { removeCard, toggleFavorite } from '../../redux/cardsRedux';

const Card = props => {

    const dispatch = useDispatch();
    const handleFavorite = e => {
        e.preventDefault();
        dispatch(toggleFavorite(props.id))
    };

    const handleRemove = e => {
        e.preventDefault();
        dispatch(removeCard(props.id))
    }

    return (
        <li className={styles.card}>
            {props.title}
            <div>
                <button className={clsx("fa fa-star-o", styles.button, props.isFavorite && styles.isActive)} onClick={handleFavorite}></button>
                <button className={clsx("fa fa-trash", styles.button)} onClick={handleRemove}></button>
            </div>
        </li>
    );
};

export default Card;