import style from "./DistantWork.module.scss"
import styleContainer from "../Common/Styles/Container.module.scss"
import Title from "../Common/Components/Title";

function DistantWork() {
    return (
        <div className={style.distantWorkBlock}>
            <div className={`${styleContainer.container} ${style.distantWorkContainer}`}>
                <Title title={"I can work on a distance"}
                       background={"Online job"}/>
                <button className={style.button}>Hire me</button>
            </div>
        </div>
    );
}

export default DistantWork;