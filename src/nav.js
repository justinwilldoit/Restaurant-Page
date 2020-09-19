const content = document.getElementById('content');

const nav = `<div class="container">
<nav style="display: flex" style="flex-direction: row" class=”navbar navbar-expand-lg navbar-light bg-light”>
    <ul class=”nav nav nav-pills”>
        <li class=”nav-item”>
          <a class=”nav-link active” href=”#”>Home</a>
        </li>
        <li class=”nav-item”>
            <a class=”nav-link” href=”#”>Menu</a>
          </li>
          <li class=”nav-item”>
            <a class=”nav-link” href=”#”>Contact Us</a>
          </li>
    </ul>

</div>`

const renderNav = () => {
    content.insertAdjacentHTML('beforebegin', nav)
}

export default renderNav;