import { useState } from "react"
import useShowToast from './useShowToast.js'
function usePreviewImg() {
    const [imgUrl,setImgUrl] = useState(null)
    const showToast = useShowToast()
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if(file && file.type.startsWith('image/')){
            const reader = new FileReader();
            reader.onload = (e) => {
                setImgUrl(reader.result);
            }
            reader.readAsDataURL(file)
        } else{
            showToast("Invalid file type",'Please select an image file',"error");
            setImgUrl(null);
        }
    };
    return {handleImageChange,imgUrl,setImgUrl}
}

export default usePreviewImg