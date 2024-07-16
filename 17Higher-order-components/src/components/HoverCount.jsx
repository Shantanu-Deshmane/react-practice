import CountHOC from "./CountHOC"

function HoverCount({count, IncreamentCount}) {

  return (
    <div>
        <h2>Count is: {count} </h2>
        <button onMouseOver={IncreamentCount}>Hover here</button>
    </div>
  )
}

export default CountHOC(HoverCount,10) 