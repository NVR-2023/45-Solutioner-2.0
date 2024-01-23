export type basicComponentPropsType = {
    size?:number,
    color?: string,
}

export type scaledComponentPropsType = {
    scale?:number,
    color?: string,
}



export type linkType = {
    link: string,
    path: string
}

export type linkListType = linkType[];