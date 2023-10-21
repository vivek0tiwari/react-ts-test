export interface FileProps {
    id: string
    name: number
    children?: Array<FileProps>
    isExpanded: boolean
}

export interface FileListProps {
    data: Array<FileProps>
}

export enum FileType  {
    FILE='FILE',
    DIR='DIR'
}

