import { useStaticQuery, graphql } from 'gatsby'

const useMapAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      mapBg: file(relativePath: { eq: "images/global/map-image.png" }) {
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

export default useMapAssets