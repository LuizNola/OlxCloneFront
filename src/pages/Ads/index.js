import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom'
import { PageArea, SearchArea } from './styled';
import { PageContainer } from '../../components/MainComponents'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import useApi from '../../helpers/olxAPI';

import AdItem from '../../components/partials/Aditem/index'

let timer;
const Home = () => {
    const api = useApi();
    const history = useHistory();


    const useQueryString = () => {
        return new URLSearchParams(useLocation().search)
    }
    const query = useQueryString()

    const [q, setQ] = useState(query.get('q') != null ? query.get('q') : '');
    const [cat, setCat] = useState(query.get('cat') != null ? query.get('cat') : '');
    const [state, setState] = useState(query.get('state') != null ? query.get('state') : '');

    const [adsTotal, setAdsTotal] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [stateLoc, setStateLoc] = useState([]);
    const [category, setCategory] = useState([]);
    const [recentAds, setRecentAds] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);


    const [loading, setLoading] = useState(true);
    const [opacity, setOpacity] = useState(0.3);

    const getAdsList = async () => {

        setLoading(true);
        let offset = (currentPage - 1) * 12
        const json = await api.getAds({
            sort: 'desc',
            limit: 12,
            q,
            cat,
            state,
            offset
        });
        setRecentAds(json.ads)
        setAdsTotal(json.total)
        setOpacity(1)
        setLoading(false)
    }

    useEffect(() => {

        if (recentAds.length > 0) {
            setPageCount(Math.ceil(adsTotal / recentAds.length));
        } else {
            setPageCount(0)
        }
    }, [adsTotal])

    useEffect(() => {
       
        getAdsList();
    }, [currentPage])

    useEffect(() => {
        setOpacity(0.3)
        
        let queryString = []

        if (q) {
            queryString.push(`q=${q}`)
        }
        if (cat) {
            queryString.push(`cat=${cat}`)
        }
        if (state) {
            queryString.push(`state=${state}`)
        }
        history.replace({
            search: `?${queryString.join('&')}`
        })

        if (timer) {
            clearTimeout(timer);
        }
        
        timer = setTimeout(getAdsList, 800)
        setCurrentPage(1)
        
    }, [q, cat, state])

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

    let pagination = []
    for (let i = 1; i <= pageCount; i++) {
        pagination.push(i)
    }



    return (

        <>

            <PageContainer>
                <PageArea>
                    <div className="leftSide">
                        <form method="GET">
                            <input type="text" name='q' placeholder="O que você procura?" value={q} onChange={e => setQ(e.target.value)} />

                            <div className="filterName">Estado:</div>
                            <select name="state" value={state} onChange={e => setState(e.target.value)}>
                                <option></option>
                                {stateLoc.map((i, k) => {
                                    return <option key={k} value={i.name}>{i.name}</option>
                                })}
                            </select>

                            <div className="filterName">Categoria:</div>
                            <ul>
                                {category.map((i, k) =>
                                    <li key={k} className={cat == i.slug ? 'categoryItem active' : 'categoryItem'}
                                        onClick={() => setCat(i.slug)}
                                    >
                                        <img src={i.img} alt={i.name} />
                                        <span>{i.name}</span>
                                    </li>
                                )}
                            </ul>

                        </form>
                    </div>
                    <div className="rightSide">
                        
                        <span>Pagina:  </span> 
                    <select  onChange={e=>setCurrentPage(e.target.value)}>
                            {pagination.map((i,k) => 
                            <>
                                <option key ={k} value={i} >{i}</option>
                            </>
                            )}
                        </select>

                        <div className="list" style={{ opacity: opacity }}>
                            {loading &&
                                <div>
                                    <h2>Carregando...</h2>
                                </div>}
                            {recentAds.map((i, k) =>
                                <AdItem key={k} data={i}
                                />
                            )}
                            {!loading && recentAds.length == 0 &&
                                <div>
                                    <h2>Não há resultados :/</h2>
                                </div>}
                        </div>


                    </div>


                </PageArea>
            </PageContainer>
        </>

    );
}

export default Home;