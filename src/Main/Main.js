import style from "./Main.module.scss"
import styleContainer from "../Common/Styles/Container.module.scss"

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span className={style.hello}>Hi There</span>
                    <h1 className={style.me}>I am Ekaterina Dubovskaya</h1>
                    <p className={style.profession}>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>

        </div>
    );
}

export default Main;
