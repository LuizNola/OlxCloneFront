import React, { useState, useEffect } from 'react';
import { LoginArea } from './styled';
import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents'
import useApi from '../../helpers/olxAPI';
import { doLogin } from '../../helpers/AuthHendler';

const SignIn = () => {
    const api = useApi();

    const [name, setName] = useState('');
    const [stateLoc, setStateLoc] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [stateList, setStateList] = useState([])

    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    },[])


    const handleSubmit = async (event) => {
        event.preventDefault();
        setDisabled(true);
        setError('')

        if(password !== confirmPassword){
            setError('Senhas não conferem');
            setDisabled(false);
            return;
        }

        const json = await api.register(name, stateLoc, email, password);

        if(json.error){
            setError(json.error);
        }else{
            doLogin(json.token)
            window.location.href = '/'
        }

        setDisabled(false);
    }

    return (
        <PageContainer>
            <PageTitle>Cadastrar</PageTitle>

            <LoginArea>
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }

                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">Nome</div>
                        <div className="area--input">
                            <input type="text" value={name} onChange={e=>setName(e.target.value)} disabled={disabled} required />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Estado</div>
                        <div className="area--input">
                            <select value={stateLoc} onChange={e=>setStateLoc(e.target.value)} required>
                                <option></option>
                                {stateList.map((i, k)=>
                                    <option 
                                    key={k} 
                                    value={i._id}>
                                    {i.name}
                                    </option>
                                )}
                            </select>
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title"> E-mail</div>
                        <div className="area--input">
                            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} disabled={disabled} required />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} disabled={disabled} required />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Comfirmar Senha</div>
                        <div className="area--input">
                            <input type="password" checked={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} disabled={disabled} />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled}>Fazer Login</button>
                        </div>
                    </label>
                </form>
            </LoginArea>
        </PageContainer>
    );
}

export default SignIn;