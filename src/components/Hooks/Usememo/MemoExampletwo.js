import React, { useMemo, useState } from 'react'

const MemoExampletwo = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(0);


    // PROBLEM STATEMENT - function slowed the speed for increment through both the buttons

    // function isEven(){
    //     let i = 0;
    //     while(i<2000000000) i++;
    //     console.warn('function is runnning')
    //     return count%2===0
    // }

// SOLUTION USING USEMEMO
    const isEven = useMemo(()=>{
        let i = 0;
        while(i<2000000000) i++;
        console.warn('function is runnning')
        return count%2===0
    },[count])

    //because of count dependency count button is slow but when we use usememo it does not affect item update button ;

  return (
    <div className='text-3xl border-4 border-pink-500 text-center'>
        <h1>useMemo Example : 2</h1>
        <button className='m-2 p-2 bg-red-400' onClick={()=>setCount(count+1)}>count : {count} {isEven?'even':'odd'}</button>
        <button className='m-2 p-2 bg-green-400' onClick={()=>setItem(item+1)}>item : {item}</button>
    </div>
  )
}

export default MemoExampletwo