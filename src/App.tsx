import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";


function App() {

  const { count } = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();



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
