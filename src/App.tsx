import { useSelector } from "react-redux"
import { RootState } from "./redux/store"

function App() {

  const { count } = useSelector((state: RootState) => state.counter)
  // const dispatch = useDispatch()



  return (
    <div>
      <div className="">
          <button className="bg-rose-300 p-6 rounded-lg gap-6">Increment</button>
          <div>
            {count}
          </div> 
          <button className="bg-rose-300 p-6 rounded-lg">Decrement</button>
      </div>
    </div>
  )
}

export default App
