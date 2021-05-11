import style from "./Project.module.css"


function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.icon}></div>
            <button className={style.button}>Show</button>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    );
}

export default Project;
