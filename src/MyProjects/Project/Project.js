import style from "./Project.module.css"


function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.icon}>
                <a className={style.link}>Show</a>
            </div>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    );
}

export default Project;
