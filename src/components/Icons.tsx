const DEFAULT_ICON_COLOR = "var(--clr-neutral-200)";
const ACCENT_ICON_COLOR = "var(--clr-accent)";

export const LogoIcon = ({ fillColor = ACCENT_ICON_COLOR }) => (
  <svg
    width="43"
    height="30"
    viewBox="0 0 43 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.0123 3.81725C8.81785 3.81725 7.7866 4.47726 7.9186 5.79726L8.4136 10.871C8.4301 11.0195 8.43835 11.234 8.43835 11.5145C8.43835 12.3065 8.2486 12.917 7.8691 13.346C7.4896 13.7585 6.90385 14.039 6.11185 14.1875C6.92035 14.336 7.5061 14.6165 7.8691 15.029C8.2486 15.425 8.43835 16.0273 8.43835 16.8358C8.43835 17.1163 8.4301 17.339 8.4136 17.504L7.9186 22.5778C7.8526 23.3038 8.1001 23.8153 8.6611 24.1123C9.2221 24.4093 10.0058 24.5578 11.0123 24.5578V26.216C9.52735 26.216 8.3146 25.9603 7.3741 25.4488C6.4336 24.9373 5.96335 24.071 5.96335 22.85C5.96335 22.6355 5.9716 22.4705 5.9881 22.355L6.50785 17.6525C6.52435 17.537 6.5326 17.372 6.5326 17.1575C6.5326 16.4315 6.26035 15.8953 5.71585 15.5488C5.17135 15.2023 4.18135 15.029 2.74585 15.029V13.346C4.18135 13.346 5.17135 13.181 5.71585 12.851C6.26035 12.5045 6.5326 11.9683 6.5326 11.2423C6.5326 11.0443 6.52435 10.8875 6.50785 10.772L5.9881 6.02001C5.9716 5.90451 5.96335 5.73951 5.96335 5.525C5.96335 4.304 6.4336 3.43775 7.3741 2.92625C8.3146 2.41476 9.52735 2.15901 11.0123 2.15901V3.81725Z"
      fill={fillColor}
    />
    <path
      d="M30.6782 13.2235L18.41 25.8383C18.0691 26.1878 17.5037 25.7829 17.7253 25.3482L22.0922 16.7309C22.1252 16.6659 22.1411 16.5935 22.1381 16.5206C22.1352 16.4477 22.1136 16.3767 22.0754 16.3146C22.0372 16.2524 21.9836 16.2011 21.9199 16.1656C21.8562 16.13 21.7844 16.1114 21.7114 16.1116H12.5259C12.442 16.1115 12.36 16.0867 12.2902 16.0402C12.2203 15.9937 12.1658 15.9277 12.1333 15.8503C12.1008 15.7729 12.0919 15.6877 12.1077 15.6053C12.1235 15.5229 12.1632 15.447 12.2219 15.3871L23.6008 3.85901C23.9304 3.52517 24.4787 3.89169 24.2955 4.32496L21.0324 12.0174C21.0048 12.0827 20.9938 12.1537 21.0006 12.2242C21.0073 12.2947 21.0315 12.3625 21.071 12.4213C21.1105 12.4801 21.164 12.5281 21.2267 12.561C21.2894 12.5939 21.3593 12.6107 21.4302 12.6098L30.3671 12.499C30.4514 12.4977 30.5343 12.5214 30.6051 12.5671C30.676 12.6129 30.7317 12.6786 30.7651 12.7561C30.7986 12.8335 30.8083 12.9191 30.7931 13.0021C30.7779 13.085 30.7384 13.1616 30.6796 13.2221L30.6782 13.2235Z"
      stroke={fillColor}
      strokeWidth="1.65"
    />
    <path
      d="M31.7378 2.15901C33.2228 2.15901 34.4355 2.41476 35.376 2.92625C36.3165 3.43775 36.7868 4.304 36.7868 5.525C36.7868 5.73951 36.7785 5.90451 36.762 6.02001L36.2423 10.772C36.2258 10.8545 36.2175 10.9783 36.2175 11.1433C36.2175 11.8858 36.5063 12.4385 37.0838 12.8015C37.6778 13.1645 38.6513 13.346 40.0043 13.346V15.029C38.6348 15.029 37.6613 15.2105 37.0838 15.5735C36.5063 15.9365 36.2175 16.4975 36.2175 17.2565C36.2175 17.4215 36.2258 17.5535 36.2423 17.6525L36.762 22.355C36.7785 22.4705 36.7868 22.6355 36.7868 22.85C36.7868 24.071 36.3165 24.9373 35.376 25.4488C34.4355 25.9603 33.2228 26.216 31.7378 26.216V24.5578C32.7443 24.5578 33.528 24.4093 34.089 24.1123C34.65 23.8153 34.8975 23.3038 34.8315 22.5778L34.3365 17.504C34.3035 17.174 34.287 16.9513 34.287 16.8358C34.287 16.0108 34.4933 15.4003 34.9058 15.0043C35.3183 14.6083 35.9865 14.3443 36.9105 14.2123C36.0195 14.0473 35.3595 13.7585 34.9305 13.346C34.518 12.917 34.3118 12.2983 34.3118 11.4898C34.3118 11.2258 34.32 11.0195 34.3365 10.871L34.8315 5.79726C34.9635 4.47726 33.9323 3.81725 31.7378 3.81725V2.15901Z"
      fill={fillColor}
    />
  </svg>
);

