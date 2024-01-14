import * as React from "react";
import { useState, useCallback } from "react";
import { navigate } from "gatsby";
import Item from "../components/Item";
import * as styles from "./Login.module.css";

const Login = () => {
  const [frameInputValue, setFrameInputValue] = useState("");
  const [frameInput1Value, setFrameInput1Value] = useState("");

  const onItemContainerClick = useCallback(() => {
    navigate("/Login");
  }, []);

  const onItemContainer1Click = useCallback(() => {
    navigate("/SignUp");
  }, []);

  const onItemContainer3Click = useCallback(() => {
    navigate("/Login");
  }, []);

  const onMotDePasse1Click = useCallback(() => {
    navigate("/Passwd");
  }, []);

  const onSignUpTextClick = useCallback(() => {
    navigate("/SignUp");
  }, []);

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, []);

  const onItemContainer2Click = useCallback(() => {
    navigate("/");
  }, []);

  const onAboutTextClick = useCallback(() => {
    navigate("/About");
  }, []);

  return (
    <div className={styles.login}>
      <div className={styles.loginChild} />
      <div className={styles.motDePasse}>Mot de passe</div>
      <div className={styles.loginItem} />
      <div className={styles.motDePasse1} onClick={onMotDePasse1Click}>
        Mot de passe oublier?
      </div>
      <div
        className={styles.vousNavezPas}
      >{`vous n’avez pas un compte ? `}</div>
      <div className={styles.signUp} onClick={onSignUpTextClick}>
        Sign up
      </div>
      <div className={styles.loginWrapper} onClick={onFrameContainerClick}>
        <div className={styles.login1}>{`Login `}</div>
      </div>
      <input
        className={styles.loginInner}
        type="email"
        value={frameInputValue}
        onChange={(event) => setFrameInputValue(event.target.value)}
      />
      <div className={styles.login2}>{`Login `}</div>
      <div className={styles.email}>Email</div>
      <input
        className={styles.frameInput}
        type="password"
        value={frameInput1Value}
        onChange={(event) => setFrameInput1Value(event.target.value)}
      />
      <div className={styles.rectangleDiv} />
      <img className={styles.instagramIcon} alt="" src="/instagram.svg" />
      <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
      <img className={styles.facebookIcon} alt="" src="/facebook3.svg" />
      <img className={styles.linkedinIcon} alt="" src="/linkedin4.svg" />
      <div className={styles.contacterNous}>Contacter-nous</div>
      <img
        className={styles.messageFillIcon}
        alt=""
        src="/message-fill@2x.png"
      />
      <img className={styles.sendFillIcon} alt="" src="/send-fill@2x.png" />
      <Item
        menuItemText="Log in"
        showItem
        itemTop="23px"
        itemLeft="922px"
        itemWidth="130px"
        itemHeight="40px"
        itemBorderRadius="16px"
        itemBorder="1px solid var(--color-mediumpurple-100)"
        itemBoxSizing="border-box"
        itemCursor="pointer"
        itemBackgroundColor="unset"
        propAlignItems="center"
        propJustifyContent="center"
        propColor="#000"
        propFontSize="20px"
        propTextAlign="center"
        onItemContainerClick={onItemContainerClick}
      />
      <Item
        menuItemText="Sign up"
        showItem
        itemTop="24px"
        itemLeft="1078px"
        itemWidth="130px"
        itemHeight="40px"
        itemBorderRadius="16px"
        itemBorder="1px solid var(--color-mediumpurple-100)"
        itemBoxSizing="border-box"
        itemCursor="pointer"
        itemBackgroundColor="#7579d6"
        propAlignItems="center"
        propJustifyContent="center"
        propColor="#f5f5f5"
        propFontSize="20px"
        propTextAlign="center"
        onItemContainerClick={onItemContainer1Click}
      />
      <div className={styles.item} onClick={onItemContainer2Click}>
        <div className={styles.item1}>Home</div>
      </div>
      <Item
        menuItemText="Rechrcher ...."
        showItem={false}
        itemTop="23px"
        itemLeft="680px"
        itemWidth="200px"
        itemHeight="40px"
        itemBorderRadius="16px"
        itemBorder="1px solid var(--color-mediumpurple-100)"
        itemBoxSizing="border-box"
        itemCursor="pointer"
        itemBackgroundColor="unset"
        propAlignItems="unset"
        propJustifyContent="unset"
        propColor="#000"
        propFontSize="36px"
        propTextAlign="left"
        onItemContainerClick={onItemContainer3Click}
      />
      <div className={styles.search}>Search</div>
      <img className={styles.homeFillIcon} alt="" src="/home-fill@2x.png" />
      <div className={styles.about} onClick={onAboutTextClick}>
        About
      </div>
      <img className={styles.um5Icon} alt="" src="/um5@2x.png" />
      <img className={styles.alumniIcon} alt="" src="/alumni@2x.png" />
    </div>
  );
};

export default Login;
