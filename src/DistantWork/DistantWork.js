import style from "./DistantWork.module.css"
import styleContainer from "./../Common/Styles/Container.module.css"
import Title from "../Common/Components/Title";

function DistantWork() {
    return (
        <div className={style.distantWorkBlock}>
            <div className={`${styleContainer.container} ${style.distantWorkContainer}`}>
                <Title title={"I can work on a distance"}/>
                <button className={style.button}>Hire me</button>
            </div>
        </div>
    );
}

export default DistantWork;