function fetchUserData() {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve({name : "chaicode" , url : "Https:///chai code.com"})  ;
        }, 3000);
    })
}

async function getUserData() {
    try{
console.log('fetching user data...') ; 
    const userData = await fetchUserData() ; 
    console.log('User data :' , userData) ;
    }catch(error) {
    console.log("Error fetching data " , error) ; 
    }
}

getUserData() ; 