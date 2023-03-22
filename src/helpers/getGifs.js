export const getGifts = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=LCbLI4aF54FI08an7bbFjNT7lOF8zpyx&q=${category}&limit=20`; 

    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => (
       {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
       }
    ))
    return gifs;
}
