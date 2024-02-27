import React, { useMemo, useState } from 'react'


const Memoexample = () => {
    const [count, setCount] = useState(0);
    const [item , setItem] = useState(10);

    // function multiMemo(){
    //     console.warn("multimemo is running");
    //     return count*5
    // }

    const multicountmemo = useMemo(function multiMemo(){
        console.warn("multimemo is running");
        return count*5
    },[count])

  return (
    <div className='text-center text-3xl border-4 border-purple-500' >
        <div>Usememo Example : 1</div>
        <h1>count : {count}</h1>
        <h1>Item : {item}</h1>
        <h1>multimemo : {multicountmemo}</h1>
        <button className='m-2 p-2 bg-green-500' onClick={()=>setCount(count+1)}>count update</button>
        <button className='m-2 p-2 bg-yellow-500' onClick={()=>setItem(item*10)}>Item update</button>
    </div>
  )
}

export default Memoexample