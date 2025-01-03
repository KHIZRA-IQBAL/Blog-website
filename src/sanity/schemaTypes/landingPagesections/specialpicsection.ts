interface SpecialCardImageSelection {
  specialCardImage1?: string;
  specialCardImage2?: string;
}

interface SpecialCardImagesSelection {
  specialCardImages?: { specialCardImage1: string; specialCardImage2: string }[];
}

const specialCard = {
  title: "Special Card",
  name: "specialcard",
  type: "object",
  fields: [
    {
      title: "Special Card Images",
      name: "specialCardImages",
      type: "array",
      of: [
        {
          type: "object",
          name: "specialCardImageObject",
          title: "Special Card Image Object",
          fields: [
            {
              title: "Special Card Image 1",
              name: "specialCardImage1",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              title: "Special Card Image 2",
              name: "specialCardImage2",
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ],
          preview: {
            select: {
              specialCardImage1: "specialCardImage1.asset.url",
              specialCardImage2: "specialCardImage2.asset.url",
            },
            prepare(selection: SpecialCardImageSelection) {
              const { specialCardImage1, specialCardImage2 } = selection;
              return {
                title: "Special Card Images",
                subtitle: "Two special card images",
                media: specialCardImage1 || specialCardImage2,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      specialCardImages: "specialCardImages",
    },
    prepare(selection: SpecialCardImagesSelection) {
      const { specialCardImages } = selection;
      return {
        title: "Special Card Section",
        subtitle: `${specialCardImages?.length || 0} images added`,
      };
    },
  },
};

export default specialCard;

