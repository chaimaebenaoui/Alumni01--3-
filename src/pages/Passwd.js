import * as React from "react";
import { useState, useCallback } from "react";
import { navigate } from "gatsby";
import FacebookIcon from "../components/FacebookIcon";
import LinkedinIcon from "../components/LinkedinIcon";
import Item from "../components/Item";
import * as styles from "./Passwd.module.css";

const Passwd = () => {
  const [frameInputValue, setFrameInputValue] = useState("");
  const [frameInput1Value, setFrameInput1Value] = useState("");
  const [frameInput2Value, setFrameInput2Value] = useState("");

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
    navigate("/Login");
  }, []);

  const onItemContainer2Click = useCallback(() => {
    navigate("/");
  }, []);

  const onAboutTextClick = useCallback(() => {
    navigate("/About");
  }, []);

  return (
    <div className={styles.passwd}>
      <div className={styles.changerVotreMot}>Changer votre mot de passe!!</div>
      <input
        className={styles.passwdChild}
        type="email"
        value={frameInputValue}
        onChange={(event) => setFrameInputValue(event.target.value)}
      />
      <input
        className={styles.passwdItem}
        type="password"
        value={frameInput1Value}
        onChange={(event) => setFrameInput1Value(event.target.value)}
      />
      <input
        className={styles.passwdInner}
        type="password"
        value={frameInput2Value}
        onChange={(event) => setFrameInput2Value(event.target.value)}
      />
      <div className={styles.email}>Email</div>
      <div className={styles.nouveauMotDe}>Nouveau mot de passe</div>
      <div className={styles.confirmerVotreMot}>
        Confirmer votre mot de passe
      </div>
      <div className={styles.confirmerWrapper} onClick={onFrameContainerClick}>
        <div className={styles.confirmer}>CONFIRMER</div>
      </div>
      <img className={styles.oublie1Icon} alt="" src="/oublie-1@2x.png" />
      <div className={styles.rectangleDiv} />
      <img className={styles.instagramIcon} alt="" src="/instagram.svg" />
      <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
      <FacebookIcon
        dimensions="/facebook1.svg"
        propHeight="4.91%"
        propWidth="3.43%"
        propTop="90.14%"
        propRight="42.38%"
        propBottom="4.95%"
        propLeft="54.2%"
      />
      <LinkedinIcon
        linkedin="/linkedin1.svg"
        propHeight="4.91%"
        propWidth="3.43%"
        propTop="90.14%"
        propRight="47.87%"
        propBottom="4.95%"
        propLeft="48.71%"
      />
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
        itemLeft="943px"
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
        itemLeft="1092px"
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

export default Passwd;
