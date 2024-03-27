import React, { useState } from 'react'
import './Registration.css'
function Registration() {
    const [Firstname,setFirstname]=useState('')
    const regdata = (e) => {
        e.preventdefault()

        console.log(Firstname)
    }

    return (

        <div>
                <form className="form" onSubmit={regdata}>
                    <p className="title">Register </p>
                    <p className="message">Signup now and get full access to our app. </p>
                    <div className="flex">
                        <label>
                            <input placeholder="" type="text" className="input" onChange={(e)=>{setFirstname(e.target.value)}} />
                            <span>Firstname</span>
                        </label>

                        <label>
                            <input type="text" className="input" placeholder=""  />
                            <span>Lastname</span>
                        </label>

                    </div>

                    <label>
                        <input type="email" className="input" placeholder=""  />
                        <span>Email</span>
                    </label>

                    <label>
                        <input type="password" className="input" placeholder="" />
                        <span>Password</span>
                    </label>
                    <label>
                        <input type="password" className="input" placeholder="" />
                        <span>Confirm password</span>
                    </label>
                    <label>
                        <input text="Address" className="input" placeholder="" />
                        <span>Address</span>
                    </label>
                    <label>
                        <input type='text' className="input" placeholder="" />
                        <span>Qualification</span>
                        <select id="Qualification" name="Qualification">
                             <option value="select">select</option>
                             <option value="Btech">Btech</option>
                             <option value="MCA">MCA</option>
                             <option value="Bsc">Bsc</option>
                             <option value="BBA">BBA</option>

                        
                        </select>
                    </label>
                    <label>
                        <input type='text' className="input" placeholder="" />
                        <span>year of passed out</span>
                        <select id="year of passed out" name="year of passed out">
                              <option value="year">year</option>
                              <option value="2020">2020</option>
                              <option value="2021">2021</option>
                              <option value="2022">2022</option>
                              <option value="2023">2023</option>
                              <option value="2024">2024</option>
                        </select>
                        <select id="year of passed out" name="year of passed out">
                               <option value="month">month</option>
                               <option value="jan">jan</option>
                               <option value="feb">feb</option>
                               <option value="mar">mar</option>
                               <option value="apr">apr</option>
                               <option value="may">may</option>
                               <option value="jun">jun</option>
                               <option value="july">july</option>
                               <option value="aug">aug</option>
                               <option value="sep">sep</option>
                               <option value="oct">oct</option>
                               <option value="nov">nov</option>
                               <option value="dec">dec</option>
                               

                        
                        </select>
                    </label>
                    <label>
                          <input type="Gender" className="input" />
                          <span>Gender</span>
                          <select id="Gender" name="Gender">
                              <option value="select">select</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="others">others</option>
                          
                          </select>
                    
                    </label>

                    <label>
                        <input type="file" className="input" />
                        <span>std image</span>
                    </label>

                    <label>
                           <input type="course type" className="input" />
                           <span>course type</span>
                           <select id="course type" name="course type">
                                <option value="select">select</option>
                                <option value="python">python</option>
                                <option value="java">java</option>
                                <option value="Devops">Devops</option>
                           
                           </select>
                    
                    </label>

                    <label>
                          <input type="Batch type" className="input" />
                          <span>Batch type</span>
                          <select id="Batch type" name="Batch type">
                               <option value="select">select</option>
                               <option value="py-30">py-30</option>
                               <option value="py-31">py-31</option>
                               <option value="Dj-40">Dj-40</option>
                               <option value="Dj-41">Dj-41</option>
                           </select>
                    
                    </label>
                    
                    <button className="submit">Submit</button>
                    <p className="signin">Already have an acount ? <a href="#">Signin</a> </p>
                </form>
                

        </div>
    )
}

export default Registration
