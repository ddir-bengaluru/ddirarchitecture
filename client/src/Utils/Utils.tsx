export function strTransform(str: string) {
    const words = str?.split('-');
    const formattedName = words?.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return formattedName;
}

// export const endpoint = 'http://localhost:9200/record/;
export const endpoint = 'https://ddir-backend.onrender.com/record/';