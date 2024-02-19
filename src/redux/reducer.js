import { ADD_CONTACT, DELETE_CONTACT, FILTER } from "./constants";

const initialState = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
    ],
    filter: ''
}

const reducer = (state = initialState, { type, payload }) => {
    const { contacts } = state;
    switch (type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...contacts, payload]
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: contacts.filter(contact => contact.id !== payload)
            };
        case FILTER: 
            return {
                ...state,
                filter: payload
            }
        default:
            return state;
    }
};

export default reducer;