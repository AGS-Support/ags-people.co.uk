import { post } from "@services/fetch"
export function submitFormToEndpoint(url, data) {
  return post(process.env.GATSBY_BASIN_ENDPOINT, data)
}
