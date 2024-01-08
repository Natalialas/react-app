import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = props => {

    const dispatch = useDispatch();
    console.log('isFavorite', props.isFavorite);

    const handleToggleFavorite = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite(props.id));
    };

    return (
        <li className={styles.card}>
            {props.title}
            <div>
                <button type="button" className={clsx(props.isFavorite && styles.isFav)} onClick={handleToggleFavorite}>
                    <i className="fa fa-star-o"></i>
                </button>
            </div>
        </li>
    );
};

export default Card;