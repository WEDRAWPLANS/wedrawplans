// High-intent local service guidance; approved examples are strictly local to each listed authority.
// Keep borough pages useful to homeowners: no doorway-page claims, keyword stuffing or invented approvals.
export type BoroughIntent = {
  name: string;
  heading: string;
  localities: string;
  context: string;
  topics: [string, string, string];
  evidence: string[];
};

export const boroughIntent: Record<string, BoroughIntent> = {
  "barking-and-dagenham": {
    "name": "Barking and Dagenham",
    "heading": "Rear extension and planning drawings in Barking and Dagenham",
    "localities": "Barking, Dagenham and Becontree",
    "context": "For family homes and terraces, depth, boundary relationships and roof forms may influence the planning route.",
    "topics": [
      "rear extension planning drawings Barking and Dagenham",
      "loft conversion plans Barking and Dagenham",
      "building regulation drawings Barking and Dagenham"
    ],
    "evidence": []
  },
  "barnet": {
    "name": "Barnet",
    "heading": "Rear extension planning drawings in Barnet",
    "localities": "Mill Hill, Finchley, Hendon, Edgware and Colindale",
    "context": "A rear extension may involve permitted development, larger-home prior approval or a householder application depending on the site and proposal.",
    "topics": [
      "rear extension planning drawings Barnet",
      "loft conversion drawings Barnet",
      "building regulation drawings Barnet"
    ],
    "evidence": [
      "leicester-road-barnet-4m-rear-extension",
      "the-reddings-mill-hill-extension-basement-loft",
      "sunbury-avenue-mill-hill-side-rear-extension"
    ]
  },
  "bexley": {
    "name": "Bexley",
    "heading": "House extension plans and planning drawings in Bexley",
    "localities": "Bexleyheath, Sidcup, Welling and Erith",
    "context": "Designs should respond to the existing roof, neighbouring gardens, access and any relevant local constraints.",
    "topics": [
      "house extension plans Bexley",
      "loft conversion planning drawings Bexley",
      "building control drawings Bexley"
    ],
    "evidence": []
  },
  "brent": {
    "name": "Brent",
    "heading": "Rear extension and loft conversion drawings in Brent",
    "localities": "Wembley, Willesden, Kilburn and Kingsbury",
    "context": "On compact urban plots we review side returns, daylight, boundary positions and conservation constraints where applicable.",
    "topics": [
      "rear extension drawings Brent",
      "loft conversion plans Brent",
      "building regulations drawings Brent"
    ],
    "evidence": []
  },
  "bromley": {
    "name": "Bromley",
    "heading": "House extension planning drawings in Bromley",
    "localities": "Beckenham, Orpington, Chislehurst and Bromley",
    "context": "Householder drawings need to respond to site levels, garden depth, neighbouring windows and the existing building character.",
    "topics": [
      "extension plans Bromley",
      "loft conversion drawings Bromley",
      "building regulation plans Bromley"
    ],
    "evidence": []
  },
  "camden": {
    "name": "Camden",
    "heading": "Planning drawings for extensions and alterations in Camden",
    "localities": "Hampstead, Kentish Town, Camden Town and Bloomsbury",
    "context": "For terraces, flats and heritage-sensitive properties we review planning constraints and the details needed for accurate applications.",
    "topics": [
      "planning drawings Camden",
      "side return extension plans Camden",
      "building regulations drawings Camden"
    ],
    "evidence": []
  },
  "croydon": {
    "name": "Croydon",
    "heading": "Rear extension and new home planning drawings in Croydon",
    "localities": "South Croydon, Purley, Norbury and Thornton Heath",
    "context": "Rear additions, lofts and small infill proposals call for careful plans showing access, neighbouring properties and site context.",
    "topics": [
      "rear extension planning drawings Croydon",
      "loft conversion plans Croydon",
      "new build planning drawings Croydon"
    ],
    "evidence": []
  },
  "ealing": {
    "name": "Ealing",
    "heading": "Extension plans and planning drawings in Ealing",
    "localities": "Acton, Ealing Broadway, Hanwell and Southall",
    "context": "Side-return layouts and rear kitchen extensions should be assessed against the existing house, adjoining windows and planning context.",
    "topics": [
      "extension plans Ealing",
      "rear extension planning drawings Ealing",
      "building regulation drawings Ealing"
    ],
    "evidence": []
  },
  "enfield": {
    "name": "Enfield",
    "heading": "Rear extension and loft conversion plans in Enfield",
    "localities": "Palmers Green, Southgate, Winchmore Hill and Enfield Town",
    "context": "We consider the property type, roof shape, neighbouring gardens and any planning restrictions before defining a drawing package.",
    "topics": [
      "rear extension plans Enfield",
      "loft conversion drawings Enfield",
      "building control drawings Enfield"
    ],
    "evidence": []
  },
  "greenwich": {
    "name": "Greenwich",
    "heading": "Planning drawings for lofts and extensions in Greenwich",
    "localities": "Eltham, Charlton, Plumstead and Blackheath",
    "context": "Roof form, local character and any conservation-area status can affect the suitable application or lawful-development route.",
    "topics": [
      "loft conversion planning drawings Greenwich",
      "rear extension plans Greenwich",
      "building regulation drawings Greenwich"
    ],
    "evidence": [
      "alnwick-road-eltham-lawful-loft"
    ]
  },
  "hackney": {
    "name": "Hackney",
    "heading": "Side return and rear extension plans in Hackney",
    "localities": "Dalston, Stoke Newington, Clapton and Homerton",
    "context": "Terraced homes and mixed building types can require detailed assessment of existing walls, party boundaries and daylight.",
    "topics": [
      "side return extension drawings Hackney",
      "planning permission drawings Hackney",
      "building control drawings Hackney"
    ],
    "evidence": []
  },
  "hammersmith-and-fulham": {
    "name": "Hammersmith and Fulham",
    "heading": "Loft conversion and rear extension drawings in Hammersmith and Fulham",
    "localities": "Fulham, Shepherd's Bush, Hammersmith and Parsons Green",
    "context": "We take account of terraced-home roof forms, neighbour relationships and conservation considerations when preparing planning information.",
    "topics": [
      "loft conversion drawings Hammersmith and Fulham",
      "rear extension planning drawings Fulham",
      "building regulations drawings Hammersmith"
    ],
    "evidence": [
      "warbeck-road-hammersmith-fulham-loft-certificate"
    ]
  },
  "haringey": {
    "name": "Haringey",
    "heading": "Rear extension and loft conversion planning drawings in Haringey",
    "localities": "Muswell Hill, Crouch End, Tottenham and Wood Green",
    "context": "House types vary across the borough, so application drawings must reflect the exact property, roof and surroundings.",
    "topics": [
      "rear extension planning drawings Haringey",
      "loft conversion plans Haringey",
      "building control drawings Haringey"
    ],
    "evidence": []
  },
  "harrow": {
    "name": "Harrow",
    "heading": "Rear extension planning drawings and loft plans in Harrow",
    "localities": "Pinner, Stanmore, Kenton and Harrow-on-the-Hill",
    "context": "Larger rear additions and loft proposals need clear dimensions, elevations and site context for council assessment.",
    "topics": [
      "rear extension planning drawings Harrow",
      "5 metre extension plans Pinner",
      "building regulation drawings Harrow"
    ],
    "evidence": [
      "cannon-lane-pinner-5-metre-rear-extension"
    ]
  },
  "havering": {
    "name": "Havering",
    "heading": "House extension plans and Building Regulations drawings in Havering",
    "localities": "Romford, Hornchurch, Upminster and Rainham",
    "context": "Garden depth, detached or semi-detached layouts and neighbour relationships shape the most suitable application drawings.",
    "topics": [
      "rear extension drawings Havering",
      "loft conversion planning drawings Romford",
      "building regulation drawings Havering"
    ],
    "evidence": []
  },
  "hillingdon": {
    "name": "Hillingdon",
    "heading": "Extension and loft planning drawings in Hillingdon",
    "localities": "Uxbridge, Ruislip, Hayes and Northwood",
    "context": "From rear kitchen additions to roof extensions, we assess property-specific constraints and the correct planning route.",
    "topics": [
      "extension plans Hillingdon",
      "loft conversion drawings Ruislip",
      "building regulations drawings Hillingdon"
    ],
    "evidence": []
  },
  "hounslow": {
    "name": "Hounslow",
    "heading": "Rear extension planning and Building Regulations drawings in Hounslow",
    "localities": "Hounslow, Chiswick, Brentford and Isleworth",
    "context": "For side-return infills and rear additions, dimensions, drainage, neighbour impacts and the technical build-up all matter.",
    "topics": [
      "rear extension planning drawings Hounslow",
      "side return extension plans Hounslow",
      "building regulation drawings Hounslow"
    ],
    "evidence": [
      "cromwell-road-hounslow-rear-extension"
    ]
  },
  "islington": {
    "name": "Islington",
    "heading": "Side return extension and loft plans in Islington",
    "localities": "Highbury, Angel, Canonbury and Holloway",
    "context": "Narrow plots and existing terraces often require careful sections, daylight assessment and coordinated structural information.",
    "topics": [
      "side return extension plans Islington",
      "loft conversion drawings Islington",
      "building regulation drawings Islington"
    ],
    "evidence": []
  },
  "kensington-and-chelsea": {
    "name": "Kensington and Chelsea",
    "heading": "House alteration and basement planning drawings in Kensington and Chelsea",
    "localities": "Chelsea, South Kensington, Notting Hill and Earl's Court",
    "context": "Heritage, conservation, flats and basement works may bring extra information requirements beyond standard householder plans.",
    "topics": [
      "planning drawings Kensington and Chelsea",
      "rear extension drawings Chelsea",
      "building control technical drawings Chelsea"
    ],
    "evidence": []
  },
  "kingston": {
    "name": "Kingston upon Thames",
    "heading": "House extension plans and loft conversion drawings in Kingston",
    "localities": "Kingston, Surbiton, New Malden and Chessington",
    "context": "We review the building form, neighbouring gardens and any relevant local constraints when selecting an application route.",
    "topics": [
      "extension plans Kingston upon Thames",
      "loft conversion drawings Kingston",
      "building regulation drawings Kingston"
    ],
    "evidence": []
  },
  "lambeth": {
    "name": "Lambeth",
    "heading": "Rear extension and loft conversion plans in Lambeth",
    "localities": "Clapham, Brixton, Streatham and West Norwood",
    "context": "Victorian terraces and residential flats need accurate existing plans and attention to neighbouring amenity and any conservation restrictions.",
    "topics": [
      "rear extension drawings Lambeth",
      "loft conversion drawings Lambeth",
      "building regulations drawings Lambeth"
    ],
    "evidence": []
  },
  "lewisham": {
    "name": "Lewisham",
    "heading": "Rear extension and property conversion drawings in Lewisham",
    "localities": "Brockley, Forest Hill, Catford and New Cross",
    "context": "We assess the existing building layout and the planning or lawful-development route before producing a coherent submission pack.",
    "topics": [
      "rear extension planning drawings Lewisham",
      "loft conversion plans Lewisham",
      "flat conversion planning drawings Lewisham"
    ],
    "evidence": [
      "brockley-road-lewisham-two-flat-conversion"
    ]
  },
  "merton": {
    "name": "Merton",
    "heading": "Rear extension and loft planning drawings in Merton",
    "localities": "Wimbledon, Morden, Mitcham and Merton Park",
    "context": "Side returns, rear extensions and loft enlargements should take account of adjoining properties, roof shape and local policy.",
    "topics": [
      "rear extension plans Merton Park",
      "planning drawings Wimbledon",
      "building regulations drawings Merton"
    ],
    "evidence": []
  },
  "newham": {
    "name": "Newham",
    "heading": "House extension and loft drawings in Newham",
    "localities": "Stratford, Forest Gate, East Ham and Plaistow",
    "context": "Terraced housing, tight plots and changing residential contexts make accurate existing drawings particularly valuable.",
    "topics": [
      "rear extension drawings Newham",
      "loft conversion plans Newham",
      "building regulation drawings Newham"
    ],
    "evidence": []
  },
  "redbridge": {
    "name": "Redbridge",
    "heading": "Rear extension and loft plans in Redbridge",
    "localities": "Ilford, Wanstead, Woodford and South Woodford",
    "context": "We consider garden depth, neighbouring windows, roof form and any restrictions before confirming whether planning approval is needed.",
    "topics": [
      "rear extension planning drawings Redbridge",
      "loft conversion drawings Ilford",
      "building control drawings Redbridge"
    ],
    "evidence": []
  },
  "richmond": {
    "name": "Richmond upon Thames",
    "heading": "House extension planning drawings in Richmond upon Thames",
    "localities": "Twickenham, Teddington, Richmond and Barnes",
    "context": "Conservation areas, local townscape character and neighbour considerations can affect house extension and loft proposals.",
    "topics": [
      "rear extension planning drawings Richmond",
      "loft conversion plans Twickenham",
      "building regulation drawings Richmond"
    ],
    "evidence": []
  },
  "southwark": {
    "name": "Southwark",
    "heading": "Side return extension and planning drawings in Southwark",
    "localities": "Peckham, Dulwich, Bermondsey and East Dulwich",
    "context": "Victorian terraces, conservation areas and flat conversions often require a well-evidenced set of existing and proposed drawings.",
    "topics": [
      "side return extension plans Southwark",
      "rear extension planning drawings Dulwich",
      "building regulation drawings Southwark"
    ],
    "evidence": []
  },
  "sutton": {
    "name": "Sutton",
    "heading": "Loft conversion and rear extension plans in Sutton",
    "localities": "Sutton, Wallington, Carshalton and Cheam",
    "context": "Roof alterations and house extensions should be designed with regard to the existing roof, neighbour context and planning route.",
    "topics": [
      "loft conversion drawings Sutton",
      "rear extension plans Sutton",
      "building regulation drawings Sutton"
    ],
    "evidence": [
      "sutton-loft-conversion-planning-permission-wallington"
    ]
  },
  "tower-hamlets": {
    "name": "Tower Hamlets",
    "heading": "Planning drawings for alterations and lofts in Tower Hamlets",
    "localities": "Bow, Mile End, Whitechapel and Bethnal Green",
    "context": "Dense urban sites, heritage buildings and mixed-use premises can need additional application drawings and coordination.",
    "topics": [
      "planning drawings Tower Hamlets",
      "loft conversion plans Tower Hamlets",
      "building regulations drawings Tower Hamlets"
    ],
    "evidence": []
  },
  "waltham-forest": {
    "name": "Waltham Forest",
    "heading": "Rear extension and loft planning drawings in Waltham Forest",
    "localities": "Walthamstow, Chingford, Leyton and Leytonstone",
    "context": "Garden relationships, existing roof geometry and any local designations guide the scope of planning and technical drawings.",
    "topics": [
      "rear extension drawings Waltham Forest",
      "loft conversion planning drawings Walthamstow",
      "building regulation drawings Waltham Forest"
    ],
    "evidence": []
  },
  "wandsworth": {
    "name": "Wandsworth",
    "heading": "Side return and rear extension planning drawings in Wandsworth",
    "localities": "Battersea, Balham, Tooting and Putney",
    "context": "For terraced houses and basement proposals, accurate sections, neighbouring relationships and technical coordination are important.",
    "topics": [
      "side return extension drawings Wandsworth",
      "rear extension planning drawings Balham",
      "building regulation drawings Wandsworth"
    ],
    "evidence": [
      "sistova-road-wandsworth-extension-basement"
    ]
  },
  "westminster": {
    "name": "Westminster",
    "heading": "Planning drawings for home alterations and flats in Westminster",
    "localities": "Marylebone, Paddington, Maida Vale and Pimlico",
    "context": "Flats, heritage settings and listed buildings may call for tailored planning information and consents beyond a standard extension pack.",
    "topics": [
      "planning drawings Westminster",
      "flat renovation drawings Westminster",
      "building regulation drawings Westminster"
    ],
    "evidence": []
  },
  "city-of-london": {
    "name": "City of London",
    "heading": "Planning and Building Regulation drawings in the City of London",
    "localities": "Barbican, Smithfield, Aldgate and the Square Mile",
    "context": "Conversions and alterations in dense, heritage-sensitive settings require accurate plans, fire-safety consideration and relevant consents.",
    "topics": [
      "planning drawings City of London",
      "conversion drawings City of London",
      "building control drawings City of London"
    ],
    "evidence": []
  },
  "hertfordshire": {
    "name": "Hertfordshire",
    "heading": "Rear extension planning and Building Regulation drawings in Hertfordshire",
    "localities": "Hoddesdon, Elstree, Borehamwood and Radlett",
    "context": "Planning decisions depend on the relevant Hertfordshire council and the property's exact location, not a London borough policy.",
    "topics": [
      "rear extension drawings Hertfordshire",
      "loft conversion plans Hoddesdon",
      "building regulation drawings Hertfordshire"
    ],
    "evidence": [
      "cranbourne-drive-hoddesdon-planning-project",
      "allum-lane-elstree-major-house-extension"
    ]
  },
  "surrey-borders-m25": {
    "name": "Surrey borders and M25",
    "heading": "House extension and loft plans around Surrey and the M25",
    "localities": "Epsom, Esher, Walton-on-Thames and nearby Surrey towns",
    "context": "Our drawings are prepared to suit the property's local authority, site constraints and selected application route.",
    "topics": [
      "extension plans Surrey M25",
      "loft conversion drawings Surrey",
      "building regulation drawings Surrey"
    ],
    "evidence": []
  },
  "essex": {
    "name": "Essex",
    "heading": "Rear extension and loft planning drawings in Essex",
    "localities": "Brentwood, Chigwell, Loughton and nearby Essex towns",
    "context": "The suitable application route and technical drawing requirements depend on the relevant Essex council and site.",
    "topics": [
      "rear extension drawings Essex",
      "loft conversion plans Essex",
      "building regulation drawings Essex"
    ],
    "evidence": []
  }
};
