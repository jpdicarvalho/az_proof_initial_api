import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import './Login.css'

import ImgLogin from '../assets/img_login.png'

function Login (){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEyesOpen, setIsEyesOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({ email: "", password: "", btnClicked: "", erroRequest: "" });
    const [messageSucess, setMessageSucess] = useState("");

    const navigate = useNavigate()
    
    // Expressões Regulares
    const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validação dinâmica do e-mail
    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        setIsLoading(false)
        setErrors((prevErrors) => ({
            ...prevErrors,
            email: emailRegex.test(value) ? "" : "E-mail inválido",
        }));
    };

    // Validação dinâmica da senha (somente números, 6 caracteres)
    const handlePasswordChange = (e) => {
        const value = e.target.value;

        if (!/^\d*$/.test(value) || value.length > 6) return; // Permite apenas números e até 6 caracteres

        setPassword(value);

        setIsLoading(false)
        setErrors((prevErrors) => ({
            ...prevErrors,
            password: value.length === 6 ? "" : "A senha deve ter exatamente 6 números",
        }));
    };

    // Função para fazer login
    const handleLogin = async () => {
        setIsLoading(true)
        setErrors("");
        if (errors.email || errors.password || !email || !password) {
            setIsLoading(false)
            setErrors((prevErrors) => ({
                ...prevErrors,
                btnClicked: "Por favor, corrija os erros e tente novamente.",
            }));
            return
        }

        try {
            const response = await axios.post("http://localhost:3333/proof/session", {
                email,
                password,
            });

            // Armazene o token no localStorage
            localStorage.clear();
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userName', response.data.profile.name);

            setIsLoading(false)
            setMessageSucess(`Seja bem-vindo ${response.data.profile.name}`)

            navigate('/Dashboard')
        } catch (error) {
            setIsLoading(false)
            console.error("Erro no login:", error.response.data);
            console.log(error)
            setErrors((prevErrors) => ({
                ...prevErrors,
                erroRequest: "Usuário não encontrado. E-mail ou senha incorretos.",
            }));
        }
    };

    return(
        <div className='content__main__login'>
          <div className='section__form'>
            <div className="form">

                <div className='box__logo__form'>
                    <svg width="160" height="68" viewBox="0 0 160 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M58.2605 55.1026L59.7724 52.6125C61.551 54.1688 64.6637 55.1916 67.8573 55.1916C72.3484 55.1916 74.7941 53.6352 74.7941 51.0117C74.7941 45.7201 61.543 49.3664 61.543 41.4513C61.543 37.0046 65.545 34.1749 71.6814 34.1749C74.6607 34.1749 77.8178 35.0197 79.5965 36.3537L78.2625 38.8884C76.4394 37.5099 73.8158 36.8671 71.4146 36.8671C67.1013 36.8671 64.6556 38.6013 64.6556 41.136C64.6556 46.5609 77.9068 42.8702 77.9068 50.6519C77.9068 55.2764 73.7714 57.9283 67.546 57.9283C63.7299 57.9485 60.0836 56.7479 58.2605 55.1026Z" fill="#59666F"/>
                        <path d="M106.907 34.3365L102.234 57.7221H99.21L99.9659 53.9869C97.6981 56.6994 94.5409 57.9445 90.9391 57.9445C85.6839 57.9445 82.6238 55.1147 82.6238 50.2961C82.6289 49.4151 82.7182 48.5366 82.8906 47.6726L85.5586 34.3325H88.7158L86.0477 47.6726C85.9124 48.3614 85.838 49.0607 85.8254 49.7625C85.8254 53.142 87.782 55.0986 91.784 55.0986C96.7198 55.0986 100.144 52.3416 101.255 46.9167L103.75 34.3325L106.907 34.3365Z" fill="#59666F"/>
                        <path d="M114.361 34.3366H117.518L112.91 57.7221H109.753L114.361 34.3366ZM115.17 27.1329C115.166 26.8127 115.227 26.495 115.349 26.199C115.471 25.9029 115.651 25.6346 115.88 25.4103C116.108 25.1859 116.38 25.0101 116.678 24.8935C116.976 24.7769 117.295 24.7219 117.615 24.7317C117.891 24.7203 118.167 24.7637 118.426 24.8593C118.685 24.9549 118.923 25.1009 119.125 25.2888C119.328 25.4766 119.491 25.7027 119.606 25.954C119.721 26.2053 119.785 26.4768 119.794 26.7529C119.803 27.0824 119.745 27.4102 119.623 27.7163C119.501 28.0225 119.318 28.3005 119.085 28.5336C118.852 28.7666 118.574 28.9497 118.267 29.0717C117.961 29.1937 117.633 29.252 117.304 29.2431C117.024 29.2479 116.747 29.1968 116.487 29.0928C116.228 28.9888 115.991 28.8339 115.793 28.6373C115.594 28.4408 115.436 28.2064 115.329 27.948C115.222 27.6897 115.168 27.4125 115.17 27.1329Z" fill="#59666F"/>
                        <path d="M125.449 50.6559C125.351 51.1396 125.291 51.6303 125.271 52.1233C125.271 54.1244 126.383 55.236 128.65 55.236C129.951 55.2367 131.217 54.8107 132.252 54.0233L133.008 56.4245C131.541 57.5362 129.584 57.9364 127.805 57.9364C124.293 57.9364 122.114 55.9354 122.114 52.6004C122.109 51.9881 122.168 51.377 122.292 50.7772L125.004 36.9925H120.869L121.358 34.3244H125.538L126.56 29.2107H129.722L128.699 34.3244H135.814L135.28 36.9925H128.165L125.449 50.6559Z" fill="#59666F"/>
                        <path d="M160.001 44.2971C160.001 44.6084 159.956 44.9642 159.956 45.3199L140.035 49.0106C140.48 52.9682 143.103 55.1471 148.039 55.1471C151.152 55.1471 153.953 54.0799 155.687 52.2123L157.11 54.4801C154.931 56.659 151.507 57.9485 147.772 57.9485C141.013 57.9485 136.878 54.1243 136.878 47.9879C136.878 40.1173 142.303 34.1587 149.814 34.1587C155.954 34.1587 160.001 37.716 160.001 44.2971ZM140.035 46.6539L157.066 43.4523C156.977 39.3169 154.131 36.8267 149.729 36.8267C144.348 36.8267 140.48 40.8287 140.035 46.6539Z" fill="#59666F"/>
                        <path d="M19.2946 35.8929C17.2926 34.2542 14.779 33.3701 12.192 33.3947C5.08136 33.3947 0 38.5205 0 45.7201C0 52.9197 5.08136 58.1264 12.192 58.1264C14.7387 58.1528 17.2159 57.2957 19.2016 55.7009V57.3381H26.0738V34.09H19.3189L19.2946 35.8929ZM13.2633 51.044C10.2638 51.044 8.0566 48.7762 8.0566 45.7403C8.0566 42.7044 10.2436 40.4568 13.2633 40.4568C16.283 40.4568 18.4659 42.7246 18.4659 45.7403C18.4659 48.756 16.2628 51.044 13.2633 51.044Z" fill="#59666F"/>
                        <path d="M49.4761 35.4199V34.1142H29.3568V41.1845H38.3957L29.4902 56.1779V57.3664H49.565V50.2436H40.6919L49.4761 35.4199Z" fill="#59666F"/>
                        <path d="M35.6261 8H33.5766L35.6867 10.2355C30.8425 14.4557 24.8077 17.068 18.4153 17.7117C12.0229 18.3554 5.58839 16.9988 0 13.8292C2.29018 17.7981 5.42839 21.2124 9.19057 23.8283C12.9527 26.4442 17.2461 28.1973 21.764 28.9622C26.282 29.7272 30.9131 29.4852 35.3267 28.2536C39.7403 27.022 43.8276 24.8311 47.2966 21.8373L49.4594 23.8787V8H35.6261Z" fill="#FE7C6E"/>
                    </svg>
                </div>
                
                <p className={messageSucess ? "success":""}>{messageSucess}</p>
                <p className={errors.email ? "error":""}>{errors.email}</p>
                <p className={errors.password ? "error":""}>{errors.password}</p>
                <p className={errors.btnClicked ? "error":""}>{errors.btnClicked}</p>
                <p className={errors.erroRequest ? "error":""}>{errors.erroRequest}</p>

                <div className="flex-column">
                  <label>E-mail </label>
                </div>
                
                <div className="inputForm">
                    <input
                        type="email"
                        className="input"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="seuemail@exemplo.com"
                    />
                </div>

                <div className="flex-column">
                    <label>Senha </label>
                </div>

                <div className="inputForm">
                    <input
                        type={isEyesOpen ? "text" : "password"}
                        className="input"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Sua senha"
                    />

                    <div className='box__svg__eyes' onClick={() =>{setIsEyesOpen(!isEyesOpen)}}>
                        {isEyesOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5C7.5 5 3.7 7.8 2 12C3.7 16.2 7.5 19 12 19C16.5 19 20.3 16.2 22 12C20.3 7.8 16.5 5 12 5Z" stroke="#59666F" stroke-width="1.6" fill="none"/>
                                <circle cx="12" cy="12" r="3" stroke="#59666F" stroke-width="1.7" fill="none"/>
                            </svg>
                        ):(
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M20.5303 4.53033C20.8232 4.23744 20.8232 3.76256 20.5303 3.46967C20.2374 3.17678 19.7626 3.17678 19.4697 3.46967L3.46967 19.4697C3.17678 19.7626 3.17678 20.2374 3.46967 20.5303C3.76256 20.8232 4.23744 20.8232 4.53033 20.5303L7.37723 17.6834C8.74353 18.3266 10.3172 18.75 12 18.75C14.684 18.75 17.0903 17.6729 18.8206 16.345C19.6874 15.6797 20.4032 14.9376 20.9089 14.2089C21.4006 13.5003 21.75 12.7227 21.75 12C21.75 11.2773 21.4006 10.4997 20.9089 9.79115C20.4032 9.06244 19.6874 8.32028 18.8206 7.65503C18.5585 7.45385 18.2808 7.25842 17.989 7.07163L20.5303 4.53033ZM16.8995 8.16113L15.1287 9.93196C15.5213 10.5248 15.75 11.2357 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C11.2357 15.75 10.5248 15.5213 9.93196 15.1287L8.51524 16.5454C9.58077 16.9795 10.7621 17.25 12 17.25C14.2865 17.25 16.3802 16.3271 17.9073 15.155C18.6692 14.5703 19.2714 13.9374 19.6766 13.3536C20.0957 12.7497 20.25 12.2773 20.25 12C20.25 11.7227 20.0957 11.2503 19.6766 10.6464C19.2714 10.0626 18.6692 9.42972 17.9073 8.84497C17.5941 8.60461 17.2571 8.37472 16.8995 8.16113ZM11.0299 14.0307C11.3237 14.1713 11.6526 14.25 12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 11.6526 14.1713 11.3237 14.0307 11.0299L11.0299 14.0307Z" fill="#59666F"/>
                                <path d="M12 5.25C13.0323 5.25 14.0236 5.40934 14.9511 5.68101C15.1296 5.73328 15.1827 5.95662 15.0513 6.0881L14.2267 6.91265C14.1648 6.97451 14.0752 6.99928 13.99 6.97967C13.3506 6.83257 12.6839 6.75 12 6.75C9.71345 6.75 7.61978 7.67292 6.09267 8.84497C5.33078 9.42972 4.72857 10.0626 4.32343 10.6464C3.90431 11.2503 3.75 11.7227 3.75 12C3.75 12.2773 3.90431 12.7497 4.32343 13.3536C4.67725 13.8635 5.18138 14.4107 5.81091 14.9307C5.92677 15.0264 5.93781 15.2015 5.83156 15.3078L5.12265 16.0167C5.03234 16.107 4.88823 16.1149 4.79037 16.0329C4.09739 15.4517 3.51902 14.8255 3.0911 14.2089C2.59937 13.5003 2.25 12.7227 2.25 12C2.25 11.2773 2.59937 10.4997 3.0911 9.79115C3.59681 9.06244 4.31262 8.32028 5.17941 7.65503C6.90965 6.32708 9.31598 5.25 12 5.25Z" fill="#59666F"/>
                                <path d="M12 8.25C12.1185 8.25 12.2357 8.25549 12.3513 8.26624C12.5482 8.28453 12.6194 8.51991 12.4796 8.6597L11.2674 9.87196C10.6141 10.0968 10.0968 10.6141 9.87196 11.2674L8.6597 12.4796C8.51991 12.6194 8.28453 12.5482 8.26624 12.3513C8.25549 12.2357 8.25 12.1185 8.25 12C8.25 9.92893 9.92893 8.25 12 8.25Z" fill="#59666F"/>
                            </svg>
                        )}
                    </div>
                </div>
                
                <div className="flex-row">
                    <span className="span">Esqueci a senha</span>
                </div>
                <div className='box__btn__login'>
                    {isLoading ? (
                        <svg className="svg__loading" viewBox="25 25 50 50">
                            <circle className='cicle__loading' r="20" cy="50" cx="50"></circle>
                        </svg>
                    ):(
                        <button className="button-submit" onClick={handleLogin}>
                            Entrar
                        </button>
                    )}
                </div>

            </div>
          </div>

          <div className='section__image'>
            <img src={ImgLogin} className="image__login" alt="Imagem ilustrativa para página de login" />
          </div>
          
        </div>
    )
}
export default Login