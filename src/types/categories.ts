interface CategoryItemData {
    name: string
}

export type CategoryItem = {
    id: string,
    label: string
    data: CategoryItemData[]
}