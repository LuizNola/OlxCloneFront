import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { PageArea, SearchArea } from './styled';
import { PageContainer } from '../../components/MainComponents'
import useApi from '../../helpers/olxAPI';

import AdItem from '../../components/partials/Aditem/index'


const Home = () => {
    const api = useApi();

    const [stateLoc, setStateLoc] = useState([]);
    const [category, setCategory] = useState([]);
    const [recentAds, setRecentAds] = useState([]);

    useEffect(() => {
        const getStates = async () => {
            const slist = await api.getStates();
            setStateLoc(slist)
        }
        getStates();
    }, [])

    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategory(cats)
        }
        getCategories();
    }, [])

    useEffect(() => {
        const getRecentAds = async () => {
            const json = await api.getAds({
                sort: 'desc', 
                limit: 8
            });
            setRecentAds(json.ads)
        }
        getRecentAds();
    }, [])

    return (

        <>
            <SearchArea>
                <PageContainer>
                    <div className="search-box">
                        <form method="GET" action="/ads">
                            <input type="text" name="q" placeholder=" O que você procura?" />
                            <select name="state">
                                {stateLoc.map((i, k) => {
                                    return (
                                        <option key={k} value={i.name}>{i.name}</option>
                                    )
                                })}
                            </select>
                            <button>OK</button>
                        </form>
                    </div>
                    <div className="category-list">
                        {category.map((i, k) => {
                            return (
                                <Link to={`/ads?cat=${i.slug}`} key={k} className = "category-item">
                                    <img src={i.img} alt={i.name} />
                                </Link>
                            )
                        })}
                    </div>
                </PageContainer>
            </SearchArea>

            <PageContainer>
                <PageArea>
                    <h2>Anuncios Recentes</h2>
                    <div className="list">
                        {recentAds.map((i,k) => 
                            <AdItem key={k} data={i}/>
                        )}
                    </div>
                    <Link to="/ads" className="See-all-link">Ver Todos</Link>
                    <hr/>

                    O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada.
            </PageArea>
            </PageContainer>
        </>

    );
}

export default Home;