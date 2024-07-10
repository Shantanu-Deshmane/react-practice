export const getPosts = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await response.json();
};

export const randomUser = async ()=>{
    const response = await fetch ('https://randomuser.me/api/');
    return await response.json()
} 

 