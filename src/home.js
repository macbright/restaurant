const $ = document.querySelector.bind(document)

const homePage = () => {
    $("#content").innerHTML =
        ` 
        <header class="container">
            <div class="home tab"> Home</div>
            <div class="about tab"> About Us</div>
            <div class="menu tab"> Menu</div>
            <div class="contact tab"> Contact Us</div>
        </header>
        <main id="homeContent", class="container"></main>
        
    `;
};

const homePageContent = () => {
    $("#homeContent").innerHTML =
        `
        <h1> come eat with us @ Macbrite Restaurant </h1>
        <h4> It's never too early to book your Holiday Party! 
        Come on in or give us a call to reserve yours today! </h4>
    `
};

export { homePage, homePageContent };