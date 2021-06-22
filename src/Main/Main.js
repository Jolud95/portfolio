import style from "./Main.module.scss"
import styleContainer from "../Common/Styles/Container.module.scss"

function Main() {
    return (
        <div id={"main"} className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span className={style.hello}>Hello, I am </span>
                    <h1 className={style.me}>Ekaterina Dubovskaya</h1>
                    <p className={style.profession}>Frontend Developer</p>
                </div>
            </div>

        </div>
    );
}

export default Main;
