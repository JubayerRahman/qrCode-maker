import React, { useState } from 'react'
import  QRCode  from 'qrcode'
import PlaceholderImg from "../Images/qrcode-solid.svg"
import "./qrMaker.css"

const QrMaker = () => {
  const [data, setData] = useState('')
  const [PlaceholderImgClass, setPlaceholderImgClass] = useState("PlaceholderImg")
  const [quCode, setQrCode] = useState('')
  const geneteFunction =(e)=>{
    e.preventDefault();
    QRCode.toDataURL(data,{
      width:800,
      margin:1
    },(err, data)=>{
      if(err){
        console.log(err)
        alert("First enter data Bro.")
      }
      else{
        setPlaceholderImgClass("PlaceholderImgHide")
        setQrCode(data)
      }
    })
  }
  // change the colors
  const blueButton =()=>{
    QRCode.toDataURL(data,{
      width:800,
      margin:1,
      color:{
        dark:"#282C34ff"
      }
    },(err, data)=>{
      if(err){
        console.log(err)
      }
      else{
        setPlaceholderImgClass("PlaceholderImgHide")
        setQrCode(data)
      }
    })
  }
  const greenButton =()=>{
    QRCode.toDataURL(data,{
      width:800,
      margin:1,
      color:{
        dark:"#ADFF2Fff"
      }
    },(err, data)=>{
      if(err){
        console.log(err)
      }
      else{
        setPlaceholderImgClass("PlaceholderImgHide")
        setQrCode(data)
      }
    })
  }
  const redButton =()=>{
    QRCode.toDataURL(data,{
      width:800,
      margin:1,
      color:{
        dark:"#FF0000ff"
      }
    },(err, data)=>{
      if(err){
        console.log(err)
      }
      else{
        setPlaceholderImgClass("PlaceholderImgHide")
        setQrCode(data)
      }
    })
  }
  return (
    <div className='generatorSection' >
      <form className='generationForm'>
        <input 
        className='codemakerInput' 
        type='text' 
        placeholder='https.//Google.com' 
        value={data} 
        onChange={(e)=> setData(e.target.value)} 
        required />
        <button className='generateButton' onClick={geneteFunction}>Generate Code</button>
      </form>
        <img className={PlaceholderImgClass} src={PlaceholderImg}/>
        {quCode &&
        <>
        <img className='codeImg' src={quCode}/>
        <div className='myIdea'>
        <p className='colorNote'><strong>P.S:</strong> If you want you can change the color of your qr code.</p>
        <div className='qrColorBtns'>
          <button className='qrblur' onClick={blueButton}></button>
          <button className='green'  onClick={greenButton}></button>
          <button className='red'    onClick={redButton}></button>
        </div>
        </div>
        <a className='downLoadlink' href={quCode} download="QrJobayer"><i class="fa-solid fa-download"></i> Download</a>
        </>
        }
    </div>
  )
}

export default QrMaker
