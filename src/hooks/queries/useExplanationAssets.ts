import { useStaticQuery, graphql } from 'gatsby'

const useExplanationAssets = () => {
  const data = useStaticQuery(graphql`
  query {
    graphCmsExplanation {
        id
        image {
          url
          localFile {
            childImageSharp {
              fluid(maxWidth: 980) {
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

export default useExplanationAssets