export const SearchIcon = ({ fillColor = DEFAULT_ICON_COLOR }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C2.99933 7.684 3.62867 6.14667 4.888 4.888C6.14733 3.62933 7.68467 3 9.5 3C11.3153 3 12.853 3.62933 14.113 4.888C15.373 6.14667 16.002 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5633 11.8133 14.0007 10.7507 14 9.5C13.9993 8.24933 13.562 7.187 12.688 6.313C11.814 5.439 10.7513 5.00133 9.5 5C8.24867 4.99867 7.18633 5.43633 6.313 6.313C5.43967 7.18967 5.002 8.252 5 9.5C4.998 10.748 5.43567 11.8107 6.313 12.688C7.19033 13.5653 8.25267 14.0027 9.5 14Z"
      fill={fillColor}
    />
  </svg>
);

export const GitHubIcon = ({ fillColor = DEFAULT_ICON_COLOR }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
      fill={fillColor}
    />
  </svg>
);

export const SwitchIcon = ({ fillColor = DEFAULT_ICON_COLOR }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.75 8.70833H19.25L13.75 3.20833M19.6162 13.2917H3.11621L8.61621 18.7917"
      stroke={fillColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ExpandIcon = ({ fillColor = DEFAULT_ICON_COLOR }) => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 14.5L10 10.5M14 14.5V11.3M14 14.5H10.8M2 11.3V14.5M2 14.5H5.2M2 14.5L6 10.5M14 5.7V2.5M14 2.5H10.8M14 2.5L10 6.5M2 5.7V2.5M2 2.5H5.2M2 2.5L6 6.5"
      stroke={fillColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CloseIcon = ({ fillColor = DEFAULT_ICON_COLOR }) => (
  <svg
    width="31"
    height="30"
    viewBox="0 0 31 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.5 23.75L6.75 22L13.75 15L6.75 8L8.5 6.25L15.5 13.25L22.5 6.25L24.25 8L17.25 15L24.25 22L22.5 23.75L15.5 16.75L8.5 23.75Z"
      fill={fillColor}
    />
  </svg>
);

export const CopyIcon = ({ fillColor = ACCENT_ICON_COLOR }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.7 1.66667H9.455C7.985 1.66667 6.82 1.66667 5.90917 1.79C4.97083 1.91667 4.21167 2.18333 3.61333 2.78417C3.01417 3.385 2.74833 4.1475 2.6225 5.08917C2.5 6.00417 2.5 7.17333 2.5 8.64917V13.5142C2.5 14.7708 3.26667 15.8475 4.35583 16.2992C4.3 15.5408 4.3 14.4783 4.3 13.5933V9.41833C4.3 8.35083 4.3 7.43 4.39833 6.69333C4.50417 5.90333 4.7425 5.14667 5.35417 4.5325C5.96583 3.91833 6.72 3.67917 7.50667 3.5725C8.24 3.47417 9.15667 3.47417 10.2208 3.47417H12.7792C13.8425 3.47417 14.7575 3.47417 15.4917 3.5725C15.2718 3.01108 14.8878 2.52895 14.3898 2.18899C13.8918 1.84902 13.303 1.66701 12.7 1.66667Z"
      fill={fillColor}
    />
    <path
      d="M5.5 9.4975C5.5 7.22583 5.5 6.09 6.20333 5.38416C6.90583 4.67833 8.03667 4.67833 10.3 4.67833H12.7C14.9625 4.67833 16.0942 4.67833 16.7975 5.38416C17.5008 6.09 17.5 7.22583 17.5 9.4975V13.5142C17.5 15.7858 17.5 16.9217 16.7975 17.6275C16.0942 18.3333 14.9625 18.3333 12.7 18.3333H10.3C8.0375 18.3333 6.90583 18.3333 6.20333 17.6275C5.5 16.9217 5.5 15.7858 5.5 13.5142V9.4975Z"
      fill={fillColor}
    />
  </svg>
);

export const LeftAngleArrowIcon = ({ fillColor = ACCENT_ICON_COLOR }) => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_97_152)">
      <path
        d="M24.2401 71.28C24.2401 69.0985 22.085 65.841 19.9036 63.1068C17.0988 59.5788 13.7472 56.5006 9.90463 54.1516C7.02343 52.3905 3.53071 50.7 0.720069 50.7M0.720069 50.7C3.53071 50.7 7.02637 49.0095 9.90463 47.2484C13.7472 44.8964 17.0988 41.8183 19.9036 38.2961C22.085 35.559 24.2401 32.2956 24.2401 30.12M0.720069 50.7L34.5301 50.7C54.0134 50.7 69.8101 34.9034 69.8101 15.42L69.8101 0.719996"
        stroke={fillColor}
        strokeWidth="5.88"
      />
    </g>
    <defs>
      <clipPath id="clip0_97_152">
        <rect
          width="70.56"
          height="70.56"
          fill="white"
          transform="translate(71.28 71.28) rotate(-180)"
        />
      </clipPath>
    </defs>
  </svg>
);
