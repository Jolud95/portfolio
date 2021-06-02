import style from "./Skills.module.css"
import styleContainer from "./../Common/Styles/Container.module.css"
import Skill from "./Skill/Skill";
import Title from "../Common/Components/Title";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"My skills"}/>
                <div className={style.skills}>
                    <Skill title={"HTML"}
                           description={"I like to study"}/>
                    <Skill title={"CSS"}
                           description={"I like to study"}/>
                    <Skill title={"JS"}
                           description={"I like to study"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
