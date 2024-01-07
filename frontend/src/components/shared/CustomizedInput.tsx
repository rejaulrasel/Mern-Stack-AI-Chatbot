import { TextField } from "@mui/material";

type Props = {
    name: string
    type: string
    label: string
}
const CustomizedInput = (props: Props) => {
    return <TextField margin="normal" InputLabelProps={{ style: {color: "white", fontSize:'24px'}}} name={props.name} type={props.type} label={props.label}
    InputProps={{ style: { width:"400px", borderRadius:10, color:'white', fontSize:"20px"}}}
    />
};

export default CustomizedInput;