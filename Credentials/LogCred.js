export const LogCred = (res)=>{
    if(res.status===400){
        return window.alert("Please Fill All the required fields")
    }
    else if(res.status===200){
        window.alert("Email or Password is incorrect")
    }
}

