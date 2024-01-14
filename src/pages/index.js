import * as React from "react";
import { useCallback } from "react";
import { navigate } from "gatsby";
import FacebookIcon from "../components/FacebookIcon";
import LinkedinIcon from "../components/LinkedinIcon";
import Item from "../components/Item";
import * as styles from "./index.module.css";

const Home = () => {
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
    navigate("/Inscription");
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/Membres");
  }, []);

  const onItemContainer2Click = useCallback(() => {
    navigate("/");
  }, []);

  const onAboutTextClick = useCallback(() => {
    navigate("/About");
  }, []);

  return (
    <div className={styles.home}>
      <img
        className={styles.bannierelivres1Icon}
        alt=""
        src="/bannierelivres-1@2x.png"
      />
      <div className={styles.alumni}>
        <span>{` `}</span>
        <span className={styles.a}>A</span>
        <span>LU</span>
        <span className={styles.a}>M</span>
        <span>NI</span>
      </div>
      <div
        className={styles.inscriptionWrapper}
        onClick={onFrameContainerClick}
      >
        <div className={styles.inscription}>Inscription</div>
      </div>
      <img className={styles.removal1Icon} alt="" src="/removal-1@2x.png" />
      <div className={styles.homeChild} />
      <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
      <img className={styles.instagramIcon} alt="" src="/instagram.svg" />
      <div className={styles.membresWrapper} onClick={onFrameContainer1Click}>
        <div className={styles.membres}>Membres</div>
      </div>
      <FacebookIcon
        dimensions="/facebook.svg"
        propHeight="4.88%"
        propWidth="3.47%"
        propTop="89.29%"
        propRight="47.27%"
        propBottom="5.83%"
        propLeft="49.25%"
      />
      <LinkedinIcon
        linkedin="/linkedin.svg"
        propHeight="4.88%"
        propWidth="3.47%"
        propTop="89.29%"
        propRight="41.47%"
        propBottom="5.83%"
        propLeft="55.06%"
      />
      <div className={styles.contacterNous}>Contacter-nous</div>
      <img
        className={styles.messageFillIcon}
        alt=""
        src="/message-fill@2x.png"
      />
      <img className={styles.sendFillIcon} alt="" src="/send-fill@2x.png" />
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
    </div>
  );
};

export default Home;
