export default function propsExample(props) { // passing as parameter
  return (
    // props example 
    //  A simple component that receives name, phone, and email as props and displays them in a <div>.

    <div className="container primary ">

       <h3>{props.name}</h3>
       <p>Phone: {props.phone}</p>
       <p>Phone: {props.email}</p>
    </div>
  );
}
