import ImgLogin from '../assets/img_login.png'
import OrdersTable from '../Components/OrdersTable';

import './Dashboard.css'

function Dashboard () {
    const userName = localStorage.getItem("userName");

    return(
        <div className='container__main__dashboard'>
            <div className='section__menu'>
                <div className='box__logo center'>
                    <svg  className="svg__logo__in__dashboard" width="160" height="68" viewBox="0 0 160 68" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div className='box__option__dashboard'>
                    <svg className='svg__option__menu' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.75 13V8.5H6.25" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.25 13H1.75" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.25 13V5.5H9.75" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.25 2.5H9.75V13H13.25V2.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <p className='name__option__menu'>Dashboard</p>
                </div>
                
            </div>

            <div className='section__content'>
                <div className='header__content'>
                    <div className='box__warnings center'>
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.7194 5.33333C12.7194 4.27247 12.2851 3.25505 11.512 2.5049C10.7389 1.75476 9.69043 1.33333 8.59715 1.33333C7.50387 1.33333 6.45537 1.75476 5.6823 2.5049C4.90923 3.25505 4.47493 4.27247 4.47493 5.33333C4.47493 10 2.41382 11.3333 2.41382 11.3333H14.7805C14.7805 11.3333 12.7194 10 12.7194 5.33333Z" stroke="#59666F" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.78584 14C9.66505 14.2021 9.49168 14.3698 9.28308 14.4864C9.07449 14.6029 8.83799 14.6643 8.59727 14.6643C8.35654 14.6643 8.12004 14.6029 7.91145 14.4864C7.70285 14.3698 7.52948 14.2021 7.40869 14" stroke="#59666F" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className='text__warnings'>Avisos</p>
                    </div>
                    <div className='box__userName'>
                        <p className='text__hello'>Olá,</p>
                        <p className='text__userName' >{userName}</p>
                    </div>
                    <div className='box__img__profile center'>
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.663 14V12.6667C14.663 11.9594 14.3735 11.2811 13.8581 10.781C13.3427 10.281 12.6437 10 11.9149 10H6.41856C5.6897 10 4.9907 10.281 4.47532 10.781C3.95995 11.2811 3.67041 11.9594 3.67041 12.6667V14" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.16685 7.33333C10.6846 7.33333 11.915 6.13943 11.915 4.66667C11.915 3.19391 10.6846 2 9.16685 2C7.64909 2 6.4187 3.19391 6.4187 4.66667C6.4187 6.13943 7.64909 7.33333 9.16685 7.33333Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>

                <div className='box__text__order'>
                    <p className='text__order'>Resumo dos pedidos</p>
                </div>

                <div className='container__totais'>
                    <div className='box__totais'>
                        <div className='box__svg center' style={{background: '#F4C8E1'}}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.75 16.5V5.99999C18.7512 5.70417 18.6939 5.41103 18.5813 5.13749C18.4686 4.86394 18.3029 4.61541 18.0938 4.40623C17.8846 4.19705 17.636 4.03137 17.3625 3.91873C17.089 3.8061 16.7958 3.74875 16.5 3.74999H3.75" stroke="#E54594" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.75 9.75H15.75" stroke="#E54594" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.75 12.75H15.75" stroke="#E54594" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.07187 7.5C1.829 7.22807 1.65585 6.9012 1.56733 6.54751C1.4788 6.19382 1.47756 5.82392 1.56369 5.46964C1.64983 5.11536 1.82077 4.78732 2.0618 4.51376C2.30283 4.2402 2.60673 4.02931 2.94734 3.89924C3.28795 3.76918 3.65507 3.72383 4.01709 3.76711C4.37911 3.81039 4.72519 3.941 5.02554 4.14769C5.32589 4.35439 5.57151 4.63097 5.74126 4.95364C5.91101 5.27632 5.9998 5.63541 6 6V18C6.00019 18.3646 6.08899 18.7237 6.25874 19.0464C6.42849 19.369 6.67411 19.6456 6.97446 19.8523C7.27481 20.059 7.62089 20.1896 7.98291 20.2329C8.34493 20.2762 8.71205 20.2308 9.05266 20.1008C9.39327 19.9707 9.69717 19.7598 9.9382 19.4862C10.1792 19.2127 10.3502 18.8846 10.4363 18.5304C10.5224 18.1761 10.5212 17.8062 10.4327 17.4525C10.3441 17.0988 10.171 16.7719 9.92813 16.5H20.4281C20.7177 16.8238 20.9074 17.2245 20.9743 17.6538C21.0411 18.0831 20.9823 18.5225 20.8048 18.9191C20.6274 19.3156 20.3389 19.6523 19.9743 19.8885C19.6096 20.1246 19.1844 20.2502 18.75 20.25H8.25" stroke="#E54594" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <p className='text__totais'>200 Pedidos</p>
                        <p className='values__totais'>R$ 50.480,95</p>
                    </div>
                    <div className='box__totais'>
                        <div className='box__svg center' style={{background: '#B6EEDD'}}>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.3 6.75V8.25" stroke="#07C693" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.3 15.75V17.25" stroke="#07C693" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.3 21C17.2706 21 21.3 16.9706 21.3 12C21.3 7.02944 17.2706 3 12.3 3C7.32949 3 3.30005 7.02944 3.30005 12C3.30005 16.9706 7.32949 21 12.3 21Z" stroke="#07C693" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.05 15.75H13.425C13.9223 15.75 14.3992 15.5525 14.7509 15.2008C15.1025 14.8492 15.3 14.3723 15.3 13.875C15.3 13.3777 15.1025 12.9008 14.7509 12.5492C14.3992 12.1975 13.9223 12 13.425 12H11.175C10.6778 12 10.2009 11.8025 9.84922 11.4508C9.49759 11.0992 9.30005 10.6223 9.30005 10.125C9.30005 9.62772 9.49759 9.15081 9.84922 8.79917C10.2009 8.44754 10.6778 8.25 11.175 8.25H14.55" stroke="#07C693" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <p className='text__totais'>156 Vendas</p>
                        <p className='values__totais'>R$ 35.996,42</p>
                    </div>
                    <div className='box__totais'>
                        <div className='box__svg center' style={{background: '#C3E7F3'}}>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.3501 17.25H10.3501" stroke="#3CB0D9" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.3501 14.25V20.25" stroke="#3CB0D9" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.3501 6.75H4.3501" stroke="#3CB0D9" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20.8501 15.7594H14.8501" stroke="#3CB0D9" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20.8501 18.7406H14.8501" stroke="#3CB0D9" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20.1001 4.5L15.6001 9" stroke="#3CB0D9" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20.1001 9L15.6001 4.5" stroke="#3CB0D9" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <p className='text__totais'>Ticket médio</p>
                        <p className='values__totais'>R$ 230,74</p>
                    </div>
                </div>

                <div className='container__table'>
                    <OrdersTable/>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;