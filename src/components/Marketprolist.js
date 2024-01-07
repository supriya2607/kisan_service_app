import React from "react";
import paneerImage from "./paneer.jpg";
import { Link } from "react-router-dom";

const mydata = [
  {
    id :1,
    imgsrc: paneerImage,
    title: 'Paneer desi Cow1',
    para:'Location : Uttrakhand, UP, Bihar, Haryana',
    Quantity :'5 - 10Kg',
  },
  {
    id :2,
    imgsrc: paneerImage,
    title: 'Paneer desi Cow22',
    para:'Location : Uttrakhand, UP, Bihar, Haryana',
    Quantity :'5 - 10Kg'
  },
  {
    id :3,
    imgsrc: paneerImage,
    title: 'Paneer desi Cow3',
    para:'Location : Uttrakhand, UP, Bihar, Haryana',
    Quantity :'5 - 10Kg'
  },
  {
    id :4,
    imgsrc: paneerImage,
    title: 'Paneer desi Cow',
    para:'Location : Uttrakhand, UP, Bihar, Haryana',
    Quantity :'5 - 10Kg'
  }
]

function Marketprolist(props) {
    // console.log(props)
  return (
    <>
     <Link to = "/Form">
     <div className="marketcard">
        <div className="marketimg">
          <img src={props.imgsrc} alt="Marketlinkage" />
        </div>
        <div className="marketcont">
          <h3>{props.title}</h3>
          <p>{props.para}</p>
          <span>{props.Quantity}</span>
        </div>
      </div>
    </Link>
    </>
  );
}

function Marketprodetail() {
  // console.log('Rendering Marketprodetail');
  return (
    <>
    {mydata.map((item, index)=> 
      <Marketprolist  key={item.id} imgsrc ={paneerImage}  title ={item.title} para = {item.para} Quantity = {item.Quantity}/>
    )
    }    
    </>
  );
}

export { Marketprolist as default, Marketprodetail };


