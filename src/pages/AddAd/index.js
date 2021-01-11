import React, { useRef, useState, useEffect } from 'react';
import { PageArea } from './styled';
import { useHistory } from 'react-router-dom'
import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents'
import useApi from '../../helpers/olxAPI';
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const SignIn = () => {

    const api = useApi();
    const fileField = useRef(); 
    const history = useHistory();

    const [ categories, setCategories ] = useState([])

    const [ title, setTitle ]  = useState('');
    const [ category, setCategory ] = useState('');
    const [ price, setPrice] = useState('');
    const [ priceNeg, setPriceNeg ] = useState('');
    const [ desc, setDesc ] = useState('');



    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    useEffect(() =>{
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats)
        }
        getCategories();
    },[])


    const handleSubmit = async (event) => {
        event.preventDefault();
        setDisabled(true);
        setError('');
        let errors = [];

        if(!title.trim()){
            errors.push('Sem titulo')
        }

        if(!category){
            errors.push('Sem categoria')
        }

        if(errors.length === 0){

            const Fdata = new FormData();

            Fdata.append('title', title)
            Fdata.append('price', price)
            Fdata.append('priceneg', priceNeg)
            Fdata.append('desc', desc)
            Fdata.append('cat', category)

            if(fileField.current.files.length > 0){
                for(let i = 0; i < fileField.current.files.length; i++){
                    Fdata.append('img', fileField.current.files[i])
                }
            }

            const json = await api.addAd(Fdata)
            if(!json.error){
                history.push(`/ad/${json.id}`);
                return;
            }else{
                setError(json.error);
            }

        }else{
            setError(errors.join("\n"))
        }

        setDisabled(false)


    }

    const priceMask = createNumberMask({
        prefix:'R$ ',
        includeThousandsSeparator:true,
        thousandsSeparatorSymbol:'.',
        allowDecimal: true,
        decimalSymbol:','
    })

    return (
        <PageContainer>
            <PageTitle>Poste um anuncio!</PageTitle>

            <PageArea>
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }

                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">Titulo</div>
                        <div className="area--input">
                            <input type="text" value={title} onChange={e=>setTitle(e.target.value)} disabled={disabled} required />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Categoria</div>
                        <div className="area--input">
                            <select disabled = {disabled} onChange={ e=>setCategory(e.target.value) } required>
                                <option></option>
                                {categories && categories.map(i=>
                                    <>
                                        <option key={i.id} value={i.idj}>{i.name}</option>
                                    </>)}
                            </select>
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Preço</div>
                        <div className="area--input">
                            <MaskedInput 
                            mask={priceMask}
                            placeholder="R$ "
                            disabled={disabled || priceNeg}
                            value={price}
                            onChange={e=>{setPrice(e.target.value)}}
                            />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Preço negociável</div>
                        <div className="area--input">
                            <input type="checkbox" disabled={disabled} checked={priceNeg} onChange = {e=>setPriceNeg(!priceNeg)}/>
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Descrição</div>
                        <div className="area--input">
                            <textarea value={desc} onChange={e=>setDesc(e.target.value)}  disabled={disabled} required >

                            </textarea>    
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Imagens</div>
                        <div className="area--input">
                           <input type="file" disabled={disabled} multiple ref={fileField}/>  
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled}>Publicar anuncio</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default SignIn;