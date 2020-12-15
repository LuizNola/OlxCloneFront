import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import useApi from '../../helpers/olxAPI'
import {login} from '../../helpers/AuthHendler'

import { LoginArea }  from './styled'
import { PageContainer, PageTitle } from '../../components/MainComponents'

function SingIn(){

    const api = useApi();
    
    const [email, SetEmail] = useState('');
    const [pass, SetPass] = useState('');
    const [remenberPass, SetRemenberPass] = useState(false);
    const [disabled, SetDisabled] = useState(false);
    const [error, SetError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        SetDisabled(true);

        const json = await api.login(email, pass)

        if(json.error){
            SetError(json.error)
            console.log(error)
        }else{
            login(json.token, remenberPass)
            window.location.href = '/';
            
        }
        SetDisabled(false)
    }

   
    return(
        <>
            <PageContainer>
                <PageTitle>Login</PageTitle>
                <LoginArea>
                    <form onSubmit={handleSubmit}>
                        <label className="area">
                            <div className="area-title">E-Mail</div>
                            <div className="area-input">
                                <input 
                                 type="email"
                                 disabled = {disabled}
                                 value = {email}
                                 onChange={e =>SetEmail(e.target.value)}
                                 />
                            </div>
                        </label>

                        <label className="area">
                            <div className="area-title">Senha</div>
                            <div className="area-input">
                                <input 
                                type="password" 
                                disabled = {disabled}
                                value = {pass}
                                onChange={e =>SetPass(e.target.value)}
                                />
                            </div>
                        </label>

                        <label className="area">
                            <div className="area-title">Lembrar senha</div>
                            <div className="area-input">
                                <input 
                                type="checkbox" 
                                disabled = {disabled}
                                checked = {remenberPass}
                                onChange = {()=>SetRemenberPass(!remenberPass)}
                                />
                            </div>
                        </label>

                        <label className="area">
                            <div className="area-title"></div>
                            <div className="area-input">
                                <button disabled = {disabled}>Entrar</button>
                            </div>
                        </label>
                    </form>
                </LoginArea>
            </PageContainer>
        </>
    )
}
export default SingIn;