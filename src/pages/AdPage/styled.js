import styled from 'styled-components'


export const Fake = styled.div`
    background-color: #ddd;
    height: ${props => props.height || 20}px;

 `

export const PageArea = styled.div`
   display: flex;
   margin-top: 20px;

   @media (max-width:425px){
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }


   .box{ 
       display: flex;

       background-color: #fff;
       
       margin-bottom: 20px;
       padding: 10px;

       border-radius: 5px;
       box-shadow: 0 0 4px #999;

       @media (max-width:425px){
            flex-direction: column;
            justify-content: center;
            align-items: center;

            text-align: center;
        }

   }

   .leftSide{ 
       flex: 1;
       margin-right: 20px;

       
       @media (max-width:425px){
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center; 

            margin-right: 0px;
        }

       .adImg{
        width: 350px;
        height:320px;

        margin-right:20px;

        @media (max-width:425px){
                width: 300px;
                margin-right: 0px;
            }

        .adImg img{
            width: 350px;

            @media (max-width:425px){
                width: 300px;
            }
            
        }

        .each-slide img{
            display:flex;
            align-items:center;
            justify-content:center;
            
            background-size:cover;
            height:320px;
        }
       }
       .adInfo{ 
           flex: 1;
            .adName{ 
                margin-bottom: 20px;
                h2{
                    margin-bottom: 0;
                }
                small{
                    color: #999;
                }
           }
           .adDesc{

           }
       }
   }

   .rigthSide{
        width: 250px;

        .price{

            span{
                color: blue;
                display: block;
                font-size: 27px;
                font-weight: bold;
            }
        }

        .ContactSeller{
            display: flex;
            justify-content: center;
            align-items: center;

            background-color: blue;
            color: white;

            text-decoration: none;
            margin-bottom:20px;

            height: 30px;

            border-radius:5px;
            box-shadow:0 0 4px #999;

        }

        .createdBy{
            display: flex;
            flex-direction: column;
            small{
                
                margin-top: 10px;
                color: #999;

            }
            strong{
                display:block;
            }
        }

   }
`

export const OthersArea = styled.div`

    h2{
        font-size: 20px;
    }
    .list{
        display: flex;
        flex-wrap: wrap;
    }
    .AdItem{
        width: 25%;
        
        @media(max-width:425px){
            width: 50%;
        }
    }
`

export const BreadChumb = styled.div`
    font-size: 13px;
    margin-top: 20px;

    a{
        display: inline-block;
        margin: 0px 5px;

        color: #000;
        text-decoration: underline;
    }
`