import { useStaticQuery, graphql } from 'gatsby'

const useVirusAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      virusImageFirst: file(relativePath: { eq: "images/virus/virus1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      virusImageSecond: file(relativePath: { eq: "images/virus/virus2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      virusImageThird: file(relativePath: { eq: "images/virus/virus3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      virusImageFourth: file(relativePath: { eq: "images/virus/virus4.png" }) {
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