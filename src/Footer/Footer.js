import style from "./Footer.module.css"
import styleContainer from "./../Common/Styles/Container.module.css"

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.text}>
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