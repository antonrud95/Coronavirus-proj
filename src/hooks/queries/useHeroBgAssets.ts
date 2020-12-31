import { useStaticQuery, graphql } from 'gatsby'

const useHeroBgAssets = () => {
  const data = useStaticQuery(graphql`
  query {
    graphCmsHero {

        id
        image {
          url
          localFile {
            childImageSharp {
              fluid(maxWidth: 560) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        text
        title
        description
    }
  }
  `)

  return data
}

export default useHeroBgAssets