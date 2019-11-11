const $ = document.querySelector.bind(document);

const ourMenu = () => {
    $("#homeContent").innerHTML =
        `
        <section id="_contact" class="contact-content">
            <div class="row title-contact">
                <h1>Contact Us</h1>
            </div>
            <div class="row d-flex">
                <div class="d-flex contact-info">
                    <div>
                        <h5>Brasil, São Paulo</h5>
                        <p>Av. Paulista</p>
                    </div>
                    <div>
                        <h5>+55 (11)98765-4321</h5>
                        <p>Mon to Fri 9am to 6 pm</p>
                    </div>
                    <div>
                        <h5>odinfood@support.com</h5>
                        <p>Send us your query anytime!</p>
                    </div>
                </div>
                <div class="contact-form">
                    <form action="#" class="form d-flex">
                        <div class="d-flex">
                            <div class="side-left">
                                <input type="text" placeholder="Enter your name" required>
                                <input type="email" placeholder="Enter email address" required>
                                <input type="text" placeholder="Enter your subject" required>
                            </div>
                            <div class="side-rigth">
                                <textarea rows="8" cols="20" placeholder="Enter Message" required>
                                </textarea>
                            </div>
                        </div>
                        <button type="submit" class="form-btn">
                            subscribe now
                        </button>
                    </form>
                </div>
            </div>
        </section>
        
    `

}