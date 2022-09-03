import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./app";
import store from './store/index'

const rootEl = document.getElementById("root");
function Main() {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    )
}
// either <div> or <App />
// ReactDOM.render(<div>hello</div>, rootEl);
// instead of having <div>hello</div> we gonna put the App.js it will be like (replace line 2 with this)
ReactDOM.render(<Main />, rootEl);