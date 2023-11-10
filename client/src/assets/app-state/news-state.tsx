export interface NewsState {
    _id: any,
    title: string, 
    description: string,
    timestamp: any
};

export const NewsInitialState: NewsState = {
    _id: '',
    title: "",
    description: "",
    timestamp: undefined
}