import React from 'react';
import ReactDOM from 'react-dom/client';

export default function HelloReact(){
    return(
        <section>
        <a href="htpps://reactjs.org">
            React . A JavaScript Library for building User Interfaces
        </a>
        <div>
            <h3>reactjs.org</h3>
        </div>
        <div> React makes it painless to create interactuve UIs.</div>
    </section>
    );
}

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<HelloReact />);
