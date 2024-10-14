

import React, { useEffect, useState } from 'react';

const Emailbodyprev = ({ id , selectedCardDetails }) => {

  const[emailBody , setEmailBody] = useState("")

  useEffect(()=>{
    const getEmailDetails = async()=>{
      const response = await fetch(`https://flipkart-email-mock.vercel.app/?id=${id}`)
      const detailedResponse = await response.json()
      setEmailBody(detailedResponse?.body)
    }
    getEmailDetails()
  },[id])

  return (
    <div>
    {emailBody ? (
      <div dangerouslySetInnerHTML={{ __html: emailBody }} />
    ) : (
      <p>Loading email content...</p> 
    )}
  </div>
  );
};

export default Emailbodyprev;
