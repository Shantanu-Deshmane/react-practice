import { useState } from "react";

const CountHOC = (OldComponent, IncreamentBy = 1) => {
    return function ChangedComponent (props){
        const [count, setCount] = useState(0)
        return <OldComponent {...props} count={count} IncreamentCount={() => setCount(count+IncreamentBy)}/>
    }
}

export default CountHOC;