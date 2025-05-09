export default async function getIP() {
  const res = await fetch("http://icanhazip.com");
  return await res.text();
}
