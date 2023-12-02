import { Text } from "react-native"

const UnwrappedText = (props) => {
    const defaultStyle = {fontWeight:"normal", fontSize:12 }
    
    return (
        <Text style={[defaultStyle, {...props.style}]}>{props.children}</Text>
    )
    
}


export default UnwrappedText;