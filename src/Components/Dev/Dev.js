import React, { useState } from 'react'
import "./Dev.css"

const Dev = () => {
  const [eparaClass, setEparaClass] =useState("devDEscription")
  const [bparaClass, setBparaClass] =useState("devDEscriptionBanglaHide")
  const [TransbtsText, setTransbtsText] =useState("বাংলা")
  const [TransBtsClass, setTransBtsClass] =useState("transLateBtnB")
  const [engSocial, setengSocial] =useState("engSocial")
  const [BanSocial, setBanSocial] =useState("BanSocialHide")

  const Changelang =()=>{
    if(TransbtsText === "বাংলা"){
      setEparaClass("devDEscriptionHide")
      setBparaClass("devDEscriptionBangla")
      setTransbtsText("English")
      setTransBtsClass("transLateBtnE")
      setengSocial("engSocialHide")
      setBanSocial("BanSocial")
    }
    if(TransbtsText === "English"){
      setEparaClass("devDEscription")
      setBparaClass("devDEscriptionBanglaHide")
      setTransbtsText("বাংলা")
      setTransBtsClass("transLateBtnB")
      setBanSocial("BanSocialHide")
      setengSocial("engSocial")
    }
  }
  return (
    <div>
      <p className={eparaClass}>Hi, I am Jobayer Rahman here I made a web Qr code Scanner application. 
        Basically, I tried to make an application that can both make and scan a QR code. 
        I  am a self-learning student of web development, and all these projects are my own Ideas I 
        do my best to make them as flawless as possible but as I said earlier I am a student I can't 
        make them completely bug-free. So, if you use the app and find any Issues Please let me know. 
        Your opinion will be accepted gladly. </p>
      <p className={bparaClass}>স্বাগতম, আমি জোবায়ের রহমান এটি আমার ওয়েব কিউআর কোড স্ক্যানার অ্যাপ্লিকেশন। 
        মূলত, আমি একটি অ্যাপ্লিকেশন তৈরি করার চেষ্টা করেছি যা একটি QR কোড তৈরি এবং স্ক্যান করতে পারে। আমি নিজে 
        থেকেই ওয়েব ডেভেলপমেন্ট শেখার চেষ্টা করি, এবং এই সব প্রজেক্ট আমার নিজস্ব চিন্তা। আমি তাদের যথাসম্ভব ত্রুটিমুক্ত 
        করার জন্য যথাসাধ্য চেষ্টা করি, কিন্তু আমি আগেই বলেছি, আমি একজন ছাত্র তাই আমি তাদের সম্পূর্ণরূপে ত্রুটিমুক্ত করতে 
        পারি না। সুতরাং, আপনি যদি অ্যাপটি ব্যবহার করেন এবং কোন সমস্যা খুঁজে পান তবে দয়া করে আমাকে জানান। আপনার 
        প্রতিক্রিয়া স্বাগত জানানো হবে. </p>

        <button onClick={Changelang} className={TransBtsClass}>{TransbtsText}</button>
        
        <div className='social'>
        <h3 className={engSocial}>My Social Links:</h3>
        <h3 className={BanSocial}>আমার সামাজিক মিডিয়া লিঙ্ক:</h3>
        <div className='socialLinks'>
        <button>
          <a href='https://www.facebook.com/15855jubayer' target='_blank' rel="noreferrer"> 
          <i class="fa-brands fa-facebook"></i></a>
        </button>
        <button>
            <a href='https://www.instagram.com/jubayerrahman8/' target='_blank' rel="noreferrer">
            <i class="fa-brands fa-instagram"></i>
            </a>
          </button>
        <button>
          <a href='https://twitter.com/jubayerr398' target='_blank' rel="noreferrer">
          <i class="fa-brands fa-twitter"></i>
          </a>
        </button>
        <button>
          <a href='https://sidemenuportfolio.netlify.app/' target='_blank' rel="noreferrer">
          <i class="fa-solid fa-globe"></i>
          </a>
        </button>
        </div>
        </div>
    </div>
  )
}

export default Dev
