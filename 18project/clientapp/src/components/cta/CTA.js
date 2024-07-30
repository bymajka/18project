function CTA() {
  return (
    <div class="cta_wrapper">
      <div class="cta">
        <div class="cta-left">
          <div class="h1block">
            <h1>Always Track & Analyze Your Business Statistics To Succeed.</h1>
            A better way to manage your sales, team, clients & marketing
            <br />— on a single platform. Powerful, affordable & easy.
          </div>
          <div id="email_block">
            <input type="email" id="email" placeholder="Enter your email" />
            <button id="email_submit_button">Get started</button>
          </div>
          <div id="payment_systems">
            <img src="../svg/payment_systems.svg" alt="payment_systems_logos" />
          </div>
        </div>
        <img src="../svg/welcome_img.svg" alt="welcome_img" />
      </div>
    </div>
  );
}

export default CTA;
