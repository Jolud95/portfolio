import style from "./MyProjects.module.scss"
import styleContainer from "../Common/Styles/Container.module.scss"
import Project from "./Project/Project";
import Title from "../Common/Components/Title";
import todoImg from "./../Assets/img/todolist.jpg"
import networkImg from "./../Assets/img/network.jpg"

function Projects() {
    const network = {
        backgroundImage: `url(${networkImg})`,
    }
    const todolist = {
        backgroundImage: `url(${todoImg})`,
    }
    return (
        <div id={"projects"} className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={"My projects"} background={"Portfolio"}/>
                <div className={style.projects}>
                    <Project style={network}
                             title={"Social network"}
                             description={"It's like Facebook or VK"}
                             pageDescription={"Page for my project 'Social Network'"}
                             url={"https://jolud95.github.io/waysam_js/"}/>
                    <Project style={todolist}
                             title={"Todolist"}
                             description={"I will help you remember all"}
                             pageDescription={"Page for my project 'Todolist'"}
                             url={"https://jolud95.github.io/Todolist/"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;