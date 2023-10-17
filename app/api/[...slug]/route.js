export async function GET(request, { params }) {
  const apiUrl = `https://3726439538.for-seoul.synctreengine.com/${params.slug[0]}`;
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const resData = await fetch(apiUrl, requestOptions).then((res) => res.json());
  return Response.json(resData);
}

export async function POST(request, { params }) {
  const res = await request.json();
  const apiUrl = `https://4196413129.for-seoul.synctreengine.com/${params.slug[0]}`;
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(res),
  };
  const resData = await fetch(apiUrl, requestOptions).then((res) => res.json());
  return Response.json(resData);
}
