import {useState} from 'react';

export function useCounter(){
    const [count, setCount] = useState(0);
    
    function increment(){
        setCount(count+1);
    }
    function Decrement(){
        setCount(count-1);
    }

    return [count , increment, Decrement];
    
}