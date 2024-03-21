export const products = {
    title: "produkter",
    name: "products",
    type:"document",
    fields: [
        {
            title: "produktnavn",
            name: "productname",
            type: "string",
        },
        {
            title: "produktlink",
            name: "produkturl",
            type: "slug",
            options: {
                sorce: "productname",
                slugify: input => input 
                .toLowerCase() 
                .replace(/\s+/g, '-') 
                .slice(0, 200)
            }
        },
        {
            title: "pris",
            name: "price",
            type: "number"

        },
        {
            title: "produktbilde",
            name: "productimage",
            type: "image",
        },
        {
            title: "Kategori",
            name: "category",
            type: "reference",
            to: [{type: "categories"}]
        },
        {
            title: "Lager",
            name: "Stock",
            type: "number",
        }

    ]
}