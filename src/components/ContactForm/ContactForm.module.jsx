import s from 'styled-components'

export const FormInfo = s.form`
    display: flex;
    flex-direction: column;
    align-items: stretch;`

export const LabelText = s.label`
color: #000;
font-family: Cinzel;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 90%;
margin-bottom: 7px;`

export const Input = s.input`
width: 350px;
height: 35px;
font-size: 16px;
font-weight:400;
padding-left: 20px;
margin-bottom: 15px;
border-radius: 19px;
background: #FFF;
box-shadow: 0px 4px 4px 0px rgba(52, 45, 45, 0.16);
`
export const AddButton = s.button`
margin:0 auto;
color: #FFF;
font-family: Poppins;
font-weight: 500;
font-size: 18px;
padding: 5px;
border-color:blue;
background-color: #7B70FC;
border-radius:20px;
width:120px;

&:hover,
&:focus{
    color: #000;
    background-color: #FFF;
    cursor: pointer;
}
`