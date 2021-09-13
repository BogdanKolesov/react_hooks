import UseStateHook from './hooks/UseStateHook'
import UseEffectHook from './hooks/UseEffectHook'
import UseRefHook from './hooks/UseRefHook';
import UseMemoHook from './hooks/UseMemoHook';
import UseCallbackHook from './hooks/UseCallbackHook'
import UseContextHook from './hooks/UseContextHook'


function App() {
  return (
    <div className="App">
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseMemoHook /> */}
      {/* <UseCallbackHook /> */}
      <UseContextHook />
    </div>
  );
}

export default App;
