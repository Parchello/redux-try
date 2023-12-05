import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { PhoneBook } from './PhoneBook/PhoneBook';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phone Book</h1>
      <PhoneBook />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
};
