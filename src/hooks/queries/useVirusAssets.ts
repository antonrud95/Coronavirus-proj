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
      virusImageFifth: file(relativePath: { eq: "images/virus/virus5.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      virusImageSixth: file(relativePath: { eq: "images/virus/virus6.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      virusImageSeventh: file(relativePath: { eq: "images/virus/virus7.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      virusImageEighth: file(relativePath: { eq: "images/virus/virus8.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      virusImageNineth: file(relativePath: { eq: "images/virus/virus9.png" }) {
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