import style from "./Project.module.scss"


function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.icon} style={props.style}>
                <a href={props.url} target={"_blank"} className={style.link}>Show</a>
            </div>
            <div className={style.info}>
                <h3 className={style.title}>{props.title}</h3>
                <p className={style.description}>{props.description}</p>
                <p>Test account data:<br/>
                    Email: free@samuraijs.com<br/>
                    Password: free</p>
            </div>
        </div>
    );
}

export default Project;
