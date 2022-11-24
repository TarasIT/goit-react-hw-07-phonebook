import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = ({ children }) => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.map(({ name, id, number }) => {
        return <ContactItem key={id} name={name} id={id} number={number} />;
      })}
      {children}
    </ul>
  );
};
