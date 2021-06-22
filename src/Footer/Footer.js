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
                    <div className={style.iconContainer}>
                        <FontAwesomeIcon className={style.icon} icon={faLinkedinIn}/>
                    </div>
                    <div className={style.iconContainer}>
                        <FontAwesomeIcon className={style.icon} icon={faGithub}/>
                    </div>
                    <div className={style.iconContainer}>
                        <FontAwesomeIcon className={style.icon} icon={faTelegram}/>
                    </div>
                    <div className={style.iconContainer}>
                        <FontAwesomeIcon className={style.icon} icon={faVk}/>
                    </div>
                </div>
                <div className={style.text}>
                    <p>© 2021, All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;