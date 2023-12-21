

export type TUser = {
  cell: string
  dob: {
    date: string
    age: number
  }
  email: string
  gender: "female" | "male"
  id: {
    name: string
    value: string | null
  }
  location: {
    city: string
    country: string
    postcode: number
    street: {
      number: number
      name: string
    }
  }
  name: {
    first: string
    last: string
    title: string
  }
  nat: string
  phone: string
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
}