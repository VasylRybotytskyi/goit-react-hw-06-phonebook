import { FilterWrapper, FilterLabel, FilterInput } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <FilterWrapper>
      <FilterLabel htmlFor="find">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        onChange={event => dispatch(setFilter(event.target.value.trim()))} // викликає редюсер з екшеном setFilter
        value={filter}
        id="find"
        name="find"
      />
    </FilterWrapper>
  );
};
