import styled from 'styled-components'

export const HeaderArea = styled.div`
    height:60px;

    background-color: #FFF;
    border-bottom:1px solid #CCC;

    .container{
        max-width: 1024px;
        height: 60px;
        margin: auto;

        display:flex;
    }

    a{
        text-decoration:none;
    }
//logo area
    .logo{
        flex: 1;
        display: flex;
        align-items:center;

        .logo1, .logo2, .logo3{
            font-size:27px;
            font-weight: bold;
        }

        .logo1{ color: #6e0ad6; }
        .logo2{ color: #8ce563; }
        .logo3{ color: #f28000; }
    }
 //navigation AerA
 
nav{
    padding: 10px 0;

    ul, li{
        margin: 0;
        padding: 0;

        list-style:none;
    }
    ul{
        display: flex;
        align-items: center;

        height: 40px;
    }

    li{
        margin-left: 20px;
        margin-right: 20px;

        a{
            color: #000;
            font-size: 14px;

            &:hover{
                color: #6e0ad6;
            }

            &.button{
                background-color: #f78323;

                font-weight: 600;
                color:white;

                border-radius: 15px;
                padding: 15px;

                &:hover{
                    background-color: #e78323;
                }
            }
        }
    }

}


`