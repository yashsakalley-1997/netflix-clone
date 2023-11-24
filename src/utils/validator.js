const validateInput = (isSignInForm,firstName,email,password)=>{
    if(!isSignInForm){
        if(!(/^[a-zA-Z]+$/.test(firstName))){
            return "Invalid name entered"
        }
    }
    if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))){
        return "Invalid email address"
    }
    if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password))){
        return "Invalid password"
    }
    return ""
}

export default validateInput;