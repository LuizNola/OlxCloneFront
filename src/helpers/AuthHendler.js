import cookie from 'js-cookie';

export const isLogged = () =>{
    let token = cookie.get('token');
    return(token) ? true : false;
    
}

export const doLogin = (token, remenberPass = false) =>{
    if(remenberPass){
        cookie.set('token', token, {expires: 999})
    }else{
        cookie.set('token', token)
    }
    
}

export const doLogout = () => {
    cookie.remove('token')
}