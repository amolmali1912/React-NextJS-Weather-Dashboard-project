import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const city = request.nextUrl.searchParams.get("city");

  if (!city) {
    return NextResponse.json({ error: "City is required" }, { status: 400 });
  }

  const apiKey = process.env.OPENWEATHER_API_KEY; // OPENWEATHER_API_KEY=f7d1af8d579d9390fa5f891fd81ea298,this key comes from .env.local file which is going to omit during deployment as this is mentioned in .gitignore file

  if (!apiKey) {
    return NextResponse.json({ error: "API key is missing" }, { status: 500 });
  }

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city,
    )}&appid=${apiKey}&units=metric`,
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Unable to fetch weather data" },
      { status: response.status },
    );
  }

  const data = await response.json();

  return NextResponse.json(data);
}
