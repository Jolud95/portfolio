import style from "./Contacts.module.scss"
import styleContainer from "../Common/Styles/Container.module.scss"
import Title from "../Common/Components/Title";

function Contacts() {
    return (
        <div id={'contacts'} className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={"Contacts"}
                       background={"Contacts"}/>
                <form className={style.form}>
                    <input placeholder={"Name"} className={style.input} type={"text"} name={"name"}/>
                    <input placeholder={"Email"} className={style.input} type={"text"} name={"email"}/>
                    <textarea placeholder={"Description"} className={style.textarea} name={"message"}></textarea>
                </form>
                <button type={"submit"} className={style.button}>Send</button>
            </div>
        </div>
    );
}

export default Contacts;