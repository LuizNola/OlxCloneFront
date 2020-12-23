import styled from 'styled-components'

export const SearchArea = styled.div`
    background-color: #DDD;
    border-bottom: 1px solid #CCC;
    padding: 20px 0;

    .search-box{
        display:flex;
        padding: 20px 15px;

        background-color: #9BB83C;

        box-shadow: 1px 1px 1px 0.3 rgba(0,0,0,0.2);
        border-radius: 5px;

        form{
            flex: 1;
            display:flex;

            input, select{
                height: 40px;

                margin-right: 20px;

                border: 0;
                border-radius: 5px;
                outline: none;

                font-size: 15px;
                color: #000;
            }

            input{
                flex: 1;
                padding: 0 10px;
            }
            select {
                width: 100px;
            }
            button{
                height: 40px;
                padding: 0 20px;
                
                background-color: #49aeef;

                font-size: 15px;
                color: #FFF;

                border: 0;
                border-radius:5px;

                cursor:pointer;
            }
        }
    }
    .category-list{
        display:flex;
        flex-wrap: wrap;
        
        margin-top: 20px;

        .category-item{
            display:flex;
            align-items:center;

            height: 50px;
            width: 25%;

            color: #FFF;
            text-decoration: none;

            margin-bottom:10px;

            img{
                width: 60px;
                height: 60px;
                padding: 5px;
                margin-right:10px;

                transition: all 0.2s;
            }
        }
        .category-item img:hover{
                background-color: #adadad;
            }
    }
`

export const PageArea = styled.div`
    h2{
        font-size: 20px;
    }
    .list{ 
        display:flex;
        flex-wrap:wrap;

        .AdItem{ 
            width: 25%;
        }
    }
    .See-all-link{
        display:inline-block;
        margin-top: 10px;

        color: #000;
        font-weight: bold;
        text-decoration: none;
        
    }
`