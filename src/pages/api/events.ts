export const prerender = false;

export async function POST({ request }: { request: Request }) {
  const body = await request.text();
  const url = new URL(request.url);
  const clientIp =
    request.headers.get("x-real-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("cf-connecting-ip") ||
    "";

  const response = await fetch("https://datafa.st/api/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": request.headers.get("User-Agent") || "",
      Origin: request.headers.get("Origin") || url.origin,
      "x-datafast-real-ip": clientIp,
    },
    body,
  });

  return new Response(await response.text(), {
    status: response.status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
