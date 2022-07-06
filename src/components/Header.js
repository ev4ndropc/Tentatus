import { gql, useQuery } from "@apollo/client"
import Head from "next/head"

const GET_META_DATA_QUERY = gql`
query {
    projectMetadatas {
      description
      name
      siteUrl
      openGraphDefaultImage {
        url
      }
    }
  }
  
`

export default function Header() {
    const { data } = useQuery(GET_META_DATA_QUERY)
    console.log(data)
    return (
        <>
            <Head>
                <title>{data?.projectMetadatas[0].name}</title>
                <link rel="shortcut icon" href="https://media.graphassets.com/1AK69ZHGSomWxRMQ7SPJ" type="image/x-icon"/>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
            </Head>
            <header className="w-full py-4 px-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
                <div className="w-full max-w-[1120px] justify-start">
                    <img className="w-36" src="https://media.graphassets.com/xl7SVWSwRu2LKGrvMcT0" />
                </div>
            </header>
        </>
    )
}
