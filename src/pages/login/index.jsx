import React from "react";
import "./index.scss";
function Login() {
  return (
    <div className="login">
      <iframe
        className="login__video"
        src="https://player.vimeo.com/video/695343114?h=1a71dea0f0?controls=0&sidedock=0&title=0&autoplay=1&muted=1&loop=1"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="wrapper">
        <div className="login__logo">
          <img
            width={400}
            src="https://beloved-brands-mini-mba.b-cdn.net/wp-content/uploads/2020/02/580b57fcd9996e24bc43c529.png"
            alt=""
          />
        </div>
        <div className="login__form">
          <h3>Login to your account</h3>
          <input type="text" name="userName" id="" placeholder="Enter username ..." />
          <input type="password" name="password" id="" placeholder="Enter password ... " />
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
