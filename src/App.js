import UseStateHook from './hooks/UseStateHook'
import UseEffectHook from './hooks/UseEffectHook'
import UseRefHook from './hooks/UseRefHook';
import UseMemoHook from './hooks/UseMemoHook';
import UseCallbackHook from './hooks/UseCallbackHook'
import UseContextHook from './hooks/UseContextHook'
import UseCustomHook from './hooks/UseCustomHook'


function App() {
  return (
    <div className="App">
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseMemoHook /> */}
      {/* <UseCallbackHook /> */}
      {/* <UseContextHook /> */}
      <UseCustomHook />
    </div>
  );
}

export default App;
