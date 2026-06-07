export async function POST(request: Request) {
  const formData = await request.formData()
  const response = await fetch(`${process.env.DJANGO_API_URL}/api/detect/`, {
    method: 'POST',
    body: formData,
  })
  const data = await response.json()
  return Response.json(data)
}
