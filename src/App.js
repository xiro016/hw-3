import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { compareNumber } from "./store/Actions";




const App = () => {
  const dispatch = useDispatch();
  const comparisonResult = useSelector((state) => state.comparisonResult);

  const handleNumberInput = (e) => {
    const enteredNumber = parseInt(e.target.value);

    dispatch(compareNumber(enteredNumber));
  };

  function updatePage() {
    window.location.reload();
  }

 

  return (
    <div className="game">
      <input type="number" onChange={handleNumberInput} />
      <p>{comparisonResult}</p>
      <button onClick={updatePage}>Новая игра</button>
    </div>
  );
};
export default App;
