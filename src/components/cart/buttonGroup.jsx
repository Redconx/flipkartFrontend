import { Box, Button,ButtonGroup,styled } from "@mui/material"
import {useDispatch} from 'react-redux'
import { decOne, incOne } from "../../redux/actions/cartAction"
const Component=styled(ButtonGroup)`
margin-top:15px;
`
const StyledButton=styled(Button)`
border-radius:50%;
`

const GroupedButton=({item})=>{

    const dispatch=useDispatch()

const handleIncrese=(id)=>{
    dispatch(incOne(id))
}
const handleDecrease=(id)=>{
    dispatch(decOne(id))
}
return(

    <Component>
        <StyledButton onClick={()=>handleDecrease(item.id)}>-</StyledButton>
        <StyledButton disabled>{item.quantity}</StyledButton>
        <StyledButton onClick={()=>handleIncrese(item.id)}>+</StyledButton>
    </Component>
)
}

export default GroupedButton