import { useStaticQuery, graphql } from 'gatsby'

const useInfoAssets = () => {
  const data = useStaticQuery(graphql`
  query {
    allGraphCmsInfo {
        nodes {
          id
          title
          text
          image {
            url
            localFile {
              childImageSharp {
                fluid(maxWidth: 1148) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            }
            number {
                url
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 150) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
            }
        }
    }
  }
  `)

  return data
}

export default useInfoAssets