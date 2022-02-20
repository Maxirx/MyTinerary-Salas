import React from "react";

const Footer = () => {

    return (
        <footer id="abajo">
            <div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Discover the World</a> </li>
                </ul>
            </div>

            <aside id="social">
                <ul class="menu">
                    <li class="social-item">
                        <span class="screen-reader-text">Twitter</span>
                    </li>
                    <li class="social-item"><span class="screen-reader-text">Facebook</span></li>
                    <li class="social-item"><span class="screen-reader-text">Pinterest</span></li>
                    <li class="social-item"><span class="screen-reader-text">Whatsapp</span></li>

                </ul>
            </aside>

        </footer >
    )
}

export default Footer