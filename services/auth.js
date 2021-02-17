export const getUser = async () => {
    if(user){
        return {...JSON.parse(user), isAuthenticated: true};
    }else{
        return {isAuthenticated: false};
    }
}