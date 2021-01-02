import { useStaticQuery, graphql } from 'gatsby'

const useOrnamentsAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      leftOrnament: file(relativePath: { eq: "images/ornaments/leftornament.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rightOrnament: file(relativePath: { eq: "images/ornaments/rightornament.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return data
}

export default useOrnamentsAssets