import style from "./Footer.module.scss"
import styleContainer from "../Common/Styles/Container.module.scss"

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.name}>
                    <p>Ekaterina Dubovskaya</p>
                </div>
                <div className={style.link}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <div className={style.text}>
                    <p>© 2021, All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;