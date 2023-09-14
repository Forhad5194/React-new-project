/* eslint-disable react/prop-types */


const Card = ({selectedActor,remaining,totalCost}) => {
    // console.log(selectedActor);
    return (
        <div>
             <h3 className="text-2xl font-bold bg-success px-5 py-5 rounded-xl	"> Total Actor : {selectedActor.length} </h3>
             <div className="flex gap-8 mt-10 mb-3">
             <h5 className="text-2xl font-bold bg-success px-5 py-5 rounded-xl	">Remaining  :  {remaining}</h5>
             <h5 className="text-2xl font-bold bg-success px-5 py-5 rounded-xl	"> Total Cost : {totalCost}</h5>
            
             </div>
             <hr />
             {
                selectedActor.map(actor =>( 
                   
                   
                    <li className="list-none text-2xl text-black text-center mt-5  font-bold bg-[#c7bdf5] px-5 py-5 rounded-xl m" key={actor.id}> {actor.name}</li>
                ) )
             }
        </div>
    );
};

export default Card;