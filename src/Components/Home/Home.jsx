import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import('./Home.css')


const Home = () => {
    const [selectedActor, setSelectedActor] = useState([])
    const [allActor, setActor] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setActor(data))
    }, [])

    const handleSelectActor = (actor) => {
        const isExist = selectedActor.find(item => item.id === actor.id);

        let count = actor.salary;


        if (isExist) {
            return alert(' You have already selected this actor')
        } else {

            selectedActor.forEach((item) => {
                count = count + item.salary

            });

            const totalRemaining = 100000 - count;

            if( count > 100000){
                alert('your balance is too low')

            }else{
                setTotalCost(count);
                 setRemaining(totalRemaining); 
            }
            



            setSelectedActor([...selectedActor, actor]);
        }

    }




    return (
        <div>
            <h1 className='text-5xl font-bold mb-8 text-center'> Iron Man 4 All Budget </h1>
            < hr />
            <div className="home-container flex">
                <div className="card-container flex flex-wrap w-2/3  ml-8 gap-5 mt-8	 ">
                    {
                        allActor.map(actor => (
                            <div key={actor.id} className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={actor.image} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="text-2xl fond-normal font-bold">{actor.name}</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, impedit.</p>
                                    <div className="flex gap-7 font-semibold text-sm">
                                        <p>Position : {actor.role}</p>
                                        <p >Salary: $ {actor.salary}</p>
                                    </div>
                                    <div className="card-actions">
                                        <button onClick={() => handleSelectActor(actor)} className="btn btn-success px-20 mt-5 text-gray-100	font-bold	">Chose Me </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>

                <div className="new-card  mt-8 text-4xl font-bold text-white">
                    <Card selectedActor={selectedActor} remaining={remaining} totalCost={totalCost}></Card>
                </div>
            </div>
        </div>
    );
};

export default Home;