const landingPage = {
    title: 'Landing Page',
    name: 'landingPage',
    type: 'document',
    fields: [
        {
            title: 'Section Page',
            name: 'sectionPage',
            type: 'array',
            of: [
                { type: 'herosection' },
                { type: 'specialcard' },
                { type: 'cardsection' },
            ]
        }
    ]
};

export default landingPage;
