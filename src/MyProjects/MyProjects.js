import style from "./MyProjects.module.css"
import styleContainer from "./../Common/Styles/Container.module.css"
import Project from "./Project/Project";
import Title from "../Common/Components/Title";
import todoImg from "./../Assets/img/todolist.jpg"
import networkImg from "./../Assets/img/network.png"

function Projects() {
    const network = {
        backgroundImage: `url(${networkImg})`,
    }
    const todolist = {
        backgroundImage: `url(${todoImg})`,
    }
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={"My projects"}/>
                <div className={style.projects}>
                    <Project style={network}
                             title={"Social network"}
                             description={"It's almost Facebook or VK"}
                             pageDescription={"Page for my project 'Social Network'"}/>
                    <Project style={todolist}
                             title={"Todolist"}
                             description={"I will help you remember all"}
                             pageDescription={"Page for my project 'Todolist'"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;