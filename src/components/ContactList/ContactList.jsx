import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/actions";
import { getContacts, getFilter } from "../../redux/selectors";
import styles from './ContactList.module.css';

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const dispatch = useDispatch();
    console.log(contacts);

    const handleDelete = (id) => {
        dispatch(deleteContact(id))
    }

    const getFilteredContacts = () => {
        if (!filter) {
            return contacts;
        }
        const filteredContacts = contacts.filter(({ name }) => {
            const normalizedName = name.toLowerCase();
            return (
                normalizedName.includes(filter)
            )
        })
        return filteredContacts;
    }
    
    const filteredContacts = getFilteredContacts();

    const items = filteredContacts.map(({ id, name, number }) =>
        <li className={styles.contactItem} key={id}>{name}: {number} <button className={styles.deleteButton} onClick={() => handleDelete(id)} type='button'>Delete</button></li>);

        return (
            <ul className={styles.contactList}>
                {items}
            </ul>
        )
}
