import style from "./Skills.module.scss"
import styleContainer from "../Common/Styles/Container.module.scss"
import Skill from "./Skill/Skill";
import Title from "../Common/Components/Title";
import {faCss3, faHtml5, faJs, faReact} from "@fortawesome/free-brands-svg-icons";
import {faServer, faTasks} from "@fortawesome/free-solid-svg-icons";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"My skills"}/>
                <div className={style.skills}>
                    <Skill title={"React/Redux"}
                           description={"BLL & UI"}
                           icon={faReact}/>
                    <Skill title={"JS/TS"}
                           description={"JavaScript & TypeScript"}
                           icon={faJs}/>
                    <Skill title={"CSS"}
                           description={"Modern responsive layout"}
                           icon={faCss3}/>
                    <Skill title={"HTML"}
                           description={"High-quality page structure"}
                           icon={faHtml5}/>
                    <Skill title={"Unit testing"}
                           description={"Writing tests for the application"}
                           icon={faTasks}/>
                    <Skill title={"Axios"}
                           description={"Interaction with the server"}
                           icon={faServer}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
