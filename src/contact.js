const content = document.getElementById('content');




const renderContact = () => {
    const contact = `<h1>Contact</h1>
<hr>
<div class="container">
    <h4>Reach out to Food Lovers to tell us how our food and service was!</h4>
    <label for="textarea"></label><textarea name="textarea" cols="100" placeholder="Tell us more here..." autofocus></textarea>
    <p>Follow us on Instagram  @foodloversGIT</p>
</div>
</div>`
    content.insertAdjacentHTML('beforeend', contact);
}

export default renderContact;