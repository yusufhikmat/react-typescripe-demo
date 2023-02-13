type GreetProps={
    name:string
}

const Greet = (props:GreetProps) => {
  return (
    <div>
        <h2>welcome back {props.name}</h2>
    </div>
  )
}

export default Greet