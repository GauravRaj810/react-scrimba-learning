export default function ExampleProps2({name , phone , email}){
    return(
       <div className="container  mt-9">
           <h2 className="text-2xl text-[purple]">Props with destrcuting example </h2>
             <h2>{name}</h2>
             <p className="color-red">Phone: {phone}</p>
             <p>email: {email}</p>
       </div>
    );

}