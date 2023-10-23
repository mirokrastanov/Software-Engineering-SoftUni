import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

var rootDomEl = document.querySelector('#root');

var root = ReactDOM.createRoot(rootDomEl);

//==> Without JSX
// const reactHeading1 = React.createElement('h1', {}, 'Hello from JSX!');
// const reactHeading2 = React.createElement('h2', {}, 'The best syntax ever!');
// const header = React.createElement('header', { className: 'site-header' }, reactHeading1, reactHeading2);

// root.render(header);

// component - full syntax
// const Footer = () => {
//     return React.createElement(
//         'div',
//         {className: 'site-footer'},
//         React.createElement(
//             'p',
//             {},
//             'All rights reserved!'
//         ),
//      );
// };

// component - sugar syntax
var Footer = function Footer() {
    return React.createElement(
        'div',
        { className: 'site-footer' },
        React.createElement(
            'p',
            null,
            'All rights reserved \xA9'
        )
    );
};

//==> With JSX --> requires extra library | npm i babel-cli@6 babel-preset-react-app@3
var body = React.createElement(
    'headedr',
    { className: 'site-header' },
    React.createElement(
        'h1',
        null,
        'Hello from JSX!'
    ),
    React.createElement(
        'h2',
        null,
        'The best syntax ever!'
    ),
    React.createElement(
        'p',
        null,
        'New paragraph here.'
    ),
    React.createElement(Footer, null)
);

root.render(body);