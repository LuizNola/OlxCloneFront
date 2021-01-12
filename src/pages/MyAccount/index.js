import React, { useEffect } from 'react';
import { PageArea } from './styled';
import { PageContainer } from '../../components/MainComponents'


import useApi from '../../helpers/olxAPI';
//import AdItem from '../../components/partials/Aditem/index'


const Home = () => {
    const api = useApi();

    const getUser = async () =>{
      
            const json = await api.getUser()
            console.log(json)
    }

    useEffect(() => {
        getUser()
    }, [])
    


    return (

        <>

            <PageContainer>
                <PageArea>

                    <div className="TopSide">
                        <div className="userInfo">
                            <h2>Usuario<br/>
                            <span>...</span></h2>
                            <h2>Email<br/>
                            <span>...</span></h2>
                            <h2>Estado<br/>
                            <span>...</span></h2>
                            <h2>Quantidade de postagens<br/>
                            <span>...</span></h2>
                        </div>
                        <button>Editar</button>
                    </div>
                    <div className="adZone">
                        <h2>Meus Anuncios</h2>
                    </div>

                </PageArea>
            </PageContainer>
        </>

    );
}

export default Home;