import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./redux/store"
import { decrement, increment } from "./redux/features/counter/counterSlice";

function App() {

  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();



  return (
    <div>
      <div className="">
          <button className="bg-rose-300 p-6 rounded-lg gap-6" onClick={()=> dispatch(increment())}>Increment</button>
          <div>
            {count}
          </div> 
          <button className="bg-rose-300 p-6 rounded-lg" onClick={()=> dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}

export default App
