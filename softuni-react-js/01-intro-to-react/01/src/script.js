import '../node_modules/react/umd/react.production.min.js'
import '../node_modules/react-dom/umd/react-dom.production.min.js'

const rootDomEl = document.querySelector('#root');

const root = ReactDOM.createRoot(rootDomEl);

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
const Footer = () => (
    <div className='site-footer'>
        <p>All rights reserved &copy;</p>
    </div>
);

//==> With JSX --> requires extra library | npm i babel-cli@6 babel-preset-react-app@3
const body = (
    <headedr className="site-header">
        <h1>Hello from JSX!</h1>
        <h2>The best syntax ever!</h2>

        <p>New paragraph here.</p>
        <Footer />
    </headedr>
);



root.render(body); 