import style from "./Contacts.module.css"
import styleContainer from "./../Common/Styles/Container.module.css"
import Title from "../Common/Components/Title";

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={"Contacts"}/>
                <form className={style.form}>
                    <input className={style.input} type={"text"}/>
                    <input className={style.input} type={"text"}/>
                    <textarea className={style.textarea}></textarea>
                </form>
                <button type={"submit"} className={style.button}>Send</button>
            </div>
        </div>
    );
}

export default Contacts;