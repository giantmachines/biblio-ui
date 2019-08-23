export const startsWith = (value:string, chars:string) => {
    return value.startsWith(chars);
};

export const contains = (value:any, chars:string) => {
    return value.includes(chars);
};

export const byAuthorOrTitle = (item:BookDetails, chars:string) => {
    return item.author.startsWith(chars) || item.title.startsWith(chars);
};