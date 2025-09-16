const loadImages=async()=>{
    try{
        const res = await fetch('https://picsum.photos/v2/list');
        if (!res.ok) {
              throw new Error("Failed To Fetch Images");                
        }
        const data=await res.json();
        return data;
    }
    catch(error){
         console.error("Error Fetching Images : ",error);
         return[];
    }
}
export default loadImages;