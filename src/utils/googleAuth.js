import pb from '../db/db'

const googleAuth = async () => {
  const result = await pb
    .collection('users')
    .authWithOAuth2({ provider: 'google' })
  console.log(result)
}

export default googleAuth