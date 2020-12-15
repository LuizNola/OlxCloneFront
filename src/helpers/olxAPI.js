import Cookies from 'js-cookie';
import qs from 'qs'

const BASEAPI = 'http://alunos.b7web.com.br:501/';

const apiFetchPost =async (endpoint, body) =>{
    if(!body.token){
        let token = Cookies.get('token');
        if(token){
            body.token = token
        }
    }

    const res = await fetch(BASEAPI+endpoint, {     
        
        method:'POST',
        headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
        }, 
        body: JSON.stringify(body)
    }

    );
    const json = await res.json()

    if(json.notallowed) {
        window.location.href('/signin')
        return;
    }

    return json;
}

const apiFetchGet =async (endpoint, body = []) =>{
    if(!body.token){
        let token = Cookies.get('token');
        if(token){
            body.token = token
        }
    }

    const res = await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    const json = await res.json()

    if(json.notallowed) {
        window.location.href('/signin')
        return;
    }

    return json;
}

const olxAPI = {

    login: async(email, pass) => {
        const json = await apiFetchPost(
            'user/singin', 
            {email,pass}
        )
            return(json)
        
    }

};

export default () => olxAPI;