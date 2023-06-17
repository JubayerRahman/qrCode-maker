import React, { useEffect, useState } from 'react'
import {Html5QrcodeScanner} from "html5-qrcode"
import "./Scanner.css"

const Scanner = () => {
  const [scanResult, setScanResult] = useState(null)
  const [copyIcon, setcopyIcon] = useState("fa-regular fa-clipboard")
  useEffect(()=>{
    const scannerQr = new Html5QrcodeScanner("reader",{
      qrbox:{
        width:250,
        height:250, 
      },
      fps:5,
    });
    scannerQr.render(success, error);

    function success(result){
      scannerQr.clear();
      setScanResult(result)
    }
    function error(err){
      // console.warn(err)
      err.clear()
    }
  }, [])
  const copyFunc =()=>{
    navigator.clipboard.writeText(scanResult)
    setcopyIcon("fa-solid fa-check")
    setInterval(() => {
      setcopyIcon("fa-regular fa-clipboard")
    }, 2000);
  }
  return (
    <div className='scannerpage'>
      {scanResult
      ? <div className='ResultSection'> <p>{scanResult}</p> <button onClick={copyFunc}><i className={copyIcon}></i></button></div>
      :<div id='reader' className='reader'></div>}
    </div>
  )
}

export default Scanner
