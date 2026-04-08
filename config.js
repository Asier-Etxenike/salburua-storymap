var config = {
    style: 'mapbox://styles/etxenike/cmnpwodnx001201s6amfg8gux',
    accessToken: 'pk.eyJ1IjoiZXR4ZW5pa2UiLCJhIjoiY2xjN3B6eWM1MWt1bjN2cGdlNnRreWRkdiJ9.6YUp89UgNHXnpAbecla8DA',
    showMarkers: false,
    markerColor: '#d9534f', // gorria, historia eta oroimena adierazteko
    inset: true,
    insetOptions: { markerColor: 'orange' },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false,
    auto: false,
    title: 'Salburuko oroimenaren herri lasterketa',
    subtitle: 'Salburua, Durango, Gernika: oroimenetik, elkartasunera.',
    byline: 'Salburua Burdinbide Auzo elkartea',
    footer: 'Iturria: https://www.museodelapaz.eus/eu/ <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',

    chapters: [
    {
        id: 'salburua-aerodromoa',
        alignment: 'left',
        hidden: false,
        title: 'Salburuko aerodromoa',
        image: 'https://grupoarqueologiasocial.wordpress.com/wp-content/uploads/2016/05/paseoaerc3b3dromo.jpg',
        description: 'Salburuko aerodromoa 1935ean inauguratu zen, Gasteiztik gertu, interes orokorreko azpiegitura gisa. Altxamendu frankistarekin, Condor Legioaren operazio-base bihurtu zen.<br><br>1937ko hasieran, Condor Legioaren hegazkinak aritzen ziren han, Hitlerrek bidalitako nazien aireko armadaren unitate espedizionarioa, Aviazione Legionaria talde italiarrarekin batera. Laurogei aparatu operatibo inguru egon ziren.<br><br>Salburutik fronte frankistaren aldeko misioak abiatu ziren, hala nola, 1937an, martxoan eta apirilean bertatik abiatu ziren Durango eta Gernika bonbardatu zituzten hegazkinen parte bat.<br><br>Gerra ondoren, hainbat aldiz ireki eta itxi zen, erabilera zibila eta militarra tartekatuz. Azkenean, eskualdearen garapenak aireportu berri baten beharra ekarri zuen, eta 1972an Forondako aireportua eraikitzea erabaki zen, Salburuko aerodromoa baztertuz.',
        location: {
            center: [-2.649521789502842, 42.84993533731202],
            zoom: 15,
            pitch: 45,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [],
        onChapterExit: []
    },
    {
        id: 'durango',
        alignment: 'left',
        hidden: false,
        title: '1937/03/31: Durangoko bonbardaketa',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Bundesarchiv_Bild_101I-630-3561-27A%2C_Flugzeuge_Junkers_Ju_87.jpg',
        description: '1937ko martxoaren 31n, Durango bonbardatua izan zen. Aire-eraso masiboek herria kolpatu zuten, eta antzeko erasoak zabaldu ziren Elorrio eta Otxandiora.<br><br>Gertaera hauek gerra modernoaren aurpegirik gogorrena erakutsi zuten: zibilen aurkako indarkeria zuzena.',
        location: {
            center: [-2.6280929218009135, 43.16822055601213],
            zoom: 14,
            pitch: 45,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [],
        onChapterExit: []
    },
    {
        id: 'gernika',
        alignment: 'fully',
        hidden: false,
        title: '1937/04/26: Gernika',
        image: 'https://www.museodelapaz.eus/wp-content/uploads/2024/05/Abril-1937-Gernika-3-scaled.jpg',
        description: '1937ko apirilaren 26a, 16:20. Lehen bonbak erori dira Gernikan. Alarma hotsak entzun eta herritarrak aterpeetara korrika abiatu ziren. Kondor Legioko hegazkinek hirigunea eta azpiegiturak bonbardatu zituzten, eta ehiza-hegazkinek ihesa eragotzi zuten. 19:40an amaitu zen hiru ordu baino gehiagoko infernua: 31 eta 41 tona lehergai artean jaurti zituzten, hirigunearen %85 baino gehiago suntsituz.<br><br>Eraso bortitz honek mendebalde osoa astindu zuen.',
        location: {
            center: [-2.6798612804192885, 43.31326003163494],
            zoom: 14,
            pitch: 45,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [],
        onChapterExit: []
    },
    {
        id: 'salburua-bunkerra',
        alignment: 'right',
        hidden: false,
        title: 'Salburuko bunkerra',
        image: 'https://www.gasteizhoy.com/wp-content/uploads/2026/02/bunkeres-vitoria-rotated.jpeg',
        description: 'Salburuko bunkerrak, beste batzuekin batera, 1937ko "Iparraldeko" fronteko erasoaldian garrantzi handia izan zuen, aerodromoaren inguruan eraiki baitziren militarrak eta materiala babesteko. Babesleku xumeak ziren, bonbardaketen aurrean babes emateko sortuak.<br><br>Gerra ondoren, bunker hauek eta aireportuko pista luzaroan ikusgai egon ziren, 80ko eta 90eko hamarkadetara arte. Hala ere, Salburua urbanizatzen hasi zenean, aztarna hauek desagertzen joan ziren: sarrerak itxi zituzten eta batzuk parke edo bestelako azpiegituren azpian geratu ziren.<br><br>Gaur egun, ezin dira barrutik bisitatu, baina historia garrantzitsua gordetzen duten aztarna isilak dira, Salburuko aerodromo zaharraren eta Altxamendu frankistaren ondorioen lekuko.',
        location: {
            center: [-2.65315343218532, 42.85153764070978],
            zoom: 15,
            pitch: 45,
            bearing: 0
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [],
        onChapterExit: []
    },
    {
    id: 'auzo-elkartea',
    alignment: 'right',
    hidden: false,
    title: 'Burdinbide Auzo Elkartea',
    image: 'https://www.gasteizhoy.com/wp-content/uploads/2026/01/Escultura-avion-Salburua-2048x1536.jpeg',
    description: 'Gaur egun, memoria bizirik mantentzeko eta etorkizun bakezalea eraikitzeko, herriak hartzen du berriro hitza eta ekimena.<br><br>Burdinbide Auzo Elkarteak antolatuta, “Salburuako oroimenaren herri lasterketa” 2026ko maiatzaren 24an egingo da.<br><br>Lasterketa honek iraganeko gertaera latzak gogora ekarri nahi ditu, baina batez ere elkartasuna, oroimena eta bakearen aldeko konpromisoa indartzeko sortu da.<br><br>Urratsez urrats, historia gogoratuz, etorkizuna eraikitzen dugu.',
    location: {
        center: [-2.6499501602110342, 42.853643193522856],
        zoom: 15,
        pitch: 45,
        bearing: 0
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [],
    onChapterExit: []
    }
]
};