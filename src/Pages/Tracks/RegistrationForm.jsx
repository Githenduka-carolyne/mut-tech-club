import registerImg from "../../assets/registerImg.jpg";

const RegistrationForm = () =>{
    return(
        <div className="register-form">
            <div class="row">
                <div className="image-side">
                    <img className = "register-image" src={registerImg}></img>
                </div>    
                <div className="register-side">
                    <h2 class ="form-title">Registration Form </h2>    
                    <form>
                        <fieldset>
                            <legend><b>Personal Details</b></legend>
                            <input type="text" name="fname" placeholder="Full Name" required></input>
                            <input type="text" name="email" placeholder="Email account" required></input>
                            <input type="text" name="course" placeholder="Course Of Study(current)"required></input>
                            <input type="text" name="year" placeholder="year of study" required></input>
                            <button type="submit" class="btn2">submit</button>
                        </fieldset>      
                    </form>
                </div>        
            </div>    
        </div>
        
    )
}
export default RegistrationForm;