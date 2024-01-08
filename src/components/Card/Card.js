import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

const Card = props => {

    const dispatch = useDispatch();
    console.log('isFavorite', props.isFavorite);

    const handleToggleFavorite = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite(props.id));
    };

    const handleRemoveCard = (e) => {
        e.preventDefault();
        dispatch(removeCard(props.id));
    }

    return (
        <li className={styles.card}>
            {props.title}
            <div>
                <button type="button" className={clsx(props.isFavorite && styles.isFav)} onClick={handleToggleFavorite}>
                    <i className="fa fa-star-o"></i>
                </button>
                <button type="button" onClick={handleRemoveCard}>
                    <i className="fa fa-trash"></i>
                </button>
            </div>
        </li>
    );
};

export default Card;