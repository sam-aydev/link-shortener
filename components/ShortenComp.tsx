"use server";

export async function Shorten(url: any) {
  const res = await fetch("https://cleanuri.com/api/v1/shorten", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url: url,
    }),
  });
  console.log(url);
  const data = await res.json();
  const result = data.result_url;
  return result;
}
