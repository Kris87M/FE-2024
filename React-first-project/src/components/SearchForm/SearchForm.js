import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateSearchString } from '../../redux/searchStringRedux';

const SearchForm = () => {

    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateSearchString({ title: '' }));
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateSearchString({ title }))
        setTitle('');
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={title} onChange={e => setTitle(e.target.value)}/>
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;