import style from "./Contacts.module.css"
import styleContainer from "./../Common/Styles/Container.module.css"

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <div className={style.text}>
                    <h1>Contacts</h1>
                </div>
                <form className={style.form}>
                    <div>
                        <input className={style.input} type={"text"}/>
                    </div>
                    <div>
                        <input className={style.input} type={"text"}/>
                    </div>
                    <div>
                        <textarea className={style.textarea}></textarea>
                    </div>
                </form>
                <button className={style.button}>Send</button>
            </div>
        </div>
    );
}

export default Contacts;