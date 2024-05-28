import React from "react";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase";
import { GoogleAuthProvider } from "firebase/auth/cordova";
function Login() {
  const navigate = useNavigate(); // định hướng của react router dom

  const handleLoginGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);

        // The signed-in user info.
        const user = result.user;
        console.log(credential);
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        navigate("/"); // định hướng sau khi login -> path "/"
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login">
      <iframe
        className="login__video"
        src="https://player.vimeo.com/video/695343114?h=1a71dea0f0?controls=0&sidedock=0&title=0&autoplay=1&muted=1&loop=1"
        allow="autoplay; fullscreen; picture-in-picture"
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
          <input type="text" name="email" id="" placeholder="Enter email ..." />
          <input type="password" name="password" id="" placeholder="Enter password ... " />
          <button className="login__form__btnLogin">
            <Link className="login__form__btnLogin__link">Login</Link>
          </button>
          <button onClick={handleLoginGoogle} className="login__form__btnGoogle">
            <img
              width={30}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
              alt=""
            />
            <span>Login with google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
