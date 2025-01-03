const cardSection = {
    title: "Card Section",
    name: "cardsection",
    type: "object",
    fields: [
        {
            title: "Card Section Heading",
            name: "cardSectionheading",
            type: "string"
        },
        {
            title: "Card Section paragraph",
            name: "cardSectionparagraph",
            type: "string"
        },
        {
            title: "Card Section Cards",
            name: "cardSectionCards",
            type: "array",
            of: [
                {
                    title: "Card",
                    name: "card",
                    type: "object",
                    fields: [
                        {
                            title: "Card Image",
                            name: "cardImage",
                            type: "image"
                        },
                        {
                            title: "Card Title",
                            name: "cardTitle",
                            type: "string"
                        },
                        {
                            title: "Card Description",
                            name: "cardDescription",
                            type: "text"
                        },
                        {
                            title: "Card Recipe",
                            name: "cardRecipe",
                            type: "text"
                        },
                        {
                            title: "Card Rating",
                            name: "cardRating",
                            type: "text"
                        },
                        {
                            title: "Card Price",
                            name: "cardPrice",
                            type: "text"
                        }
                    ]
                }
            ]
        }
    ]
};

export default cardSection;
