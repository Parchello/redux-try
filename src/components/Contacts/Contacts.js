import { useDispatch } from 'react-redux';

import { onDelete } from 'Redux/contactsSlice';

export const Contacts = ({ contactList }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {
        <ul>
          {contactList.map(contact => (
            <li key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <button
                type="button"
                onClick={() => dispatch(onDelete(contact.id))}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};
