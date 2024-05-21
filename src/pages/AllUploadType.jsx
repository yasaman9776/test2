import UploadFile from "../components/UploadFile";
import { Label } from "../components/Label";
import UploadImage from "../components/UploadImage";
const AllUploadType = () =>{

    return(
        <>
        <div
        style={{
        padding: 50,
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent:'space-between'
    }}> 
        <div style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'self-end'
        }}>
            <Label fontFamily={"IRANYekanBold"}>
                آپلود فایل (حالت دیفالت)
            </Label>
            <UploadFile/>
        </div>
        <div style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'self-end'
        }}>
            <Label fontFamily={"IRANYekanBold"}>
              آپلود تصویر
            </Label>
            <UploadImage/>
        </div>
    </div>
        </>
    )


}

export default AllUploadType;