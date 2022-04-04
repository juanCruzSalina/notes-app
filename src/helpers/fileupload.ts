export const fileUpload = async (image: File) => {
  const cloudURL = 'https://api.cloudinary.com/v1_1/dnmune6oc/image/upload'

  const formData = new FormData()
  formData.append('upload_preset', 'notes-app')
  formData.append('file', image)

  try {
    const resp = await fetch(cloudURL, {
      method: 'POST',
      body: formData
    })

    if (resp.ok) {
      return resp.json()
    }

  } catch (error) {
    console.log(error)
  }
}