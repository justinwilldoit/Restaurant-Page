const content = document.getElementById('content');



const renderHome = () => {
    const home = `<div class="container">
<h1 class="header">Welcome to Food Lovers!</h1>
<hr>
<img src="https://cdn.vox-cdn.com/thumbor/73nhsZwI55BVgH8-rapmIhkvbUk=/0x0:4047x3035/1200x675/filters:focal(1700x1194:2346x1840)/cdn.vox-cdn.com/uploads/chorus_image/image/64046617/20150915-_Upland_Burger_3.0.0.1489236245.0.jpg" alt="burger and fries">
<hr>
<p style="font-size: 30px;" class='home'>Food Lovers is dedicated to creating a welcoming atmosphere for everyone to enjoy a great burger. We have all options including vegan and vegetarian. Everything is made with organic and non-GMO produce. Swing by and meet our fantastic staff! We are open 7 days a week from 10AM - 9PM. See all of you there!</p>
</div>`
    content.insertAdjacentHTML('beforeend', home);
}

export default renderHome;