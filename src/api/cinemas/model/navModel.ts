

export interface CinemasRes {
  brand: brand,
  district: district,
  hallType: hallType
  service: service
}

export interface brand {
  name: "string",
  subItems: subItems
}
export interface district {
  name: "string",
  subItems: subItems
}
export interface hallType {
  name: "string",
  subItems: subItems
}
export interface service {
  name: "string",
  subItems: subItems
}

export type subItems = [subItem]

export interface subItem {
  count: number,
  id: number,
  name: string
}