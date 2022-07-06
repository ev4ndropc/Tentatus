import { useQuery, gql } from "@apollo/client"

const GET_ALL_SOCIAL_NETWORKS_QUERY = gql`
    query {
        socials {
            facebookUrl
            githubUrl
            twitterUrl
            youTubeUrl
        }
  }
  
`

export default function Footer() {
    const { data } = useQuery(GET_ALL_SOCIAL_NETWORKS_QUERY)
    console.log(data)
    return (
        <footer className="w-full p-6 flex flex-col justify-center items-center border-t border-gray-600">
            <p>Copyright © {new Date().getFullYear()}</p>
        </footer>
    )
}