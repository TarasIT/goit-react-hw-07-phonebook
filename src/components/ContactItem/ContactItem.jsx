import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';
import { filterContacts } from 'redux/filterSlice';
import { Contact, ContactsDeleteBtn, Item, Number } from './ContactItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsFilter } from 'redux/selectors';

export const ContactItem = ({ name, id, number }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  return (
    <Item>
      <Contact>
        {name}: <Number>{number}</Number>
      </Contact>
      <ContactsDeleteBtn
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
          filter && dispatch(filterContacts(''));
        }}
      >
        Delete
      </ContactsDeleteBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
