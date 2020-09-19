
import renderNav from './nav.js';
import renderHome from './home.js';
import renderMenu from './menu.js';
import renderContact from './contact.js';

renderNav();
renderHome();
const tabLink = document.querySelectorAll('.nav-link');
const content = document.getElementById('content');

const renderTab = () => {
    console.log(content);
    const content = document.getElementById('content');
    while (content.hasChildNodes()) {
        content.removeChild(content.firstChild);
        console.log(10);
    }
}


tabLink.forEach(link => link.addEventListener('click', e => {
        console.log(e.target.classList)
        if (e.target.textContent === 'Home') {
            e.preventDefault();
            renderTab();
            renderHome();
        } else if (e.target.textContent === 'Menu') {
            e.preventDefault();
            renderTab();
            renderMenu();
        } else if (e.target.textContent === 'Contact Us') {
            e.preventDefault();
            renderTab();
            renderContact();
        }
    })
)
