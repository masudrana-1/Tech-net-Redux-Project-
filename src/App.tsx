import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./redux/store"
import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice";

function App() {

  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();



  return (
    <div>
      <div className="flex gap-6">
          <button className="bg-rose-300 p-6 rounded-lg gap-6" onClick={()=> dispatch(increment())}>Increment</button>
          <button className="bg-rose-300 p-6 rounded-lg gap-6" onClick={()=> dispatch(incrementByAmount(5))}>incrementByAmount</button>
          <div>
            {count}
          </div> 
          <button className="bg-rose-300 p-6 rounded-lg" onClick={()=> dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}

export default App
