
import './App.css';
import CustomCounter from './components/CustomHooks/CustomCounter';
import ErrorCounter from './components/ErrorHandling/ErrorCounter';
import ErrorHandler from './components/ErrorHandling/ErrorHandler';
import Hoc from './components/Higher OrderComponents/Hoc';
import Callbackhook from './components/Hooks/UseCallback/Exampletwo/Callbackhook';
import ParentCallback from './components/Hooks/UseCallback/ParentCallback';
import DomManupulator from './components/Hooks/UseRef/DomManupulator';
import VideoPausePlay from './components/Hooks/UseRef/VideoPausePlay';
import Parent from './components/Hooks/Usecontext/Parent';
import Counteffect from './components/Hooks/Useeffect/Counteffect';
import MemoExampletwo from './components/Hooks/Usememo/MemoExampletwo';
import Memoexample from './components/Hooks/Usememo/Memoexample';
import AgeIncrementer from './components/Hooks/Usereducer/AgeIncrementer';
import Main from './components/Hooks/Usereducer/Todo/Main';
import TextUpdate from './components/Hooks/Usestate/TextUpdate';
import Addinarray from './components/Hooks/Usestate/UpdatingArrays/Addinarray';
import Challenge1 from './components/Hooks/Usestate/UpdatingObjects/Challenge1';
import Challenge1Solve from './components/Hooks/Usestate/UpdatingObjects/Challenge1Solve';
import Counter from './components/Hooks/Usestate/counter';
import HowLazyLoad from './components/LazyLoad/HowLazyLoad';
import Lifecycle from './components/LifeCycleMethods/AllLifeCycle/Lifecycle';
import MountingParent from './components/LifeCycleMethods/MountingPhase/MountingParent';
import UpdateCount from './components/LifeCycleMethods/UpdatingPhase/Example2/UpdateCount';
import UpadingPhase from './components/LifeCycleMethods/UpdatingPhase/UpadingPhase';
import Todo from './components/RTK/ToDo/features/Todo';
import TodoShow from './components/RTK/ToDo/features/TodoShow';
import CounterRedux from './components/RTK/features/CounterRedux';
import ParentA from './components/StateManagement/ContextApi&useContext/ParentA';
import ComponentA from './components/StateManagement/PropDrilling/ComponentA';
import PropsExample from './components/StateManagement/props/PropsExample';
import StateExample from './components/StateManagement/state/StateExample';

function App() {
  return (
    <>
     <h1 className='mb-5  border-b-8 border-purple-700 text-center text-8xl text-purple-700'>Hoooks</h1>
      <h1 className='text-center text-4xl text-red-600'>Usestate Examples</h1>
      <Counter/>
      <TextUpdate/>
      <Challenge1/>
      <Challenge1Solve/>
      <Addinarray/>
      <h1 className='text-center text-4xl text-red-600 mt-72'>useEffect Examples</h1>
      <Counteffect/>
      <h1 className='text-center text-4xl text-red-600 mt-2'>UseContext Examples</h1>
      <Parent/>
      <h1 className='text-center text-4xl text-red-600 mt-2'>UseReducer Examples</h1>
      <AgeIncrementer/>
      <Main/>
      <h1 className='text-center text-4xl text-red-600 mt-2'>UseMemo Examples</h1>
      <Memoexample/>
      <MemoExampletwo/>
      <h1 className='text-center text-4xl text-red-600 mt-2'>UseCallback Examples</h1>
      <ParentCallback/>
      <Callbackhook/>
      <h1 className='text-center text-4xl text-red-600 mt-2'>UseRef Examples</h1>
      <DomManupulator/>
      <VideoPausePlay/>
      <h1 className='mt-11 mb-8 border-b-8 border-red-500 text-center text-8xl text-red-500'> Higher Order Components</h1>
      <Hoc/>
      <h1 className='mt-11 mb-8 border-b-8 border-red-500 text-center text-8xl text-red-500'> Life Cycle Methods</h1>
      <MountingParent></MountingParent>
      <UpadingPhase></UpadingPhase>
      <UpdateCount/>
      <Lifecycle/>
      <h1 className='mt-11 mb-8 border-b-8 border-yellow-500 text-center text-8xl text-yellow-500'> Error Handling</h1>
      <ErrorHandler>
        <ErrorCounter/>
      </ErrorHandler>
      <h1 className='mt-11 mb-8 border-b-8 border-yellow-500 text-center text-8xl text-yellow-500'> State Management</h1>
      <PropsExample></PropsExample>
      <StateExample/>
      <ComponentA />
      <ParentA/>
      <h1 className='mt-11 mb-8 border-b-8 border-yellow-500 text-center text-8xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400'>Redux And Redux Toolkit - RTK</h1>
      <CounterRedux/>
      <Todo/>
      <TodoShow/>
      <h1 className='mt-11 mb-8 border-b-8 border-orange-500 text-center text-8xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-300'>Redux And Redux Toolkit - RTK</h1>
      <CustomCounter/>
      <h1 className='mt-11 mb-8 border-b-8 border-purple-300 text-center text-8xl text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-pink-400'>CODE SPLITTING </h1>
      <HowLazyLoad/>
    </>
  );
}

export default App;
