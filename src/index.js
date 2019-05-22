import App from './components/App.js';

const app = document.getElementById('app');
const appComponent = new App();
const appComponentDOM = appComponent.render();
app.appendChild(appComponentDOM);