import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';
import { nanoid } from 'nanoid';
import {
  FormContainer,
  FormErrorMessage,
  FormInput,
  SubmitButton,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const formSubmitHandler = (values, { resetForm }) => {
    const { name } = values;
    const existingContact = contacts.find(contact => contact.name === name);

    if (existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = { id: nanoid(), ...values };
    dispatch(addContact(newContact));

    resetForm(); // Очистка полів форми
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={formSubmitHandler}
      >
        <FormContainer>
          <label htmlFor="name">Name</label>
          <FormInput type="text" name="name" id="name" />
          <FormErrorMessage name="name" component="span" />
          <label htmlFor="number">Number</label>
          <FormInput type="tel" name="number" id="number" />
          <FormErrorMessage name="number" component="span" />
          <SubmitButton type="submit">Add contact</SubmitButton>
        </FormContainer>
      </Formik>
    </>
  );
}
