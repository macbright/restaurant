!function(e){var n={};function a(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=n,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)a.d(t,i,function(n){return e[n]}.bind(null,i));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="",a(a.s=0)}([function(e,n,a){"use strict";a.r(n);const t=document.querySelector.bind(document),i=()=>{t("main").innerHTML="\n        <h1> come eat with us @ Macbrite Restaurant </h1>\n        <h4> It's never too early to book your Holiday Party! \n        Come on in or give us a call to reserve yours today! </h4>\n    "},o=document.querySelector.bind(document),r=document.querySelector.bind(document),s=document.querySelector.bind(document),c=document.querySelector.bind(document),l=document.querySelectorAll.bind(document);t("#content").innerHTML=' \n        <header class="container">\n            <div class="heading"> Macbrite Restaurant</div>\n            <div class="tab home"> Home</div>\n            <div class="tab about"> About Us</div>\n            <div class="tab menu"> Menu</div>\n            <div class="tab contact"> Contact Us</div>\n        </header>\n        <main id="home", class="container"></main>\n        \n    ',i(),Array.from(l(".tab")).forEach(e=>{e.addEventListener("click",n=>{n.preventDefault;let a=e.className.replace("tab ",""),t=c("main");switch(console.log("good"),a){case"home":i(),t.id="home";break;case"about":s("main").innerHTML='   \n        <div class="row">\n            <h2>  Passionately personal and genuinely delicious! </h2>\n\n            <p> \n                Located in Middlebury, Connecticut, L is an inviting 90  seat \n                restaurant owned and operated by accomplished Chef Linda Sirica.\n                "Like you, I enjoy food that satisfies the soul \n                as well as the palate," says Linda. "Food excites \n                the imagination along with the taste buds. So, I invite you \n                to experience food that holds the promise of a good story!"\n            </p>\n\n            <p> \n                L offers exceptional gourmet American Cuisine with an Italian \n                flair - served in a warm atmosphere where the emphasis is on \n                comfort, taste and above all, relaxation and enjoyment. Grilled \n                NY Strip with Baked Mac n Cheese and Sweet Onion Jam laced \n                Demi-Glace; Angelhair pasta with Shrimp, diced tomatoes, spinach, \n                roasted red peppers & lemon vodka cream sauce; and Grilled Salmon \n                with farro & cranberry salad with mustard sauce are just a few of \n                the special dishes you\'ll find on L\'s enticing menu. Cap off your \n                main course with a Cappuccino and one of our specialty desserts such \n                as Banana Napoleon or Creme Brulee. Enjoy a glass of fine wine, or \n                indulge in a specialty martini or after-dinner cordial.\n            </p>\n            \n            <p>\n                At L, we turn the ordinary into the extraordinary every day. So, stop in \n                for a romantic dinner, relaxing lunch, or after work gathering at our \n                cozy, sit-down bar...make everyday life a little more special at L Restaurant! \n            </p>\n        </div>       \n    \n    ',t.id="about";break;case"menu":r("main").innerHTML='\n        <div class="foodMenu">\n            <div class="meal">\n                <div class="meal-img">\n                    <img src="https://www.guiadasemana.com.br/contentFiles/image/2017/11/FEA/galeria/50998_w840h525_1510324750pizza-em-fatias.jpg" alt="lunch meal">\n                </div>\n                <div class="meal-des">\n                    <p> Grilled Salmon <span> $25.00</span> </p>\n                    <p> Brown sugar dijon glaze, roasted butternut & cranberry farro, sautéed spinach & kale  </p>\n                </div>\n            </div>\n            <div class="meal">\n                <div class="meal-img">\n                    <img src="https://www.guiadasemana.com.br/contentFiles/image/2019/10/FEA/galeria/64482_w840h525_1572032807-t2a3592-crop.jpg" alt="lunch meal">\n                </div>\n                <div class="meal-des">\n                    <p> Sautéed Cod <span> $26.00</span> </p>\n                    <p> steamed clams in a spicy tomato broth, parmesan risotto, sautéed spinach, roasted garlic aioli  </p>\n                </div>\n            </div>\n            <div class="meal">\n                <div class="meal-img">\n                    <img src="https://www.guiadasemana.com.br/contentFiles/image/2019/10/FEA/galeria/64445_w840h525_1571313790baiao-de-dois.jpg" alt="lunch meal">\n                </div>\n                <div class="meal-des">\n                    <p> Penne <span> $19.00</span> </p>\n                    <p> Sausage, white beans, broccoli, diced plum tomatoes, garlic, parmesan, red pepper flakes </p>\n                </div>\n            </div>\n            <div class="meal">\n                <div class="meal-img">\n                    <img src="https://www.guiadasemana.com.br/contentFiles/image/2019/10/FEA/galeria/64445_w840h525_1571346510shutterstock-1111930097.jpg" alt="lunch meal">\n                </div>\n                <div class="meal-des">\n                    <p> Mascarpone & Spinach Ravioli <span> $19.00</span> </p>\n                    <p> Rroasted butternut, dried cranberries, spinach, sherry cream sauce\n                    With chicken 22 | With shrimp 24  </p>\n                </div>\n            </div>\n            <div class="meal">\n                <div class="meal-img">\n                    <img src="https://www.guiadasemana.com.br/contentFiles/image/2019/10/FEA/galeria/64445_w840h525_1571315221shutterstock-340505432.jpg" alt="lunch meal">\n                </div>\n                <div class="meal-des">\n                    <p> Sautéed Cod <span> $26.00</span> </p>\n                    <p> steamed clams in a spicy tomato broth, parmesan risotto, sautéed spinach, roasted garlic aioli  </p>\n                </div>\n            </div>\n            <div class="meal">\n                <div class="meal-img">\n                    <img src="https://www.guiadasemana.com.br/contentFiles/image/2019/10/FEA/galeria/64445_w840h525_1571314484acrajealta.jpg" alt="lunch meal">\n                </div>\n                <div class="meal-des">\n                    <p> Inside Out Chicken Cordon Bleu<span> $24.00</span> </p>\n                    <p> Topped with black forest ham & mozzarella cheese served with mashed potatoes, sautéed spinach, creamy dijon sauce     </p>\n                </div>\n            </div>\n        </div>\n    ',t.id="menu";break;case"contact":o("main").innerHTML='\n        <section id="contact" class="contact-content">\n            \n            <h1>Contact Us</h1>\n           \n            \n            <div class=" row contact-info">\n                <div class="col-md-6">\n                    <h5> no 5 cresent avenue</h5>\n                    <p>Abuja, Nigeria</p>\n                    <h5>+234908435848</h5>\n                    <p>Every day 9am to 10pm</p>\n                    <h5>support@macbrite.com</h5>\n                    <p>Send us your query anytime!</p>\n                </div>\n                \n                <div class="contact-form col-md-6">\n                    <form action="#" class="form">\n                        <input type="text" class="form-control" placeholder="Enter your name" required>\n                        <input type="email" class="form-control" placeholder="Enter email address" required>\n                        <input type="text" class="form-control" placeholder="Enter your subject" required>\n                        <textarea class="form-control" placeholder="Enter Message" required>\n                            </textarea>\n                        \n                        <button type="submit" class="form-btn">\n                            Submit\n                        </button>\n                    </form>\n                </div>\n            </div>\n        </section>\n        \n    ',t.id="contact"}})})}]);