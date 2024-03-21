const headerTags = (
  title: string, 
  description: string, 
  keywords?: string
) => {
  const header = document.querySelector('head')
  const headerTitle = document.createElement('title')
  const headerDescription = document.createElement('meta')
  const headerKeywords = document.createElement('meta')
  
  if (header) {
    headerTitle.innerHTML = title
    headerDescription.setAttribute('name','description')
    headerDescription.setAttribute('content',description)
    headerKeywords.setAttribute('name','keywords')
    headerKeywords.setAttribute('content',keywords ?? '')
    header.appendChild(headerTitle) 
    header.appendChild(headerDescription) 
    header.appendChild(headerKeywords) 
  }
}

const headerTagsUpdate = (
  title: string, 
  description: string, 
  keywords?: string
) => {
  const headerTitle = document.querySelector('title')
  const headerDescription = document.querySelector('meta[name="description"]')
  const headerKeywords = document.querySelector('meta[name="keywords"]')
    
  if (headerTitle && headerDescription && headerKeywords) {
    headerTitle.innerHTML = title
    headerDescription.setAttribute('content',description)
    headerKeywords.setAttribute('content',keywords ?? '')
  }
}

export {
  headerTags,
  headerTagsUpdate
}