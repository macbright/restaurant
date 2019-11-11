// eslint-disable-next-line no-undef
const $ = document.querySelector.bind(document);

const aboutUs = () => {
    // eslint-disable-next-line no-undef
    $('main').innerHTML = `   
        <div class="row about-content container">
            <h2>  Passionately personal and genuinely delicious! </h2>

            <p> 
                Located in Middlebury, Connecticut, L is an inviting 90  seat 
                restaurant owned and operated by accomplished Chef Linda Sirica.
                "Like you, I enjoy food that satisfies the soul 
                as well as the palate," says Linda. "Food excites 
                the imagination along with the taste buds. So, I invite you 
                to experience food that holds the promise of a good story!"
            </p>

            <p> 
                L offers exceptional gourmet American Cuisine with an Italian 
                flair - served in a warm atmosphere where the emphasis is on 
                comfort, taste and above all, relaxation and enjoyment. Grilled 
                NY Strip with Baked Mac n Cheese and Sweet Onion Jam laced 
                Demi-Glace; Angelhair pasta with Shrimp, diced tomatoes, spinach, 
                roasted red peppers & lemon vodka cream sauce; and Grilled Salmon 
                with farro & cranberry salad with mustard sauce are just a few of 
                the special dishes you'll find on L's enticing menu. Cap off your 
                main course with a Cappuccino and one of our specialty desserts such 
                as Banana Napoleon or Creme Brulee. Enjoy a glass of fine wine, or 
                indulge in a specialty martini or after-dinner cordial.
            </p>
            
            <p>
                At L, we turn the ordinary into the extraordinary every day. So, stop in 
                for a romantic dinner, relaxing lunch, or after work gathering at our 
                cozy, sit-down bar...make everyday life a little more special at L Restaurant! 
            </p>
        </div>       
    
    `;
};

export default { aboutUs };