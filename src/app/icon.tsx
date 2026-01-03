import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default async function Icon() {
  const imageUrl = "https://i.postimg.cc/1XnHBPBD/Inserir-um-titulo.png";

  try {
    // A fetch call is needed to get the image data
    const response = await fetch(imageUrl);
    if (!response.ok) {
      return new Response('Failed to fetch image', { status: 500 });
    }
    // We can use the ArrayBuffer from the response directly in an ImageResponse
    const image = await response.arrayBuffer();

    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 24,
            background: 'transparent',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            // The src can be the ArrayBuffer converted to a data URL
            src={imageUrl} 
            alt="Fala & Traça Logo"
            width={32}
            height={32}
          />
        </div>
      ),
      {
        ...size,
      }
    )
  } catch (e) {
    console.error(e);
    // Return a generic error response
    return new Response('Failed to generate icon', { status: 500 });
  }
}
