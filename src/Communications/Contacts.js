import style from "./Contacts.module.scss"
import styleContainer from "../Common/Styles/Container.module.scss"
import Title from "../Common/Components/Title";
import emailjs from 'emailjs-com';

function Contacts() {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_f037s4u', 'template_s04peal', e.target,
            'user_IAMWvHS9bSmB9RBrT2Yog')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div id={'contacts'} className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={"Contacts"}
                       background={"Contacts"}/>
                <form onSubmit={sendEmail} className={style.form}>
                    <input placeholder={"Name"} className={style.input} type={"text"} name={"name"}/>
                    <input placeholder={"Email"} className={style.input} type={"text"} name={"email"}/>
                    <textarea placeholder={"Description"} className={style.textarea} name={"message"}></textarea>
                    <button type={"submit"} className={style.button}>Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;