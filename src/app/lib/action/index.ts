'use server'

import { scrapeAmazonProduct } from "../scraper";

export async function scrapeAndStoreProduct(productUrl:string) {
    if(!productUrl) return;
    try {
        const scraperProduct = await scrapeAmazonProduct(productUrl)
        console.log(scraperProduct)
        return scraperProduct
        // if(!scraperProduct) return;
    } catch (error:any) {
        throw new Error(error.message)
    }
}