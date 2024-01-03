import styles from './CardForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';


const CardForm = ({ columnId }) => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_CARD', payload: { title, columnId } });
        setTitle('');
    };

	return (
        <form className={styles.CardForm} onSubmit={handleSubmit}>
            <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
	);
};

export default CardForm;