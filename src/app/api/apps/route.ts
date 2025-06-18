type Data = {
  custom_apps: {
    name: string
    host: string
  }[]
}
export async function GET() {
  const res = await fetch("http://localhost:8080/apps/")
  const data: Data = await res.json()
  return Response.json(data.custom_apps)
}
