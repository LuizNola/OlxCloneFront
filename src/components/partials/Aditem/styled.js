import styled from 'styled-components'

export const Item = styled.div`
    a{
        display: block;

        margin:10px;
        padding:10px;

        text-decoration: none;
        color: #000;

        border-radius:5px;
        border:1px solid #eeeeee;

        transform: scale(0.99);
        transition: all .2s;

        border:1px solid #ccc;

        .item-image img{
            width: 100%;
            border-radius:5px;
        }
        .item-name{
            font-weight: bold;
            
        }
    }
    a:hover{
        transform: scale(1.15);
        border:1px solid #ccc;
    }
`;