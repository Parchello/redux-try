import { Buttons } from './Buttons/Buttons';
import { Result } from './result/result';

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
      <Buttons />
      <Result />
    </div>
  );
};
