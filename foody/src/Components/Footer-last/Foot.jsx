import React from 'react'
import img1 from "../../assets/images/favicon12.ico"

export default function foot() {
  return (
    <section id="last-section">
      <article class="last-article">
        <div class="last-div">
          <div>
            <img src={img1} alt="" />
          </div>

          <div>
            <div class="_2BWW_">© 2023 Foody</div>
          </div>

          <div id="last-icons">
            <div>
              <i class="fa-brands fa-facebook"></i>
            </div>
            <div>
              <i class="fa-brands fa-instagram"></i>
            </div>
            <div>
              <i class="fa-brands fa-pinterest"></i>
            </div>
            <div>
              <i class="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
