var config = {
    style: 'mapbox://styles/ed1990/clohj58na002601pmcrfceubt',
    accessToken: 'pk.eyJ1IjoiZWQxOTkwIiwiYSI6ImNsb2llZHRyOTFwZjUyam8yZHl6ejNkcDAifQ.tYR2SbODulf8gF529UtQ0g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'globe',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '<span style="font-family:Oswald; font-weight:400; padding: 0.1vh; color:#ffffff; font-size:1.5rem;" >A Century of Plastic</span>',
    subtitle: '<span style="font-family:Oswald; font-weight:200; color:#ffffff; font-size:2.5rem;" >INTERACTIVE: The Journey of Plastic Through Romania – Where It Comes From, Where We Send It, and How Much Stays Here</span>',
    byline: '<p style= "font-family:Oswald; font-weight:200; padding-bottom: 9vh; color:#ffffff; font-size:1.1rem;"><a href="https://panorama.ro/author/edit/" target="_blank">Edit Gyenge</a></p> <p style= "font-family:Oswald; font-weight:200; padding: 0.3vh; color:#ffffff; font-size:1.1rem;">Scroll</p> <p> <img src="button.gif" alt="scroll down" width="70" height="60" /></p>',
    footer: '<p style="margin-top:1px; margin-bottom:1px;"><b>November 6, 2023 </b></p> <p style="margin-top:1px; margin-bottom:1px;"><b>Sursa datelor:</b> Eurostat, The World Bank, UN Comtrade Database, Our World in Data <br> Editor: <a href="https://panorama.ro/author/alina-matis/" target="_blank">Alina Mărculescu Matiș</a> </p>',
    chapters: [
        {
            id: 'empty',
            alignment: 'center',        
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
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
            id: 'prim',
            alignment: 'center',        
            hidden: false,
            title: '',
            image: '',
            description: 'Starting from November 30, 2023, in Romania, <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">the Deposit-Return System (SGR)</span> will come into effect. From now on, plastic is no longer just a source of pollution and waste—it becomes a resource with a tangible value for every consumer: <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">50 bani,</span> the deposit per container, which is added to the price of products sold in plastic, glass, or metal packaging and refunded when the packaging is returned.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
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
            id: 'primpoza',
            alignment: 'center',        
            hidden: true,
            title: '',
            image: '',
            backimage:'yes',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
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
            id: 'primpoza1',
            alignment: 'center',        
            hidden: true,
            title: '',
            image: '',
            backimage:'yes',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
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
            id: 'primpoza2',
            alignment: 'center',        
            hidden: true,
            title: '',
            image: '',
            backimage:'yes',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
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
            id: 'primpoza3',
            alignment: 'center',        
            hidden: true,
            title: '',
            image: '',
            backimage:'yes',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
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
            id: 'prim2',
            alignment: 'center',        
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',
            description: 'The system represents a significant step in promoting recycling and reducing pollution. Among the three types of materials included in the Deposit-Return System (SGR), <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">plastic has by far the greatest impact</span> on the environment. This is also because its use has expanded at a staggering pace over the past century.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
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
            id: 'Intro',
            alignment: 'center',        
            hidden: false,
            title: '',
            image: '',
            description: 'Plastics, derived from fossil fuels, <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">were invented more than a century ago.</span> However, large-scale production only took off after World War II. Its potential was quickly recognized, and plastic went on to transform industries and the global economy.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
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
            id: 'Intro2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'With each passing decade, the amount of plastic <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">produced</span> globally has grown exponentially. Even when compared to the planet’s population growth, we have still gone, in just 70 years, from <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">0.8 kg of plastic</span> produced annually per capita to <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">57.9 kg of plastic.</span> This is where we are now.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'Intro2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',
            description: 'However, if the situation does not change in the near future, the amount of plastic produced globally, relative to the population, will double in the next 40 years. This scenario results from overlapping projections by the United Nations on population growth and forecasts by the Organisation for Economic Co-operation and Development (OECD) regarding plastic production.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'cincizeci',
            alignment: 'center',
            hidden: true,
            title: '',
            image: '',
            backimage:'yes',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'saizeci',
            alignment: 'center',
            hidden: true,
            title: '',
            image: '',
            backimage:'yes',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'saptezeci',
            alignment: 'center',
            hidden: true,
            title: '',
            image: '',
            backimage:'yes',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'optzeci',
            alignment: 'center',
            hidden: true,
            title: '',
            image: '',
            backimage:'yes',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'nouazeci',
            alignment: 'center',
            hidden: true,
            title: '',
            image: '',
            backimage:'yes',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'douamii',
            alignment: 'center',
            hidden: true,
            title: '',
            image: '',
            backimage:'yes',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'douamiizece',
            alignment: 'center',
            hidden: true,
            title: '',
            image: '',
            backimage:'yes',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'douamiidouazeci',
            alignment: 'center',
            hidden: true,
            title: '',
            image: '',
            backimage:'yes',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'douamiitreizeci',
            alignment: 'center',
            hidden: true,
            title: '',
            image: '',
            backimage:'yes',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'douamiipatruzeci',
            alignment: 'center',
            hidden: true,
            title: '',
            image: '',
            backimage:'yes',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'douamiicincizeci',
            alignment: 'center',
            hidden: true,
            title: '',
            image: '',
            backimage:'yes',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'douamiisaizeci',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',
            description: 'In the next 40 years, the amount of plastic produced, relative to the global population,  <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">will double.</span>  ',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'text1',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'The problem is not just that more and more plastic is being produced. Once created, it remains for hundreds of years.  <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">The vast majority of all plastic ever produced is still on the planet.</span>  We find it either still in use, in the form of waste, or as plastic that has reached the end of its lifespan.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'textgrafic',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe src="https://flo.uri.sh/visualisation/21404799/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/21404799/?utm_source=embed&utm_campaign=visualisation/21404799" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'text2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Globally, in 2019,  <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">71.6%</span>  of plastic waste was either mismanaged or dumped in landfills,  <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">19.5%</span>  was incinerated, and only  <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">9.3%</span>  was recycled. What does this mean?',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'text3',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'From 1950 to 2023, a total of  <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">11 billion tons of plastic</span>  have been produced.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'text3chart',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe src="https://flo.uri.sh/visualisation/21404746/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/21404746/?utm_source=embed&utm_campaign=visualisation/21404746" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'text5',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',            
            description: 'At this moment, we are relating the entire amount of plastic produced since the 1950s to the current global population of 8 billion people, without taking into account plastic disposal methods such as incineration.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'text4',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',
            description: 'Hypothetically, this would mean  <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">1.4 tons of plastic</span>  per person. Of course, part of this amount, as we saw earlier, has already been eliminated. But even if we reduce this figure by 20% (which could account for incineration), there still remains an impressive amount of accumulated plastic per capita on the planet.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'text6',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',
            description: 'But in a scenario where plastic production continues to grow exponentially, the amount of plastic per person will also increase.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'text7',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',
            description: 'Imagine 8 billion people, each carrying over a ton of plastic this year. Next year, this amount will increase even further for each person.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'text8',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',            
            description: 'As plastic production increases, the amount of plastic waste also grows. When looking at plastic waste, packaging makes up a significant portion.  <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">More than 30% of the plastic waste produced annually</span>  comes from packaging production. These items, such as plastic bags or food packaging, serve a very short purpose—often just a few minutes or hours—but have the ability to "haunt" the environment for hundreds of years after being discarded.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'text8grafic',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',            
            description: '<iframe src="https://flo.uri.sh/visualisation/21403991/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/21403991/?utm_source=embed&utm_campaign=visualisation/21403991" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'text9',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '', 
            description: 'A large portion of plastic waste  <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">ends up in the oceans,</span>  which has major consequences. Large rivers play a crucial role in transporting this waste. Once it reaches the open waters of seas and oceans, some of the waste remains near the shores, while others, caught in ocean currents, are carried around the world.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'oceania',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            backimage:'yes',            
            description: 'Of the total amount of plastic waste released into the oceans, Australia and Oceania have the smallest share.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'europa',
            alignment: 'center',
            hidden: true,
            title: '',
            image: '',
            backimage:'yes',            
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'americadenord',
            alignment: 'center',
            hidden: true,
            title: '',
            image: '',
            backimage:'yes',            
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'americadesud',
            alignment: 'center',
            hidden: true,
            title: '',
            image: '',
            backimage:'yes',            
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'africa',
            alignment: 'center',
            hidden: true,
            title: '',
            image: '',
            backimage:'yes',            
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'asia',
            alignment: 'center',
            hidden: true,
            title: '',
            image: '',
            backimage:'yes',            
            description: 'In Asia, however, the situation is the most severe. The continent is the leading contributor to plastic waste entering the ocean.  <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">80% of this waste</span>  originates from Asia.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'text10',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: 'What does the plastic waste situation look like in Europe?',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'text11',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: 'The European Union generates an average of  <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">35.9 kilograms of plastic packaging waste</span>  per capita each year.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'text11grafic2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: '<iframe src="https://flo.uri.sh/visualisation/21404412/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/21404412/?utm_source=embed&utm_campaign=visualisation/21404412" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            location: {
                center: [12.02595, 49.90885],
                zoom: 3,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'text12',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: 'The rapid increase in plastic waste production in recent years has enabled the "globalization of recycling." Although most plastic waste is managed and recycled at the national level, exporting plastic waste helps handle part of the plastic emissions in a more cost-effective way. It also reduces pressure on local recycling facilities and landfills.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'text13',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: 'The import of plastic also has financial advantages. Using recycled plastics in new products is a much more cost-effective option for industries that would otherwise have to purchase new plastics, which are becoming increasingly expensive due to pollution control policies.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'text14',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: 'Although there are advantages to the trade of plastic waste, the downside is that less developed countries have become targets of export practices that have led to environmental pollution. This is why, in 2019, 187 countries agreed to add plastic to an amendment of the Basel Convention, which regulates international waste trade. The amendment restricts international trade of plastic waste, except in cases where adequate recycling capacity is unavailable.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'text15',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: 'At the European Union level, plastic waste primarily ends up in Germany, the Netherlands, and Belgium—countries with major ports and high recycling capacity.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'text16',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: '<iframe src="https://flo.uri.sh/visualisation/21404506/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/21404506/?utm_source=embed&utm_campaign=visualisation/21404506" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'text17',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: 'Until 2013, Romania was predominantly an exporter of plastic waste. However, since 2013, the amount of imported plastic waste has exceeded the amount exported. In fact, it  <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">tripled</span> in just six years, reaching this level by 2019.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'text18',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: '<iframe src="https://flo.uri.sh/visualisation/21412233/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/21412233/?utm_source=embed&utm_campaign=visualisation/21412233" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'text19',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: 'In 2022,  <span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">almost 20%</span>  of the plastic waste imported by Romania came from Greece, while another 18% came from the Netherlands. From neighboring Bulgaria, we imported 10% of the total plastic waste imported that year.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'text20',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: '<iframe src="https://flo.uri.sh/visualisation/21404637/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/21404637/?utm_source=embed&utm_campaign=visualisation/21404637" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'text20',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: '<iframe src="https://flo.uri.sh/visualisation/21404576/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/21404576/?utm_source=embed&utm_campaign=visualisation/21404576" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'text21',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: '<span style="outline-style:solid; outline-width:thin; outline-color:#6CA821; padding: 0.3vh; border-radius: 5px; color:#ffffff; font-weight: bold;">Almost a quarter (24.7%)</span>  of the plastic waste we export goes to Turkey, 15% reaches Italy, and 10% is sent to Poland.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
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
            id: 'text22',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',                      
            description: 'In a context where we consume more plastic than ever, the Deposit-Return System (SGR) has a significant impact in combating pollution. It provides consumers with a financial incentive to return post-consumer packaging for recycling, thereby reducing the use of newly produced plastic.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 16,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'doi.png',
                //     opacity: 1,                    
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        

        

        
        

        
        


        
        

    ]
};