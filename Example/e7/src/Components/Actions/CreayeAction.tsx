const createUserAction=async({request})=>{
     const formData=await request.formData();
     const userData={
        name:formData.get("name"),
        email:formData.get("name"),
        password:formData.get("password"),
     }
     console.log(userData);
     return{message:"User Created Successfully"}
};
export default createUserAction;