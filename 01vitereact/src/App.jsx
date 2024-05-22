
import React from "react";

function App() {
  const appStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
  };

  const cardContainerStyle = {
    width: '15rem',
    borderRadius: '0.5rem',
    boxShadow: '0px 10px 8px #999',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    margin: '0.5rem',
    backgroundColor: 'white',
    height: 'fit-content',
    textAlign: 'center', 
  };

  const cardImgStyle = {
    width: 'calc(80% - 2rem)', 
    height: '150px', 
    borderRadius: '0.5rem',
    marginLeft: '1rem',
    marginRight: '1rem',
    objectFit: 'cover', 
  };

  const textStyle = {
    margin: '0.5rem 5%',
  };

  const darkGrayTextStyle = {
    margin: '0.5rem 5%',
    color: 'black',
  };

  const emailStyle = {
    margin: '0.5rem 5%',
    color: 'maroon',
  };

  const Card = ({
    imgSrc,
    imgAlt,
    name,
    roll_no,
    batch,
    company_name,
    email,
  }) => (
    <div style={cardContainerStyle}>
      {name && <h1 style={textStyle}>{name}</h1>}
      {imgSrc && imgAlt && <img src={imgSrc} alt={imgAlt} style={cardImgStyle} />}
      {roll_no && <h3 style={darkGrayTextStyle}>{roll_no}</h3>}
      {batch && <h3 style={darkGrayTextStyle}>{batch}</h3>}
      {company_name && <h3 style={darkGrayTextStyle}>{company_name}</h3>}
      {email && <h3 style={emailStyle}>{email}</h3>}
    </div>
  );

  return (
    <div style={appStyle}>
      <Card 
        imgSrc="https://picsum.photos/300/200" 
        imgAlt="Card Image" 
        name="Riya" 
        roll_no="Roll No.: 123456"
        batch="Batch : 2024"
        company_name="Company Name : Google"
        email="123456@nith.ac.in"
      />
    </div>
  );
}

export default App;
