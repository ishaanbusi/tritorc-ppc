import Script from "next/script";

export default function ZendeskWidget() {
  return (
    <Script
      id="ze-snippet"
      src="https://static.zdassets.com/ekr/snippet.js?key=00dad4d6-3d2d-41cb-be39-743cf6345e2e"
      strategy="afterInteractive"
    />
  );
}
