import { useStaticQuery, graphql } from 'gatsby'

const useSymptompsAssets = () => {
  const data = useStaticQuery(graphql`
  query {
    graphCmsSymptomp {
        id
        image {
          url
          localFile {
            childImageSharp {
              fluid(maxWidth: 3513) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        text
        title
        uppertitle
    }
  }
  `)

  return data
}

export default useSymptompsAssets