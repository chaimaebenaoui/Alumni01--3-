import * as React from "react";
import { useState, useCallback } from "react";
import { navigate } from "gatsby";
import Item from "../components/Item";
import * as styles from "./SignUp.module.css";

const SignUp = () => {
  const [rectangleInputValue, setRectangleInputValue] = useState("");
  const [rectangleInput1Value, setRectangleInput1Value] = useState("");
  const [rectangleInput2Value, setRectangleInput2Value] = useState("");

  const onItemContainerClick = useCallback(() => {
    navigate("/Login");
  }, []);

  const onItemContainer1Click = useCallback(() => {
    navigate("/SignUp");
  }, []);

  const onItemContainer3Click = useCallback(() => {
    navigate("/Login");
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
    <header className={styles.signUp}>
      <div className={styles.signUpChild} />
      <input
        className={styles.signUpItem}
        type="email"
        value={rectangleInputValue}
        onChange={(event) => setRectangleInputValue(event.target.value)}
      />
      <input
        className={styles.signUpInner}
        type="password"
        value={rectangleInput1Value}
        onChange={(event) => setRectangleInput1Value(event.target.value)}
      />
      <div className={styles.motDePasse}>Mot de passe</div>
      <input
        className={styles.rectangleInput}
        type="text"
        value={rectangleInput2Value}
        onChange={(event) => setRectangleInput2Value(event.target.value)}
      />
      <div className={styles.userFill} />
      <div className={styles.adresseEMail}>Adresse e-mail</div>
      <div className={styles.nomComplet}>Nom complet</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.signUp1}>Sign up</div>
      <div className={styles.signUpWrapper} onClick={onFrameContainerClick}>
        <div className={styles.signUp2}>Sign up</div>
      </div>
      <div className={styles.signUpChild1} />
      <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
      <img className={styles.instagramIcon} alt="" src="/instagram.svg" />
      <img className={styles.facebookIcon} alt="" src="/facebook2.svg" />
      <img className={styles.linkedinIcon} alt="" src="/linkedin3.svg" />
      <div className={styles.contacterNous}>Contacter-nous</div>
      <img
        className={styles.messageFillIcon}
        alt=""
        src="/message-fill@2x.png"
      />
      <img className={styles.sendFillIcon} alt="" src="/send-fill@2x.png" />
      <div className={styles.userFill} />
      <div className={styles.userFill} />
      <Item
        menuItemText="Log in"
        showItem
        itemTop="29px"
        itemLeft="886px"
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
        itemTop="29px"
        itemLeft="1061px"
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
        itemTop="29px"
        itemLeft="602px"
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
    </header>
  );
};

export default SignUp;