export interface ProjectState {
    _id: any,
    name: string,
    location: string,
    client_name: string,
    site_area: number,
    built_area: number,
    description: string,
    category: string,
    awards: boolean,
    photos: {
        hero_img: string,
        primary_img: string,
        secondary_images: string[]
    },
}

export const ProjectInitialState: ProjectState = {
    "_id": "",
    "name": "",
    "location": "",
    "client_name": "",
    "site_area": 0,
    "built_area": 0,
    "description": "",
    "category": '',
    "awards": false,
    "photos": {
        "hero_img": "",
        "primary_img": "",
        "secondary_images": []
    }
}