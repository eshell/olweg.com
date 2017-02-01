class _LocationModel {
  constructor ({country, address, city, state, zip}) {
    this.country = country
    this.address = address
    this.city = city
    this.state = state
    this.zip = zip
  }
}

export function LocationModel (locationObj) {
  const location = {
    country: 'USA',
    address: '1234 somewhere',
    city: 'Rockford',
    state: 'MI',
    zip: '49341'
  }

  const newLocation = Object.assign(location, locationObj)

  return new _LocationModel(newLocation)
}
