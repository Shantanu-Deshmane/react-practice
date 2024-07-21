export const GetMemesData = async () => {
  let response = await  fetch('https://api.imgflip.com/get_memes')
  return await response.json();
}