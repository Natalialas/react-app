import styles from './ListForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';


const ListForm = props => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ listId: props.listId, title, description }));
        setTitle('');
        setDescription('');
    };

	return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <label className={styles.label}>Title: </label>
            <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <label className={styles.label}>Description: </label>
            <TextInput type="text" value={description} onChange={e => setDescription(e.target.value)} />
            <Button>Add list</Button>
        </form>
	);
};

export default ListForm;