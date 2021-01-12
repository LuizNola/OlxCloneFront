import styled from 'styled-components'


export const PageArea = styled.div`
 margin-top: 20px;
 
 .TopSide{
     display: flex;
     flex-direction: column;
     align-items:center;
     justify-content: center;
     

     color: #fcfccc;
     background-color: #9bb83c;

     border-radius: 15px;
     padding: 10px;
    
     .userInfo{
         display: flex;
         align-items:center;
         justify-content: space-around;

         width: 100%;
         margin-bottom: 60px;
         h2{
             font-size: 15px;
         }
     }
     button{
         background-color: #f78323;

         width: 90px;
         padding: 15px;

         font-weight: bold;
         color: #fff;

         border-radius: 20px;
         border: none;
         outline: none;

         cursor:pointer;

         &:hover{
            background-color:#c56514;
         }
     }
 }

 .adZone{
     border: 1px solid #ccc;
     border-radius: 15px;

     background-color: #fff;
     margin: 20px 0px;
     padding: 20px;
 }
`