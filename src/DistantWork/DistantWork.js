import style from "./DistantWork.module.css"
import styleContainer from "./../Common/Styles/Container.module.css"

function DistantWork() {
    return (
        <div className={style.distantWorkBlock}>
            <div className={`${styleContainer.container} ${style.distantWorkContainer}`}>
                <div className={style.text}>
                    <h1>I can work on a distance</h1>
                </div>
                <button className={style.button}>Hire me</button>
            </div>
        </div>
    );
}

export default DistantWork;