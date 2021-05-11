import style from "./Skills.module.css"
import styleContainer from "./../Common/Styles/Container.module.css"
import Skill from "./Skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My skills</h2>
                <div className={style.skills}>
                    <Skill title={"HTML"}
                           description={"I like study"}/>
                    <Skill title={"CSS"}
                           description={"I like study"}/>
                    <Skill title={"JS"}
                           description={"I like study"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
