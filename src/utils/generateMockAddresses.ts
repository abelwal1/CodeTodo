const postCodeToCityMapping = {
  1: "Brisbane",
  2: "Sydney",
  3: "Melbourne",
  4: "Gold Coast",
  5: "Toowomba",
  6: "Burleigh",
  7: "Byron Bay",
  8: "Geelong",
  9: "Warrnambool",
};

const streetNumberToStreetMapping = {
  1: "Mary Street",
  2: "Edward Street",
  3: "Francesco Street",
  4: "Docklands Drive",
  5: "Elizabeth Street",
  6: "Black Spur Drive",
  7: "Grand Pacific Drive",
  8: "Paddys River Road",
  9: "Red Centre Way",
};

const generateMockAddress = (
  postcode: string,
  streetNumber: string,
  postcodeMapping: string,
  streetMapping: string
) => {
  let arr=[];
  for(let i=0; i< 5; i++){
    arr.push(
      {
        id: i,
        city: postcodeMapping,
        houseNumber: `${i}`,
        postcode,
        street: `${streetNumber} ${streetMapping}`,
        lat: Math.random(),
        long: Math.random(),
      }
    );
  }
  return arr;
};

const generateMockAddresses = (postcode: string, streetNumber: string) => {
  const postcodeFirstChar = parseInt(postcode.substring(0, 1));
  const streetNumberFirstChar = parseInt(streetNumber.substring(0, 1));
  const postcodeMapping: string = (postCodeToCityMapping as any)[
    postcodeFirstChar
  ];
  const streetMapping: string = (streetNumberToStreetMapping as any)[
    streetNumberFirstChar
  ];

  if (postcodeMapping) {
    const address = generateMockAddress(
      postcode,
      streetNumber,
      postcodeMapping,
      streetMapping
    );
    return address.filter((x) => x.houseNumber === streetNumber);
  }

  return null;
};

export default generateMockAddresses;
