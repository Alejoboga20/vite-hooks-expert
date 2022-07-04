import React from 'react';
import ReactDOM from 'react-dom/client';
import { Padre } from './07-ChallengeMemo/Padre';
import { CounterApp } from './01-useState/CounterApp';
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
import { FocusScreen } from './04-useRef/FocusScreen';
import { Layout } from './05-useLayoutEffect/Layout';
import { CallbackHook } from './06-Memo/CallbackHook';
import { MemoHook } from './06-Memo/MemoHook';
import { Memorize } from './06-Memo/Memorize';
//import './08-useReducer/intro-reducer';
import { TodoApp } from './08-useReducer/TodoApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(<TodoApp />);
