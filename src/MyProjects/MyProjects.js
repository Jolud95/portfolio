import style from "./MyProjects.module.css"
import styleContainer from "./../Common/Styles/Container.module.css"
import Project from "./Project/Project";
import pageProject from "./Project/pages/project.png"

function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.projects}>
                    <Project title={"Social network"}
                             description={"It's almost Facebook or VK"}
                             pageDescription={"Page for my project 'Social Network'"}
                             page={pageProject}/>
                    <Project title={"Todolist"}
                             description={"I will help you remember all"}
                             pageDescription={"Page for my project 'Todolist'"}
                             page={pageProject}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;