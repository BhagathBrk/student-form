
import { useState } from 'react'
import './App.css'

function App() {

  const [userName, setName] = useState("")
  const [invalidName, setInvalidName] = useState(false)
  const [address, setAddress] = useState("")
  const [phn, setPhn] = useState("")
  const [invalidPhn, setInvalidPhn] = useState(false)
  const [mail, setMail] = useState("")
  const [invalidMail, setInvalidMail] = useState(false)
  const [gender, setGender] = useState("")
  const [course, setCourse] = useState("")
  const [dob, setDob] = useState("")




  console.log(userName, gender, course, dob);
  

  const handleForm = (e)=>{

    e.preventDefault();

    if (!userName || !address || !phn || !mail || !gender || !course || !dob) {
      alert('Please fill in all the fields.');
      return;
      
    }
    

      alert(`Data stored successfully:

        Name: ${userName}
        Address: ${address}
        Email: ${mail}
        Course: ${course}
        DOB: ${dob}
        Gender: ${gender}
        Phone: ${phn}
        
        `); 

        handleReset();



  }


  const handleReset =()=>{
    setAddress("")
    setCourse("")
    setName("")
    setPhn("")
    setGender("")
    setMail("")
    setDob("")
  }

  const validateName = (name) => {

    if(name === ""){
      setInvalidName(false)
    }

    else if (name.match(/^[a-zA-ZÀ-ÿ'’\- ]{2,50}$/)) {
      setInvalidName(false);
    } else {
      setInvalidName(true);
    }
  };
  
  const validatePhone = (phone) => {

    if(phone === ""){
      setInvalidPhn(false)
    }
    else if (phone.match(/^[0-9]{10}$/)) {
      setInvalidPhn(false);
    } else {
      setInvalidPhn(true);
    }
  };
  
  const validateEmail = (email) => {

    if(email === ""){
      setInvalidMail(false)
    }


    else if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) && email.includes(".com")) {
      setInvalidMail(false);
    } else {
      setInvalidMail(true);
    }
  };



  return (
    <>

<div className="container d-flex flex-column justify-content-center align-items-center my-5">
        <h1 className="mb-4">Higher Secondary Registration Form</h1>

        <form className="w-50">
          <div className="mb-3">
            <input type="text" onChange={(e)=>{ setName(e.target.value); validateName(e.target.value)}}  className="form-control" value={userName} placeholder="Name" />
            {invalidName && <div className="text-danger mt-2">Invalid Name</div>}
          </div>

          <div className="mb-3">
            <textarea type="text" value={address}  onChange={(e)=>{setAddress(e.target.value)}} className="form-control" placeholder="Address" />
          </div>

          <div className="mb-3">
            <input type="email" value={mail}  onChange={(e)=>{setMail(e.target.value); validateEmail(e.target.value)}} className="form-control" placeholder="Email" />
            {invalidMail && <div className="text-danger mt-2">Invalid Email</div>}
          </div>

          <fieldset value={gender} onChange={(e)=>{setGender(e.target.value)}} className="mb-3">
            <p>Gender :</p>
            <div>
              <input type="radio"  name="fav_language" value="Male" />
              <label htmlFor="html">Male</label>
            </div>
            <div>
              <input type="radio"  name="fav_language" value="Female" />
              <label htmlFor="css">Female</label>
            </div>
            <div>
              <input type="radio"  name="fav_language" value="Others" />
              <label htmlFor="javascript">Others</label>
            </div>
          </fieldset>

          <div className="mb-3">
           <label htmlFor="" className='me-2'>DOB :</label>
           <input type="date"  value={dob} onChange={(e)=>{setDob(e.target.value)}} />
          </div>

          <div className="mb-3">
          <label for="course" className='me-2'>Choose Course :</label>
            <select name="course" id="cars" value={course} onChange={(e)=>{setCourse(e.target.value)}}>
            <option value="">none</option>
              <option value="Biology">Biology</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Humanities">Humanities</option>
              <option value="Commerce">Commerce</option>
            </select>
          </div>

          <div className="mb-3">
            <input type="numbers" value={phn} onChange={(e)=>{setPhn(e.target.value); validatePhone(e.target.value)}} className="form-control" placeholder="Phone" />

            {invalidPhn && <div className="text-danger mt-2">Invalid Number</div>}
          </div>

         <div className='d-flex justify-content-between'> <button onClick={handleForm} type="submit" className="btn btn-success">Register</button>

         <button onClick={handleReset} className="btn btn-danger">Cancel</button>
         
         </div>
        </form>
      </div>
      
  
    </>
  )
}

export default App
