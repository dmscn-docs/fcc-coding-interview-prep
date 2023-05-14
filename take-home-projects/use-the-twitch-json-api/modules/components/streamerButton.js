export function streamerButton({
  name,
  description,
  profileImage,
  url,
  state,
}) {
  const styles = {
    online:
      "px-4 py-2 flex items-center gap-x-4 text-neutral-300 bg-neutral-800 rounded border border-sky-600 min-w-[8rem] sm:min-w-[32rem]",
    offline:
      "px-4 py-2 flex items-center gap-x-4 text-neutral-300 bg-neutral-800 rounded opacity-60 min-w-[8rem] sm:min-w-[32rem]",
  };

  return `
    <a
      class="${state ? styles.online : styles.offline}"
      href="${url}"
    >
      <img 
        class="w-10 h-10 rounded-full" 
        src="${profileImage}" 
        alt="Profile Image" 
      />
      
      <h2 class="text-sm font-medium">${name}</h2>
      <p class="text-sm truncate hidden sm:block">${description}</p>
    </a>
  `;
}
