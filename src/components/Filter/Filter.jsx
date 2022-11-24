import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { selectContactsFilter } from 'redux/selectors';
import { FilterContainer, FilterInput, FilterLabel } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectContactsFilter);

  return (
    <FilterContainer>
      <FilterLabel>
        Find a contact by name
        <FilterInput
          type="text"
          name="filter"
          value={inputValue}
          onChange={e => dispatch(filterContacts(e.target.value.trim()))}
          required
        />
      </FilterLabel>
    </FilterContainer>
  );
};
