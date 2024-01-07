import { useState } from 'react';
import '../MarketLinkage.css';
import paneerImage from "./paneer.jpg";
import Header from './Header';
import Popup from './Popup';

function Form() {
    const [userRegistration, setUserRegistration] = useState({
        name: "",
        phone: "",
        state: "",
        district: "",
        block: "",
        village: "",
        cattleType: "",
        count: "",
        milk: "",
        quantity: "",
    });

    const [records, setRecords] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [fieldErrors, setFieldErrors] = useState({});


    const subform = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserRegistration({ ...userRegistration, [name]: value });
        setFieldErrors({ ...fieldErrors, [name]: "" });
    }

    const validateForm = () => {
        // Check if all required fields are filled
        const requiredFields = ['name', 'phone', 'state', 'district', 'block', 'village', 'cattleType', 'count', 'milk', 'quantity'];

        const errors = {};

        for (const field of requiredFields) {
            if (!userRegistration[field]) {
                errors[field] = `Please fill the ${field}.`;
            }
        }

        setFieldErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const newUserdetail = { ...userRegistration, id: new Date().getTime().toString() };
        setRecords([...records, newUserdetail]);

        setUserRegistration({
            name: "",
            phone: "",
            state: "",
            district: "",
            block: "",
            village: "",
            cattleType: "",
            count: "",
            milk: "",
            quantity: "",
        });

        // Show the popup
        setShowPopup(true);
    }

    return (
        <>
            <Header />
            <div className="banner">
                <img src={paneerImage} alt="paneerImage" />
            </div>
            <form action="" className='form' onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={userRegistration.name} onChange={subform} id="name" />
                    {fieldErrors.name && <p className="error-message">{fieldErrors.name}</p>}

                </div>
                <div>
                <label>Phone No.</label>
                <input type ="text" name ="phone" value ={userRegistration.phone} onChange ={subform} id = "phone "/>
                {fieldErrors.phone && <p className="error-message">{fieldErrors.phone}</p>}
             </div>
             <div>
                <label>State</label>
                <input type ="text" name ="state" value ={userRegistration.state} onChange ={subform} id = "state"/>
                {fieldErrors.state && <p className="error-message">{fieldErrors.state}</p>}
             </div>
             <div>
                <label>District</label>
                <input type ="text" name ="district" value ={userRegistration.district} onChange ={subform} id = "district"/>
                {fieldErrors.district && <p className="error-message">{fieldErrors.district}</p>}
             </div>
             <div>
                <label>Block</label>
                <input type ="text" name ="block" value ={userRegistration.block} onChange ={subform} id = "block"/>
                {fieldErrors.block && <p className="error-message">{fieldErrors.block}</p>}
             </div>
             <div>
                <label>Village</label>
                <input type ="text" name ="village" value ={userRegistration.village} onChange ={subform} id = "village"/>
                {fieldErrors.village && <p className="error-message">{fieldErrors.village}</p>}
             </div>
             <div>
            <label>Cattle Type</label>
            <select name="cattleType" value={userRegistration.cattleType} onChange={subform}>
                <option value="cow">cow</option>
                <option value="Buffalo">Buffalo</option>
            </select>
            </div>
             <div>
                <label>Cattle Count</label>
                <input type ="text" name ="count" value ={userRegistration.count} onChange ={subform} id = "count"/>
                {fieldErrors.count && <p className="error-message">{fieldErrors.count}</p>}
             </div>
             <div>
                <label>Total Milk Production (per day)</label>
                <input type ="text" name ="milk" value ={userRegistration.milk} onChange ={subform} id = "milk"/>
                {fieldErrors.milk && <p className="error-message">{fieldErrors.milk}</p>}
             </div>
             <div>
                <label>How much Kg you can make</label>
                <input type="number" name="quantity" value={userRegistration.quantity} onChange={subform} id="quantity" />
                {fieldErrors.quantity && <p className="error-message">{fieldErrors.quantity}</p>}
             </div>
                <button type="submit">Submit</button>
            </form>
              {/* <div>
            {
                records.map((curElem) => {
                    const  {id, name, phone, state, district, block, village, cattleType, count, milk, quantity  } = curElem;
                    return(
                        <div className='userdetail' key={id}>
                        <table>
                        {name && <tr><td><p>Name : {name}</p></td></tr>}
                        {phone && <tr><td><p>Phone : {phone}</p></td></tr>}
                        {state && <tr><td><p>State : {state}</p></td></tr>}
                        {district && <tr><td><p>District : {district}</p></td></tr>}
                        {block && <tr><td><p>Block : {block}</p></td></tr>}
                        {village && <tr><td><p>Village : {village}</p></td></tr>}
                        {cattleType && <tr><td><p>Cattle Type : {cattleType}</p></td></tr>}
                        {count && <tr><td><p>Count : {count}</p></td></tr>}
                        {milk && <tr><td><p>Production : {milk}</p></td></tr>}
                        {quantity && <tr><td><p>Quantity : {quantity}</p></td></tr>}
                        </table>
                    </div>
                    )
                })
            }
        </div> */}

        {showPopup && <Popup onClose={() => setShowPopup(false)} />}
        </>
    )
}

export default Form;
