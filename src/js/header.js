// Class for the header
class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <div id="announcements">
                    <section id="contact">
                        <span>
                            <a href="mailto:info@thecaringnest.com">
                                <i class="fa-solid fa-envelope"></i>
                                info@thecaringnest.com
                            </a>
                        </span>
                        <span>
                            <a href="tel:0123456789">
                                <i class="fa-solid fa-phone"></i>
                                (+27) 65 717 5663
                            </a>
                        </span>
                    </section>

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
                </div>

                <nav>
                    <div class="top">
                        <a id="logo" href="/">
                            <img src="img/logo.png" alt="The Caring Nest logo" width="50px" height="50px">
                            The Caring Nest
                        </a>
                        <div id="menu-toggle">
                            <div class="bar"></div>
                            <div class="bar"></div>
                        </div>
                    </div>

                    <ul id="links">
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="donate.html">Donate</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define('header-component', HeaderComponent);
