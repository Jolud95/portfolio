import style from "./Footer.module.scss"
import styleContainer from "../Common/Styles/Container.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn, faTelegram, faVk} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.name}>
                    <p>Ekaterina Dubovskaya</p>
                </div>
                <div className={style.link}>
                    <FontAwesomeIcon className={style.icon} icon={faLinkedinIn}/>
                    <FontAwesomeIcon className={style.icon} icon={faGithub}/>
                    <FontAwesomeIcon className={style.icon} icon={faTelegram}/>
                    <FontAwesomeIcon className={style.icon} icon={faVk}/>
                </div>
                <div className={style.text}>
                    <p>© 2021, All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;