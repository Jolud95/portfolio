import style from "./Title.module.scss"



function Title(props) {
    return (
        <div className={style.title}>
            <h2 className={style.header}>{props.title}
            <span>{props.background}</span>
            </h2>
        </div>
    )
}

export default Title;