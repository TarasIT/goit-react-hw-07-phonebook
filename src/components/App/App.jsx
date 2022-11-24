import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectFilteredContacts,
} from 'redux/selectors';
import { Contacts, Container, NoContactsMessage, Title } from './App.styled';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);

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
