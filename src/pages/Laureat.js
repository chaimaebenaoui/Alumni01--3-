import * as React from "react";
import { useCallback } from "react";
import { navigate } from "gatsby";
import ContainerCard from "../components/ContainerCard";
import Item from "../components/Item";
import * as styles from "./Laureat.module.css";

const Laureat = () => {
  const onVoirLesDtailsClick = useCallback(() => {
    navigate("/Details");
  }, []);

  const onVoirLesDtails2Click = useCallback(() => {
    navigate("/Details");
  }, []);

  const onItemContainerClick = useCallback(() => {
    navigate("/Login");
  }, []);

  const onItemContainer1Click = useCallback(() => {
    navigate("/SignUp");
  }, []);

  const onItemContainer3Click = useCallback(() => {
    navigate("/Login");
  }, []);

  const onVoirLesDtails3Click = useCallback(() => {
    navigate("/Details");
  }, []);

  const onVoirLesDtails4Click = useCallback(() => {
    navigate("/Details");
  }, []);

  const onItemContainer2Click = useCallback(() => {
    navigate("/");
  }, []);

  const onAboutTextClick = useCallback(() => {
    navigate("/About");
  }, []);

  return (
    <div className={styles.laureat}>
      <div className={styles.ellipseParent}>
        <img className={styles.frameChild} alt="" src="/ellipse-2@2x.png" />
        <div className={styles.maryemeBriki}>Maryeme Briki</div>
        <div className={styles.cleInfo}>CLE Info</div>
        <div
          className={styles.voirLesDtailsContainer}
          onClick={onVoirLesDtails3Click}
        >
          <p className={styles.voirLesDtails}>{`>voir les détails`}</p>
        </div>
      </div>
      <ContainerCard
        imageDimensions="/ellipse-3@2x.png"
        personName="Nisrine Aida"
        propTop="296px"
        onVoirLesDtails2Click={onVoirLesDtailsClick}
      />
      <div className={styles.ellipseGroup}>
        <img className={styles.frameItem} alt="" src="/ellipse-4@2x.png" />
        <div className={styles.chaimaeBenaoui}>Chaimae benaoui</div>
        <div className={styles.cleInfo1}>CLE Info</div>
        <div
          className={styles.voirLesDtailsContainer}
          onClick={onVoirLesDtails4Click}
        >
          <p className={styles.voirLesDtails}>{`>voir les détails`}</p>
        </div>
      </div>
      <ContainerCard
        imageDimensions="/ellipse-5@2x.png"
        personName="Oumaima ben.."
        propTop="555px"
        onVoirLesDtails2Click={onVoirLesDtails2Click}
      />
      <div className={styles.laureatChild} />
      <img className={styles.instagramIcon} alt="" src="/instagram.svg" />
      <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
      <img className={styles.facebookIcon} alt="" src="/facebook.svg" />
      <img className={styles.linkedinIcon} alt="" src="/linkedin.svg" />
      <div className={styles.contacterNous}>Contacter-nous</div>
      <img
        className={styles.messageFillIcon}
        alt=""
        src="/message-fill@2x.png"
      />
      <img className={styles.sendFillIcon} alt="" src="/send-fill@2x.png" />
      <div className={styles.cleInformatique}>CLE INFORMATIQUE</div>
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

export default Laureat;
