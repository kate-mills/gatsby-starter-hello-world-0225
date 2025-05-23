const address = {
  street: '604 Bladen ST',
  suite: 'STE 6',
  city: 'Beaufort',
  state: 'SC',
  zip: '29902',
}
export const PhoneInfo = {
  fullPhone: `${843}.${929}.${8677}`,
  areaCode: '843',
  prefix: '929',
  suffix: '8677',
}

export const EmailInfo = {
  fmtSubject: ({ str = 'General%20query' }) => str.split(' ').join('%20'),
  defaultSubject: `General%20query`,
  fullEmail: `customerservice@michelecorley.com`,
  prefix: 'customerservice',
  suffix: '@michelecorley',
  ext: '.com',
}

export const AddressInfo = {
  oneLine: `${address.street} ${address.suite} ${address.city}, ${address.state} ${address.zip}`,
  street: address.street,
  suite: address.suite,
  city: address.city,
  state: address.state,
  zip: address.zip,
}
