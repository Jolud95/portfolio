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
                        <a title={"LinkedIn"} target={"_blank"} href={"https://www.linkedin.com/in/ekaterina-dubovskaya-4b9aa5213/"}>
                        <FontAwesomeIcon className={style.icon} icon={faLinkedinIn}/>
                        </a>
                    </div>
                    <div className={style.iconContainer}>
                        <a title={"GitHub"} target={"_blank"} href={"https://github.com/Jolud95"}>
                        <FontAwesomeIcon className={style.icon} icon={faGithub}/>
                        </a>
                    </div>
                    <div className={style.iconContainer}>
                        <a title={"Telegram"} target={"_blank"} href={"https://t.me/joluuud"}>
                        <FontAwesomeIcon className={style.icon} icon={faTelegram}/>
                        </a>
                    </div>
                    <div className={style.iconContainer}>
                        <a title={"VK"} target={"_blank"} href={"https://vk.com/id46220168"}>
                        <FontAwesomeIcon className={style.icon} icon={faVk}/>
                        </a>
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