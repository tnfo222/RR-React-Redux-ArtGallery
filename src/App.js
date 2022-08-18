import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { setData, clearData, inputId, incrementId, decrementId } from './features/dataSlice';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data)

  const renderImg = () => {
    if(data.apiData) {
      return <img style = {{'width': '100vw'}} src={data.apiData.primaryImage} alt={data.apiData.title} />
    }
    else {
      return <p>Error404</p>
    }
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(fetchData())}>Trigger Thunk</button>
        <button onClick={() => dispatch(clearData())}>Clear</button>
        <button onClick={() => dispatch(incrementId())}>Next</button>
        <button onClick={() => dispatch(decrementId())}>Back</button>
      </div>
      <input onChange={(e) => { 
        dispatch(inputId(Number(e.target.value)))
      }} />
      <div>
        {renderImg()}
      </div>
    </div>
  );
}

export default App;
