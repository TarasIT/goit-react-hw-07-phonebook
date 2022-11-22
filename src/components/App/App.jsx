import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import {
  getContacts,
  getContactsFilter,
  getError,
  getIsLoading,
} from 'redux/selectors';
import { Contacts, Container, NoContactsMessage, Title } from './App.styled';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(getContactsFilter);
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(contactsFilter.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />

      {contacts.length !== 0 ? (
        <>
          <Contacts>Contacts</Contacts>
          <Filter />
          {filteredContacts.length !== 0 ? (
            <ContactList />
          ) : (
            <NoContactsMessage>No matches found</NoContactsMessage>
          )}
        </>
      ) : (
        <NoContactsMessage>
          There are no contacts yet. Please fill the form to add a new one!
        </NoContactsMessage>
      )}

      {isLoading && !error && <Loader />}
    </Container>
  );
};
