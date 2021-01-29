import styled from 'styled-components'

export const PageArea = styled.div`
    
    form{
        background-color: #fff;

        border-radius: 3px;
        box-shadow: 0 0 3px #999;

        padding: 10px;

        .area{ 
            display:flex;
            align-items:center;

            padding: 10px;
            max-width: 500px;

            .area--title{
                width: 200px;

                text-align: right;
                font-weight: bold;
                font-size: 14px;


                padding-right: 20px;

                @media(max-width:425px){
                    width: 100px;
                }
            }

            .area--input{
                flex: 1;

                input{
                    width: 100%;
                    padding: 5px;

                    font-size: 14px;
                    
                    border: 1px solid #DDD;
                    border-radius: 3px;
                    outline: none;

                    transition: all ease .4s;
                    
                    &:focus{
                        border: 1px solid #333; 
                        color: #333;
                    }
                
                }
                button{
                        padding: 5px 10px;

                        background-color:#0089FF;
                        
                        color: #fff;
                        font-size: 15px;

                        border: 0;
                        border-radius: 4px;
                        outline: 0;

                        cursor: pointer;

                        &:hover{
                            background-color:#006FCE;
                        }
                    }


            }
        
        }
    }
`