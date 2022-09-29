import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
    projectId: "6kvn2s6f",
    dataset: "production",
    apiVersion: "2022-09-27",
    useCdn: true,
    token: "skPv0HMNgxUyERPu542cwMx9aZR9N5o90Kwqn95ftLTW1JqoCgJC4n5qLC2vnKM6nIo6qPzHJaQK5h5WeQcR3Y7pQjPbBv9rr55xwK9CXClEAmuvzA22HmD7FABYkH6EHSbusRs6uDtlFcUCj24Znmrc79y1TXPcjNFaPUCTSe7t70zpcLwU"

})

const builder = ImageUrlBuilder(client);

export const urlFolder = (source) => builder.image(source)