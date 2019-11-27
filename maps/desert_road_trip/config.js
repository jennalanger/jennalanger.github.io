var config = {
    style: 'mapbox://styles/jennalanger/ck3glkud308ak1cscm2ybnrxk',
    accessToken: 'pk.eyJ1IjoiamVubmFsYW5nZXIiLCJhIjoiY2p2d3k2dzl2MDRycjQ4bGlmYnZ4eHpseiJ9.ewHpcbs6MGPtqwd1phYtpg',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'The Loft: Maiden Voyage',
    subtitle: 'Breaking in the new rig driving and biking through the desert.',
    byline: 'By Jenna Langer',
    footer: 'Source: source citations, etc.',
    chapters: [
      {
          id: 'overview',
          title: 'South Lake Tahoe -> Zion Canyon National Park',
          image: '',
          description: 'We started by heading Northwest, mountain biking along the Lost Sierras. From there we made our way through Nevada and Southern Utah, biking and hiking our way through the beautiful desert canyons.',
          location: {
            center: [-118.24155, 37.70164],
            zoom: 6.19,
            pitch: 0.00,
            bearing: 0.00
          },
          onChapterEnter: [
              // {
              //     layer: 'layer-name',
              //     opacity: 1
              // }
          ],
          onChapterExit: [
              // {
              //     layer: 'layer-name',
              //     opacity: 0
              // }
          ]
      },

        {
            id: 'campsite1',
            title: 'Night 1: Packsaddle Campground',
            image: 'images/20191102-IMG_0004.jpg',
            description: 'Friday afternoon we left South Lake Tahoe and headed for Downieville, planning to camp somewhere near the top of the trailhead. As we arrived in the dark the safest bet was a campground a couple miles below the top.',
            location: {
                center: [-120.64954400, 39.62439700],
                zoom: 10,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'downieville',
            title: 'Ride 1: Downieville Downhill',
            image: 'images/20191102-IMG_0006.jpg',
            description: 'The view from the top of the Downieville trailhead illustrates how it became named the Lost Sierras. From here we road 16 miles all the way back to the small old mining town.',
            location: {
              center: [-120.72260, 39.58770],
              zoom: 12.71,
              pitch: 60.00,
              bearing: -77.63
            },
            onChapterEnter: [
              //     opacity: 1
            ],
            onChapterExit: []
        }
    ]
};
