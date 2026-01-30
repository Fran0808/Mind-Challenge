import { useState, useEffect } from "react";
import Square from "./Square";


const Board = () => {
    const size = 9;
    const array = Array(size).fill(null);

    const [sequence, setSequence] = useState<number[]>([]);
    const [active, setActive] = useState<number | null>(null);

    useEffect(() => {
       addToSequence()       
    }, []);

    useEffect(() => {
        console.log(sequence)
    }, [sequence])

    useEffect(() => {
        if(sequence.length > 0){
            playSequence()
        }
    }, [sequence])

    const addToSequence = () => {
        const randomIndex = Math.floor(Math.random() * size);
        setSequence(prev => [...prev, randomIndex])        
    }    
    
    const playSequence = () => {
        sequence.forEach((index, i) => {
        setTimeout(() => setActive(index), i * 1000);
        setTimeout(() => setActive(null), i * 1000 + 500);
    });
};

    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-2 w-64 h-64">
        {array.map((_, index: number) => (
            <Square 
            key={index} 
            index={index}
            isActive={active === index}
            />
        ))}       
        </div>
    );
};

export default Board;
