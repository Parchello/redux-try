import { minus, plus } from 'Redux/summSlice';
import { useDispatch } from 'react-redux';

export const Buttons = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(plus(' '))}>+1</button>
      <button onClick={() => dispatch(minus(' '))}>-1</button>
    </div>
  );
};
