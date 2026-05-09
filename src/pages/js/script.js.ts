export const prerender = false;

export async function GET() {
  const response = await fetch("https://datafa.st/js/script.js");
  const script = await response.text();

  return new Response(script, {
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
