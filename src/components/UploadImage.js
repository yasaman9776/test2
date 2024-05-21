import React, {createRef} from 'react';
import Dropzone,{useDropzone} from 'react-dropzone';
import {DropzoneBorder,ListUploaded} from './Dropzone/DropzoneStyle';
import ImgUpload from "../assets/icon/ImgUpload";
import { CokatexColors } from '../helper/colors';
import { DefaultTypography } from './Typography';
import Attach from '../assets/icon/Attach';
import CrossIcon from "../assets/icon/Cross";
import {MainIconButton,MiniIcon} from "./Button";
const UploadImage = ({props})=>{
    const dropzoneRef = createRef();
const openDialog = () => {
  // Note that the ref is set async,
  // so it might be null at some point 
  if (dropzoneRef.current) {
    dropzoneRef.current.open()
  }
};

  return(

// Disable click and keydown behavior on the <Dropzone>
<Dropzone ref={dropzoneRef} noClick noKeyboard >
  
  {({getRootProps, getInputProps, acceptedFiles}) => {
    
    return (
      <div>
        <DropzoneBorder {...getRootProps({className: 'dropzone'})}>
          <ImgUpload width={"50px"} height={"50px"} color={`${CokatexColors.navyBlue}`}/>
          <input {...getInputProps()} />
          <DefaultTypography textLevel={"h2-14"}>
            فایل ها را بکشید و اینجا رها کنید
          </DefaultTypography>
          <DefaultTypography textLevel={"h2-14"}>
           یا
          </DefaultTypography>
          <MainIconButton
          style={{height:40,margin:"5px auto"}}
            type="button"
            onClick={openDialog}
          >   <DefaultTypography textLevel={"h2-14"}>
           انتخاب کنید
          </DefaultTypography>
            <Attach color={"#fff"} height={"16px"} width={"16px"} style={{marginLeft:5}}/>
         
          </MainIconButton>
          <DefaultTypography textLevel={"h3-14"}>
         حجم فایل باید کمتر از 2 مگابایت باشد
          </DefaultTypography>
        </DropzoneBorder>
        <aside  style={{marginTop:20}}>
        <DefaultTypography textLevel={"h2-14"} textAlign={"right"}>
         فایل های بارگذاری شده
          </DefaultTypography>
          <ul style={{padding:0}}>
            {acceptedFiles.map(file => (
              <ListUploaded key={file.path}>
              <div style={{display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
              <Attach color={`${CokatexColors.navyBlue}`} height={"16px"} width={"16px"} style={{marginLeft:5}}/>
              <DefaultTypography textLevel={"h3-14"}>
                {file.path} - {file.size} bytes
                </DefaultTypography>
              </div>
                <MiniIcon>
                  <CrossIcon color={`${CokatexColors.navyBlue}`} height={"12px"} width={"12px"}/>
                </MiniIcon>
              </ListUploaded>
            ))}
          </ul>
        </aside>
      </div>
    );
  }}
</Dropzone>
  )
}

export default UploadImage;