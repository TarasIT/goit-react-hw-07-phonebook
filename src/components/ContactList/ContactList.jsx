import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { getContacts, getContactsFilter } from 'redux/selectors';

export const ContactList = ({ children }) => {
  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(getContactsFilter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(contactsFilter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(({ name, id, number }) => {
        return <ContactItem key={id} name={name} id={id} number={number} />;
      })}
      {children}
    </ul>
  );
};
