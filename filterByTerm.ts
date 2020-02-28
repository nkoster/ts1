interface Link {
  url: string
  id?: number
  description?: string
  [index: string]: any
}

interface TranslatedLink extends Link {
  language: string
}

function filterByTerm(
  input: Array<Link>,
  searchTerm: string,
  lookupKey: string = "url"
) {
  if (!searchTerm) throw Error("searchTerm cannot be empty")
  if (!input.length) throw Error("input cannot be empty")
  const regex = new RegExp(searchTerm, "i")
  return input.filter(function(arrayElement) {
    return arrayElement[lookupKey].match(regex)
  }).toString()
}

const obj1: Link = { url: "string1" }
const obj2: Link = { url: "string2" }
const obj3: Link = { url: "string3" }

const arrOfLinks: Array<Link> = [obj1, obj2, obj3]

console.log(filterByTerm(arrOfLinks, 'g2'))

const link1: TranslatedLink = {
  url: 'aap',
  language: 'nl',
  description: 'apekop',
  id: 0
}
console.log(link1)
