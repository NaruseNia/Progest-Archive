import { getCurrent } from "@tauri-apps/api/window";

export const TitleBar = () => {
  return (
    <div data-tauri-drag-region className="fixed z-50 flex items-center w-full h-10 p-3 text-small">
      <div className="flex items-center gap-2 title">
        <figure>
          <img src="./svg/logo.svg" alt="" width={14} />
        </figure>
        <span>Progest</span>
      </div>
      <div className="flex gap-5 ml-auto action">
        <button className="w-5" onClick={() => getCurrent().minimize()}>
          <img src="./svg/action/minimize.svg" alt="close" width={20} />
        </button>
        <button className="w-5" onClick={() => getCurrent().maximize()}>
          <img src="./svg/action/maximize.svg" alt="close" width={20} />
        </button>
        <button className="w-5" onClick={() => getCurrent().close()}>
          <img src="./svg/action/close.svg" alt="close" width={20} />
        </button>
      </div>
    </div>
  )
}
