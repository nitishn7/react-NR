const heading = React.createElement(
    'h1', 
    { id:'header1'  }, 
    'Hello world with React'
);
const parent = React.createElement(
    'div',
    {id:'parent'},
    React.createElement('div', {id: 'child'},
    [React.createElement('h1',{},"This is h1 inside child"),
    React.createElement('h2',{},"This is h2 inside child")])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);