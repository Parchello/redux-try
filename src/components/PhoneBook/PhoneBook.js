import { Formik, Field, ErrorMessage, Form } from 'formik';

export const PhoneBook = ({ onAdd }) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <Form>
          <label>Name</label>
          <Field id="firstName" name="name" placeholder="Place name here" />
          <ErrorMessage name="name" component="span" />

          <label>Number</label>
          <Field id="number" name="number" placeholder="Phone number" />
          <ErrorMessage name="number" component="span" />

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};
