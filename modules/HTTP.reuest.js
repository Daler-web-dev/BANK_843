import axios from "axios";

export async function getData(resource) {
  const res = await axios.get(import.meta.env.VITE_BASE_URL + resource);

  const data = await res.data;

  return data;
}

export async function getSymbols() {
    console.log('ww', import.meta.env.VITE_API_KEY);
    const res = await axios.get("https://api.apilayer.com/fixer/symbols", 
        {headers: {"apikey": import.meta.env.VITE_API_KEY}}
    )
}
