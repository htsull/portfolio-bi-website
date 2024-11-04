import axios from 'axios'

// Replace with your GitHub personal access token
const token = process.env.GITHUB_ACCESS_TOKEN

export const getRepositories = async () => {
  //TODO : add cache handling
  if (!token) {
    console.error('GitHub access token is missing.')
    return []
  }
  try {
    const response = await axios.get(`${process.env.GITHUB_REPO_URL}`, {
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github+json'
      }
    })

    const repos = response.data

    const reposData = repos.map(
      (repo: {
        id: number
        name: string
        html_url: string
        description?: string
        topics?: []
      }) => ({
        id: repo.id,
        name: repo.name,
        url: repo.html_url,
        description: repo.description || 'No description available',
        topics: repo.topics
      })
    )

    // const repos = response.data[0].html_url
    // console.log(reposData)
    return reposData.filter((repo: { topics: string | string[] }) =>
      repo.topics.includes('portfolio')
    )
  } catch (error) {
    console.error(`Failed to retrieve repositories: ${error}`)
    return []
  }
}
