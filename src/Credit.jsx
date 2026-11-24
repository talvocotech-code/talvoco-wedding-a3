// Small "Crafted by Talvoco" watermark at the very bottom of the page.
export const TALVOCO_URL = 'https://talvoco.com'

export default function Credit() {
  return (
    <>
      <a
        href={TALVOCO_URL}
        target="_blank"
        rel="noopener"
        aria-label="Crafted by Talvoco"
        style={{ display: 'flex', width: 'fit-content', margin: '0 auto', alignItems: 'center', justifyContent: 'center', gap: 8, color: 'inherit', textDecoration: 'none', borderBottom: 'none' }}
      >
        <span>Crafted by</span>
        <span>Talvoco</span>
      </a>
      <span style={{ display: 'block', marginTop: 8, fontSize: 9, letterSpacing: '.12em', textTransform: 'none', opacity: 0.8 }}>
        Music: “Gymnopedie No. 1” by Kevin MacLeod (incompetech.com) · CC BY 4.0
      </span>
    </>
  )
}
