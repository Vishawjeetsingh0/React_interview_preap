import React, { useReducer } from 'react'

function reducer(state, action){
    switch (action.type){
        case 'incremented_age': {
            return{
                name: state.name,
                age: state.age +1
            }
        }
        case 'decremented_age': {
            return{
                name: state.name,
                age: state.age -1
            }
        } 
        case 'reset_age' : {
            return{
                age: state.age * 0
            }
        }
        case 'changes_name':{
            return{
                name: action.nextName,
                age: state.age
            }
        }
        default :
    }
    throw Error('Unknown action: ' + action.type);
}

// function reducer(state, action){
//     if(action.type === 'incremented_age'){
//         return{
//             age: state.age + 1
//         };
//     }else if(action.type === 'decremented_age'){
//         return{
//             age: state.age -1
//         }
//     }
//     throw Error('unknown action');
// }

const initialState = {name:'vishu', age:23};

const AgeIncrementer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    // const [state, dispatch] = useReducer(reducer, {age: 42});

    const handleChange = (e) =>{
        dispatch({
            type:'changes_name',
            nextName:e.target.value
        })
    }

  return (
    <div className='text-center text-4xl m-2 border-4 border-red-900'>
        <input className=' border-2 border-black bg-yellow-400' onChange={handleChange} value={state.name}/>
        <button className='bg-green-400 m-2 p-2' onClick={()=> dispatch({type: 'incremented_age'})}>Increment Age</button>
        <button className='bg-red-300 m-2 p-2' onClick={()=> dispatch({type: 'decremented_age'})}>Decrement Age</button>
        <button className='bg-red-600 m-2 p-2' onClick={()=> dispatch({type: 'reset_age'})}>Reset Age</button>
        <p>Hey {state.name},  you are {state.age}</p>
    </div>
  )
}

export default AgeIncrementer