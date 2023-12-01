import { useSelector } from 'react-redux';

export const Result = () => {
  const result = useSelector(state => state.summ.balance);
  return (
    <div>
      <p>result: {result}</p>
    </div>
  );
};
