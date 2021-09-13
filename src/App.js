import UseStateHook from './hooks/UseStateHook'
import UseEffectHook from './hooks/UseEffectHook'
import UseRefHook from './hooks/UseRefHook';
import UseMemoHook from './hooks/UseMemoHook';
import UseCallbackHook from './hooks/UseCallbackHook'


function App() {
  return (
    <div className="App">
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseMemoHook /> */}
      <UseCallbackHook />
    </div>
  );
}

export default App;
