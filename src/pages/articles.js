import * as React from 'react'
import { graphql } from 'gatsby'

import { GlobalLayout, Article } from '../components'

export default function ArticlesPage({ data:{allAirtable:{articles}} }) {
  return (
    <GlobalLayout>
      <h1>Articles</h1>
      <ul className="articles">
        {
          articles.map(({ node }) => {
            return <Article key={node.id} data={node}/>
          })
        }
      </ul>
    </GlobalLayout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "MccArticles" } }
      sort: { data: { mcc_id: ASC } }
    ) {
      articles: edges {
        node {
          id
          data {
            title
            summary
            link
            image {
              localFiles {
                childImageSharp {
                  gatsbyImageData(
                    width: 1000 
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`
