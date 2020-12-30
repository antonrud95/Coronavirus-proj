import { useStaticQuery, graphql } from 'gatsby'

const useVirusAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      virusImage: file(relativePath: { eq: "images/virus/virus.png" }) {
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

export default useVirusAssets