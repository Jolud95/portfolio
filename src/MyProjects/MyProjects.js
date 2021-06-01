import style from "./MyProjects.module.css"
import styleContainer from "./../Common/Styles/Container.module.css"
import Project from "./Project/Project";


function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <div className={style.title}>
                    <h2>My projects</h2>
                </div>
                <div className={style.projects}>
                    <Project title={"Social network"}
                             description={"It's almost Facebook or VK"}
                             pageDescription={"Page for my project 'Social Network'"}/>
                    <Project title={"Todolist"}
                             description={"I will help you remember all"}
                             pageDescription={"Page for my project 'Todolist'"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;