import s from 'styled-components'

export const List = s.ul`
list-style: none;`

export const ItemContact = s.li`
margin-bottom:5px;
font-size: 18px;
font-family: Cinzel;
`

export const ButtonDelete = s.button`
margin-left:5px;
color: #FFF;
text-align: center;
font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
width:80px;
border-radius: 20px;
background: #7B70FC;
transition: background-color 0.3s, color 0.3s;

&:hover,
&:focus{
    color: #000;
    background-color: #FFF;
    cursor: pointer;
}
`