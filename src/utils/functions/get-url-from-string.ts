const getURLfromString = (name: string): string => `/${name.toLowerCase().replace(/ /g, "-")}`;

export default getURLfromString;