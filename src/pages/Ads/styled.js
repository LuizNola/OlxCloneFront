import styled from 'styled-components'


export const PageArea = styled.div`
 display:flex;
 margin-top: 20px;

 .leftSide {
    width: 250px;
    margin-right: 20px;

    .filterName{
        font-size: 20px;
        margin: 10px 0;
    }
    input, select{
        width: 100%;
        height: 40px;
        padding: 10px;

        border: 2px solid #9BB83c;   
        border-radius: 5px;
        outline: 0;

        font-size: 15px;
        color: #000000;
    }

    ul, li{
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .categoryItem{
        display:flex;
        align-items:center;

        padding: 10px;
        margin-bottom: 10px;

        border-radius: 5px;
        border: 1px solid #ccc;

        color: #000;
        cursor: pointer;

        img{
        width: 25px;
        height: 25px;
        margin-right: 5px;
        }

        span{
        font-size: 14px;
        }
    }

    .categoryItem:hover,
    .categoryItem.active{
        background-color: #fff;
    }
    
 }

 .rightSide {
     flex: 1;
    
     .list{
        display:flex;
        flex-wrap:wrap;
        
        .AdItem{ 
            width: 25%;
        }
     }
     
     
     .pagination{
        display: flex;
        align-items:center;
        justify-content:center;
      
     }
     .pagItem{
        display: flex;
        align-items:center;
        justify-content:center;
        
        width: 30px;
        height: 30px;
        border: 1px solid #ccc;

        font-size: 14px;

        margin-left: 5px;

        cursor: pointer;

        &:hover{
            border: 1px solid #000;
        }
     }
     .pagItem.active{
            border: 1px solid #000;
        }
    
 }
`