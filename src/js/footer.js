class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
        <div class="logo">
            <h2>The Caring Nest Ministries</h2>
        <p class="accent-text">nurturing hope, transforming lives</p>
        </div>
        <div>
        <section class="navigation">
            <h2>Find your way</h2>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="pages/about.html">About</a></li>
                <li><a href="pages/gallery.html">Gallery</a></li>
                <li><a href="pages/donate.html">Donate</a></li>
                <li><a href="pages/contact.html">Contact</a></li>
            </ul>
        </section>

        <section class="contact">
            <h2>Contact Us</h2>
            <p>Naluwoli village <br>Butansi sub county<br> Kamuli District<br>Uganda<br>Butegere P.O BOX 05 KAMULI</p>
        </section>
        <img src="img/0ab09181-632e-4394-b87d-03f5af4f281c.jpg" alt="A group of people" width="715px" height="536px">
        </div>

        <section class="footer">
            <p>2025 The Caring Nest | All Rights Reserved</p>
            <section class="social-icons">
                <a href="https://www.facebook.com" target="_blank">
                    <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank">
                    <i class="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
            </section>
        </section>
    </footer>
        `;
    }
}

customElements.define('footer-component', FooterComponent);
