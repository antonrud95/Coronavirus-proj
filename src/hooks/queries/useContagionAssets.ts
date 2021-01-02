import { useStaticQuery, graphql } from 'gatsby'

const useContagionAssets = () => {
  const data = useStaticQuery(graphql`
  query {
    allGraphCmsContagion {
        nodes {
            id
            image {
                url
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 550) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
            }
            title
            text
        }
    }
  }
  `)

  return data
}

export default useContagionAssets