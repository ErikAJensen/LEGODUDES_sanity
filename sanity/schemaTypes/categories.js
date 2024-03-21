export const categories = 
    {
        title: "Kategories", 
        name:  "categories",
        type:  "document",
        fields: [
                 {
                    title: "Kategoritittel",
                    name:  "categorietitle",
                    type:  "string",
                 },
                 {
                    title: "Kategorilink",
                    name:  "Categoryurl",
                    type:  "slug",
                    Options: {
                        source: "categoryetitle",
                        slugify: input => input.toLowerCase().replace(/\s+/g, '-' )
                    }
                 }
        ]
    }
