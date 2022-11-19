export const Logo = ({ size = 33 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Y-combinator logo"
  >
    <rect width={size} height={size} fill="#FE7139" />
    <path
      d="M23.6953 8.55078L17.5546 18.3477V26H15.2343V18.5938L9.07025 8.55078H11.6367L16.4062 16.3555L21.2226 8.55078H23.6953Z"
      fill="white"
    />
  </svg>
)
