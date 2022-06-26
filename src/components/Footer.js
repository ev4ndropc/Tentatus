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

    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
            <p>Copyright © {new Date().getFullYear()}</p>
        </footer>
    )
}