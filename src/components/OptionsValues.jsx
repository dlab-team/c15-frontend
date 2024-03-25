import { useContext } from "react"
import AuthContext from "../context/Context"

const OptionsValues = ({optionCount}) => {
    const {setValue} = useContext(AuthContext)

  return (
    <div>
        {optionCount === 2 && (
                    <select name="" id="" className="h-10 pl-2 rounded-lg border-2 border-gray-500 shadow-md" onChange={(e) => setValue(e.target.value)}>
                        <option value="0">0</option>
                        <option value="10">10</option>
                    </select>
                )}
        {optionCount === 3 && (
                    <select name="" id="" className="h-10 pl-2 rounded-lg border-2 border-gray-500 shadow-md" onChange={(e) => setValue(e.target.value)}>
                        <option value="0">0</option>
                        <option value="5">5</option>
                            <option value="10">10</option>
                    </select>
                )}
        {optionCount === 5 && (
                    <select name="" id="" className="h-10 pl-2 rounded-lg border-2 border-gray-500 shadow-md" onChange={(e) => setValue(e.target.value)}>
                        <option value="0">0</option>
                        <option value="2,5">2,5</option>
                        <option value="5">5</option>
                        <option value="7,5">7,5</option>
                        <option value="10">10</option>
                    </select>
                )}
    </div>
  )
}

export default OptionsValues