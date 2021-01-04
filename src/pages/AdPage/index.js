import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import { PageArea, Fake, OthersArea, BreadChumb } from './styled';
import { PageContainer } from '../../components/MainComponents';
import 'react-slideshow-image/dist/styles.css';
import useApi from '../../helpers/olxAPI';

import AdItem from '../../components/partials/Aditem/index'



const SignIn = () => {
    const api = useApi();
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState({});

    useEffect(() => {
        const getAdInfo = async (id) => {
            const json = await api.getAd(id, true);
            setAdInfo(json);
            setLoading(false);
        }

        getAdInfo(id)
    }, [])

    function formatDate(date) {
        let cDate = new Date(date);

        let months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
        let cDay = cDate.getDate();
        let cMonth = cDate.getMonth();
        let cYear = cDate.getFullYear();

        return `${cDay} de ${months[cMonth]}, ${cYear}`
    }


    return (
        <PageContainer>
            {adInfo.category && 
            <BreadChumb>
            Você esta aqui: 
            <Link to='/'> HOME </Link>
            /
            <Link to={`/ads?state=${adInfo.stateName}`}> {adInfo.stateName} </Link>
            /
            <Link to={`/ads?state=${adInfo.stateName}&cat=${adInfo.category.slug}`}> {adInfo.category.name} </Link>
            /
              {adInfo.title}
            </BreadChumb>
            }

            <PageArea>
                <div className="leftSide">
                    <div className="box">
                        <div className="adImg">
                            {loading && <Fake height={300} />}
                            {adInfo.images &&
                                <Slide>
                                    {adInfo.images.map((img, k) => {
                                        return (
                                            <div key={k} className="each-slide">
                                                <img src={img} alt="{adInfo.title}" />
                                            </div>)
                                    })}
                                </Slide>
                            }
                        </div>
                        <div className="adInfo">
                            <div className="adName">
                                {loading && <Fake height={20} />}
                                {adInfo.title &&
                                    <h2>{adInfo.title}</h2>}
                                {adInfo.dateCreated &&
                                    <small>Criado em {formatDate(adInfo.dateCreated)}</small>}
                            </div>
                            <div className="adDesc">
                                {loading && <Fake height={100} />}
                                {adInfo.description &&
                                    <p>{adInfo.description}</p>}
                                <hr />
                                {adInfo.views &&
                                    <small>visualizações: {adInfo.views}</small>
                                }
                            </div>
                        </div>
                    </div>

                </div>
                <div className="rigthSide">
                    <div className="box">
                        {loading && <Fake height={100} />}
                        {adInfo.priceNegotiable &&
                            "Preço Negociável"}
                        {!adInfo.priceNegotiable && adInfo.price &&
                            <div className="price"> preço:<span>R$ {adInfo.price}</span> </div>}

                    </div>
                    {loading && <Fake height={100} />}
                    {adInfo.userInfo &&

                        <>
                            <a href={`mailto:${adInfo.userInfo.email}`} target="_blank" className="ContactSeller">fale com o vendedor</a>
                            <div className="createdBy box">
                                criado por: 
                                <strong>{adInfo.userInfo.name}</strong>
                                <small>email: {adInfo.userInfo.email}</small>
                                <small>Estado: {adInfo.stateName}</small>
                            </div>
                        </>}
                </div>

               
            </PageArea>

            <OthersArea>
            {adInfo.others && 
                    <>
                        <h2>Outras Ofertas do vendedor</h2>
                        <div className = "list">
                            {adInfo.others.map((i,k) =>
                                <AdItem key={k} data={i}/>
                            )}
                        </div>
                    </>
                }
            </OthersArea>
        </PageContainer>
    );
}

export default SignIn;