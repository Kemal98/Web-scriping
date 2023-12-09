"use client"


import { FormEvent, useState } from "react";
import { scrapeAndStoreProduct } from "@/app/lib/action";

const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    if(
      hostname.includes('amazon.com') || 
      hostname.includes ('amazon.') || 
      hostname.endsWith('amazon')
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }

  return false;
}



const HeaderMain = ({setProduct}:any) => {
  const [searchPrompt, setSearchPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();  
    const isValidLink = isValidAmazonProductURL(searchPrompt);
  
    if (!isValidLink) return alert('Please provide a valid Amazon link');
  
    try {
      setIsLoading(true);
      // Scrape the product page
      const product = await scrapeAndStoreProduct(searchPrompt);
      setProduct((prevProduct:any) => [product, ...prevProduct]);

      console.log(product)
    } catch (error:any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container sm:flex justify-between items-center">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
          Web scriping
        </div>
        <div className="w-full flex sm:w-[300px] md:w-[70%] relative">
          <form
                onSubmit={handleSubmit}
                > 

          <input
            className="border-gray-200 border p-2 px-4 rounded-lg w-full"
            type="text"
            value={searchPrompt}
            onChange={(e) => setSearchPrompt(e.target.value)}
            placeholder="Enter product link"
            />
         <button 
         type="submit" 
        className="bg-black absolute right-0 cursor-pointer text-md px-4 py-2 text-white font-[400] rounded-md"
        disabled={searchPrompt === ''}
        >
        {isLoading ? 'Searching...' : 'Search'}
      </button>
        </form>
        </div>

      </div>
    </div>
  );
};

export default HeaderMain;
